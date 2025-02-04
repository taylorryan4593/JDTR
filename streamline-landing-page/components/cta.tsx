import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-[#19364f] text-white">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to revolutionize your restaurant's online presence?
        </h2>
        <p className="max-w-[42rem] leading-normal text-white/80 sm:text-xl sm:leading-8">
          Join leading restaurants who trust JDTR Studios to drive their digital transformation and stay ahead in the
          rapidly evolving food industry.
        </p>
        <Button size="lg" className="mt-4 bg-white text-[#19364f] hover:bg-white/90">
          Get Started Today
        </Button>
      </div>
    </section>
  )
}

