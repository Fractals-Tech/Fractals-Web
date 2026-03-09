export function Process() {
	return (
		<section className="section-pad" id="process">
			<div className="container">
				<h2 className="section-title reveal">How It Works</h2>
				<p className="process-intro reveal">
					We don&apos;t start with a proposal. We start with your problem.
				</p>

				<div className="process-timeline stagger">
					<div className="phase reveal">
						<p className="phase-number">Phase 01</p>
						<h3 className="phase-name">Discovery</h3>
						<p className="phase-desc">
							We look at what you have, talk to your engineers, and figure out
							where you&apos;re going. No pitch. No premade solution waiting in a
							drawer. The output is a written brief — a shared picture of the
							problem that both sides agree on before anything else happens.
						</p>
					</div>

					<div className="phase reveal">
						<p className="phase-number">Phase 02</p>
						<h3 className="phase-name">Architecture</h3>
						<p className="phase-desc">
							We design the whole system before anyone writes code. ADRs, data
							flow diagrams, cost projections, security threat model — all of it.
							You review it, push back where you disagree, and approve before we
							move forward. Non-negotiable.
						</p>
					</div>

					<div className="phase reveal">
						<p className="phase-number">Phase 03</p>
						<h3 className="phase-name">Build &amp; Migrate</h3>
						<p className="phase-desc">
							We execute against the agreed architecture. Weekly updates. All code
							reviewed. Everything in Terraform or CDK — no one is clicking
							through the console. You own the repo from day one.
						</p>
					</div>

					<div className="phase reveal">
						<p className="phase-number">Phase 04</p>
						<h3 className="phase-name">Handoff</h3>
						<p className="phase-desc">
							Runbooks, dashboards, walkthroughs with your team. The goal is
							simple: your engineers should be able to own, debug, and extend
							everything we built from the day we hand it over. If they can&apos;t,
							we haven&apos;t finished.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
