import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Terms of <span className="text-gradient">Service</span>
        </h1>
        <p className="text-muted-foreground">
          This page is under construction. Our terms of service will be available soon.
        </p>
        <div className="mt-8">
          <Button variant="glow" size="lg" className="gap-2">
            <span>Return Home</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

