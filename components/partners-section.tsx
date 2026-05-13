import Image from "next/image"

const partners = [
  {
    name: "Frater",
    logo: "logo-frater.webp",
    width: 80,
    height: 24,
  },
  {
    name: "BlockTravel",
    logo: "logo-black-travel.webp",
    width: 120,
    height: 24,
  },
  {
    name: "Rio Dulce",
    logo: "logo-riodulce.webp",
    width: 100,
    height: 24,
  },
  {
    name: "Consultora Profesional",
    logo: "logo-letras.webp",
    width: 100,
    height: 32,
  },
  {
    name: "Nexton",
    logo: "logo-nxt.webp",
    width: 90,
    height: 24,
  },
  {
    name: "Casi DH",
    logo: "logo-6.webp",
    width: 70,
    height: 24,
  },
  {
    name: "Bardo",
    logo: "logo-7.webp",
    width: 90,
    height: 24,
  },
  {
    name: "CPDH",
    logo: "logo-cpdh.webp",
    width: 90,
    height: 45,
  },

]

export function PartnersSection() {
  return (
    <section className="w-full bg-[#141414] py-10 md:py-14 px-6 md:px-12 lg:px-20">
      <div className="">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
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
