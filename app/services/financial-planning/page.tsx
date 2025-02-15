import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FinancialPlanningPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Master Your Finances for Study Abroad Success</h1>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
          At Elevate, we believe that financial concerns shouldn't hold you back from your international education
          dreams. Our expert financial planning services ensure you're prepared for every aspect of studying abroad.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Comprehensive Financial Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                From tuition fees to daily living expenses, studying abroad involves various financial considerations.
                Our team provides in-depth analysis and personalized advice to help you understand and manage all
                aspects of your financial journey.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Maximizing Your Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We're committed to helping you make the most of your financial resources. Our experts will guide you
                through scholarship opportunities, part-time work regulations, and smart budgeting strategies to ensure
                your funds go further.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="text-3xl font-bold mb-8 text-center">Our Financial Planning Process</h2>

        <div className="space-y-8 mb-12">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>1. Comprehensive Financial Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We begin by thoroughly reviewing your current financial situation and understanding your study abroad
                goals. This allows us to create a tailored financial plan that aligns with your specific needs and
                circumstances.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>2. Cost of Study Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our team provides a detailed breakdown of all potential costs associated with your chosen program and
                destination. This includes tuition fees, living expenses, health insurance, travel costs, and any hidden
                expenses you might not have considered.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>3. Funding Opportunities Exploration</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We conduct extensive research to identify scholarships, grants, and other funding opportunities you may
                be eligible for. Our experts will guide you through the application process, increasing your chances of
                securing financial aid.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>4. Budgeting and Money Management</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                We'll help you create a realistic budget for your time abroad, taking into account local cost of living
                and your personal lifestyle. Our team also provides advice on international banking, currency exchange,
                and money-saving tips specific to your destination.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>5. Long-term Financial Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Our support extends beyond your immediate study period. We'll help you consider the long-term financial
                implications of studying abroad, including potential return on investment and strategies for managing
                any student loans.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Take Control of Your Finances?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let Elevate help you create a solid financial foundation for your international education journey.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Start Your Financial Planning</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

