import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function FinancialPlanningPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Master Your Finances for <span className="text-gradient">Study Abroad Success</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          At Elevate, we believe that financial concerns shouldn't hold you back from your international education dreams. Our expert financial planning services ensure you're prepared for every aspect of studying abroad.
        </p>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Comprehensive Financial Guidance</h2>
          <p className="mb-6">
            From tuition fees to daily living expenses, studying abroad involves various financial considerations. Our team provides in-depth analysis and personalized advice to help you understand and manage all aspects of your financial journey.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Maximizing Your Resources</h2>
          <p className="mb-6">
            We're committed to helping you make the most of your financial resources. Our experts will guide you through scholarship opportunities, part-time work regulations, and smart budgeting strategies to ensure your funds go further.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Financial Planning Process</h2>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-4">
              <strong>Comprehensive Financial Assessment:</strong> We begin by thoroughly reviewing your current financial situation and understanding your study abroad goals. This allows us to create a tailored financial plan that aligns with your specific needs and circumstances.
            </li>
            <li className="mb-4">
              <strong>Cost of Study Analysis:</strong> Our team provides a detailed breakdown of all potential costs associated with your chosen program and destination. This includes tuition fees, living expenses, health insurance, travel costs, and any hidden expenses you might not have considered.
            </li>
            <li className="mb-4">
              <strong>Funding Opportunities Exploration:</strong> We conduct extensive research to identify scholarships, grants, and other funding opportunities you may be eligible for. Our experts will guide you through the application process, increasing your chances of securing financial aid.
            </li>
            <li className="mb-4">
              <strong>Budgeting and Money Management:</strong> We'll help you create a realistic budget for your time abroad, taking into account local cost of living and your personal lifestyle. Our team also provides advice on international banking, currency exchange, and money-saving tips specific to your destination.
            </li>
            <li className="mb-4">
              <strong>Long-term Financial Planning:</strong> Our support extends beyond your immediate study period. We'll help you consider the long-term financial implications of studying abroad, including potential return on investment and strategies for managing any student loans.
            </li>
          </ol>
        </div>
        <div className="mt-8">
          <Button variant="glow" size="lg" className="gap-2">
            <span>Start Your Financial Planning</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
