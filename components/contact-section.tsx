import Link from "next/link"
import Image from "next/image"

export function ContactSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#1a3a4a] via-[#0f2a38] to-[#141414] pt-20 md:pt-28 pb-0 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background text HABLEMOS */}
      <div className="absolute top-0 left-0 right-0 flex items-end justify-center pointer-events-none overflow-hidden h-[400px] md:h-[500px]">
        <span className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-bold text-[#0a1f2a] leading-none tracking-tight select-none translate-y-12 md:translate-y-16">
          HABLEMOS
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-white mb-2 leading-tight">
          Si hoy tu operación depende de
        </h2>
        <p className="text-2xl md:text-4xl lg:text-5xl font-medium text-[#38bdf8] mb-8">
          procesos manuales
        </p>
        
        <Link
          href="#"
          className="inline-flex items-center justify-center px-8 py-3 bg-[#f1f1f4] text-[#141414] font-medium rounded-full hover:bg-white transition-colors"
        >
          Coordinar llamada
        </Link>
      </div>

      {/* Compass image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer-bg-SXQcPktwNsum2XwD3erMhQA2Jj2159.webp"
          alt="Compass illustration"
          fill
          className="object-contain object-center"
        />
        
        {/* Decorative icons */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-white/60">
            <rect x="6" y="0" width="8.49" height="8.49" rx="1" transform="rotate(45 6 0)" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <div className="w-2 h-2 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  )
}
