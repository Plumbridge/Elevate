import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  ChevronRight,
  DollarSign,
  PiggyBank,
  TrendingUp,
  BarChart,
  CreditCard,
  Landmark,
  GraduationCap,
  Briefcase,
  CheckCircle,
  Calculator,
  Globe,
  Calendar,
  ArrowRight,
} from "lucide-react"

export default function FinancialPlanningPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Split Design */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <Badge className="mb-4 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Financial Planning
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Master Your <span className="text-gradient">Finances</span> for Study Abroad Success
          </h1>
          <p className="text-muted-foreground mb-8">
            At Elevate, we believe that financial concerns shouldn't hold you back from your international education
            dreams. Our expert financial planning services ensure you're prepared for every aspect of studying abroad.
          </p>
          <Button size="lg" variant="glow" className="gap-2">
            <span>Start Your Financial Planning</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full z-0"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <DollarSign className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Tuition Planning</h3>
              <p className="text-sm text-muted-foreground">Strategic approaches to manage education costs</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <PiggyBank className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Savings Strategies</h3>
              <p className="text-sm text-muted-foreground">Maximize your resources before and during studies</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <TrendingUp className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Investment Planning</h3>
              <p className="text-sm text-muted-foreground">Long-term financial growth for education</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <BarChart className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Budget Management</h3>
              <p className="text-sm text-muted-foreground">Daily expense tracking and optimization</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Financial Expertise for International Students</h2>
          <p className="text-muted-foreground">
            Our specialized knowledge helps you navigate the complex financial landscape of studying abroad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">International Financial Expertise</h3>
            <p className="text-muted-foreground">
              Our advisors specialize in cross-border financial planning, understanding the unique challenges and
              opportunities of managing money across different countries and currencies.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Calculator className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Financial Strategies</h3>
            <p className="text-muted-foreground">
              We create customized financial plans based on your specific situation, goals, and destination country,
              ensuring that your financial strategy is as unique as your educational journey.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <div className="bg-purple-100 dark:bg-purple-900 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Landmark className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Scholarship & Funding Access</h3>
            <p className="text-muted-foreground">
              Our extensive database of scholarships, grants, and financial aid opportunities helps you discover and
              secure funding sources that many students overlook, potentially saving you thousands.
            </p>
          </div>
        </div>
      </div>

      {/* Financial Services Tabs */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Our Services
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Comprehensive Financial Support</h2>
          <p className="text-muted-foreground">
            From pre-departure planning to long-term financial strategies, we provide support at every stage
          </p>
        </div>

        <Tabs defaultValue="planning" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="planning">Financial Planning</TabsTrigger>
            <TabsTrigger value="funding">Funding & Scholarships</TabsTrigger>
            <TabsTrigger value="banking">International Banking</TabsTrigger>
            <TabsTrigger value="budgeting">Budgeting & Savings</TabsTrigger>
          </TabsList>

          <TabsContent
            value="planning"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Comprehensive Financial Assessment</h3>
                <p className="mb-6 text-muted-foreground">
                  Our financial planning begins with a thorough assessment of your current financial situation and study
                  abroad goals. We analyze your assets, income sources, existing savings, and potential financial
                  support from family to create a complete picture of your financial standing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Detailed Cost Analysis</span>
                      <p className="text-sm text-muted-foreground">
                        Country-specific breakdown of tuition, living expenses, and hidden costs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Financial Roadmapping</span>
                      <p className="text-sm text-muted-foreground">
                        Long-term planning from application to graduation and beyond
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Risk Assessment</span>
                      <p className="text-sm text-muted-foreground">
                        Identifying potential financial challenges and creating contingency plans
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">ROI Analysis</span>
                      <p className="text-sm text-muted-foreground">
                        Evaluating the long-term return on your educational investment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-300">
                  Sample Financial Planning Timeline
                </h4>
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600"></div>
                    <h5 className="font-medium">12-18 Months Before Departure</h5>
                    <p className="text-sm text-muted-foreground">
                      Initial assessment, goal setting, and long-term savings plan implementation
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600"></div>
                    <h5 className="font-medium">6-12 Months Before Departure</h5>
                    <p className="text-sm text-muted-foreground">
                      Scholarship applications, funding strategy refinement, and currency planning
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600"></div>
                    <h5 className="font-medium">3-6 Months Before Departure</h5>
                    <p className="text-sm text-muted-foreground">
                      International banking setup, insurance arrangements, and budget finalization
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600"></div>
                    <h5 className="font-medium">During Your Studies</h5>
                    <p className="text-sm text-muted-foreground">
                      Ongoing budget management, financial check-ins, and adjustment of strategies as needed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="funding"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Scholarship & Funding Opportunities</h3>
                <p className="mb-6 text-muted-foreground">
                  Our team conducts extensive research to identify scholarships, grants, and other funding opportunities
                  you may be eligible for. We help you navigate the complex application processes, increasing your
                  chances of securing financial support.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Personalized Scholarship Matching</span>
                      <p className="text-sm text-muted-foreground">
                        Custom-tailored scholarship recommendations based on your profile
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Application Support</span>
                      <p className="text-sm text-muted-foreground">
                        Guidance on crafting compelling scholarship essays and applications
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Alternative Funding Sources</span>
                      <p className="text-sm text-muted-foreground">
                        Exploration of education loans, work-study options, and assistantships
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Deadline Management</span>
                      <p className="text-sm text-muted-foreground">
                        Organized tracking of application timelines and requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-300">Funding Success Rates</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Merit Scholarships</span>
                      <span className="text-sm font-medium">68%</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[68%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Success rate for students working with our advisors
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Need-Based Grants</span>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[72%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Success rate for students working with our advisors
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Country-Specific Scholarships</span>
                      <span className="text-sm font-medium">54%</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[54%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Success rate for students working with our advisors
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Research Assistantships</span>
                      <span className="text-sm font-medium">41%</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[41%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Success rate for students working with our advisors
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="banking"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">International Banking Solutions</h3>
                <p className="mb-6 text-muted-foreground">
                  Managing your money across borders can be complex. We guide you through setting up international
                  banking arrangements, understanding currency exchange, and establishing credit in your host country.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Bank Account Selection</span>
                      <p className="text-sm text-muted-foreground">
                        Recommendations for student-friendly banks in your destination country
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Currency Exchange Strategies</span>
                      <p className="text-sm text-muted-foreground">
                        Timing and methods to optimize currency conversion rates
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">International Money Transfers</span>
                      <p className="text-sm text-muted-foreground">
                        Cost-effective ways to receive funds from home while studying abroad
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Credit Building</span>
                      <p className="text-sm text-muted-foreground">
                        Establishing and maintaining good credit in your host country
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-300">
                  International Banking Comparison
                </h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">Feature</th>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">Local Bank</th>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">International Bank</th>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">Digital Banking</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 text-sm">Account Fees</td>
                        <td className="py-2 text-sm">Varies</td>
                        <td className="py-2 text-sm">Higher</td>
                        <td className="py-2 text-sm">Lower</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">ATM Access</td>
                        <td className="py-2 text-sm">Excellent</td>
                        <td className="py-2 text-sm">Good</td>
                        <td className="py-2 text-sm">Limited</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Transfer Fees</td>
                        <td className="py-2 text-sm">Higher</td>
                        <td className="py-2 text-sm">Medium</td>
                        <td className="py-2 text-sm">Lower</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Exchange Rates</td>
                        <td className="py-2 text-sm">Average</td>
                        <td className="py-2 text-sm">Better</td>
                        <td className="py-2 text-sm">Best</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Setup Difficulty</td>
                        <td className="py-2 text-sm">Medium</td>
                        <td className="py-2 text-sm">Easier</td>
                        <td className="py-2 text-sm">Easiest</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Our advisors will help you select the best banking solution based on your specific needs and
                  destination country.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="budgeting"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Budgeting & Savings Strategies</h3>
                <p className="mb-6 text-muted-foreground">
                  We'll help you create a realistic budget for your time abroad, taking into account local cost of
                  living and your personal lifestyle. Our team also provides practical money-saving tips specific to
                  your destination.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Personalized Budget Creation</span>
                      <p className="text-sm text-muted-foreground">
                        Customized spending plans based on your lifestyle and destination
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Expense Tracking Tools</span>
                      <p className="text-sm text-muted-foreground">
                        Recommendations for apps and systems to monitor your spending
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Local Savings Opportunities</span>
                      <p className="text-sm text-muted-foreground">
                        Country-specific tips for reducing costs on housing, food, and transportation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Emergency Fund Planning</span>
                      <p className="text-sm text-muted-foreground">
                        Strategies for building and maintaining financial safety nets
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-300">
                  Sample Monthly Student Budget
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Housing</span>
                      <span className="text-sm font-medium">$800</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[40%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Food</span>
                      <span className="text-sm font-medium">$400</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[20%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Transportation</span>
                      <span className="text-sm font-medium">$150</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[7.5%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Books & Supplies</span>
                      <span className="text-sm font-medium">$100</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[5%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Entertainment</span>
                      <span className="text-sm font-medium">$200</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[10%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Health Insurance</span>
                      <span className="text-sm font-medium">$150</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[7.5%]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">Miscellaneous</span>
                      <span className="text-sm font-medium">$200</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[10%]"></div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="flex justify-between">
                      <span className="font-medium">Total Monthly Expenses</span>
                      <span className="font-medium">$2,000</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  This is a sample budget for a student in the United States. Actual expenses will vary by location and
                  lifestyle.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Cost Comparison Section */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Cost Insights
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Understanding Study Abroad Costs</h2>
          <p className="text-muted-foreground">
            Compare the financial requirements for popular study destinations to make informed decisions
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <span className="font-bold text-purple-600 dark:text-purple-300">US</span>
                </div>
                <h3 className="text-xl font-bold">United States</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tuition (Public)</span>
                    <span className="font-medium">$20,000-$35,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[80%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tuition (Private)</span>
                    <span className="font-medium">$35,000-$60,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[95%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Living Expenses</span>
                    <span className="font-medium">$15,000-$25,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[75%]"></div>
                  </div>
                </div>
                <div className="pt-3 border-t mt-3">
                  <div className="flex items-center gap-2">
                    <CreditCard className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Financial aid widely available</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <span className="font-bold text-purple-600 dark:text-purple-300">UK</span>
                </div>
                <h3 className="text-xl font-bold">United Kingdom</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tuition</span>
                    <span className="font-medium">£15,000-£25,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[70%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>London Living</span>
                    <span className="font-medium">£15,000-£20,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Other Cities</span>
                    <span className="font-medium">£10,000-£15,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[50%]"></div>
                  </div>
                </div>
                <div className="pt-3 border-t mt-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Shorter programs (3 years)</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <span className="font-bold text-purple-600 dark:text-purple-300">CA</span>
                </div>
                <h3 className="text-xl font-bold">Canada</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tuition</span>
                    <span className="font-medium">C$15,000-C$35,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Major Cities</span>
                    <span className="font-medium">C$12,000-C$18,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[55%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Smaller Cities</span>
                    <span className="font-medium">C$8,000-C$12,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[40%]"></div>
                  </div>
                </div>
                <div className="pt-3 border-t mt-3">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Strong work opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                  <span className="font-bold text-purple-600 dark:text-purple-300">AU</span>
                </div>
                <h3 className="text-xl font-bold">Australia</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Tuition</span>
                    <span className="font-medium">A$20,000-A$45,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[75%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Living Expenses</span>
                    <span className="font-medium">A$15,000-A$25,000</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[65%]"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Health Insurance</span>
                    <span className="font-medium">A$500-A$700</span>
                  </div>
                  <div className="h-2 bg-purple-100 rounded-full">
                    <div className="h-2 bg-purple-600 rounded-full w-[20%]"></div>
                  </div>
                </div>
                <div className="pt-3 border-t mt-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-purple-600" />
                    <span className="text-sm">Strong scholarship options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Success Stories
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Financial Planning Success Stories</h2>
          <p className="text-muted-foreground">
            Hear from students who achieved their study abroad goals with our financial guidance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-purple-100 dark:border-purple-900/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                <div>
                  <h4 className="font-bold">Raj P.</h4>
                  <p className="text-xs text-muted-foreground">MBA Student, Harvard Business School</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "Elevate's financial advisors helped me secure over $50,000 in scholarships and grants that I didn't
                even know I was eligible for. Their guidance on international banking also saved me thousands in
                unnecessary fees."
              </p>
              <div className="pt-4 border-t border-purple-100 dark:border-purple-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">$50,000+ in scholarships</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium">
                    <span>Read full story</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-purple-900/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                <div>
                  <h4 className="font-bold">Maria S.</h4>
                  <p className="text-xs text-muted-foreground">Undergraduate, University of Toronto</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "I was overwhelmed by the financial aspects of studying abroad until I worked with Elevate. Their
                step-by-step budgeting plan made everything manageable, and their advice on part-time work opportunities
                helped me maintain financial stability throughout my program."
              </p>
              <div className="pt-4 border-t border-purple-100 dark:border-purple-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <PiggyBank className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">Saved 30% on living expenses</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium">
                    <span>Read full story</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-purple-900/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                <div>
                  <h4 className="font-bold">Chen W.</h4>
                  <p className="text-xs text-muted-foreground">PhD Student, University of Melbourne</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "As a PhD student, I needed a long-term financial strategy. Elevate's advisors created a 5-year plan
                that accounted for research funding opportunities, teaching assistantships, and even conference travel
                budgets. Their comprehensive approach made all the difference."
              </p>
              <div className="pt-4 border-t border-purple-100 dark:border-purple-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium">Secured full program funding</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium">
                    <span>Read full story</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            FAQs
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Common Financial Questions</h2>
          <p className="text-muted-foreground">
            Answers to frequently asked questions about financing your international education
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How early should I start financial planning for studying abroad?</AccordionTrigger>
              <AccordionContent>
                We recommend starting your financial planning at least 12-18 months before your intended program start
                date. This timeline allows for thorough research of scholarship opportunities (many of which have early
                deadlines), building savings, establishing credit if needed, and creating a comprehensive financial
                strategy. For graduate programs or more expensive destinations, starting even earlier (18-24 months) can
                provide additional advantages.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>What financial documents will I need for student visa applications?</AccordionTrigger>
              <AccordionContent>
                Most countries require proof of sufficient funds to cover tuition and living expenses for at least one
                year of study. Typically, you'll need bank statements showing the required amount maintained for 3-6
                months, scholarship award letters, education loan approval documents, or sponsorship letters with
                supporting financial evidence. Our advisors provide country-specific guidance on exact requirements and
                how to properly prepare and present your financial documentation for visa success.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How can I find scholarships for international students?</AccordionTrigger>
              <AccordionContent>
                Scholarships for international students come from multiple sources: universities, government programs,
                private foundations, and corporations. Our financial advisors conduct personalized scholarship searches
                using our comprehensive database of over 5,000 funding opportunities. We match you with scholarships
                based on your academic profile, country of origin, destination country, field of study, and personal
                background. We also provide guidance on application strategies to maximize your chances of success.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Can I work while studying abroad to help cover expenses?</AccordionTrigger>
              <AccordionContent>
                Work permissions vary significantly by country. For example, in the US, F-1 visa holders can work
                on-campus and may qualify for CPT/OPT. UK Student visa holders can typically work up to 20 hours per
                week during term time. Canadian study permit holders may work up to 20 hours per week off-campus.
                Australian Student visa holders have similar allowances. Our advisors will explain the specific work
                rights for your destination country and help you incorporate potential work income into your financial
                plan realistically.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                What are the most common financial mistakes international students make?
              </AccordionTrigger>
              <AccordionContent>
                Common financial mistakes include underestimating total costs (especially hidden expenses like health
                insurance, travel, and visa renewals), poor currency exchange timing, using expensive international
                money transfer services, failing to establish local banking promptly, not budgeting for emergencies, and
                missing scholarship application deadlines. Our financial planning services help you avoid these pitfalls
                through comprehensive cost analysis, strategic timing of currency exchanges, and establishing proper
                banking and emergency funds.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Create Your Financial Plan?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Schedule a free consultation with our financial advisors to discuss your study abroad goals and learn how we
          can help you create a solid financial foundation for your international education.
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 gap-2">
          <span>Schedule Your Free Financial Consultation</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
