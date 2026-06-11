"use client"

import { useCallback, useEffect, useState, useMemo } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkIsDesktop = () => setIsDesktop(window.innerWidth >= 1024)
    checkIsDesktop()
    window.addEventListener("resize", checkIsDesktop)
    return () => window.removeEventListener("resize", checkIsDesktop)
  }, [])

  return isDesktop
}

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
    name: "Casi DH",
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
  {
    name: "KaaTech",
    image: "kaa-tech-web.webp",
  },
]

export function ProjectsCarousel() {
  const isDesktop = useIsDesktop()
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
    <section className="w-full bg-transparent py-16 md:py-24 overflow-hidden" id="proyectos">
      <div className="relative">
        {/* Top ellipse overlay for cylinder effect - Desktop only */}
        <div
          className="hidden lg:block absolute -top-16 left-1/2 -translate-x-1/2 w-[120%] h-32 z-20 pointer-events-none"
          style={{
            background: "#050508",
            borderRadius: "0 0 50% 50%",
          }}
        />

        {/* Bottom ellipse overlay for cylinder effect - Desktop only */}
        <div
          className="hidden lg:block absolute -bottom-16 left-1/2 -translate-x-1/2 w-[120%] h-32 z-20 pointer-events-none"
          style={{
            background: "#050508",
            borderRadius: "50% 50% 0 0",
          }}
        />

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {projects.map((project, index) => {
              const isSelected = index === selectedIndex
              const isPrev = index === (selectedIndex - 1 + projects.length) % projects.length
              const isNext = index === (selectedIndex + 1) % projects.length
              const isVisible = isSelected || isPrev || isNext

              return (
                <div
                  key={project.name}
                  className="flex-[0_0_90%] lg:flex-[0_0_60%] min-w-0 px-3 lg:px-4 transition-all "
                  style={{
                    transform: isSelected
                      ? "scale(1) perspective(1000px) rotateY(0deg)"
                      : isPrev
                        ? isDesktop
                          ? "scale(0.95) perspective(1000px) rotateY(15deg) translateX(10%)"
                          : "scale(1)"
                        : isNext
                          ? isDesktop
                            ? "scale(0.95) perspective(1000px) rotateY(-15deg) translateX(-10%)"
                            : "scale(1)"
                          : isDesktop ? "scale(0.7)" : "scale(1)",
                    opacity: isVisible ? 1 : (isDesktop ? 0.3 : 1),
                    zIndex: isSelected ? 10 : 1,
                  }}
                >
                  <div
                    className={`relative aspect-video rounded-2xl overflow-hidden transition-all ${isSelected ? "shadow-2xl shadow-cyan-500/20" : "lg:brightness-50"
                      }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 90vw, 60vw"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </div>



        {/* Gradient overlays for depth effect - Desktop only */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#141414] to-transparent pointer-events-none z-10" />
        <div className="hidden lg:block absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#141414] to-transparent pointer-events-none z-10" />
      </div>


    </section>
  )
}
