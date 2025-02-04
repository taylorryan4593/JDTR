import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/shawn-nmpW_WwwVSc-unsplash.jpg-YJhi5irHx9hHidQuNW8pj9YEQrFpiU.jpeg"
          alt="Modern restaurant interior"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 flex flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
        <div className="space-y-4">
          <h1 className="text-white text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            JDTR
            <br />
            Studios
          </h1>
          <p className="mx-auto max-w-[42rem] leading-normal text-white/80 sm:text-xl sm:leading-8">
            We know restaurants and we know websites - this is now a test
          </p>
        </div>
        <div className="flex gap-4">
          <Button size="lg" className="bg-white text-black hover:bg-white/90">
            Explore Packages
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </section>
  )
}

