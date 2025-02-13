'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider defaultTheme="dark" attribute="class" enableSystem={false}>
      <ForceDarkMode />
      {children}
    </NextThemesProvider>
  )
}

// 🚀 Force the "dark" class on <html> to ensure dark mode works
function ForceDarkMode() {
  React.useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return null;
}
