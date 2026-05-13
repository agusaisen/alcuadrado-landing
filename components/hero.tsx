import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Mobile Layout: Image on top, content below */}
      <div className="flex flex-col lg:hidden">
        {/* Background Image - Mobile */}
        <div className="relative w-full h-[60vh]">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO-IMG-58vI6Uq9zWv6M1GGxSYQZCd6CAWIsE.png"
            alt="Abstract blue sphere with orbital rings"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content - Mobile */}
        <div className="bg-[#141414] px-6 py-10">
          {/* Eyebrow */}
          <p className="text-[#38bdf8] text-sm font-semibold tracking-wide uppercase mb-6">
            Hacemos simples los procesos complejos
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold leading-tight mb-6">
            <span className="text-white block">Creamos sistemas.</span>
            <span className="text-[#38bdf8] block">Diseñamos claridad.</span>
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] text-base leading-relaxed mb-10">
            Transformamos operaciones, flujos y tareas que todavía viven en
            planillas, mails o WhatsApp en productos digitales claros, escalables
            y fáciles de usar.
          </p>

          {/* CTA Section */}
          <div className="flex justify-center">
            <button className="bg-[#e8e8e8] text-[#141414] px-10 py-4 rounded-full font-medium hover:bg-white transition-colors">
              Comencemos
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout: Overlay content on image */}
      <div className="hidden lg:block relative min-h-[calc(100vh-80px)]">
        {/* Background Image - Desktop */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HERO-IMG-58vI6Uq9zWv6M1GGxSYQZCd6CAWIsE.png"
            alt="Abstract blue sphere with orbital rings"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content - Desktop */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 py-20 flex items-center min-h-[calc(100vh-80px)]">
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <p className="text-[#38bdf8] text-sm font-semibold tracking-wide uppercase mb-6">
              Hacemos simples los procesos complejos
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white block">Creamos sistemas.</span>
              <span className="text-[#38bdf8] block">Diseñamos claridad.</span>
            </h1>

            {/* Description */}
            <p className="text-[#d4d4d8] text-lg leading-relaxed mb-10 max-w-xl">
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
      </div>
    </section>
  )
}
