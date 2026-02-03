import Hero from "@/components/hero"
import Services from "@/components/services"
import MeetCoach from "@/components/meet-coach"
import Methodology from "@/components/methodology"
import Testimonials from "@/components/testimonials"
import Packages from "@/components/packages"
// import ContactForm from "@/components/contact-form" // Form code behouden maar niet gebruikt
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <MeetCoach />
      <Methodology />
      <Testimonials />
      <Packages />
      <ContactSection />
      <Footer />
    </main>
  )
}
