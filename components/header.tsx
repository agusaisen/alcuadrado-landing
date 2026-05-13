import Link from "next/link"

export function Header() {
  return (
    <header className="w-full bg-[#141414] py-5 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative w-7 h-7">
            {/* Main square */}
            <div className="absolute inset-0 border-2 border-[#38bdf8] rounded-sm" />
            {/* Inner square offset */}
            <div className="absolute top-1 left-1 w-4 h-4 bg-[#38bdf8] rounded-sm" />
          </div>
          <span className="text-white text-lg font-medium">alcuadrado.it</span>
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
            href="#contacto"
            className="bg-[#f1f1f4] text-[#141414] px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white transition-colors"
          >
            Coordinar llamada
          </Link>
        </nav>
      </div>
    </header>
  )
}
