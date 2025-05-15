"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { testimonials, categories, countries, type Testimonial } from "@/data/testimonials"
import { ChevronRight, Search, Star, Play, Quote, MapPin, Calendar, GraduationCap, X } from "lucide-react"

export default function TestimonialsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedCountry, setSelectedCountry] = useState("All Countries")
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>(testimonials)
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  // Filter testimonials based on category, country, and search query
  useEffect(() => {
    let filtered = [...testimonials]

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((testimonial) => testimonial.category === activeCategory)
    }

    // Filter by country
    if (selectedCountry !== "All Countries") {
      filtered = filtered.filter((testimonial) => testimonial.country === selectedCountry)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (testimonial) =>
          testimonial.name.toLowerCase().includes(query) ||
          testimonial.program.toLowerCase().includes(query) ||
          testimonial.university.toLowerCase().includes(query) ||
          testimonial.content.toLowerCase().includes(query),
      )
    }

    setFilteredTestimonials(filtered)
  }, [activeCategory, selectedCountry, searchQuery])

  const openVideoModal = (testimonial: Testimonial) => {
    setSelectedTestimonial(testimonial)
    setIsVideoModalOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoModalOpen(false)
    setSelectedTestimonial(null)
  }

  // Featured testimonials for the hero section
  const featuredTestimonials = testimonials.filter((t) => t.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Student <span className="text-gradient">Success Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Hear from students around the world who transformed their educational journeys with Elevate's support.
            </p>
          </div>

          {/* Featured Testimonials Carousel */}
          <div className="relative overflow-hidden rounded-xl glass p-1 border border-primary/10 shadow-lg">
            <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4">
              {featuredTestimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="min-w-full snap-center px-4 py-8 md:px-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <div className="flex items-center mb-4">
                        <Quote className="h-10 w-10 text-primary/50 mr-2" />
                        <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
                      </div>
                      <p className="text-lg mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex flex-col gap-2 mb-6">
                        <div className="flex items-center">
                          <GraduationCap className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span>
                            {testimonial.program} at {testimonial.university}
                          </span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span>{testimonial.country}</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-2 text-muted-foreground" />
                          <span>{testimonial.year}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mb-6">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}`}
                          />
                        ))}
                      </div>
                      <Badge className="mb-4" variant="outline">
                        {categories.find((c) => c.id === testimonial.category)?.name}
                      </Badge>
                      {testimonial.videoUrl && (
                        <Button variant="outline" className="mt-4 gap-2" onClick={() => openVideoModal(testimonial)}>
                          <Play className="h-4 w-4" />
                          Watch Video Testimonial
                        </Button>
                      )}
                    </div>
                    <div className="order-1 md:order-2 flex justify-center">
                      <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
                        <Image
                          src={testimonial.avatar || `/placeholder.svg?height=256&width=256`}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
              {featuredTestimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === 0 ? "bg-primary" : "bg-primary/30"}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Browse All Testimonials</h2>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search testimonials..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex justify-end">
                <Badge
                  variant={filteredTestimonials.length > 0 ? "default" : "destructive"}
                  className="h-10 px-4 flex items-center"
                >
                  {filteredTestimonials.length} {filteredTestimonials.length === 1 ? "Result" : "Results"}
                </Badge>
              </div>
            </div>

            {/* Category Tabs */}
            <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="w-full justify-start overflow-x-auto flex-nowrap mb-8">
                {categories.map((category) => (
                  <TabsTrigger key={category.id} value={category.id} className="whitespace-nowrap">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={activeCategory} className="mt-0">
                {filteredTestimonials.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                      {filteredTestimonials.map((testimonial) => (
                        <motion.div
                          key={testimonial.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Card className="h-full hover:shadow-md transition-shadow overflow-hidden">
                            <CardContent className="p-0">
                              <div className="relative h-48 bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center">
                                <div className="absolute top-4 right-4">
                                  <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                                    {testimonial.country}
                                  </Badge>
                                </div>
                                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-background">
                                  <Image
                                    src={testimonial.avatar || `/placeholder.svg?height=96&width=96`}
                                    alt={testimonial.name}
                                    width={96}
                                    height={96}
                                    className="object-cover"
                                  />
                                </div>
                                {testimonial.videoUrl && (
                                  <Button
                                    variant="outline"
                                    size="icon"
                                    className="absolute bottom-4 right-4 rounded-full bg-background/80 backdrop-blur-sm"
                                    onClick={() => openVideoModal(testimonial)}
                                  >
                                    <Play className="h-4 w-4" />
                                  </Button>
                                )}
                              </div>
                              <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                                  <div className="flex">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                      <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < testimonial.rating ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}`}
                                      />
                                    ))}
                                  </div>
                                </div>
                                <p className="text-sm text-muted-foreground mb-4">
                                  {testimonial.program} at {testimonial.university}
                                </p>
                                <p className="line-clamp-4 mb-4 text-sm">{testimonial.content}</p>
                                <div className="flex justify-between items-center">
                                  <Badge variant="outline">
                                    {categories.find((c) => c.id === testimonial.category)?.name}
                                  </Badge>
                                  <span className="text-xs text-muted-foreground">{testimonial.year}</span>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No testimonials found matching your criteria.</p>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setActiveCategory("all")
                        setSelectedCountry("All Countries")
                        setSearchQuery("")
                      }}
                    >
                      Reset Filters
                    </Button>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of students who have transformed their educational journeys with Elevate's comprehensive
              support services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button variant="glow" size="lg" className="gap-2">
                  <span>Schedule a Consultation</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" size="lg">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && selectedTestimonial && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-background rounded-lg overflow-hidden">
            <div className="p-4 flex justify-between items-center border-b">
              <h3 className="font-semibold">{selectedTestimonial.name}'s Video Testimonial</h3>
              <Button variant="ghost" size="icon" onClick={closeVideoModal}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="aspect-video">
              <iframe
                src={selectedTestimonial.videoUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4 border-t">
              <p className="text-sm text-muted-foreground">
                {selectedTestimonial.program} at {selectedTestimonial.university}, {selectedTestimonial.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
