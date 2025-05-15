import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { ChevronRight, Globe, BookOpen, Users, MessageSquare, School, Map, Lightbulb, Utensils, Home, Bus, ShoppingBag, Calendar, CheckCircle } from 'lucide-react'

export default function CulturalPreparationPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Split Design */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <Badge className="mb-4 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Cultural Preparation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Embrace Your New <span className="text-gradient">Cultural Adventure</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            At Elevate, we believe that cultural understanding is key to a successful and enriching study abroad
            experience. Our cultural preparation services ensure you're ready to thrive in your new environment.
          </p>
          <Link href="/signup">
            <Button size="lg" variant="glow" className="gap-2">
              <span>Start Your Cultural Preparation</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full z-0"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <Globe className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Cultural Fluency</h3>
              <p className="text-sm text-muted-foreground">Beyond language to social norms and customs</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <Users className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Social Integration</h3>
              <p className="text-sm text-muted-foreground">Build meaningful connections in your new home</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <School className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Academic Culture</h3>
              <p className="text-sm text-muted-foreground">Navigate different educational expectations</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <Map className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Practical Skills</h3>
              <p className="text-sm text-muted-foreground">Daily life navigation in your host country</p>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Why Choose Our <span className="text-gradient">Cultural Preparation</span> Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-xl border border-purple-100 dark:border-purple-900/30 p-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
            <BookOpen className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Beyond Language: Cultural Fluency</h3>
            <p className="text-muted-foreground">
              Language is just the beginning. Our comprehensive cultural preparation goes deeper, helping you understand
              social norms, etiquette, and unwritten rules of your host country. We equip you with the cultural
              intelligence to navigate your new environment with confidence.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-purple-100 dark:border-purple-900/30 p-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
            <Lightbulb className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Personalized Cultural Insights</h3>
            <p className="text-muted-foreground">
              Every culture is unique, and so is every student's background. Our team provides tailored cultural
              insights, considering both your home culture and your destination, to help you bridge cultural gaps
              effectively and avoid common pitfalls.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-xl border border-purple-100 dark:border-purple-900/30 p-8">
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
            <MessageSquare className="h-10 w-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-3">Interactive Learning Experience</h3>
            <p className="text-muted-foreground">
              Our cultural preparation isn't just about reading materials – it's an interactive journey. Through
              workshops, simulations, and guided discussions, you'll develop practical skills and strategies for
              cultural adaptation that you can apply from day one in your new environment.
            </p>
          </div>
        </div>
      </div>

      {/* Cultural Preparation Journey */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Our Process
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Your Cultural Preparation Journey</h2>
          <p className="text-muted-foreground">
            A comprehensive approach to ensure you're culturally prepared for your international education
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for timeline */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-800 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Cultural Assessment and Goal Setting</h3>
                  <p className="text-muted-foreground">
                    We begin by understanding your current cultural knowledge and setting clear goals for your cultural
                    adaptation. This personalized approach ensures that our preparation aligns with your specific needs
                    and aspirations.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  1
                </div>
                <div className="md:w-1/2 order-1 md:order-2 md:pl-12 pl-12">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-300 mb-2" />
                    <p className="text-sm font-medium">Timeline: 1-2 weeks</p>
                    <p className="text-xs text-muted-foreground">
                      Includes initial assessment, personalized goal setting, and preparation of your cultural roadmap.
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
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-300 mb-2" />
                    <p className="text-sm font-medium">Timeline: 4-6 weeks</p>
                    <p className="text-xs text-muted-foreground">
                      A series of interactive workshops covering key cultural dimensions of your destination country.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  2
                </div>
                <div className="md:w-1/2 md:text-left order-1 md:order-2 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Immersive Cultural Workshops</h3>
                  <p className="text-muted-foreground">
                    Participate in engaging, interactive workshops that bring your host country's culture to life. From
                    communication styles to social etiquette, these sessions provide practical knowledge you can apply
                    from day one in your new environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Language Support and Resources</h3>
                  <p className="text-muted-foreground">
                    While we're not a language school, we provide resources and guidance to support your language
                    learning journey. We'll help you find the best language learning tools and connect you with language
                    exchange opportunities to practice before you depart.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  3
                </div>
                <div className="md:w-1/2 order-1 md:order-2 md:pl-12 pl-12">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-300 mb-2" />
                    <p className="text-sm font-medium">Timeline: Ongoing</p>
                    <p className="text-xs text-muted-foreground">
                      Continuous access to language resources and regular check-ins to support your progress.
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
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-300 mb-2" />
                    <p className="text-sm font-medium">Timeline: 2-3 weeks</p>
                    <p className="text-xs text-muted-foreground">
                      Focused sessions on academic expectations, classroom dynamics, and study strategies.
                    </p>
                  </div>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  4
                </div>
                <div className="md:w-1/2 md:text-left order-1 md:order-2 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Navigating Academic Culture</h3>
                  <p className="text-muted-foreground">
                    Understanding the academic culture of your host country is crucial for success. We'll guide you
                    through differences in teaching styles, classroom expectations, and academic integrity standards to
                    ensure you're prepared for your new learning environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="md:w-1/2 md:text-right order-2 md:order-1 pt-8 md:pt-0">
                  <h3 className="text-xl font-bold mb-2">Practical Life Skills and Safety</h3>
                  <p className="text-muted-foreground">
                    From using public transportation to understanding local healthcare systems, we provide practical
                    advice on daily life in your host country. We also cover important safety information and strategies
                    for maintaining your well-being while abroad.
                  </p>
                </div>
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white absolute left-0 md:left-1/2 transform -translate-x-1/2">
                  5
                </div>
                <div className="md:w-1/2 order-1 md:order-2 md:pl-12 pl-12">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <Calendar className="h-6 w-6 text-purple-600 dark:text-purple-300 mb-2" />
                    <p className="text-sm font-medium">Timeline: 2-3 weeks</p>
                    <p className="text-xs text-muted-foreground">
                      Practical workshops on daily life skills, safety protocols, and emergency procedures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cultural Dimensions Tabs */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Cultural Dimensions
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Understanding Your Host Culture</h2>
          <p className="text-muted-foreground">
            Explore the key dimensions of cultural differences to better prepare for your international experience
          </p>
        </div>

        <Tabs defaultValue="communication" className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="communication">Communication</TabsTrigger>
            <TabsTrigger value="social">Social Norms</TabsTrigger>
            <TabsTrigger value="academic">Academic Culture</TabsTrigger>
            <TabsTrigger value="daily">Daily Life</TabsTrigger>
          </TabsList>

          <TabsContent
            value="communication"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Communication Styles</h3>
                <p className="mb-6 text-muted-foreground">
                  Understanding how communication styles differ across cultures is essential for building relationships
                  and avoiding misunderstandings. We'll help you navigate the nuances of verbal and non-verbal
                  communication in your host country.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Direct vs. Indirect Communication</span>
                      <p className="text-sm text-muted-foreground">
                        Learn to recognize and adapt to different approaches to expressing opinions and feedback
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Non-verbal Communication</span>
                      <p className="text-sm text-muted-foreground">
                        Understand gestures, personal space, and body language norms in your host culture
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Formality and Hierarchy</span>
                      <p className="text-sm text-muted-foreground">
                        Navigate appropriate levels of formality with professors, peers, and in different social
                        contexts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Humor and Taboo Topics</span>
                      <p className="text-sm text-muted-foreground">
                        Identify culturally sensitive topics and understand how humor translates across cultures
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-300">
                  Communication Style Comparison
                </h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">United States</span>
                      <span className="text-sm font-medium">Direct</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[85%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Emphasis on clear, explicit communication with direct feedback
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">United Kingdom</span>
                      <span className="text-sm font-medium">Indirect</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[60%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      More reserved, with politeness and understatement valued
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Japan</span>
                      <span className="text-sm font-medium">Very Indirect</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[25%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      High-context culture where harmony and saving face are prioritized
                    </p>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Germany</span>
                      <span className="text-sm font-medium">Very Direct</span>
                    </div>
                    <div className="h-2 bg-purple-100 rounded-full">
                      <div className="h-2 bg-purple-600 rounded-full w-[95%]"></div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Values straightforward, honest communication with precise feedback
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="social"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Social Norms and Etiquette</h3>
                <p className="mb-6 text-muted-foreground">
                  Every culture has its own set of unwritten rules for social interactions. Understanding these norms
                  will help you navigate social situations with confidence and build meaningful relationships in your
                  host country.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Greetings and Introductions</span>
                      <p className="text-sm text-muted-foreground">
                        Learn appropriate greetings, physical contact norms, and introduction protocols
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Gift-Giving Customs</span>
                      <p className="text-sm text-muted-foreground">
                        Understand when and how to give gifts, and what types of gifts are appropriate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Dining Etiquette</span>
                      <p className="text-sm text-muted-foreground">
                        Navigate table manners, restaurant customs, and social dining expectations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Friendship Building</span>
                      <p className="text-sm text-muted-foreground">
                        Learn how friendships develop in your host culture and how to build your social network
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-300">
                  Cultural Dimensions Comparison
                </h4>
                <div className="space-y-6">
                  <div>
                    <h5 className="text-sm font-medium mb-2">Individualism vs. Collectivism</h5>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-purple-600">Collectivist</span>
                        </div>
                        <div>
                          <span className="text-xs font-semibold inline-block text-purple-600">Individualist</span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-purple-100">
                        <div className="h-2 bg-purple-600 rounded-full" style={{ width: "25%" }}></div>
                        <div className="h-2 bg-transparent" style={{ width: "15%" }}></div>
                        <div className="h-2 bg-transparent" style={{ width: "20%" }}></div>
                        <div className="h-2 bg-transparent" style={{ width: "40%" }}></div>
                      </div>
                      <div className="flex text-xs justify-between mt-1">
                        <span>Japan, China</span>
                        <span>France, Spain</span>
                        <span>Canada, UK</span>
                        <span>US, Australia</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium mb-2">Power Distance</h5>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block text-purple-600">Low Power Distance</span>
                        </div>
                        <div>
                          <span className="text-xs font-semibold inline-block text-purple-600">
                            High Power Distance
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-purple-100">
                        <div className="h-2 bg-purple-600 rounded-full" style={{ width: "20%" }}></div>
                        <div className="h-2 bg-transparent" style={{ width: "20%" }}></div>
                        <div className="h-2 bg-transparent" style={{ width: "25%" }}></div>
                        <div className="h-2 bg-transparent" style={{ width: "35%" }}></div>
                      </div>
                      <div className="flex text-xs justify-between mt-1">
                        <span>Denmark, Sweden</span>
                        <span>US, UK</span>
                        <span>France, Spain</span>
                        <span>China, India</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="academic"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Academic Expectations</h3>
                <p className="mb-6 text-muted-foreground">
                  Educational systems vary significantly across cultures. Understanding the academic expectations in
                  your host country will help you adapt quickly and succeed in your studies.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Classroom Dynamics</span>
                      <p className="text-sm text-muted-foreground">
                        Understand student-teacher relationships and classroom participation expectations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Assessment Methods</span>
                      <p className="text-sm text-muted-foreground">
                        Learn about different types of assignments, exams, and grading systems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Academic Integrity</span>
                      <p className="text-sm text-muted-foreground">
                        Navigate citation practices, collaboration norms, and plagiarism policies
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Study Strategies</span>
                      <p className="text-sm text-muted-foreground">
                        Develop effective approaches to learning in your new academic environment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-300">Academic Systems Comparison</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">Feature</th>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">US/UK</th>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">Continental Europe</th>
                        <th className="text-left text-sm font-medium text-muted-foreground pb-3">East Asia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 text-sm">Class Participation</td>
                        <td className="py-2 text-sm">Highly valued</td>
                        <td className="py-2 text-sm">Varies by country</td>
                        <td className="py-2 text-sm">Less emphasized</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Assessment</td>
                        <td className="py-2 text-sm">Continuous</td>
                        <td className="py-2 text-sm">Often final exam focus</td>
                        <td className="py-2 text-sm">Exam-oriented</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Critical Thinking</td>
                        <td className="py-2 text-sm">Strongly emphasized</td>
                        <td className="py-2 text-sm">Valued</td>
                        <td className="py-2 text-sm">Growing emphasis</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-sm">Professor Relationship</td>
                        <td className="py-2 text-sm">Approachable</td>
                        <td className="py-2 text-sm">More formal</td>
                        <td className="py-2 text-sm">Highly formal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  These are general trends and may vary by institution. Our advisors will provide specific guidance for
                  your host university.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="daily"
            className="bg-gradient-to-br from-purple-50 to-purple-50 dark:from-purple-900/20 dark:to-purple-900/20 p-8 rounded-xl"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Navigating Daily Life</h3>
                <p className="mb-6 text-muted-foreground">
                  Practical aspects of daily life can vary significantly across cultures. Understanding these
                  differences will help you adjust more quickly and feel at home in your new environment.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Home className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Housing and Roommate Dynamics</span>
                      <p className="text-sm text-muted-foreground">
                        Navigate shared living spaces, housing norms, and roommate relationships
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Bus className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Transportation Systems</span>
                      <p className="text-sm text-muted-foreground">
                        Learn to navigate public transportation, tipping customs, and local travel norms
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Utensils className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Food and Dining</span>
                      <p className="text-sm text-muted-foreground">
                        Explore local cuisine, grocery shopping, and restaurant customs
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShoppingBag className="h-5 w-5 text-purple-600 dark:text-purple-300 mt-0.5 shrink-0" />
                    <div>
                      <span className="font-medium">Shopping and Services</span>
                      <p className="text-sm text-muted-foreground">
                        Understand local shopping customs, bargaining norms, and service expectations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                <h4 className="font-semibold mb-4 text-purple-600 dark:text-purple-300">Cultural Adjustment Cycle</h4>
                <div className="space-y-6">
                  <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600"></div>
                    <h5 className="font-medium">Honeymoon Phase</h5>
                    <p className="text-sm text-muted-foreground">
                      Initial excitement and fascination with the new culture
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600"></div>
                    <h5 className="font-medium">Culture Shock</h5>
                    <p className="text-sm text-muted-foreground">
                      Frustration and confusion as differences become more apparent
                    </p>
                  </div>
                  <div className="relative pl-8 border-l-2 border-purple-200 dark:border-purple-800">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600"></div>
                    <h5 className="font-medium">Adjustment</h5>
                    <p className="text-sm text-muted-foreground">
                      Gradual adaptation and development of coping strategies
                    </p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-600"></div>
                    <h5 className="font-medium">Integration</h5>
                    <p className="text-sm text-muted-foreground">
                      Comfortable navigation between home and host cultures
                    </p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  Our cultural preparation helps you navigate these phases more smoothly and develop resilience for
                  cultural adaptation.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Success Stories
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Student Experiences</h2>
          <p className="text-muted-foreground">
            Hear from students who benefited from our cultural preparation services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-purple-100 dark:border-purple-900/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                <div>
                  <h4 className="font-bold">Maya K.</h4>
                  <p className="text-xs text-muted-foreground">Exchange Student, University of Tokyo</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "The cultural preparation I received from Elevate was invaluable. Understanding Japanese communication
                styles and classroom expectations helped me avoid so many potential misunderstandings. I felt confident
                from day one and was able to build meaningful relationships with my Japanese classmates."
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-purple-900/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                <div>
                  <h4 className="font-bold">Carlos M.</h4>
                  <p className="text-xs text-muted-foreground">Graduate Student, University of Oxford</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "Coming from Brazil to the UK, I expected fewer cultural differences than I encountered. Elevate's
                preparation on British academic culture was eye-opening. Understanding the emphasis on independent
                research and critical thinking helped me adapt quickly to Oxford's demanding academic environment."
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-purple-900/30">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                <div>
                  <h4 className="font-bold">Aisha N.</h4>
                  <p className="text-xs text-muted-foreground">Undergraduate, University of California</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                "The practical life skills training was what I appreciated most. From understanding the U.S. healthcare
                system to learning how to use public transportation in Los Angeles, Elevate prepared me for the
                day-to-day challenges of living abroad. This allowed me to focus on my studies instead of struggling
                with basic necessities."
              </p>
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
          <h2 className="text-3xl font-bold mb-4">Common Questions About Cultural Preparation</h2>
          <p className="text-muted-foreground">
            Answers to frequently asked questions about our cultural preparation services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>When should I start cultural preparation for studying abroad?</AccordionTrigger>
              <AccordionContent>
                We recommend beginning your cultural preparation 3-6 months before departure. This gives you enough time
                to develop cultural awareness, learn basic language skills if needed, and mentally prepare for the
                transition. However, it's never too late to start! Even a few weeks of focused cultural preparation can
                significantly improve your initial adjustment period.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Do I need to be fluent in the local language before I go?</AccordionTrigger>
              <AccordionContent>
                While language fluency is helpful, it's not always necessary, especially if your program is taught in
                English. However, learning basic phrases and greetings in the local language demonstrates respect and
                opens doors to deeper cultural connections. Our cultural preparation includes resources for essential
                language learning, focusing on practical phrases and cultural context rather than complete fluency.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>How can I deal with culture shock when it happens?</AccordionTrigger>
              <AccordionContent>
                Culture shock is a normal part of the adjustment process. Our preparation helps you recognize the
                symptoms and develop effective coping strategies. These include maintaining connections with home while
                building new local relationships, practicing self-care, keeping a reflective journal, and seeking
                support when needed. We also provide ongoing support during your time abroad, so you can reach out to
                our advisors if you're experiencing difficulties.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How is cultural preparation different from orientation programs?</AccordionTrigger>
              <AccordionContent>
                While university orientation programs provide valuable logistical information, our cultural preparation
                goes deeper into the psychological and social aspects of cultural adaptation. We offer personalized
                guidance based on your specific background and destination, interactive workshops that simulate real
                cultural challenges, and ongoing support throughout your time abroad. Our approach complements
                university orientations by focusing on the human experience of cultural transition.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>
                Will cultural preparation help with reverse culture shock when I return home?
              </AccordionTrigger>
              <AccordionContent>
                Yes! Our cultural preparation includes guidance on the often-overlooked challenge of returning home. We
                help you anticipate reverse culture shock, document your growth during your time abroad, and develop
                strategies for integrating your international experience into your life back home. This preparation
                makes the re-entry process smoother and helps you leverage your international experience for personal
                and professional growth.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Prepare for Your Cultural Journey?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Schedule a free consultation to discuss your cultural preparation needs and learn how we can help you thrive
          in your new cultural environment.
        </p>
        <Link href="/signup">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 gap-2">
            <span>Start Your Cultural Preparation</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}
