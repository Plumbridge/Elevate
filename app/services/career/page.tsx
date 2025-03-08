import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

export default function CareerSupportPage() {
  return (
    <div className="container mx-auto py-24 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Launch Your Global <span className="text-gradient">Career</span> with Elevate
        </h1>
        <p className="text-muted-foreground mb-8">
          Your international education is just the beginning. Elevate has partnered with CareerLaunch International to provide comprehensive career support services designed to help you leverage your global experience and launch a successful international career.
        </p>
        <div className="text-left">
          <h2 className="text-2xl font-semibold mb-4">Global Opportunities</h2>
          <p className="mb-6">
            Access a vast network of global employers and job opportunities. Whether you're looking to work in your host country or return home, CareerLaunch International connects you with the right opportunities to kickstart your international career.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Expert Career Guidance</h2>
          <p className="mb-6">
            Benefit from personalized advice from career experts who understand the global job market. Navigate your career path with confidence, backed by insights tailored to your unique skills, experiences, and aspirations.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Discover Our Career Support Services</h2>
          <ul className="list-disc list-inside mb-6">
            <li className="mb-4">
              <strong>Career Planning:</strong> Develop a strategic career plan that leverages your international education and aligns with the global job market.
            </li>
            <li className="mb-4">
              <strong>Job Search Support:</strong> Access exclusive job listings, get introductions to employers, and receive guidance throughout your job search process.
            </li>
            <li className="mb-4">
              <strong>Interview Preparation:</strong> Master the art of interviewing in different cultural contexts with mock interviews and feedback sessions.
            </li>
          </ul>
        </div>
        <div className="mt-8">
          <Button variant="glow" size="lg" className="gap-2">
            <span>Explore CareerLaunch International</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
