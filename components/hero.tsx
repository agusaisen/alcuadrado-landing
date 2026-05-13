import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="HERO-IMG.svg"
          alt="Abstract blue sphere with orbital rings"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="text-[#38bdf8] text-sm font-semibold tracking-wide uppercase mb-6">
            Hacemos simples los procesos complejos
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-white block">Creamos sistemas.</span>
            <span className="text-[#38bdf8] block">Diseñamos claridad.</span>
          </h1>

          {/* Description */}
          <p className="text-[#d4d4d8] text-base md:text-lg leading-relaxed mb-10 max-w-xl">
            Transformamos operaciones, flujos y tareas que todavía viven en
            planillas, mails o WhatsApp en productos digitales claros, escalables
            y fáciles de usar.
          </p>

          {/* CTA Section */}
          <div className="flex items-center gap-6">
            <button className="bg-white text-[#141414] px-8 py-3 rounded-full font-medium hover:bg-[#d4d4d8] transition-colors">
              Comencemos
            </button>

            {/* Diamond icon + dot */}
            <div className="flex items-center gap-2">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d4d4d8"
                strokeWidth="1.5"
                className="opacity-60"
              >
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <span className="w-2 h-2 rounded-full bg-[#d4d4d8] opacity-60" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
