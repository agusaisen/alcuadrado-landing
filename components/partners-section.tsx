import Image from "next/image"

const partners = [
  {
    name: "Frater",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-frater-Wy0cRidoNcThRc4hf6SmTxtgA4crZM.webp",
    width: 80,
    height: 24,
  },
  {
    name: "BlockTravel",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-black-travel-5ptuWRe69sAHRUImjyFGmb2xnwY3AX.webp",
    width: 120,
    height: 24,
  },
  {
    name: "Rio Dulce",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-riodulce-NXZN56as979vF5sfXkPS0jRojhfZ9K.webp",
    width: 100,
    height: 24,
  },
  {
    name: "Consultora Profesional",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-letras-ITLw6V4Lif2ltpLLDLZpkxvAlOM3Lx.webp",
    width: 100,
    height: 32,
  },
  {
    name: "Nexton",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-nxt-C1PlbWKxnTWECpKKsAUCqcj0xCqudg.webp",
    width: 90,
    height: 24,
  },
  {
    name: "CAS DH",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-6-imwGkpWUAHYym6NadvmlYIV8iz9Ywi.webp",
    width: 70,
    height: 24,
  },
  {
    name: "Bardo",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-7-AG4MlPDusQHi9H0jTMbAqH6kdfkhMB.webp",
    width: 90,
    height: 24,
  },
]

export function PartnersSection() {
  return (
    <section className="w-full bg-[#e8e8e8] py-10 md:py-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
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
