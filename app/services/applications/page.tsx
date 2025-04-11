import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ChevronRight, FileText, Users, Award, BookOpen, GraduationCap } from "lucide-react"

export default function ApplicationsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      {/* Hero Section with Split Design */}
      <div className="grid md:grid-cols-2 gap-8 mb-16 items-center">
        <div>
          <Badge className="mb-4 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Application Services
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Transform Your <span className="text-gradient">University Applications</span> Journey
          </h1>
          <p className="text-muted-foreground mb-8">
            Expert guidance to strengthen your university applications and increase your chances of acceptance to your
            dream institutions. Our personalized approach ensures that every aspect of your application reflects your
            best self.
          </p>
          <Button size="lg" variant="glow" className="gap-2">
            <span>Start Your Application Journey</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-100 dark:bg-purple-900/30 rounded-full z-0"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full z-0"></div>
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <FileText className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Essay Excellence</h3>
              <p className="text-sm text-muted-foreground">Compelling personal statements that stand out</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <Users className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Expert Guidance</h3>
              <p className="text-sm text-muted-foreground">Personalized support from admission specialists</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center">
              <Award className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">Proven Results</h3>
              <p className="text-sm text-muted-foreground">95% acceptance rate to top choice schools</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm h-48 flex flex-col justify-center mt-8">
              <GraduationCap className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold mb-1">University Selection</h3>
              <p className="text-sm text-muted-foreground">Find the perfect academic fit for your goals</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">How We Help You Succeed</h2>
          <p className="mb-6 text-muted-foreground">
            At Elevate, we understand that your university application is more than just paperwork—it's the first step
            towards your future. Our expert team is dedicated to showcasing your unique potential to top institutions
            worldwide.
          </p>
          <p className="mb-6 text-muted-foreground">
            We don't just assist with applications; we elevate your entire profile to stand out in a competitive
            environment. Our personalized approach ensures that every aspect of your application reflects your best
            self.
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-100 dark:bg-purple-900 rounded-full p-1">
                <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <span className="font-medium">Personalized Strategy</span> - Tailored to your academic goals and career
                aspirations
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-100 dark:bg-purple-900 rounded-full p-1">
                <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <span className="font-medium">Expert Guidance</span> - From university selection to application
                submission
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-100 dark:bg-purple-900 rounded-full p-1">
                <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <span className="font-medium">Essay Excellence</span> - Develop compelling personal statements that
                stand out
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 bg-purple-100 dark:bg-purple-900 rounded-full p-1">
                <CheckCircle className="h-4 w-4 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <span className="font-medium">Application Review</span> - Comprehensive review to ensure quality and
                accuracy
              </div>
            </div>
          </div>
        </div>
        <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-6 h-fit">
          <h3 className="text-xl font-semibold mb-4">Why Choose Our Application Services</h3>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 h-12 w-12 flex items-center justify-center shrink-0">
                <Users className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h4 className="font-medium">Expert Consultants</h4>
                <p className="text-sm text-muted-foreground">
                  Our advisors have helped thousands of students gain admission to top universities
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 h-12 w-12 flex items-center justify-center shrink-0">
                <FileText className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h4 className="font-medium">Personalized Essays</h4>
                <p className="text-sm text-muted-foreground">
                  Craft compelling personal statements that showcase your unique story and strengths
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 h-12 w-12 flex items-center justify-center shrink-0">
                <Award className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h4 className="font-medium">Proven Results</h4>
                <p className="text-sm text-muted-foreground">
                  95% of our students are accepted to at least one of their top three university choices
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 h-12 w-12 flex items-center justify-center shrink-0">
                <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-300" />
              </div>
              <div>
                <h4 className="font-medium">Comprehensive Support</h4>
                <p className="text-sm text-muted-foreground">
                  Guidance through every step of the application process, from start to finish
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Our Process
          </Badge>
          <h2 className="text-3xl font-bold mb-4">The Application Journey</h2>
          <p className="text-muted-foreground">
            Our structured approach ensures we cover every aspect of your university application
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-600 dark:text-purple-300">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery and Strategy</h3>
              <p className="text-sm text-muted-foreground">
                We begin with an in-depth consultation to understand your academic background, passions, and
                aspirations. Our experts then curate a list of universities that match your profile.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-600 dark:text-purple-300">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Application Mastery</h3>
              <p className="text-sm text-muted-foreground">
                Crafting the perfect application is an art. Our team guides you through each step, from decoding complex
                application requirements to strategically highlighting your achievements.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-600 dark:text-purple-300">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Essay Excellence</h3>
              <p className="text-sm text-muted-foreground">
                Your personal statement and essays are your chance to shine. Our experienced writers and editors work
                closely with you to develop essays that truly reflect your voice and passion.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-600 dark:text-purple-300">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Interview Preparation</h3>
              <p className="text-sm text-muted-foreground">
                For programs requiring interviews, we provide comprehensive preparation. Through mock interviews and
                personalized feedback, we help you articulate your thoughts clearly.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-purple-600 dark:text-purple-300">5</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
              <p className="text-sm text-muted-foreground">
                Our commitment doesn't end with submission. We're with you every step of the way, from tracking
                application statuses to advising on acceptance decisions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-16">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="mb-2 px-3 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
            Success Stories
          </Badge>
          <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-muted-foreground">
            Hear from students who achieved their academic goals with our application services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                <div>
                  <h4 className="font-bold">Sarah J.</h4>
                  <p className="text-xs text-muted-foreground">Accepted to Stanford University</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "The application process seemed overwhelming until I found Elevate. Their step-by-step guidance and
                essay support made all the difference. I couldn't be happier with my acceptance to Stanford!"
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                <div>
                  <h4 className="font-bold">Michael T.</h4>
                  <p className="text-xs text-muted-foreground">Accepted to Columbia University</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "My consultant helped me transform my personal statement from good to exceptional. Their interview prep
                was also invaluable—I felt confident and prepared when meeting with admissions officers."
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100"></div>
                <div>
                  <h4 className="font-bold">Aisha K.</h4>
                  <p className="text-xs text-muted-foreground">Accepted to Oxford University</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "As an international student, I was worried about navigating the complex application process. Elevate's
                team provided clear guidance and helped me showcase my unique perspective. I'm thrilled with my Oxford
                acceptance!"
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
          <h2 className="text-3xl font-bold mb-4">Common Questions</h2>
          <p className="text-muted-foreground">Answers to frequently asked questions about our application services</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">When should I start working with you?</h3>
              <p className="text-sm text-muted-foreground">
                Ideally, we recommend starting 12-18 months before your application deadlines. This gives us ample time
                to develop a strong strategy, craft compelling essays, and prepare thoroughly for interviews. However,
                we also offer accelerated services for students with tighter timelines.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">How do you match me with a consultant?</h3>
              <p className="text-sm text-muted-foreground">
                We carefully pair you with a consultant based on your academic interests, target universities, and
                personal background. Our consultants have specialized knowledge of specific fields and institutions,
                ensuring you receive the most relevant guidance for your unique situation.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">Do you write essays for students?</h3>
              <p className="text-sm text-muted-foreground">
                No, we never write essays for students. Our role is to guide, provide feedback, and help you develop
                your authentic voice. We help you brainstorm ideas, structure your essays, and refine your writing, but
                the content and perspective are always your own.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-purple-100 dark:border-gray-700">
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-2">What's your success rate?</h3>
              <p className="text-sm text-muted-foreground">
                95% of our students are accepted to at least one of their top three choice universities. While we can't
                guarantee admission to specific institutions, our comprehensive approach significantly improves your
                chances of success at competitive universities.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Ready to Strengthen Your Application?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Schedule a free consultation to discuss your goals and learn how we can help you craft a standout university
          application.
        </p>
        <Button size="lg" variant="glow" className="gap-2">
          <span>Schedule Your Free Consultation</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
