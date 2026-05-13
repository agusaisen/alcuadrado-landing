import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full bg-transparent py-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Image 
          src="/logotipo.webp" 
          alt="alcuadrado.it" 
          width={120} 
          height={38}
        />

        {/* Copyright */}
        <p className="text-white/60 text-sm">
          © 2026 alcuadrado.it — Creado con precisión.
        </p>
      </div>
    </footer>
  )
}
