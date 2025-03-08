import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-gradient">Packages</span>
        </h1>
        <p className="text-muted-foreground mb-12">
          Choose the package that best fits your needs and budget. All packages include our core services, with additional features in higher tiers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Essential Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Essential</h2>
          <p className="text-muted-foreground mb-4">Core services for your study abroad journey</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>University application support (up to 3 universities)</li>
            <li>Basic visa application guidance</li>
            <li>Pre-departure orientation</li>
          </ul>
          <p className="text-3xl font-bold mb-6">$1,500</p>
          <Button variant="glow" size="lg" className="w-full">Choose Essential</Button>
        </div>

        {/* Premium Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Premium</h2>
          <p className="text-muted-foreground mb-4">Enhanced support for a smoother experience</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>University application support (up to 5 universities)</li>
            <li>Comprehensive visa application assistance</li>
            <li>Accommodation search support</li>
            <li>Financial planning advice</li>
            <li>Cultural preparation workshops</li>
          </ul>
          <p className="text-3xl font-bold mb-6">$3,000</p>
          <Button variant="glow" size="lg" className="w-full">Choose Premium</Button>
        </div>

        {/* VIP Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">VIP</h2>
          <p className="text-muted-foreground mb-4">Full-service support from application to career</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>University application support (unlimited universities)</li>
            <li>Priority visa application assistance</li>
            <li>Guaranteed accommodation placement</li>
            <li>Personalized financial planning</li>
            <li>Intensive cultural and language preparation</li>
            <li>1-year career support with CareerLaunch after graduation</li>
          </ul>
          <p className="text-3xl font-bold mb-6">$5,000</p>
          <Button variant="glow" size="lg" className="w-full">Choose VIP</Button>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-muted-foreground">
          All packages can be customized to fit your specific needs. Contact us for a personalized quote.
        </p>
      </div>
    </div>
  )
}
