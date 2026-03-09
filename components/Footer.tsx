import { LinkedInIcon } from "./icons/LinkedInIcon"

export function Footer() {
	return (
		<>
			<div className="footer-accent-line" />
			<footer className="site-footer">
				<div className="container">
					<div className="footer-inner">
						<div>
							<p className="footer-wordmark">FRACTALS</p>
							<p className="footer-tagline">
								Cloud consultancy &amp; software engineering.
							</p>
							<p className="footer-copy">
								&copy; {new Date().getFullYear()} Fractals. All rights reserved.
							</p>
						</div>

						<nav aria-label="Footer navigation">
							<ul className="footer-nav">
								<li><a href="#services">Services</a></li>
								<li><a href="#process">Process</a></li>
								<li><a href="#stack">Stack</a></li>
								<li><a href="#serve">Who We Serve</a></li>
								<li><a href="#contact">Contact</a></li>
							</ul>
						</nav>

						<div className="footer-contact">
							<p className="footer-contact-item">
								<a href="mailto:hello@fractalstech.com">
									hello@fractalstech.com
								</a>
							</p>
							<p className="footer-contact-item">
								Lagos, Nigeria &middot; Available globally
							</p>
							<a
								href="https://www.linkedin.com/company/fractals-limited"
								className="footer-linkedin"
								target="_blank"
								rel="noopener noreferrer"
							>
								<LinkedInIcon />
								<span>LinkedIn</span>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
