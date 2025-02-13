import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Elevate",
  description: "Your guide to studying and working abroad",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen flex flex-col bg-[rgb(0,0,128)]`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <MainNav />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

import "./globals.css"



import './globals.css'
