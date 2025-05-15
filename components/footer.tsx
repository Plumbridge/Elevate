import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const studyAbroadTips = [
  "Start your application process at least 12 months before your planned departure",
  "Research scholarship opportunities specific to your destination country",
  "Prepare for language proficiency tests well in advance",
  "Connect with alumni who studied at your target universities",
  "Understand the cultural differences to prepare for smooth adaptation",
  "Budget for hidden costs like health insurance and living expenses",
]

export default function Footer() {
  return (
    <footer className="relative z-10 mt-16">
      <div className="glass border-t border-border/50">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="text-2xl font-bold text-gradient">
                Elevate
              </Link>
              <p className="text-muted-foreground">
                Supporting students worldwide in their journey to study abroad and elevate their futures.
              </p>
              <div className="flex space-x-3">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Instagram className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Youtube className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-white">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-muted-foreground hover:text-white">
                    Student Success Stories
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/applications" className="text-muted-foreground hover:text-white">
                    University Applications
                  </Link>
                </li>
                <li>
                  <Link href="/services/visa" className="text-muted-foreground hover:text-white">
                    Visa Support
                  </Link>
                </li>
                <li>
                  <Link href="/services/accommodation" className="text-muted-foreground hover:text-white">
                    Accommodation Assistance
                  </Link>
                </li>
                <li>
                  <Link href="/services/financial" className="text-muted-foreground hover:text-white">
                    Financial Planning
                  </Link>
                </li>
                <li>
                  <Link href="/services/cultural" className="text-muted-foreground hover:text-white">
                    Cultural Preparation
                  </Link>
                </li>
                <li>
                  <Link href="/services/career" className="text-muted-foreground hover:text-white">
                    Career Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Study Abroad Tips */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Study Abroad Tips</h3>
              <div className="relative h-36 overflow-hidden">
                <div className="absolute inset-0 study-tips-scroll">
                  {studyAbroadTips.map((tip, index) => (
                    <div key={index} className="py-2 flex items-start gap-2">
                      <div className="min-w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-xs text-primary-foreground">{index + 1}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{tip}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-12 pt-6 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Elevate. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-white">
                Terms of Service
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-white">
                FAQs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
