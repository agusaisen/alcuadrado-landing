import Image from "next/image"

export function ProcessSection() {
  return (
    <section className="w-full bg-transparent px-6 md:px-12 lg:px-20 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden">
          {/* Left side - Image */}
          <div className="lg:w-1/2 relative min-h-[300px] lg:min-h-[400px] bg-[#0a1628]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sadsad-eSpm7Q8YkWJp4gWosk9U7S77VObbiC.png"
              alt="Ilustración de procesos tecnológicos"
              fill
              className="object-cover object-left"
            />
          </div>
          
          {/* Right side - Content */}
          <div className="lg:w-1/2 bg-transparent p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
              <span className="text-[#71717a] font-light">Muchas empresas crecieron,</span>
              <br />
              <span className="text-[#71717a] font-light">pero </span>
              <span className="text-[#38bdf8] font-semibold">sus procesos no.</span>
            </h2>
            
            <p className="text-[#52525b] text-base md:text-lg leading-relaxed">
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
