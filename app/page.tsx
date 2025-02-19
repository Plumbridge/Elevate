import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-b from-background to-muted">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <main className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            Your Journey Starts Here
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            From application to graduation and beyond, we're here to support your international education journey every step of the way.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/packages">View Our Packages</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/services/career-support">Learn More</Link>
            </Button>
          </div>
        </main>
      </section>

      {/* Our Services Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Career Support Partnership Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Career Support Partnership</h2>
          <p className="text-xl text-muted-foreground">
            We work closely with our sister company, CareerLaunch International, to provide comprehensive career support for our students. After you complete your studies, CareerLaunch will assist you in finding internships and job opportunities, helping you kickstart your international career.
          </p>
          <Button asChild className="mt-8">
            <Link href="/services#career">Learn More</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
