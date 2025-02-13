import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MainNav() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Elevate
            </Link>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Link href="/application" className="text-muted-foreground hover:text-primary">
              Application
            </Link>
            <Link href="/services" className="text-muted-foreground hover:text-primary">
              What We Do
            </Link>
            <Link href="/packages" className="text-muted-foreground hover:text-primary">
              Packages & Pricing
            </Link>
          </nav>
          <div className="flex items-center">
            <Button variant="outline" className="mr-2">
              Log in
            </Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
    </header>
  )
}

