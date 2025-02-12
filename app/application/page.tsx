import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function ApplicationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">University Application Process</h1>
      <p className="text-xl text-muted-foreground mb-12">
        We're here to guide you through every step of your university application journey. Whether you're applying for
        undergraduate or postgraduate studies, we've got you covered.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Undergraduate Applications</CardTitle>
            <CardDescription>For students applying to bachelor's degree programs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Guidance on choosing the right universities</li>
              <li>Support with personal statements</li>
              <li>Document verification and submission</li>
              <li>Application tracking and updates</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/application/undergraduate">Start Undergraduate Application</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Postgraduate Applications</CardTitle>
            <CardDescription>For students applying to master's or PhD programs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Program selection assistance</li>
              <li>Research proposal support</li>
              <li>Scholarship application guidance</li>
              <li>Interview preparation</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/application/postgraduate">Start Postgraduate Application</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

