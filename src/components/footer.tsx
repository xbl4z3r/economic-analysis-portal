import Link from "next/link"
import { TrendingUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-slate-100 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Logo & Description */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg">
                <TrendingUp className="h-5 w-5 text-white transition-transform duration-300 group-hover:-rotate-12" />
              </div>
              <span className="font-semibold text-slate-900 transition-colors duration-200 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                Economia României
              </span>
            </Link>
            <p className="max-w-sm text-center text-sm text-slate-700 dark:text-slate-400 md:text-left">
              Portal de analiză economică dedicat înțelegerii fenomenelor de inflație și recesiune în context românesc și european.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:justify-end">
            <Link
              href="/inflatie"
              className="relative text-slate-700 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Inflație
            </Link>
            <Link
              href="/recesiune"
              className="relative text-slate-700 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Recesiune
            </Link>
            <Link
              href="/politici"
              className="relative text-slate-700 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              Politici
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-800">
          <p className="text-center text-sm text-slate-600 dark:text-slate-500">
            © {new Date().getFullYear()} <a href={"https://github.com/xbl4z3r"} className="text-slate-700 transition-colors duration-200 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400">Christian Petroniu</a> - Analiza Economiei României. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  )
}

