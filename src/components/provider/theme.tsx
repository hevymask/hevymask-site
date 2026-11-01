'use client'

import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider() {
  return (
    <NextThemesProvider
      attribute="class"
      forcedTheme="dark"
      disableTransitionOnChange
    />
  )
}
