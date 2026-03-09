export function WhoWeServe() {
	return (
		<section className="section-pad" id="serve">
			<div className="container">
				<div className="reveal">
					<p className="manifesto-text">
						There are a lot of cloud consultancies. Most of them will say yes to
						anything and figure it out later. We&apos;d rather be honest about
						what we&apos;re good at:{" "}
						<span className="accent-phrase">
							hard infrastructure and engineering problems
						</span>{" "}
						for teams in regulated, high-stakes industries. Our office is in
						Lagos. Our clients are everywhere.
					</p>
				</div>

				<div className="verticals stagger">
					<div className="vertical-tile reveal">
						<h3 className="vertical-name">Fintech</h3>
						<p className="vertical-desc">
							Payment rails, wallet systems, real-time settlement. The layer
							where milliseconds are money and downtime is front-page news.
						</p>
					</div>

					<div className="vertical-tile reveal">
						<h3 className="vertical-name">Banking</h3>
						<p className="vertical-desc">
							Core banking migration, regulatory architecture, legacy
							modernisation. We know what the auditors are going to ask before
							they ask it.
						</p>
					</div>

					<div className="vertical-tile reveal">
						<h3 className="vertical-name">Telecoms</h3>
						<p className="vertical-desc">
							Subscriber data at high throughput, event-driven billing, network
							analytics. Systems that need to handle millions of events without
							dropping anything.
						</p>
					</div>

					<div className="vertical-tile reveal">
						<h3 className="vertical-name">Insurance</h3>
						<p className="vertical-desc">
							Policy management, claims automation, actuarial pipelines,
							regulatory reporting. Lots of data, lots of rules, zero tolerance
							for getting it wrong.
						</p>
					</div>

					<div className="vertical-tile reveal">
						<h3 className="vertical-name">Enterprise &amp; SaaS</h3>
						<p className="vertical-desc">
							Multi-tenant platforms, B2B product infrastructure, the kind of
							systems where one customer&apos;s bad query shouldn&apos;t take
							down everyone else.
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}
