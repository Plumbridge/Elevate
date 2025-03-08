import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function CulturalPreparationPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Embrace Your New <span className="text-gradient">Cultural Adventure</span>
        </h1>
        <p className="text-muted-foreground mb-8">
          At Elevate, we believe that cultural understanding is key to a successful and enriching study abroad experience. Our cultural preparation services ensure you're ready to thrive in your new environment.
        </p>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Beyond Language: Cultural Fluency</h2>
          <p className="mb-6">
            Language is just the beginning. Our comprehensive cultural preparation goes deeper, helping you understand social norms, etiquette, and unwritten rules of your host country. We equip you with the cultural intelligence to navigate your new environment with confidence.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Personalized Cultural Insights</h2>
          <p className="mb-6">
            Every culture is unique, and so is every student's background. Our team provides tailored cultural insights, considering both your home culture and your destination, to help you bridge cultural gaps effectively and avoid common pitfalls.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Cultural Preparation Journey</h2>
          <ol className="list-decimal list-inside mb-6">
            <li className="mb-4">
              <strong>Cultural Assessment and Goal Setting:</strong> We begin by understanding your current cultural knowledge and setting clear goals for your cultural adaptation. This personalized approach ensures that our preparation aligns with your specific needs and aspirations.
            </li>
            <li className="mb-4">
              <strong>Immersive Cultural Workshops:</strong> Participate in engaging, interactive workshops that bring your host country's culture to life. From communication styles to social etiquette, these sessions provide practical knowledge you can apply from day one in your new environment.
            </li>
            <li className="mb-4">
              <strong>Language Support and Resources:</strong> While we're not a language school, we provide resources and guidance to support your language learning journey. We'll help you find the best language learning tools and connect you with language exchange opportunities to practice before you depart.
            </li>
            <li className="mb-4">
              <strong>Navigating Academic Culture:</strong> Understanding the academic culture of your host country is crucial for success. We'll guide you through differences in teaching styles, classroom expectations, and academic integrity standards to ensure you're prepared for your new learning environment.
            </li>
            <li className="mb-4">
              <strong>Practical Life Skills and Safety:</strong> From using public transportation to understanding local healthcare systems, we provide practical advice on daily life in your host country. We also cover important safety information and strategies for maintaining your well-being while abroad.
            </li>
          </ol>
        </div>
        <div className="mt-8">
          <Button variant="glow" size="lg" className="gap-2">
            <span>Start Your Cultural Preparation</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
