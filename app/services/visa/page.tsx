import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function VisaSupportPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Navigate Your <span className="text-gradient">Visa Journey</span> with Confidence
        </h1>
        <p className="text-muted-foreground mb-8">
          At Elevate, we transform the complex visa application process into a smooth, stress-free experience. Let us guide you towards your international education dreams.
        </p>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Expertise You Can Trust</h2>
          <p className="mb-6">
            Visa regulations are complex and ever-changing. Our team of experienced visa specialists stays up-to-date with the latest requirements for every major study destination. With Elevate, you're not just getting assistance; you're gaining a partner who ensures your application meets and exceeds all necessary criteria.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Personalized Support</h2>
          <p className="mb-6">
            Every student's situation is unique, and so is our approach. We provide tailored guidance based on your specific circumstances, chosen study destination, and program. From the initial assessment to the final submission, we're with you every step of the way, ensuring no detail is overlooked.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Comprehensive Visa Support Process</h2>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-4">
              <strong>Initial Consultation and Assessment:</strong> We begin with a thorough review of your academic background, chosen program, and destination country. Our experts will assess your eligibility and outline the specific visa requirements you'll need to meet. This personalized roadmap sets the foundation for a successful application.
            </li>
            <li className="mb-4">
              <strong>Document Preparation:</strong> Gathering the right documents can be overwhelming. We provide a comprehensive checklist and guide you through collecting each required item. From transcripts to financial statements, we ensure every document meets the exact specifications of your visa application.
            </li>
            <li className="mb-4">
              <strong>Application Form Mastery:</strong> Visa application forms can be tricky, with seemingly simple questions carrying significant weight. Our team assists you in filling out every section accurately, explaining the nuances and ensuring your responses align perfectly with your supporting documents.
            </li>
            <li className="mb-4">
              <strong>Interview Preparation:</strong> Many visa applications require an interview. We conduct thorough mock interviews, preparing you for potential questions and helping you articulate your study plans confidently. With our guidance, you'll approach your visa interview with poise and assurance.
            </li>
            <li className="mb-4">
              <strong>Submission and Follow-up:</strong> We don't just help you prepare; we're with you until the end. Our team assists with the submission process, ensures all documents are properly filed, and helps you track your application status. If additional information is requested, we're here to help you respond promptly and appropriately.
            </li>
          </ol>
        </div>
        <div className="mt-8">
          <Button variant="glow" size="lg" className="gap-2">
            <span>Get Started with Visa Support</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
