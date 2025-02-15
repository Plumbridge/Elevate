import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AccommodationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Find Your Perfect Home Away From Home</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          At Elevate, we understand that the right accommodation is crucial for your study abroad experience. Let us
          guide you to a living space that feels like home and supports your academic journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Tailored Housing Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Every student's needs are unique. Whether you prefer the vibrant atmosphere of on-campus housing or the
                independence of a private apartment, our team works tirelessly to find accommodations that match your
                preferences, budget, and lifestyle.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Local Expertise, Global Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our extensive network of housing partners spans across major study destinations worldwide. We combine
                this global reach with in-depth local knowledge to ensure you have access to the best housing options in
                your chosen city.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Accommodation Support</h2>

        <div className="space-y-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>1. Personalized Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We start by understanding your specific needs, preferences, and budget. Our housing experts will discuss
                various options, from university dormitories to shared apartments or homestays, helping you make an
                informed decision.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>2. Curated Housing Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Based on your preferences, we present a carefully selected list of accommodation options. Each
                suggestion comes with detailed information about amenities, proximity to your institution,
                transportation links, and neighborhood highlights.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>3. Virtual Tours and Real-Time Assistance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Can't visit in person? No problem. We arrange virtual tours of potential accommodations, allowing you to
                explore your future home from afar. Our team is available to answer questions and provide real-time
                assistance during these virtual visits.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>4. Lease Negotiation and Paperwork Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Navigating rental agreements in a foreign country can be daunting. Our experts review lease terms,
                explain your rights and responsibilities, and can even negotiate on your behalf to ensure fair terms and
                conditions.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>5. Pre-Arrival and Move-In Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We coordinate with property managers to ensure a smooth move-in process. From arranging key collection
                to helping you understand local utilities and services, we ensure you're fully prepared for your
                arrival.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your New Home?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let Elevate guide you to the perfect accommodation for your study abroad adventure.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Accommodation Search</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

