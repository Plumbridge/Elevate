import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      <main className="flex-1">
        {/* Hero Section with extra bottom margin */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 mb-12 md:mb-24 lg:mb-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Your Journey Starts Here
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  From application to graduation and beyond, we're here to support your international education journey
                  every step of the way.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  View Our Packages
                </Button>
                <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Services
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "University Application",
                  description: "Streamlined application process for multiple institutions",
                  icon: "📚",
                  link: "/services#application",
                },
                {
                  title: "Accommodation",
                  description: "Find and secure the perfect place to stay",
                  icon: "🏠",
                  link: "/services#accommodation",
                },
                {
                  title: "Financial Planning",
                  description: "Manage tuition, living expenses, and scholarships",
                  icon: "💰",
                  link: "/services#financial",
                },
                {
                  title: "Visa Support",
                  description: "Navigate the visa application process with ease",
                  icon: "✈️",
                  link: "/services#visa",
                },
                {
                  title: "Pre-Departure Orientation",
                  description: "Prepare for your journey abroad",
                  icon: "🧳",
                  link: "/services#cultural",
                },
                {
                  title: "Student Support",
                  description: "Access services to help you succeed",
                  icon: "🤝",
                  link: "/services#support",
                },
              ].map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-black/20 border border-white/10 transition-colors hover:bg-black/30"
                >
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Begin Your Journey?
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Contact us today to learn how we can support your international education journey.
                </p>
              </div>
              <div className="w-full max-w-sm">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
