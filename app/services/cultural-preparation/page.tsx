import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CulturalPreparationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Embrace Your New Cultural Adventure</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          At Elevate, we believe that cultural understanding is key to a successful and enriching study abroad
          experience. Our cultural preparation services ensure you're ready to thrive in your new environment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Beyond Language: Cultural Fluency</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Language is just the beginning. Our comprehensive cultural preparation goes deeper, helping you
                understand social norms, etiquette, and unwritten rules of your host country. We equip you with the
                cultural intelligence to navigate your new environment with confidence.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Personalized Cultural Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Every culture is unique, and so is every student's background. Our team provides tailored cultural
                insights, considering both your home culture and your destination, to help you bridge cultural gaps
                effectively and avoid common pitfalls.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Our Cultural Preparation Journey</h2>

        <div className="space-y-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>1. Cultural Assessment and Goal Setting</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We begin by understanding your current cultural knowledge and setting clear goals for your cultural
                adaptation. This personalized approach ensures that our preparation aligns with your specific needs and
                aspirations.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>2. Immersive Cultural Workshops</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Participate in engaging, interactive workshops that bring your host country's culture to life. From
                communication styles to social etiquette, these sessions provide practical knowledge you can apply from
                day one in your new environment.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>3. Language Support and Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                While we're not a language school, we provide resources and guidance to support your language learning
                journey. We'll help you find the best language learning tools and connect you with language exchange
                opportunities to practice before you depart.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>4. Navigating Academic Culture</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Understanding the academic culture of your host country is crucial for success. We'll guide you through
                differences in teaching styles, classroom expectations, and academic integrity standards to ensure
                you're prepared for your new learning environment.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>5. Practical Life Skills and Safety</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                From using public transportation to understanding local healthcare systems, we provide practical advice
                on daily life in your host country. We also cover important safety information and strategies for
                maintaining your well-being while abroad.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Dive into a New Culture?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let Elevate prepare you for an enriching cultural experience during your study abroad journey.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Cultural Preparation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

