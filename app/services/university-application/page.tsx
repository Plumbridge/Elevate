import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function UniversityApplicationPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Elevate Your University Application</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Embark on your journey to academic excellence with Elevate's comprehensive university application support.
          We're here to transform your aspirations into acceptances.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Your Dream, Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At Elevate, we understand that your university application is more than just paperwork—it's the first
                step towards your future. Our expert team is dedicated to showcasing your unique potential to top
                institutions worldwide. We don't just assist with applications; we elevate your entire profile to stand
                out in a competitive landscape.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Tailored Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Every student is unique, and so is our approach. We craft a personalized strategy that aligns with your
                academic goals, extracurricular achievements, and career aspirations. From selecting the perfect
                universities to polishing your personal statement, we ensure every aspect of your application reflects
                your best self.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Our Comprehensive Support Journey</h2>

        <div className="space-y-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>1. Discovery and Strategy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We begin with an in-depth consultation to understand your academic background, passions, and
                aspirations. Our experts then curate a list of universities that not only match your profile but also
                challenge you to reach higher. We don't just find good fits; we find the best opportunities for your
                growth.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>2. Application Mastery</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Crafting the perfect application is an art, and we're here to help you master it. Our team guides you
                through each step, from decoding complex application requirements to strategically highlighting your
                achievements. We transform your experiences into compelling narratives that captivate admissions
                officers.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>3. Essay Excellence</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Your personal statement and essays are your chance to shine. Our experienced writers and editors work
                closely with you to develop essays that are not just well-written, but truly reflect your voice and
                passion. We help you tell your unique story in a way that resonates with admissions committees.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>4. Interview Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                For programs requiring interviews, we provide comprehensive preparation. Through mock interviews and
                personalized feedback, we help you articulate your thoughts clearly, handle tough questions with
                confidence, and leave a lasting impression. With Elevate, you'll walk into every interview feeling
                prepared and confident.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>5. Ongoing Support and Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our commitment doesn't end with submission. We're with you every step of the way, from tracking
                application statuses to advising on acceptance decisions. As offers come in, we help you evaluate your
                options to ensure you make the best choice for your future.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Application?</h2>
          <p className="text-xl text-muted-foreground mb-8">Take the first step towards your dream university today.</p>
          <Button asChild size="lg">
            <Link href="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

