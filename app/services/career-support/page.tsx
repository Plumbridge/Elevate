import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CareerSupportPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Launch Your Global Career with CareerLaunch International
        </h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          Your international education is just the beginning. Elevate has partnered with CareerLaunch International to
          provide comprehensive career support services designed to help you leverage your global experience and launch
          a successful international career.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Global Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Access a vast network of global employers and job opportunities. Whether you're looking to work in your
                host country or return home, CareerLaunch International connects you with the right opportunities to
                kickstart your international career.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Expert Career Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Benefit from personalized advice from career experts who understand the global job market. Navigate your
                career path with confidence, backed by insights tailored to your unique skills, experiences, and
                aspirations.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Discover Our Career Support Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Career Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Develop a strategic career plan that leverages your international education and aligns with the global
                job market.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Job Search Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Access exclusive job listings, get introductions to employers, and receive guidance throughout your job
                search process.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Interview Preparation</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Master the art of interviewing in different cultural contexts with mock interviews and feedback
                sessions.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Launch Your Global Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Visit CareerLaunch International's website for a full range of career support services and to start your
            journey towards international career success.
          </p>
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="https://www.careerlaunchinternational.com" target="_blank" rel="noopener noreferrer">
              Explore CareerLaunch International
            </Link>
          </Button>
        </div>

        <Card className="bg-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="text-2xl">Why Choose CareerLaunch International?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Specialized in international career development</li>
              <li>Extensive network of global employers</li>
              <li>Tailored support for students and graduates with international experience</li>
              <li>Comprehensive resources for building a global career</li>
              <li>Ongoing support as you navigate your international career path</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

