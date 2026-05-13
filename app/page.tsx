import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProcessSection } from "@/components/process-section"
import { StepsSection } from "@/components/steps-section"
import { ProjectsCarousel } from "@/components/projects-carousel"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414]">
      <Header />
      <Hero />
      <ProcessSection />
      <StepsSection />
      <ProjectsCarousel />
    </main>
  )
}
