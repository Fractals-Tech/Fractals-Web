export function ContactSection() {
	return (
		<div className="reveal">
			<h2 className="cta-headline">Book a Consultation</h2>
			<p className="cta-sub">
				Tell us what you&apos;re working on. We&apos;ll get back to you within
				one business day — with a straight answer about whether we can help and
				what that would look like.
			</p>

			<div className="cta-detail">
				<div className="cta-detail-item">
					<svg
						className="cta-detail-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<rect x="2" y="4" width="20" height="16" rx="2" />
						<path d="M22 4L12 13 2 4" />
					</svg>
					<p className="cta-detail-text">
						<a href="mailto:hello@fractalstech.com">hello@fractalstech.com</a>
					</p>
				</div>

				<div className="cta-detail-item">
					<svg
						className="cta-detail-icon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
						<circle cx="12" cy="9" r="2.5" />
					</svg>
					<p className="cta-detail-text">
						Headquartered in Lagos &middot; Available globally
					</p>
				</div>

				<div className="cta-detail-item">
					<svg
						className="cta-detail-icon"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
					</svg>
					<p className="cta-detail-text">
						<a
							href="https://www.linkedin.com/company/fractals-limited"
							target="_blank"
							rel="noopener noreferrer"
						>
							Follow our work on LinkedIn
						</a>
					</p>
				</div>
			</div>
		</div>
	)
}
