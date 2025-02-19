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
    <header className="px-4 lg:px-6 h-16 flex items-center border-b border-white/10">
      {/* Left: Logo */}
      <Link className="flex items-center justify-center" href="/">
        <span className="font-bold text-xl text-primary">Elevate</span>
      </Link>

      {/* Middle/Right: Nav links and Auth buttons */}
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link
          href="/application"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Application
        </Link>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="text-sm font-medium hover:text-primary transition-colors">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56 bg-black/90 backdrop-blur-sm">
            <DropdownMenuItem asChild>
              <Link href="/services/university-application" className="cursor-pointer">
                University Application
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/visa-support" className="cursor-pointer">
                Visa Support
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/accommodation" className="cursor-pointer">
                Accommodation
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/financial-planning" className="cursor-pointer">
                Financial Planning
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/cultural-preparation" className="cursor-pointer">
                Cultural Preparation
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/services/career-support" className="cursor-pointer">
                Career Support
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link
          href="/packages"
          className="text-sm font-medium hover:text-primary transition-colors"
        >
          Packages & Pricing
        </Link>
      </nav>

      {/* Right: Auth buttons */}
      <div className="ml-4 flex items-center gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <Button size="sm" asChild>
          <Link href="/signup">Sign up</Link>
        </Button>
      </div>
    </header>
  )
}
