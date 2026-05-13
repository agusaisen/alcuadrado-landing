import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#141414]/80 backdrop-blur-md py-5 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logotipo.webp"
            alt="alcuadrado.it"
            width={150}
            height={48}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            href="#proceso"
            className="text-white text-sm font-medium hover:text-[#38bdf8] transition-colors hidden md:block"
          >
            Proceso
          </Link>
          <Link
            href="#proyectos"
            className="text-white text-sm font-medium hover:text-[#38bdf8] transition-colors hidden md:block"
          >
            Proyectos
          </Link>
          <Link
            href="http://wa.me/+542994768136" target="blank"
            className="bg-[#f1f1f4] text-[#141414] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-colors"
          >
            Coordinar llamada
          </Link>
        </nav>
      </div>
    </header>
  )
}
