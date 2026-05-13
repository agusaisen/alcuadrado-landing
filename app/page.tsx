import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProcessSection } from "@/components/process-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414]">
      <Header />
      <Hero />
      <ProcessSection />
    </main>
  )
}
