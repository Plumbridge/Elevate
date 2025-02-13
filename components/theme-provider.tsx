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

// 🚨 Directly force "dark" mode on <html> to ensure it applies
function ForceDarkMode() {
  React.useEffect(() => {
    document.documentElement.classList.add("dark");
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return null;
}
