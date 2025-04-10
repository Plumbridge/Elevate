import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight, CheckCircle2, FileCheck, Globe, MessageSquare, Calendar } from "lucide-react"

export default function VisaSupportPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Background */}
      <div className="relative overflow-hidden rounded-xl mb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 opacity-90"></div>
        <div className="relative z-10 py-16 px-6 md:px-12 text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              Navigate Your <span className="text-yellow-300">Visa Journey</span> with Confidence
            </h1>
            <p className="text-lg md:text-xl mb-8 text-center">
              At Elevate, we transform the complex visa application process into a smooth, stress-free experience. Let
              us guide you towards your international education dreams.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 gap-2">
                <span>Get Started with Visa Support</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <div className="bg-purple-100 dark:bg-purple-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Globe className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Global Expertise</h3>
            <p className="text-muted-foreground">
              Our visa specialists stay up-to-date with the latest requirements for every major study destination,
              ensuring your application meets all necessary criteria.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <div className="bg-purple-100 dark:bg-purple-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FileCheck className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Personalized Support</h3>
            <p className="text-muted-foreground">
              We provide tailored guidance based on your specific circumstances, chosen study destination, and program,
              ensuring no detail is overlooked.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl">
            <div className="bg-purple-100 dark:bg-purple-800 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold mb-3">Interview Coaching</h3>
            <p className="text-muted-foreground">
              Our comprehensive interview preparation helps you articulate your study plans confidently, approaching
              your visa interview with poise and assurance.
            </p>
          </div>
        </div>
      </div>

      {/* Country-Specific Visa Information */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Expert Guidance for <span className="text-purple-600 dark:text-purple-400">Major Study Destinations</span>
        </h2>

        <Tabs defaultValue="usa" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="usa">USA</TabsTrigger>
            <TabsTrigger value="uk">UK</TabsTrigger>
            <TabsTrigger value="canada">Canada</TabsTrigger>
            <TabsTrigger value="australia">Australia</TabsTrigger>
          </TabsList>

          <TabsContent
            value="usa"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">F-1 Student Visa</h3>
                <p className="mb-4 text-muted-foreground">
                  The F-1 visa is the most common visa for international students studying in the United States. Our
                  team has extensive experience with the specific requirements and nuances of the F-1 application
                  process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>I-20 form preparation assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>SEVIS fee guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>DS-160 form completion support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Financial documentation preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Specialized interview coaching</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Success Rate</h4>
                <p className="text-3xl font-bold mb-4">97%</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Our students have a 97% success rate for F-1 visa approvals on their first attempt, compared to the
                  national average of 82%.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Processing Timeline</h4>
                  <p className="text-muted-foreground">
                    With our guidance, most students complete their F-1 visa application process within 4-6 weeks,
                    including interview preparation.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="uk"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Student Visa (formerly Tier 4)</h3>
                <p className="mb-4 text-muted-foreground">
                  The UK Student Visa allows international students to study at UK institutions. Our specialists
                  understand the UK's points-based immigration system and help you navigate the specific requirements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>CAS statement guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Biometric appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Financial requirement documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Tuberculosis test guidance (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Immigration Health Surcharge assistance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Success Rate</h4>
                <p className="text-3xl font-bold mb-4">98%</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Our students have a 98% success rate for UK Student Visa approvals, with most applications processed
                  without any additional information requests.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Processing Timeline</h4>
                  <p className="text-muted-foreground">
                    With our guidance, most students complete their UK Student Visa application process within 3-5 weeks
                    from CAS issuance to decision.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="canada"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Study Permit</h3>
                <p className="mb-4 text-muted-foreground">
                  The Canadian Study Permit allows international students to study at designated learning institutions
                  in Canada. Our team helps you navigate the specific requirements and application process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Letter of acceptance guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Proof of financial support preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Biometrics appointment scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Study plan development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Medical examination guidance (if required)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Success Rate</h4>
                <p className="text-3xl font-bold mb-4">95%</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Our students have a 95% success rate for Canadian Study Permit approvals, with specialized guidance
                  for SDS (Student Direct Stream) eligible countries.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Processing Timeline</h4>
                  <p className="text-muted-foreground">
                    With our guidance, most students complete their Study Permit application process within 4-8 weeks,
                    depending on country of origin and SDS eligibility.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="australia"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Student Visa (Subclass 500)</h3>
                <p className="mb-4 text-muted-foreground">
                  The Australian Student Visa (Subclass 500) allows international students to study full-time in
                  Australia. Our specialists help you navigate the specific requirements and application process.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Confirmation of Enrollment (CoE) guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Genuine Temporary Entrant (GTE) statement preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Financial capacity documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Health insurance (OSHC) arrangement assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
                    <span>Health examination guidance</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Success Rate</h4>
                <p className="text-3xl font-bold mb-4">96%</p>
                <p className="text-sm text-muted-foreground mb-6">
                  Our students have a 96% success rate for Australian Student Visa approvals, with particular expertise
                  in GTE statement preparation.
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">Processing Timeline</h4>
                  <p className="text-muted-foreground">
                    With our guidance, most students complete their Student Visa application process within 4-6 weeks
                    from CoE issuance to decision.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Process Timeline */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Our <span className="text-purple-600 dark:text-purple-400">Comprehensive</span> Visa Support Process
        </h2>

        <div className="relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Initial Consultation and Assessment</h3>
                  <p className="text-muted-foreground">
                    We begin with a thorough review of your academic background, chosen program, and destination
                    country. Our experts will assess your eligibility and outline the specific visa requirements you'll
                    need to meet. This personalized roadmap sets the foundation for a successful application.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  1
                </div>
                <div className="md:w-1/2 order-1 md:order-2 md:pl-12 pl-12">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                    <p className="text-sm font-medium">Timeline: 1-2 days</p>
                    <p className="text-xs text-muted-foreground">
                      We'll schedule your initial consultation within 24-48 hours of your request.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 order-2 md:order-1 md:pr-12 pl-12 md:pl-0">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                    <p className="text-sm font-medium">Timeline: 1-2 weeks</p>
                    <p className="text-xs text-muted-foreground">
                      We'll work with you to gather and prepare all necessary documents according to specific country
                      requirements.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  2
                </div>
                <div className="md:w-1/2 md:text-left order-1 md:order-2 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Document Preparation</h3>
                  <p className="text-muted-foreground">
                    Gathering the right documents can be overwhelming. We provide a comprehensive checklist and guide
                    you through collecting each required item. From transcripts to financial statements, we ensure every
                    document meets the exact specifications of your visa application.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Application Form Mastery</h3>
                  <p className="text-muted-foreground">
                    Visa application forms can be tricky, with seemingly simple questions carrying significant weight.
                    Our team assists you in filling out every section accurately, explaining the nuances and ensuring
                    your responses align perfectly with your supporting documents.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  3
                </div>
                <div className="md:w-1/2 order-1 md:order-2 md:pl-12 pl-12">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                    <p className="text-sm font-medium">Timeline: 3-5 days</p>
                    <p className="text-xs text-muted-foreground">
                      We'll guide you through the application form completion process with careful attention to detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 order-2 md:order-1 md:pr-12 pl-12 md:pl-0">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                    <p className="text-sm font-medium">Timeline: 1 week</p>
                    <p className="text-xs text-muted-foreground">
                      We'll conduct multiple mock interviews to ensure you're fully prepared for your visa interview.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  4
                </div>
                <div className="md:w-1/2 md:text-left order-1 md:order-2 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Interview Preparation</h3>
                  <p className="text-muted-foreground">
                    Many visa applications require an interview. We conduct thorough mock interviews, preparing you for
                    potential questions and helping you articulate your study plans confidently. With our guidance,
                    you'll approach your visa interview with poise and assurance.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Submission and Follow-up</h3>
                  <p className="text-muted-foreground">
                    We don't just help you prepare; we're with you until the end. Our team assists with the submission
                    process, ensures all documents are properly filed, and helps you track your application status. If
                    additional information is requested, we're here to help you respond promptly and appropriately.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  5
                </div>
                <div className="md:w-1/2 order-1 md:order-2 md:pl-12 pl-12">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-400 mb-2" />
                    <p className="text-sm font-medium">Timeline: Ongoing</p>
                    <p className="text-xs text-muted-foreground">
                      We'll provide continuous support throughout the visa processing period until you receive your
                      final decision.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Frequently Asked <span className="text-purple-600 dark:text-purple-400">Questions</span>
        </h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>When should I start my visa application process?</AccordionTrigger>
            <AccordionContent>
              We recommend starting your visa application process at least 3-6 months before your intended program start
              date. This timeline allows for document collection, application preparation, potential interview
              scheduling, and processing times which vary by country. Starting early also provides a buffer for any
              unexpected delays or additional document requests.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What financial documents will I need for my visa application?</AccordionTrigger>
            <AccordionContent>
              Financial requirements vary by country, but generally you'll need to demonstrate that you can cover
              tuition fees and living expenses for at least one year of study. Common documents include bank statements
              (typically showing funds maintained for at least 3-6 months), scholarship award letters, education loans,
              or sponsorship letters with supporting financial documents. Our team will provide country-specific
              guidance on exact requirements and how to present your financial documentation effectively.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How do I prepare for a visa interview?</AccordionTrigger>
            <AccordionContent>
              Visa interviews assess your genuine intent to study and return to your home country after completing your
              program. Our preparation includes multiple mock interviews covering likely questions about your academic
              background, chosen program, career plans, ties to your home country, and financial situation. We'll help
              you articulate clear, consistent answers that align with your application documents and demonstrate your
              legitimate student status.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>What happens if my visa application is rejected?</AccordionTrigger>
            <AccordionContent>
              While our high success rate minimizes rejections, we provide full support if this occurs. We'll analyze
              the rejection reason, address any issues, strengthen your application, and guide you through the
              reapplication process. Our team will help you understand what went wrong and develop a strategic plan to
              overcome those specific concerns in your next application, significantly improving your chances of
              approval.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Can I work while studying on a student visa?</AccordionTrigger>
            <AccordionContent>
              Work permissions vary significantly by country. For example, F-1 visa holders in the US can work on-campus
              and may qualify for CPT/OPT. UK Student visa holders can typically work up to 20 hours per week during
              term time. Canadian study permit holders may work up to 20 hours per week off-campus. Australian Student
              visa holders can work up to 48 hours per fortnight. Our advisors will explain the specific work rights for
              your destination country and how to maintain compliance with visa regulations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Visa Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Schedule a free consultation to discuss your visa needs and learn how we can help you navigate the process
          with confidence.
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 gap-2" onClick={() => window.location.href = '/pricing'}>
          <span>Get Started with Visa Support</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
