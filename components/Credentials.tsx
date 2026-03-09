export function Credentials() {
	return (
		<section className="section-pad" id="credentials">
			<div className="container">
				<h2 className="section-title reveal">Credentials</h2>
				<p className="section-subtitle reveal">
					The short version of why you should trust us.
				</p>

				<div className="cred-grid stagger">
					<article className="cred-card reveal">
						<h3 className="cred-card-title">AWS Consulting Partner</h3>
						<p className="cred-card-body">
							We&apos;re in the AWS Partner Network. That means AWS has vetted
							our technical capabilities and our ability to deliver. It&apos;s
							not a badge you just sign up for.
						</p>
					</article>

					<article className="cred-card reveal">
						<h3 className="cred-card-title">
							AWS Financial Services Competency
						</h3>
						<p className="cred-card-tag">In Progress</p>
						<p className="cred-card-body">
							We&apos;re working toward this designation. It requires documented
							proof that you&apos;ve delivered production-grade,
							regulation-compliant architecture in financial services. We&apos;re
							building that case.
						</p>
					</article>

					<article className="cred-card reveal">
						<h3 className="cred-card-title">Lambda Service Delivery</h3>
						<p className="cred-card-body">
							Recognised by AWS for deep Lambda expertise. We&apos;ve built and
							run serverless systems processing millions of invocations per day —
							not as experiments, but as production infrastructure that real
							businesses depend on.
						</p>
					</article>
				</div>
			</div>
		</section>
	)
}
