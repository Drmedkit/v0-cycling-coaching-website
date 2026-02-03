"use client"

import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Contact
          </h2>
          <p className="text-muted-foreground mb-8">
            Heb je vragen of wil je meer informatie over onze coaching programma's? 
            Stuur ons een e-mail en we nemen zo snel mogelijk contact met je op.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <a href="mailto:tychocoach@gmail.com">
              <Button size="lg" className="gap-2">
                <Mail className="h-5 w-5" />
                tychocoach@gmail.com
              </Button>
            </a>
            
            <p className="text-sm text-muted-foreground">
              We reageren meestal binnen 24 uur
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
