"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  {
    name: "Services",
    href: "/services",
    submenu: [
      { name: "University Applications", href: "/services/applications" },
      { name: "Visa Support", href: "/services/visa" },
      { name: "Accommodation", href: "/services/accommodation" },
      { name: "Financial Planning", href: "/services/financial" },
      { name: "Cultural Preparation", href: "/services/cultural" },
      { name: "Career Support", href: "/services/career" },
    ],
  },
  // { name: "Universities", href: "/universities" },
  { name: "Student Dashboard", href: "/dashboard" },
  { name: "Packages & Pricing", href: "/pricing" },
  { name: "AI", href: "#", isModal: true },
  // { name: "Resources", href: "/resources" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [isAIModalOpen, setIsAIModalOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const toggleAIModal = () => {
    setIsAIModalOpen(!isAIModalOpen)
  }

  return (
    <header>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 py-4",
          isScrolled ? "glass shadow-md py-3" : "bg-transparent py-4",
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gradient">
            Elevate Ed
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navLinks.map((link) => (
                <li key={link.name} className="relative">
                  {link.submenu ? (
                    <div
                      className="flex items-center cursor-pointer group relative"
                      onMouseEnter={() => setActiveSubmenu(link.name)}
                      onMouseLeave={() => setActiveSubmenu(null)}
                    >
                      <span className="text-muted-foreground hover:text-white transition-colors">
                        {link.name}
                      </span>
                      <ChevronDown className="ml-1 h-4 w-4 text-muted-foreground group-hover:text-white" />

                      {activeSubmenu === link.name && (
                        <>
                          {/* Invisible bridge for hover */}
                          <div className="absolute h-3 w-full bottom-0 left-0 translate-y-full" />
                          <div className="absolute top-full left-0 pt-3 w-48 z-50">
                            <div className="glass rounded-lg shadow-lg p-2">
                              {link.submenu.map((sublink) => (
                                <Link
                                  key={sublink.name}
                                  href={sublink.href}
                                  className="block px-4 py-2 text-sm rounded-md hover:bg-accent/20 text-muted-foreground hover:text-white transition-colors"
                                >
                                  {sublink.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  ) : link.isModal ? (
                    <button
                      onClick={toggleAIModal}
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="flex space-x-3">
              <Button variant="glass" size="sm">
                Login
              </Button>
              <Button variant="glow" size="sm">
                Get Consultation
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-white"
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-40 glass md:hidden overflow-auto"
          >
            <div className="container mx-auto py-8 px-4">
              <ul className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name} className="py-2">
                    {link.submenu ? (
                      <div className="space-y-2">
                        <div
                          className="flex items-center justify-between"
                          onClick={() =>
                            setActiveSubmenu(
                              activeSubmenu === link.name ? null : link.name,
                            )
                          }
                        >
                          <span className="text-lg font-medium">
                            {link.name}
                          </span>
                          <ChevronDown
                            className={cn(
                              "h-5 w-5 transition-transform",
                              activeSubmenu === link.name ? "rotate-180" : "",
                            )}
                          />
                        </div>

                        {activeSubmenu === link.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="pl-4 space-y-2 border-l-2 border-primary/30"
                          >
                            {link.submenu.map((sublink) => (
                              <Link
                                key={sublink.name}
                                href={sublink.href}
                                className="block py-2 text-muted-foreground hover:text-white"
                                onClick={toggleMobileMenu}
                              >
                                {sublink.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : link.isModal ? (
                      <button
                        onClick={() => {
                          toggleMobileMenu()
                          toggleAIModal()
                        }}
                        className="text-lg font-medium"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-lg font-medium"
                        onClick={toggleMobileMenu}
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col space-y-3">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button variant="glow" className="w-full">
                  Get Consultation
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* AI Modal with iframe */}
      <AnimatePresence>
        {isAIModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-background rounded-lg shadow-xl w-full max-w-6xl h-[80vh] flex flex-col"
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-xl font-semibold">AI Assistant</h2>
                <Button variant="ghost" size="icon" onClick={toggleAIModal}>
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex-grow relative">
                <iframe
                  src="https://lobe-chat-ashy-tau.vercel.app/chat?session=inbox"
                  className="w-full h-full border-none"
                  title="AI Assistant"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
