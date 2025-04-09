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
        {/* Pure Play Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Pure Play</h2>
          <p className="text-muted-foreground mb-4">Direct and once-off specialized services</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>Visa application and documentation assistance</li>
            <li>University application assistance (single application)</li>
            <li>Personal statement writing</li>
            <li>Interview preparation</li>
            <li>Timeline assistance</li>
          </ul>
          <p className="text-3xl font-bold mb-6">$500</p>
          <Button variant="glow" size="lg" className="w-full">Choose Pure Play</Button>
        </div>
        
        {/* Basic Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
          <p className="text-muted-foreground mb-4">Self-paced, automated approach with structured guidance</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>Limited access to our AI System</li>
            <li>University application guidelines (up to 3 universities)</li>
            <li>Visa application guidelines and timelines</li>
            <li>Access to document templates and outlines</li>
            <li>Limited (2-3) expert consultation sessions</li>
            <li>Access to alumni career network</li>
          </ul>
          <p className="text-3xl font-bold mb-6">$1,000</p>
          <Button variant="glow" size="lg" className="w-full">Choose Basic</Button>
        </div>
        
        {/* Intermediate Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Intermediate</h2>
          <p className="text-muted-foreground mb-4">Hybrid approach with full automation and weekly mentorship</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>Full access to our automated application system</li>
            <li>University shortlisting (up to 5 universities)</li>
            <li>Application materials assistance (essays, resume)</li>
            <li>Mock interviews for university and visa</li>
            <li>Application deadline tracking and reminders</li>
            <li>Weekly one-on-one mentorship</li>
            <li>General post-acceptance guidance</li>
          </ul>
          <p className="text-3xl font-bold mb-6">$3,000</p>
          <Button variant="glow" size="lg" className="w-full">Choose Intermediate</Button>
        </div>
      </div>
      
      {/* Second row for Advanced and Free Assessment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-8">
        {/* Advanced Package */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Advanced</h2>
          <p className="text-muted-foreground mb-4">Premium end-to-end expert assistance at every stage</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>End-to-end application management</li>
            <li>University shortlisting and customized strategy</li>
            <li>Unlimited mentorship sessions</li>
            <li>In-depth personal statement and essay coaching</li>
            <li>Full document preparation support</li>
            <li>Extra-curricular advising</li>
            <li>Scholarship search and application support</li>
            <li>Comprehensive pre-departure support</li>
          </ul>
          <p className="text-3xl font-bold mb-6">$5,000</p>
          <Button variant="glow" size="lg" className="w-full">Choose Advanced</Button>
        </div>
        
        {/* Free Assessment */}
        <div className="bg-card rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Free Assessment</h2>
          <p className="text-muted-foreground mb-4">Get started with our AI-powered study abroad guidance</p>
          <ul className="list-disc list-inside text-left mb-6">
            <li>Input your background, goals, and preferences</li>
            <li>Receive general information and website links</li>
            <li>Get a personalized statement evaluation</li>
            <li>See your % chance of admission</li>
            <li>Explore study abroad options with no commitment</li>
          </ul>
          <p className="text-3xl font-bold mb-6">FREE</p>
          <Button variant="glow" size="lg" className="w-full">Start Free Assessment</Button>
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
