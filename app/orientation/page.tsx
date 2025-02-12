import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function OrientationPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Pre-Departure Orientation</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Prepare for your journey abroad with our comprehensive pre-departure orientation resources and checklists.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Cultural Preparation</CardTitle>
            <CardDescription>Understand your host country's culture</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Learn about cultural norms, customs, and etiquette to help you adjust to your new environment.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/orientation/cultural-prep">Cultural Guide</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Packing Checklist</CardTitle>
            <CardDescription>What to bring and what to leave</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Get a comprehensive list of essentials to pack for your study abroad journey.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/orientation/packing-list">View Packing List</Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Travel Arrangements</CardTitle>
            <CardDescription>Plan your journey</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Tips on booking flights, arranging airport pickup, and planning your arrival.</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="/orientation/travel-guide">Travel Guide</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

