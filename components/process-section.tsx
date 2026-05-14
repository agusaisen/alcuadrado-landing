import Image from "next/image"

export function ProcessSection() {
  return (
    <section className="w-full bg-transparent lg:px-12 xl:px-20 py-8" id="proceso">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:rounded-3xl overflow-hidden">
          {/* Left side - Image */}
          <div className="w-full lg:w-1/2 relative min-h-[250px] lg:min-h-[400px] bg-[#0a1628]">
            <Image
              src="PROBLEMA-IMG.svg"
              alt="Ilustración de procesos tecnológicos"
              fill
              className="object-cover object-center lg:object-left"
            />
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 bg-transparent px-6 py-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              <span className="text-[#fefefe] font-light">Muchas empresas crecieron,</span>
              <span className="text-[#ffffff] font-light">pero </span>
              <span className="text-[#38bdf8] font-semibold">sus procesos no.</span>
            </h2>

            <p className="text-[#D4D4D8] text-base md:text-lg leading-relaxed">
              Procesos manuales, hojas de cálculo infinitas y herramientas que no
              se hablan entre sí. Operaciones difíciles de escalar. Mientras el
              negocio avanza, la estructura empieza a quedarse atrás.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
