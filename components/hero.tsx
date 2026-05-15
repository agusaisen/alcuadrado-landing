"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-140px)] overflow-hidden">
      {/* Keyframes for diamond rotation animation */}
      <style jsx>{`
        @keyframes diamondRotate {
          0%, 100% {
            transform: rotate(-45deg);
          }
          50% {
            transform: rotate(45deg);
          }
        }
        .animate-diamond {
          animation: diamondRotate 4s ease-in-out infinite;
        }
      `}</style>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col">
        {/* Background Image - Mobile: full width, right below header */}
        <div className="relative w-full aspect-square">
          <Image
            src="/HERO-IMG-MBL.svg"
            alt="Abstract blue sphere with orbital rings"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Content overlapping bottom half of image */}
        <div className="relative z-10 -mt-20 px-6 pb-12">
          {/* Eyebrow */}
          <p className="text-[#38bdf8] text-xs font-semibold tracking-wide uppercase mb-4">
            Hacemos simples los procesos complejos
          </p>

          {/* Main Heading */}
          <h1 className="text-3xl font-bold leading-tight mb-4">
            <span className="text-white block">Creamos sistemas.</span>
            <span className="bg-linear-to-r from-[#38BDF8] to-[#d4d4d8] bg-clip-text text-transparent block">
              Diseñamos claridad.
            </span>
          </h1>

          {/* Description */}
          <p className="text-[#a1a1aa] text-sm leading-relaxed mb-8">
            Transformamos operaciones, flujos y tareas que todavía viven en
            planillas, mails o WhatsApp en productos digitales claros, escalables
            y fáciles de usar.
          </p>

          {/* CTA Button with glow effect */}
          <div className="flex flex-col items-center gap-6">
            <a href="#proceso"
              className="bg-[#d4d4d8] text-[#141414] px-10 py-3.5 rounded-full font-bold transition-all cursor-pointer"
              style={{
                boxShadow: "0 0 15px rgba(56, 189, 248, 0.3), 0 0 50px rgba(56, 189, 248, 0.1)"
              }}
            >
              Comencemos
            </a>

            {/* Diamond icon + dot */}
            <div className="flex items-center gap-3 mt-4">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                className="animate-diamond"
              >
                <path d="M12 2L2 12l10 10 10-10L12 2z" />
              </svg>
              <span className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center min-h-[calc(100vh-80px)]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/HERO-IMG.svg"
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
              <span className="bg-linear-to-r from-[#38BDF8] to-[#d4d4d8] bg-clip-text text-transparent block">Diseñamos claridad.</span>
            </h1>

            {/* Description */}
            <p className="text-[#D4D4D8] text-base md:text-lg leading-relaxed mb-10 max-w-xl">
              Transformamos operaciones, flujos y tareas que todavía viven en
              planillas, mails o WhatsApp en productos digitales claros, escalables
              y fáciles de usar.
            </p>

            {/* CTA Section */}
            <div className="flex items-center gap-6">
              <a href="#proceso" className="bg-white text-[#141414] px-8 py-3 rounded-full font-bold hover:bg-[#d4d4d8] transition-colors">
                Comencemos
              </a>

              {/* Diamond icon + dot */}
              <div className="flex items-center gap-2">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  className="animate-diamond"
                >
                  <path d="M12 2L2 12l10 10 10-10L12 2z" />
                </svg>
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
