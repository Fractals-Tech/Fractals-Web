import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { Process } from "@/components/Process"
import { TechStack } from "@/components/TechStack"
import { WhoWeServe } from "@/components/WhoWeServe"
import { Credentials } from "@/components/Credentials"
import { ContactSection } from "@/components/ContactSection"
import { ConsultationForm } from "@/components/ConsultationForm"
import { Footer } from "@/components/Footer"
import { ScrollRevealInit } from "@/components/ScrollRevealInit"

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<Services />
				<Process />
				<TechStack />
				<WhoWeServe />
				<Credentials />
				<section className="cta-section section-pad" id="contact">
					<div className="container">
						<div className="cta-inner">
							<ContactSection />
							<div className="reveal">
								<ConsultationForm />
							</div>
						</div>
					</div>
				</section>
			</main>
			<Footer />
			<ScrollRevealInit />
		</>
	)
}
