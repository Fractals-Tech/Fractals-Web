import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
	let body: Record<string, unknown>

	try {
		body = await request.json()
	} catch {
		return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
	}

	const { name, email, company, service, message } = body as {
		name?: string
		email?: string
		company?: string
		service?: string
		message?: string
	}

	if (!name || typeof name !== "string" || !name.trim()) {
		return NextResponse.json({ error: "Name is required" }, { status: 400 })
	}

	if (
		!email ||
		typeof email !== "string" ||
		!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	) {
		return NextResponse.json(
			{ error: "Valid email is required" },
			{ status: 400 }
		)
	}

	const accessKey = process.env.WEB3FORMS_ACCESS_KEY
	if (!accessKey) {
		console.error("WEB3FORMS_ACCESS_KEY is not configured")
		return NextResponse.json(
			{ error: "Server configuration error" },
			{ status: 500 }
		)
	}

	try {
		const web3Response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				"User-Agent": "Fractals-Web/1.0",
			},
			body: JSON.stringify({
				access_key: accessKey,
				name: name.trim(),
				email: email.trim(),
				company: typeof company === "string" ? company.trim() : "",
				service: typeof service === "string" ? service : "",
				message: typeof message === "string" ? message.trim() : "",
				subject: `New consultation request from ${name.trim()}`,
				botcheck: "",
			}),
		})

		const text = await web3Response.text()
		let data: Record<string, unknown>
		try {
			data = JSON.parse(text)
		} catch {
			console.error("Web3Forms returned non-JSON response:", text.slice(0, 200))
			return NextResponse.json(
				{ error: "Failed to submit form" },
				{ status: 502 }
			)
		}

		if (!web3Response.ok || !data.success) {
			console.error("Web3Forms error:", data)
			return NextResponse.json(
				{ error: "Failed to submit form" },
				{ status: 502 }
			)
		}

		return NextResponse.json({ success: true })
	} catch (err) {
		console.error("Web3Forms submission error:", err)
		return NextResponse.json(
			{ error: "Failed to submit form" },
			{ status: 500 }
		)
	}
}
