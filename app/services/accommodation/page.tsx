import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function AccommodationPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Find Your Perfect <span className="text-gradient">Home Away From Home</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          At Elevate, we understand that the right accommodation is crucial for your study abroad experience. Let us guide you to a living space that feels like home and supports your academic journey.
        </p>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Tailored Housing Solutions</h2>
          <p className="mb-6">
            Every student's needs are unique. Whether you prefer the vibrant atmosphere of on-campus housing or the independence of a private apartment, our team works tirelessly to find accommodations that match your preferences, budget, and lifestyle.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Local Expertise, Global Reach</h2>
          <p className="mb-6">
            Our extensive network of housing partners spans across major study destinations worldwide. We combine this global reach with in-depth local knowledge to ensure you have access to the best housing options in your chosen city.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Comprehensive Accommodation Support</h2>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-4">
              <strong>Personalized Consultation:</strong> We start by understanding your specific needs, preferences, and budget. Our housing experts will discuss various options, from university dormitories to shared apartments or homestays, helping you make an informed decision.
            </li>
            <li className="mb-4">
              <strong>Curated Housing Options:</strong> Based on your preferences, we present a carefully selected list of accommodation options. Each suggestion comes with detailed information about amenities, proximity to your institution, transportation links, and neighborhood highlights.
            </li>
            <li className="mb-4">
              <strong>Virtual Tours and Real-Time Assistance:</strong> Can't visit in person? No problem. We arrange virtual tours of potential accommodations, allowing you to explore your future home from afar. Our team is available to answer questions and provide real-time assistance during these virtual visits.
            </li>
            <li className="mb-4">
              <strong>Lease Negotiation and Paperwork Support:</strong> Navigating rental agreements in a foreign country can be daunting. Our experts review lease terms, explain your rights and responsibilities, and can even negotiate on your behalf to ensure fair terms and conditions.
            </li>
            <li className="mb-4">
              <strong>Pre-Arrival and Move-In Support:</strong> We coordinate with property managers to ensure a smooth move-in process. From arranging key collection to helping you understand local utilities and services, we ensure you're fully prepared for your arrival.
            </li>
          </ol>
        </div>
        <div className="mt-8">
          <Button variant="glow" size="lg" className="gap-2">
            <span>Start Your Accommodation Search</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
