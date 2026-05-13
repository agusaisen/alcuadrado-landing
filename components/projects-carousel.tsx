"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

const projects = [
  {
    name: "Frater",
    image: "proj-frater.webp",
  },
  {
    name: "Rio Dulce",
    image: "proj-rio.webp",
  },
  {
    name: "CASI DH",
    image: "proj-cas.webp",
  },
  {
    name: "Consultora Profesional",
    image: "proj-cp.webp",
  },
  {
    name: "CPDH",
    image: "proj-cpdh.webp",
  },
  {
    name: "Nexton",
    image: "proj-nex.webp",
  },
  {
    name: "Block Travel",
    image: "proj-bt.webp",
  },
  {
    name: "Nexton Dev",
    image: "proj-nexdev.webp",
  },
]

export function ProjectsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section className="w-full bg-[#141414] py-16 md:py-24 overflow-hidden">
      <div className="relative" style={{ perspective: "1200px" }}>
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-center" style={{ transformStyle: "preserve-3d" }}>
            {projects.map((project, index) => {
              const isSelected = index === selectedIndex
              const isPrev = index === (selectedIndex - 1 + projects.length) % projects.length
              const isNext = index === (selectedIndex + 1) % projects.length
              const isVisible = isSelected || isPrev || isNext

              // Cylindrical effect: center is narrower, sides are wider
              const getTransform = () => {
                if (isSelected) {
                  // Center card: narrower, pushed back slightly
                  return "rotateY(0deg) translateZ(-50px) scaleX(0.85)"
                } else if (isPrev) {
                  // Left card: rotated outward, wider appearance
                  return "rotateY(35deg) translateZ(0px) translateX(-5%)"
                } else if (isNext) {
                  // Right card: rotated outward, wider appearance  
                  return "rotateY(-35deg) translateZ(0px) translateX(5%)"
                }
                return "scale(0.6) translateZ(-200px)"
              }

              return (
                <div
                  key={project.name}
                  className="flex-[0_0_50%] min-w-0 px-2 md:px-4 transition-all duration-700 ease-out"
                  style={{
                    transform: getTransform(),
                    opacity: isVisible ? 1 : 0,
                    zIndex: isSelected ? 5 : isPrev || isNext ? 10 : 1,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={`relative aspect-[16/10] overflow-hidden transition-all duration-700 ${
                      isSelected 
                        ? "rounded-[40px] brightness-100" 
                        : "rounded-2xl brightness-75"
                    }`}
                    style={{
                      boxShadow: isSelected 
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
                        : "0 10px 30px -10px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 80vw, 50vw"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next project"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Gradient overlays for depth effect */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-[#141414] to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-[#141414] to-transparent pointer-events-none z-10" />
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === selectedIndex ? "bg-[#38bdf8] w-6" : "bg-white/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
