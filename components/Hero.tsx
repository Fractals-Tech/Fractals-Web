import { VoronoiCanvas } from "./VoronoiCanvas"
import { AwsBadge } from "./icons/AwsBadge"

export function Hero() {
	return (
		<section className="hero" id="hero">
			<VoronoiCanvas />

			<div className="hero-content">
				<div className="aws-badge reveal">
					<AwsBadge />
					<span className="aws-badge-text">AWS Consulting Partner</span>
				</div>

				<h1 className="hero-headline">
					Cloud infrastructure and software, built from first principles.
				</h1>

				<p className="hero-sub">
					We architect cloud systems and build production software for teams
					that can&apos;t afford to get it wrong. No templates. No guesswork.
				</p>

				<div className="hero-ctas">
					<a href="#services" className="btn-primary">What We Do</a>
					<a href="#process" className="btn-arrow">
						How We Work <span className="arrow">&rarr;</span>
					</a>
				</div>
			</div>

			<div className="hero-divider" />
		</section>
	)
}
