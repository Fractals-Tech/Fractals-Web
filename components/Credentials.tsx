export function Credentials() {
	return (
		<section className="section-pad" id="credentials">
			<div className="container">
				<h2 className="section-title reveal">Certified Badges</h2>
				
				<div className="cred-grid stagger">
					{[
						{ name: "AWS Solution Architect Professional", file: "AWS Solution Architect Professional.png" },
						{ name: "AWS Devops Engineer", file: "AWS Devops Engineer.png" },
						{ name: "AWS Solution Architect Associate", file: "AWS Solution Architect Associate.png" },
						{ name: "AWS Developer Associate", file: "AWS Developer Associate.png" },
						{ name: "Azure Solutions Architect", file: "Azure Solutions Architect.png" },
						{ name: "Azure Administrator", file: "Azure Administrator.png" },
					].map((badge) => (
						<article className="cred-card reveal" key={badge.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
							<img src={`/${badge.file}`} alt={badge.name} width="330" height="330" style={{ objectFit: 'contain', marginBottom: '1rem' }} />
							<h3 className="cred-card-title">{badge.name}</h3>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
