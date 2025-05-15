import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, FileText, Home, Coins, Globe, Plane, ArrowRight } from "lucide-react"

const services = [
  {
    title: "University Application",
    description: "Expert guidance for university selection, application preparation, and admission requirements.",
    icon: <GraduationCap className="h-10 w-10" />,
    href: "/services/applications",
    color: "from-blue-500/20 to-indigo-500/20",
  },
  {
    title: "Visa Support",
    description: "Step-by-step assistance with visa applications, document preparation, and interview coaching.",
    icon: <FileText className="h-10 w-10" />,
    href: "/services/visa",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Accommodation",
    description: "Find the perfect student housing with our curated listings and virtual campus tours.",
    icon: <Home className="h-10 w-10" />,
    href: "/services/accommodation",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "Financial Planning",
    description: "Scholarship guidance, tuition planning, and budgeting tools for your entire study period.",
    icon: <Coins className="h-10 w-10" />,
    href: "/services/financial",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Cultural Preparation",
    description: "Language support, cultural adaptation training, and pre-departure orientation.",
    icon: <Globe className="h-10 w-10" />,
    href: "/services/cultural",
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    title: "Career Support",
    description: "Resume building, interview preparation, and employment guidance in your host country.",
    icon: <Plane className="h-10 w-10" />,
    href: "/services/career",
    color: "from-rose-500/20 to-red-500/20",
  },
]

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-gradient">Services</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          From university selection to cultural adaptation, we provide end-to-end support for your international
          education journey. Explore our comprehensive services designed to make your global education experience
          seamless and successful.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => (
          <Link key={index} href={service.href} className="group block">
            <div
              className={`glass p-8 rounded-xl border border-primary/10 h-full transition-all duration-300 hover:border-primary/30 hover:shadow-lg bg-gradient-to-br ${service.color}`}
            >
              <div className="mb-6 text-primary">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <div className="flex items-center text-primary font-medium">
                <span>Learn more</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="glass p-8 rounded-xl border border-primary/10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Not sure which service you need?</h2>
        <p className="text-muted-foreground mb-6">
          Our education consultants can help you identify the right services based on your specific needs and goals.
          Schedule a free consultation to get personalized guidance.
        </p>
        <Link href="/signup">
          <Button variant="glow" size="lg">
            Get Free Consultation
          </Button>
        </Link>
      </div>
    </div>
  )
}
