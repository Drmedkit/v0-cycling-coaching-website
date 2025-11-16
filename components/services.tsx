"use client"

import { useTranslations } from "@/hooks/use-translations"
import { FileText, BarChart2, MessageSquare, Activity, Moon, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export default function Services() {
  const { t } = useTranslations()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const services = [
    {
      icon: <FileText className="h-10 w-10 text-white" />,
      title: t("services.individual.title"),
      description: t("services.individual.description"),
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-white" />,
      title: t("services.analysis.title"),
      description: t("services.analysis.description"),
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-white" />,
      title: t("services.guidance.title"),
      description: t("services.guidance.description"),
    },
    {
      icon: <Activity className="h-10 w-10 text-white" />,
      title: t("services.testing.title"),
      description: t("services.testing.description"),
    },
    {
      icon: <Moon className="h-10 w-10 text-white" />,
      title: t("services.recovery.title"),
      description: t("services.recovery.description"),
    },
  ]

  const checkScrollButtons = () => {
    if (!scrollContainerRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth)
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      return () => container.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return

    const scrollAmount = 350
    const newScrollLeft =
      direction === "left"
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount

    scrollContainerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t("services.subtitle")}</p>
        </div>

        <div className="relative">
          {/* Left Arrow */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 transition-opacity duration-200 hidden md:flex",
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            onClick={() => scroll("left")}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Right Arrow */}
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 transition-opacity duration-200 hidden md:flex",
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
            onClick={() => scroll("right")}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Cards Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-12 pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:translate-y-[-5px] flex-shrink-0 w-[300px] md:w-[320px]"
              >
                <div className="p-6">
                  <div className="bg-teal-500 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 min-h-[120px]">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile scroll hint */}
          <div className="flex justify-center mt-4 md:hidden">
            <p className="text-sm text-gray-500">← Swipe to see more services →</p>
          </div>
        </div>
      </div>
    </section>
  )
}
