import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          
          {/* Left - Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Elevate
            </Link>
          </div>

          {/* Center - Navigation */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <nav className="hidden md:flex space-x-6">
              <Link href="/application" className="text-muted-foreground hover:text-primary text-center">
                Application
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary text-center">
                What We Do
              </Link>
              <Link href="/packages" className="text-muted-foreground hover:text-primary text-center">
                Packages & Pricing
              </Link>
            </nav>
          </div>

          {/* Right - Auth Buttons */}
          <div className="flex items-center">
            <Button variant="outline" className="mr-2" asChild>
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}