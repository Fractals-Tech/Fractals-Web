"use client"

import { useState, useEffect, useCallback } from "react"

export function Header() {
	const [isOpen, setIsOpen] = useState(false)

	const closeMenu = useCallback(() => {
		setIsOpen(false)
		document.body.style.overflow = ""
	}, [])

	const toggleMenu = useCallback(() => {
		setIsOpen((prev) => {
			const next = !prev
			document.body.style.overflow = next ? "hidden" : ""
			return next
		})
	}, [])

	useEffect(() => {
		function onKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape" && isOpen) closeMenu()
		}
		document.addEventListener("keydown", onKeyDown)
		return () => {
			document.removeEventListener("keydown", onKeyDown)
			document.body.style.overflow = ""
		}
	}, [isOpen, closeMenu])

	return (
		<>
			<header className="site-header">
				<div className="container nav-inner">
					<a href="#" aria-label="Fractals — Home" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
						<img src="/fractal logo.svg" alt="Fractals Logo" width="32" height="48" style={{ objectFit: 'contain' }} />
						<span className="wordmark">FRACTALS</span>
					</a>

					<nav aria-label="Primary navigation">
						<ul className="nav-links">
							<li><a href="#services">Services</a></li>
							<li><a href="#process">Process</a></li>
							<li><a href="#stack">Stack</a></li>
							<li><a href="#serve">Who We Serve</a></li>
						</ul>
					</nav>

					<a href="#contact" className="nav-cta">Book a Consultation</a>

					<button
						className={`hamburger${isOpen ? " active" : ""}`}
						aria-label={isOpen ? "Close menu" : "Open menu"}
						aria-expanded={isOpen}
						onClick={toggleMenu}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</header>

			<div
				className={`mobile-overlay${isOpen ? " open" : ""}`}
				aria-hidden="true"
				onClick={closeMenu}
			/>
			<nav
				className={`mobile-drawer${isOpen ? " open" : ""}`}
				aria-label="Mobile navigation"
			>
				<a href="#services" onClick={closeMenu}>Services</a>
				<a href="#process" onClick={closeMenu}>Process</a>
				<a href="#stack" onClick={closeMenu}>Stack</a>
				<a href="#serve" onClick={closeMenu}>Who We Serve</a>
				<a href="#contact" className="nav-cta-mobile" onClick={closeMenu}>
					Book a Consultation
				</a>
			</nav>
		</>
	)
}
