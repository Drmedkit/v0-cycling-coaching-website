"use client"

import { useTranslations } from "@/hooks/use-translations"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const { t } = useTranslations()

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-03-31%20at%2021.24.07-vf4zQPWAmg9Gm9H1N3YXqduH454Yvv.jpeg"
          alt="Cyclists on a trail"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 mt-16">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{t("hero.title")}</h1>
          <p className="text-xl md:text-2xl mb-8">{t("hero.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-teal-500 hover:bg-teal-600 text-white">
              <Link href="#contact">{t("hero.startButton")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black"
            >
              <Link href="#services">{t("hero.moreInfo")}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
