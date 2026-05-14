"use client"

import Image from "next/image"

export function StepsSection() {
  const steps = [
    {
      number: "01",
      title: "Entendemos\nel caos",
      description: "Detectamos tareas manuales, procesos repetitivos, información dispersa y puntos donde la operación se vuelve cuello.",
      highlight: true,
    },
    {
      number: "02",
      title: "Diseñamos una\nsolución simple",
      description: "Definimos arquitectura, experiencia de usuario y flujos que hagan más simple lo complejo.",
      highlight: false,
    },
    {
      number: "03",
      title: "Lo hacemos un\nproducto real",
      description: "Desarrollamos soluciones sólidas, escalables y pensadas para usarse todos los días.",
      highlight: false,
    },
    {
      number: "04",
      title: "Lo llevamos\na producción",
      description: "Nos ocupamos del deploy, hosting, mantenimiento y estabilidad técnica para que el producto funcione de forma confiable.",
      highlight: false,
    },
    {
      number: "05",
      title: "Optimizamos y\ndamos continuidad",
      description: "Seguridad, escalabilidad y mantenimiento continuo del sistema, para acompañar el crecimiento del producto.",
      highlight: false,
    },
  ]

  return (
    <section className="w-full bg-transparent py-16 md:py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header with Image */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-4">
          {/* Mobile: Image first */}
          <div className="lg:hidden relative w-full h-[250px] overflow-hidden">
            <Image
              src="/PROCESO-IMG.svg"
              alt="Decorative geometric illustration"
              fill
              className="object-contain object-center"
              style={{ transform: "scale(2.5) translateX(-2%)" }}
            />
          </div>

          {/* Text content */}
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#fafbfd] leading-tight mb-6">
              Cada proyecto empieza{" "}
              <br className="hidden md:block" />
              entendiendo un problema real.
            </h2>
            <p className="text-[#D4D4D8] text-base md:text-lg leading-relaxed">
              No damos soluciones genéricas. Cada sistema, plataforma o experiencia
              nace de entender cómo funciona el negocio y qué necesita mejorar.
            </p>
          </div>

          {/* Desktop: Image on the right */}
          <div className="hidden lg:block relative w-[400px] h-[300px] flex-shrink-0 overflow-hidden">
            <Image
              src="/PROCESO-IMG.svg"
              alt="Decorative geometric illustration"
              fill
              className="object-contain object-center"
              style={{ transform: "scale(3.2) translateX(-10%)" }}
            />
          </div>
        </div>

        {/* Steps Grid - Staggered Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Cards 01, 03, 05 */}
          <div className="flex flex-col gap-6">
            {[steps[0], steps[2], steps[4]].map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>

          {/* Right Column - Cards 02, 04 (offset) */}
          <div className="flex flex-col gap-6 lg:mt-24">
            {[steps[1], steps[3]].map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StepCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
  highlight: boolean
}) {
  return (
    <div
      className="group relative rounded-2xl p-8 md:p-10 min-h-[220px] bg-[rgba(28,28,36,0.4)] transition-all duration-500 ease-out cursor-pointer hover:scale-[1.02]"
      style={{
        backgroundImage: "linear-gradient(46deg, rgba(28, 28, 36, 0.4) 0%, rgba(28, 28, 36, 0.4) 100%)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundImage = "linear-gradient(46deg, rgba(28, 28, 36, 0.4) 0%, #38BDF8 100%)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundImage = "linear-gradient(46deg, rgba(28, 28, 36, 0.4) 0%, rgba(28, 28, 36, 0.4) 100%)"
      }}
    >
      {/* Large Number */}
      <span className="absolute top-6 right-8 text-6xl md:text-7xl lg:text-8xl font-light text-white/20 transition-all duration-500 group-hover:text-white/30">
        {number}
      </span>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4 whitespace-pre-line text-white">
          {title}
        </h3>
        <p className="text-sm md:text-base leading-relaxed max-w-sm text-[#D4D4D8] transition-all duration-500 group-hover:text-white">
          {description}
        </p>
      </div>
    </div>
  )
}
