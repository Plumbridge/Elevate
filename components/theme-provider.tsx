'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="class" enableSystem={false}>
      <ForceDarkMode />
      {children}
    </NextThemesProvider>
  )
}

// Ensure <html> gets the "dark" class
function ForceDarkMode() {
  const { theme } = useTheme()
  
  React.useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [theme])

  return null
}
