import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function VisaSupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Navigate Your Visa Journey with Confidence</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          At Elevate, we transform the complex visa application process into a smooth, stress-free experience. Let us
          guide you towards your international education dreams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Expertise You Can Trust</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Visa regulations are complex and ever-changing. Our team of experienced visa specialists stays
                up-to-date with the latest requirements for every major study destination. With Elevate, you're not just
                getting assistance; you're gaining a partner who ensures your application meets and exceeds all
                necessary criteria.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Personalized Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Every student's situation is unique, and so is our approach. We provide tailored guidance based on your
                specific circumstances, chosen study destination, and program. From the initial assessment to the final
                submission, we're with you every step of the way, ensuring no detail is overlooked.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Visa Support Process</h2>

        <div className="space-y-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>1. Initial Consultation and Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We begin with a thorough review of your academic background, chosen program, and destination country.
                Our experts will assess your eligibility and outline the specific visa requirements you'll need to meet.
                This personalized roadmap sets the foundation for a successful application.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>2. Document Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Gathering the right documents can be overwhelming. We provide a comprehensive checklist and guide you
                through collecting each required item. From transcripts to financial statements, we ensure every
                document meets the exact specifications of your visa application.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>3. Application Form Mastery</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Visa application forms can be tricky, with seemingly simple questions carrying significant weight. Our
                team assists you in filling out every section accurately, explaining the nuances and ensuring your
                responses align perfectly with your supporting documents.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>4. Interview Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Many visa applications require an interview. We conduct thorough mock interviews, preparing you for
                potential questions and helping you articulate your study plans confidently. With our guidance, you'll
                approach your visa interview with poise and assurance.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>5. Submission and Follow-up</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We don't just help you prepare; we're with you until the end. Our team assists with the submission
                process, ensures all documents are properly filed, and helps you track your application status. If
                additional information is requested, we're here to help you respond promptly and appropriately.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Student Visa?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let Elevate guide you towards your international education journey.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get Started with Visa Support</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

