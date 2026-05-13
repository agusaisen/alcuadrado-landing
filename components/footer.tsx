import Image from "next/image"

export function Footer() {
  return (
    <footer className="relative w-full bg-[#000000] overflow-hidden">
      {/* Background image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/footer-bg-SXQcPktwNsum2XwD3erMhQA2Jj2159.webp"
          alt="Decorative compass illustration"
          fill
          className="object-cover object-center"
          priority={false}
        />
        
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      {/* Bottom icons */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {/* Diamond icon */}
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 16 16" 
          fill="none" 
          className="text-white/60"
        >
          <rect 
            x="8" 
            y="1" 
            width="10" 
            height="10" 
            transform="rotate(45 8 1)" 
            stroke="currentColor" 
            strokeWidth="1.5"
          />
        </svg>
        
        {/* Dot */}
        <div className="w-2 h-2 rounded-full bg-white/60" />
      </div>

      {/* Copyright or additional footer content can go here */}
      <div className="absolute bottom-0 left-0 right-0 py-4 text-center">
        <p className="text-white/40 text-xs">
          © {new Date().getFullYear()} alcuadrado.it - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
