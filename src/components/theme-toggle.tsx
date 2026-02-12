"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9 relative overflow-hidden">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-9 w-9 relative overflow-hidden group"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <span className="relative flex items-center justify-center">
        <Sun className={`h-4 w-4 text-amber-500 transition-all duration-500 ${
          theme === "dark" 
            ? "rotate-90 scale-0 opacity-0" 
            : "rotate-0 scale-100 opacity-100"
        }`} />
        <Moon className={`absolute h-4 w-4 text-blue-400 transition-all duration-500 ${
          theme === "dark" 
            ? "rotate-0 scale-100 opacity-100" 
            : "-rotate-90 scale-0 opacity-0"
        }`} />
      </span>
      <span className="sr-only">Schimbă tema</span>
    </Button>
  )
}

