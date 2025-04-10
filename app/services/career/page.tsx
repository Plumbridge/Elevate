import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronRight,
  Globe,
  BarChart,
  Briefcase,
  Users,
  FileText,
  MessageSquare,
  ArrowRight,
  ExternalLink,
  MapPin,
  CheckCircle,
} from "lucide-react"

export default function CareerSupportPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* Hero Section with Geometric Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 to-purple-900 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full translate-x-1/2 translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        <div className="container mx-auto py-20 px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold bg-purple-600/30 rounded-full">
                PARTNER SERVICE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Launch Your Global <span className="text-purple-400">Career</span> with Confidence
              </h1>
              <p className="text-lg mb-8 text-slate-200">
                Your international education is just the beginning. We've partnered with CareerLaunch International to
                help you transform your global experience into a successful career.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="glow" className="gap-2 px-6">
                  <span>Explore CareerLaunch</span>
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 text-white hover:bg-slate-800 gap-2">
                  <span>Learn More</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-purple-500 rounded-lg"></div>
                <div className="bg-gradient-to-br from-slate-800 to-purple-800 p-8 rounded-lg border border-slate-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">CareerLaunch International</h3>
                      <p className="text-slate-300 text-sm">Our trusted career services partner</p>
                    </div>
                  </div>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                      <p className="text-slate-200">Access to 5,000+ global employers</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                      <p className="text-slate-200">92% job placement rate within 6 months</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                      <p className="text-slate-200">Specialized in international student career transitions</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-purple-500 mt-0.5 shrink-0" />
                      <p className="text-slate-200">Offices in 12 countries across 4 continents</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-700"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-700 -ml-2"></div>
                      <div className="w-8 h-8 rounded-full bg-slate-700 -ml-2"></div>
                      <p className="text-sm text-slate-300">+2,500 success stories</p>
                    </div>
                    <div className="flex items-center gap-1 text-purple-400 text-sm font-medium">
                      <span>View testimonials</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            className="w-full h-auto fill-slate-50 dark:fill-slate-900"
          >
            <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-16 px-4">
        {/* Partnership Explanation */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <div className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
            ELEVATE × CAREERLAUNCH PARTNERSHIP
          </div>
          <h2 className="text-3xl font-bold mb-6">Seamless Transition from Education to Career</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
            Elevate has partnered with CareerLaunch International to provide a comprehensive career support ecosystem.
            This exclusive partnership allows our students to access premium career services at preferential rates,
            creating a seamless bridge between your international education and global career opportunities.
          </p>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
              <span className="text-2xl font-bold text-slate-400">E</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-slate-300 to-purple-500"></div>
            <div className="w-16 h-16 rounded-full bg-purple-500 flex items-center justify-center">
              <span className="text-2xl font-bold text-white">C</span>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">Comprehensive Career Support Services</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-purple-500"></div>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Career Planning</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Develop a strategic career plan that leverages your international education and aligns with the global
                  job market.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">Personalized career roadmapping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">Skills gap analysis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">Industry-specific guidance</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4 text-slate-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">Available worldwide</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-purple-500"></div>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <Briefcase className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Job Search Support</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Access exclusive job listings, get introductions to employers, and receive guidance throughout your
                  job search process.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">Exclusive job board access</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">Resume & LinkedIn optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">Direct employer introductions</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-slate-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">5,000+ employer network</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white dark:bg-slate-800 border-0 shadow-lg overflow-hidden">
              <div className="h-2 bg-purple-500"></div>
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">Interview Preparation</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  Master the art of interviewing in different cultural contexts with mock interviews and feedback
                  sessions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      Industry-specific mock interviews
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      Cross-cultural communication coaching
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                    <span className="text-sm text-slate-600 dark:text-slate-300">Salary negotiation training</span>
                  </li>
                </ul>
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-1">
                    <BarChart className="h-4 w-4 text-slate-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">87% interview success rate</span>
                  </div>
                  <div className="flex items-center gap-1 text-purple-600 dark:text-purple-400 text-sm font-medium">
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Global Reach Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-slate-100 to-purple-50 dark:from-slate-800 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
                  GLOBAL OPPORTUNITIES
                </div>
                <h2 className="text-3xl font-bold mb-6">Launch Your Career Anywhere in the World</h2>
                <p className="text-slate-600 dark:text-slate-300 mb-6">
                  CareerLaunch International maintains a strong presence in major global business hubs, providing you
                  with access to opportunities across diverse industries and regions. Whether you're looking to work in
                  your host country or return home, our global network connects you with the right opportunities.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-1">12</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Office Locations</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-1">45+</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Countries Served</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-1">5,000+</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Employer Partners</p>
                  </div>
                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                    <h4 className="font-bold text-lg mb-1">20+</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Industries Covered</p>
                  </div>
                </div>

                <Button variant="glow" className="gap-2">
                  <span>Explore Global Opportunities</span>
                  <Globe className="h-4 w-4" />
                </Button>
              </div>

              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-full opacity-50 z-0"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-200 dark:bg-purple-900/30 rounded-full opacity-50 z-0"></div>

                <div className="relative z-10 grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-purple-500" />
                      <h4 className="font-semibold">North America</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      <li>New York</li>
                      <li>San Francisco</li>
                      <li>Toronto</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-purple-500" />
                      <h4 className="font-semibold">Europe</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      <li>London</li>
                      <li>Berlin</li>
                      <li>Paris</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-purple-500" />
                      <h4 className="font-semibold">Asia Pacific</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      <li>Singapore</li>
                      <li>Sydney</li>
                      <li>Tokyo</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-slate-700 p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-3">
                      <MapPin className="h-4 w-4 text-purple-500" />
                      <h4 className="font-semibold">Middle East</h4>
                    </div>
                    <ul className="space-y-1 text-sm text-slate-600 dark:text-slate-300">
                      <li>Dubai</li>
                      <li>Tel Aviv</li>
                      <li>Abu Dhabi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
              SUCCESS STORIES
            </div>
            <h2 className="text-3xl font-bold mb-4">From International Students to Global Professionals</h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              See how CareerLaunch International has helped students like you transform their international education
              into successful global careers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700"></div>
                  <div>
                    <h4 className="font-bold">Sophia Chen</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      MSc Finance, London School of Economics
                    </p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "CareerLaunch helped me secure a position at a leading investment bank in Hong Kong. Their interview
                  preparation and networking events were invaluable in helping me stand out in a competitive field."
                </p>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-slate-400" />
                  <p className="text-sm text-slate-500 dark:text-slate-400">Now: Investment Analyst at Goldman Sachs</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700"></div>
                  <div>
                    <h4 className="font-bold">Miguel Hernandez</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">MBA, INSEAD</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "The career planning services helped me pivot from engineering to tech management. Their global
                  network opened doors I couldn't have accessed on my own, leading to multiple job offers."
                </p>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-slate-400" />
                  <p className="text-sm text-slate-500 dark:text-slate-400">Now: Product Manager at Microsoft</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
              <div className="h-2 bg-purple-500"></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-700"></div>
                  <div>
                    <h4 className="font-bold">Aisha Okoye</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">MSc Computer Science, ETH Zurich</p>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  "As an international student, navigating work visas was challenging. CareerLaunch provided expert
                  guidance on visa requirements and connected me with employers willing to sponsor international
                  talent."
                </p>
                <div className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-slate-400" />
                  <p className="text-sm text-slate-500 dark:text-slate-400">Now: Software Engineer at Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-slate-900 to-purple-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Global Career?</h2>
            <p className="text-lg mb-8">
              As an Elevate student, you receive exclusive benefits and preferential rates with CareerLaunch
              International. Take the first step toward your international career today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="glow" className="gap-2 px-6">
                <span>Visit CareerLaunch International</span>
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-300 text-white hover:bg-slate-800 gap-2">
                <span>Schedule a Consultation</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-slate-300 mt-6">
              Elevate students receive a 15% discount on all CareerLaunch International services
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
