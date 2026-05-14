import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative w-full bg-[#000000] overflow-hidden">
      {/* Background image */}
      <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px]">
        <Image
          src="FOOTER-IMG.svg"
          alt="Decorative compass illustration"
          fill
          className="object-cover object-center"
          priority={false}
        />

        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Footer content: logo left, copyright right */}
      <div className="absolute bottom-0 left-0 right-0 py-6 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Image
            src="/logotipoA2.svg"
            alt="alcuadrado.it"
            width={120}
            height={38}
          />

          {/* Copyright */}
          <p className="text-white/60 text-sm text-center md:text-left">
            © {new Date().getFullYear()} alcuadrado.it — Creado con precisión.
          </p>
        </div>
      </div>
    </footer>
  )
}
