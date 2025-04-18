import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { cn } from "@/lib/utils"
import EventSuppressor from "@/components/EventSuppressor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Elevate | Your Journey Begins Here",
  description: "Supporting students in their journey to study abroad",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body 
        className={cn(inter.className, "bg-background min-h-screen antialiased overflow-x-hidden")}
        suppressHydrationWarning
      >
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="fixed top-0 left-0 w-[60%] h-[60%] bg-purple-900/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="fixed bottom-0 right-0 w-[60%] h-[60%] bg-blue-900/20 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>
        <Navbar />
        <main className="flex-1 relative z-10">{children}</main>
        <Footer />
        <EventSuppressor />
      </body>
    </html>
  )
}