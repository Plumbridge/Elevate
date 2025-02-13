import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export default function PackagesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Our Packages</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Choose the package that best fits your needs and budget. All packages include our core services, with
          additional features in higher tiers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="flex flex-col bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Essential</CardTitle>
              <CardDescription>Core services for your study abroad journey</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2">
                <li>University application support (up to 3 universities)</li>
                <li>Basic visa application guidance</li>
                <li>Pre-departure orientation</li>
              </ul>
              <p className="text-2xl font-bold mt-4">$1,500</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Essential</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Premium</CardTitle>
              <CardDescription>Enhanced support for a smoother experience</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2">
                <li>University application support (up to 5 universities)</li>
                <li>Comprehensive visa application assistance</li>
                <li>Accommodation search support</li>
                <li>Financial planning advice</li>
                <li>Cultural preparation workshops</li>
              </ul>
              <p className="text-2xl font-bold mt-4">$3,000</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose Premium</Button>
            </CardFooter>
          </Card>
          <Card className="flex flex-col bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>VIP</CardTitle>
              <CardDescription>Full-service support from application to career</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <ul className="list-disc list-inside space-y-2">
                <li>University application support (unlimited universities)</li>
                <li>Priority visa application assistance</li>
                <li>Guaranteed accommodation placement</li>
                <li>Personalized financial planning</li>
                <li>Intensive cultural and language preparation</li>
                <li>1-year career support with CareerLaunch after graduation</li>
              </ul>
              <p className="text-2xl font-bold mt-4">$5,000</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Choose VIP</Button>
            </CardFooter>
          </Card>
        </div>
        <p className="mt-12 text-center text-muted-foreground">
          All packages can be customized to fit your specific needs. Contact us for a personalized quote.
        </p>
      </div>
    </div>
  )
}

