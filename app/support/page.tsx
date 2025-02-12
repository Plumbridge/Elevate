import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Student Support Services</h1>
      <p className="text-xl text-muted-foreground mb-12">
        We're here to support you throughout your study abroad journey. Access a range of services designed to help you
        succeed academically and personally.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Academic Support</CardTitle>
            <CardDescription>Succeed in your studies</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Access tutoring services, study skills workshops, and academic advising to excel in your coursework.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/support/academic">Academic Resources</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Health & Wellness</CardTitle>
            <CardDescription>Take care of your wellbeing</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Find information on healthcare services, counseling, and mental health support available to international
              students.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/support/health">Health Services</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Social Integration</CardTitle>
            <CardDescription>Connect with peers</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Discover student clubs, cultural events, and networking opportunities to help you make friends and build
              connections.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/support/social">Social Activities</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

