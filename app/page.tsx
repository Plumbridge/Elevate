"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronRight, GraduationCap, FileText, Plane, Home, Coins, Globe } from "lucide-react"
import dynamic from "next/dynamic"
import ServiceCard from "@/components/service-card"
import { testimonials } from "@/data/testimonials"

// Import Globe3D with no SSR to prevent server-side rendering issues
const Globe3D = dynamic(() => import("@/components/globe-3d"), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse" />
    </div>
  )
})

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  
  // Initialize with default values
  const [scrollProps, setScrollProps] = useState({
    y: 0,
    opacity: 1
  })
  
  // Important: useScroll must be called at the top level, not inside useEffect
  // We'll conditionally use its values based on mounted state
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
    layoutEffect: false  // Prevents warning during hydration
  })
  
  // Create transform values
  const yTransform = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacityTransform = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  // Subscribe to changes after component is mounted
  useEffect(() => {
    if (!mounted) return
    
    const unsubscribeY = yTransform.on("change", (latest) => {
      setScrollProps(prev => ({
        ...prev,
        y: latest
      }))
    })
    
    const unsubscribeOpacity = opacityTransform.on("change", (latest) => {
      setScrollProps(prev => ({
        ...prev,
        opacity: latest
      }))
    })

    return () => {
      unsubscribeY()
      unsubscribeOpacity()
    }
  }, [mounted, yTransform, opacityTransform])

  // Preload effects on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(100vh-64px)] flex items-center justify-center pt-16 pb-16 overflow-hidden"
      >
        <motion.div 
          style={{ 
            y: scrollProps.y, 
            opacity: scrollProps.opacity 
          }} 
          className="container mx-auto relative z-10 px-4"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block glass rounded-full px-4 py-1 border border-primary/20"
              >
                <span className="text-sm font-medium text-primary">Transforming Student Journeys</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Your Journey Begins Here. <span className="text-gradient">Elevate Your Future.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Comprehensive support for international students from university applications to cultural preparation.
                Start your global education journey with confidence.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link href="/pricing">
                  <Button variant="glow" size="lg" className="gap-2">
                    <span>Get Started</span>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                <Link href="/services/applications">
                  <Button variant="outline" size="lg">
                    Explore Services
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-6"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                      <Image
                        src={`/placeholder.svg?height=40&width=40`}
                        alt={`Student ${i}`}
                        width={40}
                        height={40}
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium">Trusted by 2000+ students</p>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                    <span className="text-xs text-muted-foreground ml-1">4.9/5</span>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative h-[600px] w-full flex items-center justify-center"
            >
              <Globe3D />
            </motion.div>
          </div>
        </motion.div>

        {/* Background elements */}
        <div className="absolute top-1/3 right-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-[100px]" />
      </section>

      {/* Rest of your code stays the same */}
      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive <span className="text-gradient">Student Services</span>
            </h2>
            <p className="text-muted-foreground">
              From university selection to cultural adaptation, we provide end-to-end support for your international
              education journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<GraduationCap className="h-6 w-6" />}
              title="University Application"
              description="Expert guidance for university selection, application preparation, and admission requirements."
              link="/services/applications"
            />

            <ServiceCard
              icon={<FileText className="h-6 w-6" />}
              title="Visa Support"
              description="Step-by-step assistance with visa applications, document preparation, and interview coaching."
              link="/services/visa"
            />

            <ServiceCard
              icon={<Home className="h-6 w-6" />}
              title="Accommodation"
              description="Find the perfect student housing with our curated listings and virtual campus tours."
              link="/services/accommodation"
            />

            <ServiceCard
              icon={<Coins className="h-6 w-6" />}
              title="Financial Planning"
              description="Scholarship guidance, tuition planning, and budgeting tools for your entire study period."
              link="/services/financial"
            />

            <ServiceCard
              icon={<Globe className="h-6 w-6" />}
              title="Cultural Preparation"
              description="Language support, cultural adaptation training, and pre-departure orientation."
              link="/services/cultural"
            />

            <ServiceCard
              icon={<Plane className="h-6 w-6" />}
              title="Career Support"
              description="Resume building, interview preparation, and employment guidance in your host country."
              link="/services/career"
            />
          </div>

          <div className="mt-16 text-center">
            <Button variant="glow" size="lg">
              View All Services
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative glass">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">98%</h3>
              <p className="text-muted-foreground">Visa Success Rate</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">500+</h3>
              <p className="text-muted-foreground">University Partners</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">15k+</h3>
              <p className="text-muted-foreground">Students Placed</p>
            </div>

            <div className="text-center">
              <h3 className="text-4xl md:text-5xl font-bold text-gradient mb-2">25+</h3>
              <p className="text-muted-foreground">Countries Covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Success <span className="text-gradient">Stories</span>
            </h2>
            <p className="text-muted-foreground">
              Hear from students who transformed their educational journeys with Elevate's support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass p-6 rounded-xl border border-primary/10"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || `/placeholder.svg?height=48&width=48`}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.program}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className={i <= testimonial.rating ? "text-amber-400" : "text-muted"}>
                      ★
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button variant="outline" size="lg">
              Read More Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative glass">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to <span className="text-gradient">Elevate</span> Your Education?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of students who have successfully transformed their educational journey. Let's build your
              global future together.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="glow" size="lg">
                Schedule Consultation
              </Button>
              <Button variant="outline" size="lg">
                Explore Universities
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
