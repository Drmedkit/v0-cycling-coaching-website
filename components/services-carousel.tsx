"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"
import { FileText, BarChart2, MessageSquare, Activity, Moon, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"
import { cn } from "@/lib/utils"

export default function ServicesCarousel() {
  const { t } = useTranslations()
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

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

  // Update active index and arrow visibility based on scroll position
  const updateActiveIndex = () => {
    if (!scrollContainerRef.current) return

    const container = scrollContainerRef.current
    const scrollPosition = container.scrollLeft
    const cardWidth = container.offsetWidth
    const index = Math.round(scrollPosition / cardWidth)

    setActiveIndex(index)
    setShowLeftArrow(scrollPosition > 20)
    setShowRightArrow(scrollPosition < container.scrollWidth - container.offsetWidth - 20)
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      updateActiveIndex()
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  // Navigate to specific card
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return

    const cardWidth = 320 + 24 // card width + gap
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    })
  }

  // Handle arrow navigation
  const handlePrev = () => {
    if (activeIndex > 0) {
      scrollToCard(activeIndex - 1)
    }
  }

  const handleNext = () => {
    if (activeIndex < services.length - 1) {
      scrollToCard(activeIndex + 1)
    }
  }

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return

    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)

    // Change cursor to grabbing
    document.body.style.cursor = "grabbing"
  }

  const handleMouseUp = () => {
    setIsDragging(false)

    // Reset cursor
    document.body.style.cursor = "default"

    // Snap to nearest card
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 24 // card width + gap
      const currentPosition = scrollContainerRef.current.scrollLeft
      const targetIndex = Math.round(currentPosition / cardWidth)
      scrollToCard(targetIndex)
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return

    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 1.5 // Multiply by 1.5 for faster drag
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      document.body.style.cursor = "default"
    }
  }

  return (
    <div className="relative">
      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 transition-opacity duration-300 hidden md:flex",
          showLeftArrow ? "opacity-100" : "opacity-0",
        )}
        onClick={handlePrev}
        disabled={!showLeftArrow}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className={cn(
          "absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 transition-opacity duration-300 hidden md:flex",
          showRightArrow ? "opacity-100" : "opacity-0",
        )}
        onClick={handleNext}
        disabled={!showRightArrow}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Scrollable Container */}
      <div
        ref={scrollContainerRef}
        className={cn(
          "flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-4 md:px-16 scroll-smooth",
          isDragging ? "cursor-grabbing" : "cursor-grab",
        )}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className={cn(
              "bg-white rounded-lg shadow-lg overflow-hidden transition-all flex-shrink-0 w-[280px] md:w-[320px]",
              isDragging ? "scale-[0.98]" : "hover:translate-y-[-5px]",
            )}
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

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 gap-2">
        {services.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              activeIndex === index ? "bg-teal-500 w-6" : "bg-gray-300",
            )}
            onClick={() => scrollToCard(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
