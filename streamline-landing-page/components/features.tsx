import { Utensils, Globe, Clock, Star } from "lucide-react"

const features = [
  {
    name: "Beautiful Menu Design",
    description: "Showcase your dishes with stunning, easy-to-update digital menus.",
    icon: Utensils,
  },
  {
    name: "Online Presence",
    description: "Expand your reach with a professional website that attracts new customers.",
    icon: Globe,
  },
  {
    name: "Real-time Updates",
    description: "Easily update your hours, specials, and important announcements.",
    icon: Clock,
  },
  {
    name: "Review Integration",
    description: "Display your best reviews and ratings from multiple platforms.",
    icon: Star,
  },
]

export default function Features() {
  return (
    <section className="relative py-24 md:py-32 bg-[#325236]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-[58rem] text-center mb-16">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-white mb-4">
            Restaurant-Ready Features
          </h2>
          <p className="text-white/80 sm:text-lg">
            Everything you need to bring your restaurant online and attract more customers.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="relative overflow-hidden rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4">
                <feature.icon className="h-8 w-8 text-white" />
                <h3 className="font-bold text-white text-xl">{feature.name}</h3>
              </div>
              <p className="mt-2 text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

