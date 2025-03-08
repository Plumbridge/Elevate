import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function ApplicationsPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Elevate Your University <span className="text-gradient">Application</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          Embark on your journey to academic excellence with Elevate's university application support. We're here to transform your aspirations into acceptances.
        </p>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Your Dream, Our Mission</h2>
          <p className="mb-6">
            At Elevate, we understand that your university application is more than just paperwork—it's the first step towards your future. Our expert team is dedicated to showcasing your unique potential to top institutions worldwide. We don't just assist with applications; we elevate your entire profile to stand out in a competitive environment.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Tailored Excellence</h2>
          <p className="mb-6">
            Every student is unique, and so is our approach. We craft a personalized strategy that aligns with your academic goals, extracurricular achievements, and career aspirations. From selecting the perfect universities to refining your personal statement, we ensure every aspect of your application reflects your best self.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Support Journey</h2>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-4">
              <strong>Discovery and Strategy:</strong> We begin with an in-depth consultation to understand your academic background, passions, and aspirations. Our experts then curate a list of universities that not only match your profile but also challenge you to reach higher.
            </li>
            <li className="mb-4">
              <strong>Application Mastery:</strong> Crafting the perfect application is an art, and we're here to help you master it. Our team guides you through each step, from decoding complex application requirements to strategically highlighting your achievements.
            </li>
            <li className="mb-4">
              <strong>Essay Excellence:</strong> Your personal statement and essays are your chance to shine. Our experienced writers and editors work closely with you to develop essays that truly reflect your voice and passion.
            </li>
            <li className="mb-4">
              <strong>Interview Preparation:</strong> For programs requiring interviews, we provide comprehensive preparation. Through mock interviews and personalized feedback, we help you articulate your thoughts clearly and handle tough questions with confidence.
            </li>
            <li className="mb-4">
              <strong>Ongoing Support and Guidance:</strong> Our commitment doesn't end with submission. We're with you every step of the way, from tracking application statuses to advising on acceptance decisions.
            </li>
          </ol>
        </div>
        <div className="mt-8">
          <Button variant="glow" size="lg" className="gap-2">
            <span>Schedule Your Free Consultation</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
