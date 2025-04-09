import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Our <span className="text-gradient">Packages</span>
        </h1>
        <p className="text-muted-foreground mb-12">
          Choose the package that best fits your needs and budget. All packages include our core services, with
          additional features in higher tiers.
        </p>
      </div>

      {/* Freemium Banner */}
      <div className="bg-card rounded-2xl p-8 shadow-lg max-w-6xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Freemium</h2>
            <p className="text-muted-foreground mb-4">Try our AI-powered guidance before you commit</p>
            <ul className="list-disc list-inside text-left mb-6">
              <li>Input your background and study preferences</li>
              <li>Receive general information and website links</li>
              <li>Get a preliminary assessment of your application strength</li>
              <li>Personal statement evaluation preview</li>
            </ul>
          </div>
          <div className="mt-6 md:mt-0">
            <Button variant="glow" size="lg">
              Try For Free
            </Button>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {/* Pure Play Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Pure Play</h2>
          <p className="text-muted-foreground mb-4">Direct and once-off specialized services</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>Visa application assistance</li>
            <li>University application support</li>
            <li>Personal statement writing</li>
            <li>Interview preparation</li>
            <li>Resume building</li>
          </ul>
          <div className="flex flex-col mt-auto">
            <p className="text-3xl font-bold mb-2">$500</p>
            <p className="text-sm text-muted-foreground mb-6">One-time service</p>
            <Button variant="glow" size="lg" className="w-full">
              Choose Pure Play
            </Button>
          </div>
        </div>

        {/* Basic Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
          <p className="text-muted-foreground mb-4">Self-paced guidance with limited expert support</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>Limited access to our AI system</li>
            <li>University and visa application guidelines</li>
            <li>Document templates and outlines</li>
            <li>2-3 expert consultation sessions</li>
            <li>Personalized application roadmap</li>
            <li>Access to alumni career network</li>
          </ul>
          <div className="flex flex-col mt-auto">
            <p className="text-3xl font-bold mb-2">$1,000</p>
            <p className="text-sm text-muted-foreground mb-6">1 month duration</p>
            <Button variant="glow" size="lg" className="w-full">
              Choose Basic
            </Button>
          </div>
        </div>

        {/* Intermediate Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Intermediate</h2>
          <p className="text-muted-foreground mb-4">Hybrid approach with weekly human mentorship</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>Full access to automated application system</li>
            <li>University shortlisting based on your profile</li>
            <li>Application materials assistance</li>
            <li>Essay editing and resume building</li>
            <li>Mock interviews for university and visa</li>
            <li>Weekly one-on-one mentorship</li>
            <li>Post-acceptance guidance</li>
            <li>Access to alumni career benefits</li>
          </ul>
          <div className="flex flex-col mt-auto">
            <p className="text-3xl font-bold mb-2">$3,000</p>
            <p className="text-sm text-muted-foreground mb-6">3 months duration</p>
            <Button variant="glow" size="lg" className="w-full">
              Choose Intermediate
            </Button>
          </div>
        </div>

        {/* Advanced Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
            Most Popular
          </div>
          <h2 className="text-2xl font-semibold mb-4">Advanced</h2>
          <p className="text-muted-foreground mb-4">Premium end-to-end application management</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>End-to-end application management</li>
            <li>Customized application strategy</li>
            <li>Unlimited mentorship sessions</li>
            <li>In-depth personal statement coaching</li>
            <li>Full document preparation support</li>
            <li>Extracurricular advising</li>
            <li>Scholarship search and application</li>
            <li>Pre-departure and cultural support</li>
            <li>Premium access to alumni career benefits</li>
          </ul>
          <div className="flex flex-col mt-auto">
            <p className="text-3xl font-bold mb-2">$5,000</p>
            <p className="text-sm text-muted-foreground mb-6">6 months duration</p>
            <Button variant="glow" size="lg" className="w-full">
              Choose Advanced
            </Button>
          </div>
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
