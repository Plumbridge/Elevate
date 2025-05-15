import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ChevronRight,
  Globe,
  BarChart,
  Briefcase,
  Users,
  FileText,
  MessageSquare,
  ArrowRight,
  MapPin,
  CheckCircle,
  LineChart,
  Network,
} from "lucide-react"

export default function CareerSupportPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Split Design */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <Badge className="mb-4 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Career Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Launch Your Global <span className="text-gradient">Career</span> with Confidence
          </h1>
          <p className="text-muted-foreground mb-8">
            Your international education is just the beginning. We've partnered with CareerLaunch International to help
            you transform your global experience into a successful career.
          </p>
          <Link href="/signup">
            <Button size="lg" variant="glow" className="gap-2">
              <span>Explore Career Services</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full z-0"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <Briefcase className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Job Search Support</h3>
              <p className="text-sm text-muted-foreground">Access to exclusive global job listings</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <MessageSquare className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Interview Preparation</h3>
              <p className="text-sm text-muted-foreground">Expert coaching for job interviews</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <LineChart className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Career Planning</h3>
              <p className="text-sm text-muted-foreground">Strategic roadmapping for your future</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <Network className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Global Network</h3>
              <p className="text-sm text-muted-foreground">Connect with 5,000+ employer partners</p>
            </div>
          </div>
        </div>
      </div>

      {/* Partnership Explanation */}
      <div className="max-w-3xl mx-auto mb-16 text-center">
        <div className="inline-block px-4 py-1 mb-4 text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
          ELEVATE × CAREERLAUNCH PARTNERSHIP
        </div>
        <h2 className="text-3xl font-bold mb-6">Seamless Transition from Education to Career</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Elevate has partnered with CareerLaunch International to provide a comprehensive career support ecosystem.
          This exclusive partnership allows our students to access premium career services at preferential rates,
          creating a seamless bridge between your international education and global career opportunities.
        </p>
        <div className="flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-800 flex items-center justify-center">
            <span className="text-2xl font-bold text-purple-400">E</span>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-purple-500"></div>
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
              <p className="text-muted-foreground mb-4">
                Develop a strategic career plan that leverages your international education and aligns with the global
                job market.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">Personalized career roadmapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">Skills gap analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">Industry-specific guidance</span>
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
              <p className="text-muted-foreground mb-4">
                Access exclusive job listings, get introductions to employers, and receive guidance throughout your job
                search process.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">Exclusive job board access</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">Resume & LinkedIn optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">Direct employer introductions</span>
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
              <p className="text-muted-foreground mb-4">
                Master the art of interviewing in different cultural contexts with mock interviews and feedback
                sessions.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">Industry-specific mock interviews</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">Cross-cultural communication coaching</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-purple-500 mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">Salary negotiation training</span>
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

      {/* Rest of the page content remains the same */}
      {/* Global Reach Section */}
      <div className="mb-20">
        <div className="bg-gradient-to-br from-slate-100 to-purple-50 dark:from-slate-800 dark:to-purple-900/20 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded-full">
                GLOBAL OPPORTUNITIES
              </div>
              <h2 className="text-3xl font-bold mb-6">Launch Your Career Anywhere in the World</h2>
              <p className="text-muted-foreground mb-6">
                CareerLaunch International maintains a strong presence in major global business hubs, providing you with
                access to opportunities across diverse industries and regions. Whether you're looking to work in your
                host country or return home, our global network connects you with the right opportunities.
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

              <Button className="bg-purple-500 hover:bg-purple-600 text-white gap-2">
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
                  <ul className="space-y-1 text-sm text-muted-foreground">
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
                  <ul className="space-y-1 text-sm text-muted-foreground">
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
                  <ul className="space-y-1 text-sm text-muted-foreground">
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
                  <ul className="space-y-1 text-sm text-muted-foreground">
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See how CareerLaunch International has helped students like you transform their international education into
            successful global careers.
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
                  <p className="text-sm text-slate-500 dark:text-slate-400">MSc Finance, London School of Economics</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
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
              <p className="text-muted-foreground mb-4">
                "The career planning services helped me pivot from engineering to tech management. Their global network
                opened doors I couldn't have accessed on my own, leading to multiple job offers."
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
              <p className="text-muted-foreground mb-4">
                "As an international student, navigating work visas was challenging. CareerLaunch provided expert
                guidance on visa requirements and connected me with employers willing to sponsor international talent."
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
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl p-8 md:p-12 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Ready to Launch Your Global Career?</h2>
          <p className="text-lg mb-8">
            As an Elevate student, you receive exclusive benefits and preferential rates with CareerLaunch
            International. Take the first step toward your international career today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup?service=career">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 gap-2 px-6">
                <span>Get Started with Career Services</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-700 gap-2">
                <span>Schedule a Consultation</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          <p className="text-sm text-purple-200 mt-6">
            Elevate students receive a 15% discount on all CareerLaunch International services
          </p>
        </div>
      </div>
    </div>
  )
}
