import Image from "next/image"

const partners = [
  {
    name: "Frater",
    logo: "logo-frater.webp",
    width: 80,
    height: 24,
    url: "https://frateraudiovisual.com.ar/",
  },
  {
    name: "BlockTravel",
    logo: "logo-black-travel.webp",
    width: 120,
    height: 24,
    url: "https://blocktravelagency.com/",
  },
  {
    name: "Rio Dulce",
    logo: "logo-riodulce.webp",
    width: 100,
    height: 24,
    url: "https://riodulceagencia.com/",
  },
  {
    name: "Consultora Profesional",
    logo: "logo-letras.webp",
    width: 100,
    height: 32,
    url: "https://consultoraprofesional.com/",
  },
  {
    name: "Nexton",
    logo: "logo-nxt.webp",
    width: 90,
    height: 24,
    url: "https://nexton.dev/",
  },
  {
    name: "Casi DH",
    logo: "logo-6.webp",
    width: 70,
    height: 24,
    url: "https://casidh.com.ar/",
  },
  {
    name: "Bardo",
    logo: "logo-7.webp",
    width: 90,
    height: 24,
    url: "https://bardo.ar/",
  },
  {
    name: "CPDH",
    logo: "logo-cpdh.webp",
    width: 90,
    height: 45,
    url: "https://patagonicodh.com.ar/",
  },
  {
    name: "Kaatech",
    logo: "kaatech.webp",
    width: 120,
    height: 49,
    url: "https://kaa-tech.com/",
  },
  {
    name: "Mr. Fill",
    logo: "logo-fill.webp",
    width: 150,
    height: 49,
    url: "https://mrfill.com.ar",
  },

]

export function PartnersSection() {
  return (
    <section className="w-full bg-transparent py-10 md:py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 items-center justify-items-center gap-8 md:gap-10 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center grayscale opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
                className="object-contain h-6 md:h-8 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
