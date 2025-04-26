"use client"

import type React from "react"

import { useState } from "react"
import {
  BarChart3,
  BookOpen,
  Building,
  Calendar,
  CreditCard,
  FileText,
  GraduationCap,
  Home,
  LifeBuoy,
  Luggage,
  MessageSquare,
  Plane,
  Settings,
  User,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const sidebarItems = [
    { icon: Home, label: "Overview", href: "/dashboard" },
    { icon: GraduationCap, label: "Applications", href: "/dashboard/applications" },
    { icon: Plane, label: "Visa Support", href: "/dashboard/visa" },
    { icon: Building, label: "Accommodation", href: "/dashboard/accommodation" },
    { icon: CreditCard, label: "Financial Planning", href: "/dashboard/financial" },
    { icon: Luggage, label: "Cultural Preparation", href: "/dashboard/cultural" },
    { icon: BookOpen, label: "Career Support", href: "/dashboard/career" },
    { icon: Calendar, label: "Appointments", href: "/dashboard/appointments" },
    { icon: FileText, label: "Documents", href: "/dashboard/documents" },
    { icon: MessageSquare, label: "Messages", href: "/dashboard/messages" },
    { icon: BarChart3, label: "Progress", href: "/dashboard/progress" },
  ]

  const bottomSidebarItems = [
    { icon: LifeBuoy, label: "Help & Support", href: "/dashboard/support" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
  ]

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-20 flex h-full w-64 flex-col border-r border-primary/10 glass transition-transform duration-300 ease-in-out",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex h-16 items-center border-b border-primary/10 px-6">
          <Link href="/dashboard" className="flex items-center gap-2">
            <span className="text-xl font-bold text-gradient">Elevate Ed</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <nav className="grid gap-1 px-2">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-white font-medium"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-white",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t border-primary/10 py-4">
          <nav className="grid gap-1 px-2">
            {bottomSidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === item.href
                    ? "bg-primary/10 text-white font-medium"
                    : "text-muted-foreground hover:bg-primary/5 hover:text-white",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 px-4">
            <div className="flex items-center gap-3 rounded-lg bg-primary/5 p-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                <User className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Student</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar toggle */}
      <button
        className="fixed bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-primary md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        )}
      </button>

      {/* Main content */}
      <main className={cn("flex-1 transition-all duration-300 ease-in-out", isSidebarOpen ? "md:ml-64" : "ml-0")}>
        {children}
      </main>
    </div>
  )
}
