import Link from "next/link"

export function ContactSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#1a3a4a] to-[#0f2a38] py-20 md:py-28 px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background text HABLEMOS */}
      <div className="absolute inset-0 flex items-end justify-center pointer-events-none overflow-hidden">
        <span className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-bold text-[#0a1f2a] leading-none tracking-tight select-none translate-y-12 md:translate-y-16">
          HABLEMOS
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
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
    </section>
  )
}
