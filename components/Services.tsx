export function Services() {
	return (
		<section className="section-pad" id="services">
			<div className="container">
				<h2 className="section-title reveal">What We Do</h2>
				<p className="section-subtitle reveal">
					Cloud infrastructure, software engineering, and everything in between.
				</p>

				{/* Group 1: Architecture & Engineering */}
				<div className="services-group">
					<p className="services-group-label reveal">
						Cloud Architecture &amp; Engineering
					</p>
					<div className="services-grid stagger">
						<article className="svc-card svc-card--anchor reveal">
							<h3 className="svc-card-title">Cloud Architecture &amp; Migration</h3>
							<p className="svc-card-body">
								This is the core of what we do. You tell us what your system needs
								to handle, and we design the AWS infrastructure for it — VPCs,
								accounts, networking, IaC, the whole thing. If you&apos;re migrating
								off legacy, we&apos;ll assess what you have and build you a path
								that doesn&apos;t require a six-month freeze.
							</p>
							<p className="svc-card-anchors">
								VPC design, multi-account strategy, IaC (Terraform/CDK), migration
								assessment.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Serverless Engineering</h3>
							<p className="svc-card-body">
								We&apos;ve spent years inside Lambda. Not &quot;we deployed a
								function once&quot; — we mean cold start tuning, concurrency
								reservations, event source mapping quirks, the kind of things you
								only learn by running serverless at scale. If your system needs to
								go from zero to a million invocations and back, this is what we do
								best.
							</p>
							<p className="svc-card-anchors">
								Lambda, EventBridge, Step Functions, API Gateway.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Containerisation &amp; Orchestration</h3>
							<p className="svc-card-body">
								Not everything fits in a Lambda. Long-running jobs, stateful
								workloads, teams that want container-level control — we set up ECS
								and EKS clusters that are reproducible and auto-scaling. The goal is
								that deploys are boring. Boring is good.
							</p>
							<p className="svc-card-anchors">
								ECS Fargate, EKS, ECR, service mesh, task definitions, Helm charts.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Data Engineering</h3>
							<p className="svc-card-body">
								Pipelines that run on time. Sounds simple, but most data
								infrastructure we inherit is a mess of cron jobs and silent failures.
								We build ingestion, transformation, and analytics layers on AWS with
								proper lineage tracking, so when the numbers look wrong, you can
								trace exactly why.
							</p>
							<p className="svc-card-anchors">
								Kinesis, Glue, Redshift, Athena, Lake Formation, S3 data lake
								architecture.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">AI &amp; Intelligent Systems</h3>
							<p className="svc-card-body">
								Getting a demo working is easy. Getting AI into production — with
								cost controls, observability, and an architecture your team can
								actually maintain — is the hard part. That&apos;s where we come in.
								Bedrock, SageMaker, or custom inference pipelines, depending on what
								the problem actually needs.
							</p>
							<p className="svc-card-anchors">
								Bedrock integration, RAG pipelines, vector store architecture,
								inference cost optimisation.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">DevOps &amp; CI/CD</h3>
							<p className="svc-card-body">
								Your deploy pipeline should be the most reliable thing in your
								stack. We build CI/CD that&apos;s fast, predictable, and safe —
								automated tests before merge, infra promotion through environments,
								rollbacks that actually work. If your team is scared to deploy on
								Fridays, something is broken.
							</p>
							<p className="svc-card-anchors">
								GitHub Actions, CodePipeline, CodeBuild, GitOps workflows,
								blue-green &amp; canary deployments.
							</p>
						</article>
					</div>
				</div>

				{/* Group 2: Operations & Assurance */}
				<div className="services-group">
					<p className="services-group-label reveal">
						Operations &amp; Assurance
					</p>
					<div className="services-grid stagger">
						<article className="svc-card svc-card--anchor reveal">
							<h3 className="svc-card-title">Compliance &amp; Cloud Security</h3>
							<p className="svc-card-body">
								PCI-DSS, SOC 2, GDPR, CBN, NDPR — we&apos;ve worked with all of
								them. The trick is designing compliance into the architecture from
								day one, not bolting it on at the end when the auditor shows up. IAM
								policies, encryption, logging, regulatory mapping. We think about
								this stuff early so you don&apos;t have to redesign later.
							</p>
							<p className="svc-card-anchors">
								IAM hardening, encryption at rest and in transit, audit logging,
								regulatory mapping.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Observability &amp; Incident Response</h3>
							<p className="svc-card-body">
								Dashboards that look great in screenshots but don&apos;t help at 2
								a.m. are useless. We instrument systems so that when things break,
								your on-call knows what happened, where, and what to do about it.
								Structured logs, distributed traces, alert routing that doesn&apos;t
								cry wolf.
							</p>
							<p className="svc-card-anchors">
								CloudWatch, X-Ray, OpenTelemetry, PagerDuty, structured logging,
								runbook automation.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Cloud Cost Optimisation</h3>
							<p className="svc-card-body">
								Your AWS bill is a history of every decision made under pressure. We
								go through it, find the waste, and fix it — right-sizing, reserved
								capacity, lifecycle policies, architectural changes where they make
								sense. Most clients see 25–40% savings in the first 90 days. The
								audit is free.
							</p>
							<p className="svc-card-anchors">
								Cost Explorer analysis, Reserved Instance strategy, right-sizing, S3
								lifecycle policies.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Disaster Recovery</h3>
							<p className="svc-card-body">
								You probably have a DR plan somewhere. Has anyone tested it? We
								design and actually test failover architectures — multi-region,
								automated backups with verified restores, runbooks your team can
								follow under real pressure. Hope is not a strategy.
							</p>
							<p className="svc-card-anchors">
								Multi-region failover, AWS Backup, pilot light &amp; warm standby
								patterns, DR testing.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Managed Operations</h3>
							<p className="svc-card-body">
								After we build it, some teams want us to keep running it. Monitoring,
								patching, cost reviews, incident response — the operational work
								that&apos;s important but pulls your engineers away from building
								product. We handle it with SLA-backed response times.
							</p>
							<p className="svc-card-anchors">
								24/7 monitoring, patch &amp; update management, cost reviews,
								SLA-backed response times.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Training &amp; Enablement</h3>
							<p className="svc-card-body">
								We don&apos;t build things your team can&apos;t own. Every engagement
								includes knowledge transfer, but some teams want more. We run
								workshops on IaC, security, architecture patterns — practical stuff
								your engineers will actually use, not certification prep.
							</p>
							<p className="svc-card-anchors">
								Architecture walkthroughs, IaC workshops, security best practices,
								team-specific curriculum.
							</p>
						</article>
					</div>
				</div>

				{/* Group 3: Software Development */}
				<div className="services-group">
					<p className="services-group-label reveal">Software Development</p>
					<div className="services-grid stagger">
						<article className="svc-card svc-card--anchor reveal">
							<h3 className="svc-card-title">Backend Engineering</h3>
							<p className="svc-card-body">
								APIs, microservices, event-driven systems — we write the code that
								runs behind your product. Not prototype code, production code.
								Properly structured, tested, documented, and built to handle real
								traffic from day one. We work in Python, Node.js, TypeScript, and
								C#/.NET depending on what your stack needs.
							</p>
							<p className="svc-card-anchors">
								REST &amp; GraphQL APIs, microservices, event-driven architecture,
								database design, message queues.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Full-Stack Product Engineering</h3>
							<p className="svc-card-body">
								Sometimes you don&apos;t just need infrastructure — you need the
								whole product built. We take features from design through to
								deployed, production-ready code. Frontend, backend, database,
								deployment pipeline, the lot. Particularly useful for teams that are
								strong on product but need senior engineering capacity.
							</p>
							<p className="svc-card-anchors">
								React, Next.js, Node.js, Python, PostgreSQL, end-to-end feature
								delivery.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">API Design &amp; Integration</h3>
							<p className="svc-card-body">
								Third-party integrations, payment gateways, banking APIs, webhook
								systems — the connective tissue between your product and everything
								else. We&apos;ve integrated with Paystack, Flutterwave, Stripe,
								Zendesk, Slack, and dozens of other platforms. We know where the
								documentation lies to you.
							</p>
							<p className="svc-card-anchors">
								API design, third-party integrations, webhooks, OAuth flows, rate
								limiting, retry logic.
							</p>
						</article>

						<article className="svc-card reveal">
							<h3 className="svc-card-title">Legacy System Modernisation</h3>
							<p className="svc-card-body">
								That monolith you&apos;re scared to touch? We&apos;ve refactored
								plenty of them. We break legacy systems apart incrementally —
								strangler fig pattern, not big-bang rewrites. Your system keeps
								running while we modernise it underneath. No six-month feature freeze
								required.
							</p>
							<p className="svc-card-anchors">
								Strangler fig migration, monolith decomposition, database
								modernisation, incremental rewrites.
							</p>
						</article>
					</div>
				</div>
			</div>
		</section>
	)
}
