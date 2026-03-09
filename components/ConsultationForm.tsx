"use client"

import { useState, useRef } from "react"

function validateEmail(email: string) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function ConsultationForm() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [company, setCompany] = useState("")
	const [service, setService] = useState("")
	const [message, setMessage] = useState("")
	const [submitting, setSubmitting] = useState(false)
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState("")

	const nameRef = useRef<HTMLInputElement>(null)
	const emailRef = useRef<HTMLInputElement>(null)

	async function handleSubmit() {
		setError("")

		if (!name.trim()) {
			nameRef.current?.focus()
			if (nameRef.current) nameRef.current.style.borderColor = "var(--color-accent)"
			return
		}

		if (!email.trim() || !validateEmail(email)) {
			emailRef.current?.focus()
			if (emailRef.current) emailRef.current.style.borderColor = "var(--color-accent)"
			return
		}

		setSubmitting(true)

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					company: company.trim(),
					service,
					message: message.trim(),
				}),
			})

			if (!res.ok) {
				const data = await res.json().catch(() => ({}))
				throw new Error(data.error || "Something went wrong. Please try again.")
			}

			setSuccess(true)
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
		} finally {
			setSubmitting(false)
		}
	}

	if (success) {
		return (
			<div className="form-success visible">
				<h3 className="form-success-title">Got it. We&apos;ll be in touch.</h3>
				<p className="form-success-text">
					Someone on our team will review what you&apos;ve shared and reply
					within one business day. Not a template — an actual response to what
					you told us.
				</p>
			</div>
		)
	}

	return (
		<div className="consult-form">
			<div className="form-row form-row--half">
				<div className="form-field">
					<label className="form-label" htmlFor="consult-name">
						Full Name
					</label>
					<input
						className="form-input"
						type="text"
						id="consult-name"
						name="name"
						placeholder="Jane Doe"
						required
						autoComplete="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						onFocus={(e) => (e.target.style.borderColor = "")}
						ref={nameRef}
					/>
				</div>
				<div className="form-field">
					<label className="form-label" htmlFor="consult-email">
						Work Email
					</label>
					<input
						className="form-input"
						type="email"
						id="consult-email"
						name="email"
						placeholder="jane@company.com"
						required
						autoComplete="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						onFocus={(e) => (e.target.style.borderColor = "")}
						ref={emailRef}
					/>
				</div>
			</div>

			<div className="form-row form-row--half">
				<div className="form-field">
					<label className="form-label" htmlFor="consult-company">
						Company
					</label>
					<input
						className="form-input"
						type="text"
						id="consult-company"
						name="company"
						placeholder="Company name"
						autoComplete="organization"
						value={company}
						onChange={(e) => setCompany(e.target.value)}
					/>
				</div>
				<div className="form-field">
					<label className="form-label" htmlFor="consult-service">
						What Do You Need?
					</label>
					<select
						className="form-select"
						id="consult-service"
						name="service"
						value={service}
						onChange={(e) => setService(e.target.value)}
					>
						<option value="" disabled>
							Select a service area
						</option>
						<optgroup label="Cloud Architecture & Engineering">
							<option value="architecture">Cloud Architecture &amp; Migration</option>
							<option value="serverless">Serverless Engineering</option>
							<option value="containers">Containerisation &amp; Orchestration</option>
							<option value="data">Data Engineering</option>
							<option value="ai">AI &amp; Intelligent Systems</option>
							<option value="devops">DevOps &amp; CI/CD</option>
						</optgroup>
						<optgroup label="Software Development">
							<option value="backend">Backend Engineering</option>
							<option value="fullstack">Full-Stack Product Engineering</option>
							<option value="api">API Design &amp; Integration</option>
							<option value="legacy">Legacy System Modernisation</option>
						</optgroup>
						<optgroup label="Operations & Assurance">
							<option value="compliance">Compliance &amp; Cloud Security</option>
							<option value="observability">Observability &amp; Incident Response</option>
							<option value="cost">Cloud Cost Optimisation</option>
							<option value="dr">Disaster Recovery &amp; Business Continuity</option>
							<option value="managed">Managed Cloud Operations</option>
							<option value="training">Training &amp; Enablement</option>
						</optgroup>
						<option value="other">Something else</option>
					</select>
				</div>
			</div>

			<div className="form-row">
				<div className="form-field">
					<label className="form-label" htmlFor="consult-message">
						Tell Us More
					</label>
					<textarea
						className="form-textarea"
						id="consult-message"
						name="message"
						placeholder="What are you building? Where are you stuck? Even a few sentences helps us give you a better first response."
						value={message}
						onChange={(e) => setMessage(e.target.value)}
					/>
				</div>
			</div>

			<button
				type="button"
				className="form-submit"
				disabled={submitting}
				onClick={handleSubmit}
			>
				{submitting ? "Sending\u2026" : "Book Consultation"}{" "}
				{!submitting && <span className="arrow">&rarr;</span>}
			</button>
			<p className="form-note">
				No commitment, no sales pitch. Just a conversation.
			</p>
			{error && <p className="form-error">{error}</p>}
		</div>
	)
}
