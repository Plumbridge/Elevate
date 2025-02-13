import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">What We Do</h1>
        <p className="text-xl text-muted-foreground mb-12">
          Our comprehensive services cover every aspect of your international education journey, from application to
          career support.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              id: "application",
              title: "University Application Support",
              description: "We help you find and apply to the best universities for your goals",
              items: [
                "Personalized university selection based on your profile and aspirations",
                "Guidance on crafting compelling personal statements and essays",
                "Application review and submission assistance",
                "Interview preparation for selected programs",
              ],
            },
            {
              id: "visa",
              title: "Visa Application Assistance",
              description: "Navigate the complex visa process with our expert guidance",
              items: [
                "Comprehensive checklist of required documents",
                "Guidance on filling out visa application forms",
                "Preparation for visa interviews",
                "Updates on changing visa regulations and requirements",
              ],
            },
            {
              id: "accommodation",
              title: "Accommodation Services",
              description: "Find the perfect place to live during your studies",
              items: [
                "Curated list of on-campus and off-campus housing options",
                "Assistance with housing applications and contracts",
                "Guidance on local neighborhoods and transportation",
                "Support for dealing with landlords and resolving housing issues",
              ],
            },
            {
              id: "financial",
              title: "Financial Planning",
              description: "Manage your finances effectively while studying abroad",
              items: [
                "Scholarship and funding opportunity research",
                "Assistance with scholarship applications",
                "Budgeting advice for living expenses",
                "Guidance on international money transfers and banking",
              ],
            },
            {
              id: "cultural",
              title: "Cultural Preparation",
              description: "Get ready for life in a new country",
              items: [
                "Pre-departure orientation sessions",
                "Cultural awareness workshops",
                "Language learning resources and recommendations",
                "Tips for adapting to your new academic environment",
              ],
            },
            {
              id: "career",
              title: "Career Support",
              description: "Launch your international career with our sister company, CareerLaunch",
              items: [
                "Access to exclusive job and internship opportunities",
                "Resume and cover letter writing workshops",
                "Interview skills training",
                "Networking events with potential employers",
                "Guidance on work visas and international employment regulations",
              ],
            },
          ].map((service) => (
            <Card key={service.id} id={service.id} className="flex flex-col bg-card text-card-foreground">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc list-inside space-y-2">
                  {service.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

