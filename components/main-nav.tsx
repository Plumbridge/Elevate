"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"

export function MainNav() {
  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4">
        {/* Outer container flex: brand on the left, nav+auth on the right */}
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo/Brand */}
          <Link href="/" className="text-2xl font-bold text-primary">
            Elevate
          </Link>

          {/* Right: Nav links + Auth buttons in one row */}
          <div className="flex items-center space-x-8">
            {/* Nav links */}
            <nav className="flex items-center space-x-6 text-lg">
              <Link
                href="/application"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Application
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-lg text-muted-foreground hover:text-primary transition-colors"
                  >
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-48">
                  <DropdownMenuItem asChild>
                    <Link href="/services/university-application">
                      University Application
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/visa-support">Visa Support</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/accommodation">Accommodation</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/financial-planning">
                      Financial Planning
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/cultural-preparation">
                      Cultural Preparation
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/services/career-support">
                      Career Support
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/packages"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Packages & Pricing
              </Link>
            </nav>

            {/* Auth buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="outline" asChild>
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
