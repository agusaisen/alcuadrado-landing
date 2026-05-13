import { Header } from "@/components/header"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#141414]">
      <Header />
      
      {/* Placeholder for hero section */}
      <div className="flex items-center justify-center h-[calc(100vh-80px)]">
        <p className="text-white/40 text-sm">Contenido próximamente...</p>
      </div>
    </main>
  )
}
