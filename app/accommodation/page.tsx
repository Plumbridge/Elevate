import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function AccommodationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Student Accommodation</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Finding the right place to live is crucial for your study abroad experience. We're here to help you find
        accommodation that suits your needs and budget.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>On-Campus Housing</CardTitle>
            <CardDescription>Live in university-managed accommodation</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Convenient location on or near campus</li>
              <li>Often more affordable than private rentals</li>
              <li>Easier to meet other students</li>
              <li>Usually includes utilities and internet</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/accommodation/on-campus">Explore On-Campus Options</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Private Accommodation</CardTitle>
            <CardDescription>Rent from private landlords or agencies</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>More independence and privacy</li>
              <li>Wide range of options to choose from</li>
              <li>Possibility to share with other students</li>
              <li>May require more paperwork and setup</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/accommodation/private">Find Private Accommodation</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

