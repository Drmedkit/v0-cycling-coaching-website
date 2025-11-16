"use client"

import type React from "react"

import { useTranslations } from "@/hooks/use-translations"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export default function Testimonials() {
  const { t, isLoaded } = useTranslations()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      id: 1,
      quote: t("testimonials.jelle.quote"),
      name: t("testimonials.jelle.name"),
      title: t("testimonials.jelle.title"),
      image: "/images/testimonial-jelle.jpeg",
      stats: [
        { number: "15%", label: t("testimonials.jelle.stat1") },
        { number: "3", label: t("testimonials.jelle.stat2") },
        { number: "100%", label: t("testimonials.jelle.stat3") },
      ],
    },
    {
      id: 2,
      quote: t("testimonials.cyclist.quote"),
      name: t("testimonials.cyclist.name"),
      title: t("testimonials.cyclist.title"),
      image: "/images/testimonial-cyclist.jpeg",
      stats: [
        { number: t("testimonials.cyclist.stat1.number"), label: t("testimonials.cyclist.stat1.label") },
        { number: t("testimonials.cyclist.stat2.number"), label: t("testimonials.cyclist.stat2.label") },
        { number: t("testimonials.cyclist.stat3.number"), label: t("testimonials.cyclist.stat3.label") },
      ],
    },
    {
      id: 3,
      quote: t("testimonials.max.quote"),
      name: t("testimonials.max.name"),
      title: t("testimonials.max.title"),
      image: "/images/testimonial-max.jpeg",
      stats: [
        { number: t("testimonials.max.stat1.number"), label: t("testimonials.max.stat1.label") },
        { number: t("testimonials.max.stat2.number"), label: t("testimonials.max.stat2.label") },
        { number: t("testimonials.max.stat3.number"), label: t("testimonials.max.stat3.label") },
      ],
    },
  ]

  // Check if mobile or tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // Changed from 768 to 1024 to include tablets
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Auto-advance testimonials every 8 seconds (desktop only)
  useEffect(() => {
    if (isMobile) return // Don't auto-advance on mobile/tablet

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 8000)

    return () => clearInterval(timer)
  }, [testimonials.length, isMobile])

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  const goToPrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  // Mobile/tablet drag handlers
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isMobile) return

    setIsDragging(true)
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    setStartX(clientX)
    setScrollLeft(currentTestimonial)
  }

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !isMobile) return

    e.preventDefault()
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX
    const walk = (startX - clientX) / 100 // Sensitivity adjustment

    if (Math.abs(walk) > 1) {
      if (walk > 0 && currentTestimonial < testimonials.length - 1) {
        setCurrentTestimonial(currentTestimonial + 1)
        setIsDragging(false)
      } else if (walk < 0 && currentTestimonial > 0) {
        setCurrentTestimonial(currentTestimonial - 1)
        setIsDragging(false)
      }
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const current = testimonials[currentTestimonial]

  if (!isLoaded) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="experiences" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("testimonials.title")}</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">{t("testimonials.subtitle")}</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop View (1024px and up) */}
          <div className="hidden lg:block">
            <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-8 h-[500px]">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 h-full">
                {/* Testimonial Content */}
                <div className="p-8 xl:p-12 flex flex-col justify-between h-full">
                  <div className="flex-1 flex flex-col justify-center">
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-8 h-[200px] flex items-center">
                      <span>"{current.quote}"</span>
                    </blockquote>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {current.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{current.name}</p>
                        <p className="text-sm text-gray-600">{current.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Client Image */}
                <div className="relative h-full bg-gray-100 hidden xl:block">
                  <Image
                    src={current.image || "/placeholder.svg"}
                    alt={`${current.name} testimonial`}
                    fill
                    className="object-cover object-center"
                    style={{ objectPosition: "center 30%" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={currentTestimonial === 0}
                  />
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white"
                onClick={goToNext}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile/Tablet View (up to 1024px) - Swipeable Cards */}
          <div className="lg:hidden">
            <div
              className="relative overflow-hidden"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleMouseDown}
              onTouchMove={handleMouseMove}
              onTouchEnd={handleMouseUp}
            >
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                      {/* Client Image */}
                      <div className="relative h-64 md:h-80 bg-gray-100 flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={`${testimonial.name} testimonial`}
                          fill
                          className="object-cover object-center"
                          style={{ objectPosition: "center 30%" }}
                          sizes="100vw"
                          priority={index === 0}
                        />
                      </div>

                      {/* Testimonial Content */}
                      <div className="p-6 md:p-8">
                        <blockquote className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                          "{testimonial.quote}"
                        </blockquote>

                        <div className="border-t border-gray-200 pt-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                              {testimonial.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-900">{testimonial.name}</p>
                              <p className="text-sm text-gray-600">{testimonial.title}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentTestimonial === index ? "bg-teal-500 w-8" : "bg-gray-300 hover:bg-gray-400",
                )}
                onClick={() => goToTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Results Stats */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Mobile/tablet swipe hint */}
          <div className="flex justify-center mt-4 lg:hidden">
            <p className="text-sm text-gray-500">← Swipe to see more stories →</p>
          </div>
        </div>
      </div>
    </section>
  )
}
