import { Nav } from "@/components/landing/nav"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Features } from "@/components/landing/features"
import { QuickStart } from "@/components/landing/quick-start"
import { Pricing } from "@/components/landing/pricing"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <QuickStart />
      <Pricing />
      <Footer />
    </div>
  )
}
