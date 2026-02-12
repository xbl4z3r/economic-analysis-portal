"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TrendingDown, TrendingUp, Home, Building2, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"

const navItems = [
  { href: "/", label: "Acasă", icon: Home },
  { href: "/inflatie", label: "Inflație", icon: TrendingUp },
  { href: "/recesiune", label: "Recesiune", icon: TrendingDown },
  { href: "/politici", label: "Politici Guvernamentale", icon: Building2 },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
      scrolled
        ? "border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg dark:border-slate-800/80 dark:bg-slate-950/90"
        : "border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/80"
    )}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg">
            <TrendingUp className="h-5 w-5 text-white transition-transform duration-300 group-hover:-rotate-12" />
          </div>
          <span className="hidden font-semibold text-slate-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:inline-block">
            Economia României
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-blue-50 text-blue-700 shadow-sm dark:bg-blue-950/50 dark:text-blue-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <item.icon className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isActive ? "" : "group-hover:scale-110"
                )} />
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-blue-500" />
                )}
              </Link>
            )
          })}
        </div>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-900 active:scale-95 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white md:hidden"
            aria-label={mobileMenuOpen ? "Închide meniul" : "Deschide meniul"}
          >
            <span className="relative h-5 w-5">
              <Menu className={cn(
                "absolute inset-0 h-5 w-5 transition-all duration-300",
                mobileMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              )} />
              <X className={cn(
                "absolute inset-0 h-5 w-5 transition-all duration-300",
                mobileMenuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              )} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className={cn(
        "overflow-hidden border-t border-slate-200 bg-white transition-all duration-300 ease-in-out dark:border-slate-800 dark:bg-slate-950 md:hidden",
        mobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="space-y-1 px-4 py-3">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive
                    ? "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/50 dark:hover:text-white"
                )}
                style={{
                  transitionDelay: mobileMenuOpen ? `${index * 50}ms` : "0ms",
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(-10px)",
                  opacity: mobileMenuOpen ? 1 : 0
                }}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  )
}

