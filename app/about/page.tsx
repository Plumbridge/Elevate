import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Users, Globe, BookOpen, Briefcase, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About <span className="text-gradient">Elevate</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Empowering students to achieve their international education dreams since 2015
        </p>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
        <div className="relative h-[400px] rounded-xl overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=600" alt="Elevate team" fill className="object-cover" />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-muted-foreground">
            Elevate was founded in 2015 by a group of former international students who experienced firsthand the
            challenges of studying abroad. What began as a small advisory service has grown into a comprehensive
            platform supporting thousands of students worldwide.
          </p>
          <p className="text-muted-foreground">
            Our founders recognized that while studying abroad offers tremendous opportunities, the journey is filled
            with complex processes, cultural adjustments, and logistical challenges. Elevate was created to simplify
            this journey and ensure that every student can access quality international education.
          </p>
          <p className="text-muted-foreground">
            Today, we're proud to have helped over 10,000 students from 75+ countries achieve their educational dreams
            at prestigious institutions worldwide.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="glass rounded-xl p-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-muted-foreground">
              To democratize access to international education by providing comprehensive, personalized support that
              empowers students to overcome barriers and achieve their academic and career aspirations.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Our Vision</h3>
            <p className="text-muted-foreground">
              A world where geographical, financial, and cultural barriers no longer limit educational opportunities,
              and where every motivated student can access the transformative experience of international education.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="h-8 w-8 text-primary" />,
              title: "Student-Centered",
              description:
                "We put students' needs and aspirations at the center of everything we do, providing personalized guidance that recognizes each student's unique journey.",
            },
            {
              icon: <Award className="h-8 w-8 text-primary" />,
              title: "Excellence",
              description:
                "We strive for excellence in all our services, maintaining high standards and continuously improving to deliver exceptional results for our students.",
            },
            {
              icon: <Globe className="h-8 w-8 text-primary" />,
              title: "Global Perspective",
              description:
                "We embrace cultural diversity and foster a global mindset, preparing students to thrive in an interconnected world.",
            },
            {
              icon: <BookOpen className="h-8 w-8 text-primary" />,
              title: "Continuous Learning",
              description:
                "We are committed to ongoing learning and development, staying updated with the latest trends and requirements in international education.",
            },
            {
              icon: <Briefcase className="h-8 w-8 text-primary" />,
              title: "Integrity",
              description:
                "We operate with transparency, honesty, and ethical practices, building trust with students, parents, and educational institutions.",
            },
            {
              icon: <Heart className="h-8 w-8 text-primary" />,
              title: "Empathy",
              description:
                "We understand the challenges and emotions involved in studying abroad, and approach our work with compassion and support.",
            },
          ].map((value, index) => (
            <div key={index} className="glass rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-4">Our Leadership Team</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Meet the dedicated professionals who lead Elevate with passion, expertise, and a commitment to student
          success.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Johnson",
              role: "Founder & CEO",
              bio: "Former international student with 15+ years in education consulting",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Michael Chen",
              role: "Chief Operations Officer",
              bio: "Expert in global education systems with background in university administration",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Priya Sharma",
              role: "Head of Student Success",
              bio: "Dedicated to creating supportive pathways for international students",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "James Wilson",
              role: "Director of University Partnerships",
              bio: "Builds strong relationships with top universities worldwide",
              image: "/placeholder.svg?height=400&width=400",
            },
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-sm text-muted-foreground mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Presence */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Global Presence</h2>
        <div className="glass rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">We're Worldwide</h3>
              <p className="text-muted-foreground">
                With offices in 6 countries and a network of partners in over 30 countries, Elevate provides localized
                support with global expertise.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Headquarters: London, United Kingdom</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Regional Offices: New York, Singapore, Sydney, Toronto, Dubai</span>
                </li>
                <li className="flex items-center gap-2">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <span>Partner Network: 200+ universities across 30 countries</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[300px] rounded-xl overflow-hidden">
              <Image src="/placeholder.svg?height=600&width=800" alt="Global map" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            { number: "10,000+", label: "Students Supported" },
            { number: "95%", label: "Visa Success Rate" },
            { number: "75+", label: "Countries Represented" },
            { number: "200+", label: "University Partners" },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-xl p-6">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-muted-foreground mb-8">
          Join thousands of students who have transformed their lives through international education with Elevate's
          support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services">
            <Button variant="glow" size="lg" className="gap-2">
              <span>Explore Our Services</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline" size="lg">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
