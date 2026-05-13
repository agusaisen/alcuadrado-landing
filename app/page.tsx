import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProcessSection } from "@/components/process-section"
import { StepsSection } from "@/components/steps-section"
import { ProjectsCarousel } from "@/components/projects-carousel"
import { PartnersSection } from "@/components/partners-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414]">
      <Header />
      <Hero />
      <ProcessSection />
      <StepsSection />
      <ProjectsCarousel />
      <PartnersSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
