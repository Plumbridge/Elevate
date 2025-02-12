import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FinancialPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Financial Planning & Support</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Managing your finances is a crucial part of studying abroad. We offer tools and guidance to help you plan and
        manage your expenses effectively.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Tuition Fee Calculator</CardTitle>
            <CardDescription>Estimate your tuition costs</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Use our calculator to get an accurate estimate of your tuition fees based on your chosen program and
              university.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/financial/tuition-calculator">Calculate Tuition</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Living Costs Estimator</CardTitle>
            <CardDescription>Plan your monthly budget</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Get a breakdown of estimated living costs including accommodation, food, transport, and other essentials.
            </p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/financial/living-costs">Estimate Living Costs</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Scholarship Finder</CardTitle>
            <CardDescription>Discover funding opportunities</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Search our database of scholarships and grants available for international students.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/financial/scholarships">Find Scholarships</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

