"use client"

import { useEffect, useRef } from "react"

interface Seed {
	x: number
	y: number
	vx: number
	vy: number
	ox: number
	oy: number
}

interface Triangle {
	a: number
	b: number
	c: number
}

interface Circle {
	x: number
	y: number
	r: number
}

interface Point {
	x: number
	y: number
}

const NUM_SEEDS = 70
const PAD = 60

function circumcircle(
	ax: number, ay: number,
	bx: number, by: number,
	cx: number, cy: number
): Circle {
	const D = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by))
	if (Math.abs(D) < 1e-10) return { x: 0, y: 0, r: Infinity }
	const a2 = ax * ax + ay * ay
	const b2 = bx * bx + by * by
	const c2 = cx * cx + cy * cy
	const ux = (a2 * (by - cy) + b2 * (cy - ay) + c2 * (ay - by)) / D
	const uy = (a2 * (cx - bx) + b2 * (ax - cx) + c2 * (bx - ax)) / D
	const dx = ax - ux
	const dy = ay - uy
	return { x: ux, y: uy, r: Math.sqrt(dx * dx + dy * dy) }
}

function delaunay(points: Point[], W: number, H: number) {
	const minX = -PAD * 3
	const minY = -PAD * 3
	const maxX = W + PAD * 3
	const maxY = H + PAD * 3
	const dx = maxX - minX
	const dy = maxY - minY
	const dmax = Math.max(dx, dy) * 2

	const p0: Point = { x: minX - dmax, y: minY - dmax }
	const p1: Point = { x: minX + dmax * 3, y: minY - dmax }
	const p2: Point = { x: minX, y: minY + dmax * 3 }

	const superIdx = points.length
	const allPts = points.concat([p0, p1, p2])

	const triangles: Triangle[] = [{ a: superIdx, b: superIdx + 1, c: superIdx + 2 }]
	const circles: Circle[] = [circumcircle(p0.x, p0.y, p1.x, p1.y, p2.x, p2.y)]

	for (let i = 0; i < points.length; i++) {
		const px = points[i].x
		const py = points[i].y
		const bad: number[] = []

		for (let j = triangles.length - 1; j >= 0; j--) {
			const cc = circles[j]
			if (cc.r === Infinity) continue
			const ddx = px - cc.x
			const ddy = py - cc.y
			if (ddx * ddx + ddy * ddy <= cc.r * cc.r + 1e-6) {
				bad.push(j)
			}
		}

		const edges: [number, number][] = []
		for (let k = 0; k < bad.length; k++) {
			const t = triangles[bad[k]]
			edges.push([t.a, t.b], [t.b, t.c], [t.c, t.a])
		}

		const boundary: [number, number][] = []
		for (let k = 0; k < edges.length; k++) {
			const e = edges[k]
			const eMin = Math.min(e[0], e[1])
			const eMax = Math.max(e[0], e[1])
			let shared = false
			for (let m = 0; m < edges.length; m++) {
				if (m === k) continue
				const f = edges[m]
				if (Math.min(f[0], f[1]) === eMin && Math.max(f[0], f[1]) === eMax) {
					shared = true
					break
				}
			}
			if (!shared) boundary.push(e)
		}

		bad.sort((a, b) => b - a)
		for (let k = 0; k < bad.length; k++) {
			triangles.splice(bad[k], 1)
			circles.splice(bad[k], 1)
		}

		for (let k = 0; k < boundary.length; k++) {
			const e = boundary[k]
			triangles.push({ a: e[0], b: e[1], c: i })
			const pa = allPts[e[0]]
			const pb = allPts[e[1]]
			const pc = allPts[i]
			circles.push(circumcircle(pa.x, pa.y, pb.x, pb.y, pc.x, pc.y))
		}
	}

	const result: Triangle[] = []
	for (let j = 0; j < triangles.length; j++) {
		const t = triangles[j]
		if (t.a >= superIdx || t.b >= superIdx || t.c >= superIdx) continue
		result.push(t)
	}

	return { triangles: result }
}

function voronoiEdges(triangles: Triangle[], points: Point[]) {
	const edgeTriMap: Record<string, number[]> = {}
	const triCircles: Circle[] = []

	for (let i = 0; i < triangles.length; i++) {
		const t = triangles[i]
		const pa = points[t.a]
		const pb = points[t.b]
		const pc = points[t.c]
		triCircles.push(circumcircle(pa.x, pa.y, pb.x, pb.y, pc.x, pc.y))

		const edges: [number, number][] = [
			[Math.min(t.a, t.b), Math.max(t.a, t.b)],
			[Math.min(t.b, t.c), Math.max(t.b, t.c)],
			[Math.min(t.a, t.c), Math.max(t.a, t.c)],
		]
		for (let k = 0; k < 3; k++) {
			const key = edges[k][0] + "," + edges[k][1]
			if (!edgeTriMap[key]) edgeTriMap[key] = []
			edgeTriMap[key].push(i)
		}
	}

	const voroEdges: { x1: number; y1: number; x2: number; y2: number }[] = []
	const keys = Object.keys(edgeTriMap)
	for (let i = 0; i < keys.length; i++) {
		const tris = edgeTriMap[keys[i]]
		if (tris.length === 2) {
			const c1 = triCircles[tris[0]]
			const c2 = triCircles[tris[1]]
			if (c1.r < 1e6 && c2.r < 1e6) {
				voroEdges.push({ x1: c1.x, y1: c1.y, x2: c2.x, y2: c2.y })
			}
		}
	}

	return { edges: voroEdges, vertices: triCircles }
}

export function VoronoiCanvas() {
	const containerRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const container = containerRef.current
		if (!container) return

		const canvas = document.createElement("canvas")
		canvas.style.cssText = "width:100%;height:100%;position:absolute;inset:0;"
		container.appendChild(canvas)
		const ctx = canvas.getContext("2d")
		if (!ctx) return

		let W = 0
		let H = 0
		let dpr = 1

		function resize() {
			dpr = Math.min(window.devicePixelRatio, 2)
			W = container!.offsetWidth
			H = container!.offsetHeight
			canvas.width = W * dpr
			canvas.height = H * dpr
			ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
		}
		resize()

		const seeds: Seed[] = []
		for (let i = 0; i < NUM_SEEDS; i++) {
			const s: Seed = {
				x: -PAD + Math.random() * (W + PAD * 2),
				y: -PAD + Math.random() * (H + PAD * 2),
				vx: (Math.random() - 0.5) * 0.3,
				vy: (Math.random() - 0.5) * 0.3,
				ox: 0,
				oy: 0,
			}
			s.ox = s.x
			s.oy = s.y
			seeds.push(s)
		}

		const mouse = { x: -9999, y: -9999, active: false }

		function onMouseMove(e: MouseEvent) {
			const rect = canvas.getBoundingClientRect()
			mouse.x = e.clientX - rect.left
			mouse.y = e.clientY - rect.top
			mouse.active = true
		}
		function onMouseLeave() {
			mouse.active = false
		}
		function onTouchMove(e: TouchEvent) {
			const rect = canvas.getBoundingClientRect()
			mouse.x = e.touches[0].clientX - rect.left
			mouse.y = e.touches[0].clientY - rect.top
			mouse.active = true
		}
		function onTouchEnd() {
			mouse.active = false
		}

		canvas.addEventListener("mousemove", onMouseMove)
		canvas.addEventListener("mouseleave", onMouseLeave)
		canvas.addEventListener("touchmove", onTouchMove, { passive: true })
		canvas.addEventListener("touchend", onTouchEnd)

		function draw() {
			ctx!.clearRect(0, 0, W, H)

			const d = delaunay(seeds, W, H)
			const v = voronoiEdges(d.triangles, seeds)

			ctx!.lineWidth = 1.2
			for (let i = 0; i < v.edges.length; i++) {
				const e = v.edges[i]
				const mx = (e.x1 + e.x2) * 0.5
				const my = (e.y1 + e.y2) * 0.5
				const distFromCenter = Math.sqrt(
					Math.pow(mx - W * 0.5, 2) + Math.pow(my - H * 0.5, 2)
				)
				const maxDist = Math.sqrt(W * W + H * H) * 0.65
				const fade = Math.max(0, 1 - distFromCenter / maxDist)
				let opacity = 0.06 + fade * 0.16

				if (mouse.active) {
					const dm = Math.sqrt(
						Math.pow(mx - mouse.x, 2) + Math.pow(my - mouse.y, 2)
					)
					if (dm < 150) {
						opacity += (1 - dm / 150) * 0.35
					}
				}

				ctx!.strokeStyle = "rgba(145, 23, 31, " + opacity + ")"
				ctx!.beginPath()
				ctx!.moveTo(e.x1, e.y1)
				ctx!.lineTo(e.x2, e.y2)
				ctx!.stroke()
			}

			for (let i = 0; i < v.vertices.length; i++) {
				const vt = v.vertices[i]
				if (
					vt.r > 1e6 ||
					vt.x < -PAD ||
					vt.x > W + PAD ||
					vt.y < -PAD ||
					vt.y > H + PAD
				)
					continue
				const distFromCenter = Math.sqrt(
					Math.pow(vt.x - W * 0.5, 2) + Math.pow(vt.y - H * 0.5, 2)
				)
				const maxDist = Math.sqrt(W * W + H * H) * 0.65
				const fade = Math.max(0, 1 - distFromCenter / maxDist)
				if (fade < 0.05) continue

				let dotOpacity = 0.1 + fade * 0.18

				if (mouse.active) {
					const dm = Math.sqrt(
						Math.pow(vt.x - mouse.x, 2) + Math.pow(vt.y - mouse.y, 2)
					)
					if (dm < 150) {
						dotOpacity += (1 - dm / 150) * 0.5
					}
				}

				ctx!.fillStyle = "rgba(145, 23, 31, " + dotOpacity + ")"
				ctx!.beginPath()
				ctx!.arc(vt.x, vt.y, 2.5, 0, Math.PI * 2)
				ctx!.fill()
			}
		}

		let time = 0
		let animId: number

		function animate() {
			animId = requestAnimationFrame(animate)
			time += 0.016

			for (let i = 0; i < seeds.length; i++) {
				const s = seeds[i]
				s.x =
					s.ox +
					Math.sin(time * s.vx * 2 + i) * 30 +
					Math.sin(time * 0.1 + i * 0.7) * 15
				s.y =
					s.oy +
					Math.cos(time * s.vy * 2 + i * 1.3) * 25 +
					Math.cos(time * 0.08 + i * 0.5) * 12

				if (mouse.active) {
					const dx = s.x - mouse.x
					const dy = s.y - mouse.y
					const dist = Math.sqrt(dx * dx + dy * dy)
					const radius = 120
					if (dist < radius && dist > 0) {
						const force = (1 - dist / radius) * 35
						s.x += (dx / dist) * force
						s.y += (dy / dist) * force
					}
				}
			}

			draw()
		}
		animate()

		let resizeTimeout: ReturnType<typeof setTimeout>
		function onResize() {
			clearTimeout(resizeTimeout)
			resizeTimeout = setTimeout(() => {
				if (container!.offsetWidth > 0) {
					resize()
					for (let i = 0; i < seeds.length; i++) {
						seeds[i].ox = -PAD + Math.random() * (W + PAD * 2)
						seeds[i].oy = -PAD + Math.random() * (H + PAD * 2)
					}
				}
			}, 200)
		}
		window.addEventListener("resize", onResize)

		return () => {
			cancelAnimationFrame(animId)
			clearTimeout(resizeTimeout)
			window.removeEventListener("resize", onResize)
			canvas.removeEventListener("mousemove", onMouseMove)
			canvas.removeEventListener("mouseleave", onMouseLeave)
			canvas.removeEventListener("touchmove", onTouchMove)
			canvas.removeEventListener("touchend", onTouchEnd)
			container!.removeChild(canvas)
		}
	}, [])

	return <div className="hero-bg-canvas" ref={containerRef} />
}
