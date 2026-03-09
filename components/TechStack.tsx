const BADGES = [
	"AWS Lambda", "Amazon DynamoDB", "AWS EventBridge", "Amazon Bedrock",
	"AWS Step Functions", "Amazon Kinesis", "Amazon RDS", "Amazon S3",
	"AWS Secrets Manager", "Amazon CloudWatch", "AWS X-Ray", "AWS CDK",
	"Amazon ECS", "Amazon EKS", "AWS Glue", "Amazon Redshift",
	"Amazon SQS", "Amazon SNS", "AWS CloudFormation", "Amazon API Gateway",
	"Terraform", "Python", "Node.js", "TypeScript", "C# / .NET",
	"React", "Next.js", "PostgreSQL", "MongoDB", "Redis",
	"GraphQL", "GitHub Actions", "Docker", "Snowflake",
	"OpenTelemetry", "PagerDuty", "Datadog",
]

export function TechStack() {
	return (
		<section className="section-pad" id="stack">
			<div className="container">
				<h2 className="section-title reveal">The Tools We Work With</h2>

				<div className="stack-badges stagger reveal">
					{BADGES.map((name) => (
						<span key={name} className="badge">{name}</span>
					))}
				</div>

				<p className="stack-note reveal">
					We pick the right tool for the job, not the one we used last time. If
					something cheaper or simpler works better, we&apos;ll tell you.
				</p>
			</div>
		</section>
	)
}
