import Link from "next/link";
import {
  TrendingUp,
  TrendingDown,
  Building2,
  ArrowRight,
  BarChart3,
  AlertTriangle,
  Euro,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-slate-50 to-white py-24 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 sm:py-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f620_1px,transparent_1px),linear-gradient(to_bottom,#3b82f620_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e3a5f_1px,transparent_1px),linear-gradient(to_bottom,#1e3a5f_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        </div>

        {/* Floating Elements */}
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl dark:bg-blue-500/20" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl dark:bg-blue-600/20" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
              Dezechilibrul inflaționist și{" "}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300 bg-clip-text text-transparent">
                recesiunea economică
              </span>
            </h1>

            {/* Description */}
            <p className="mb-10 text-lg leading-8 text-slate-600 dark:text-slate-300 sm:text-xl">
              O analiză asupra contextului economic actual al României, explorând
              cauzele inflației și riscurile recesiunii într-un peisaj economic în
              continuă schimbare.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Link href="/inflatie">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Despre Inflație
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-slate-300 bg-white/80 text-slate-700 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-600 dark:bg-transparent dark:text-white dark:hover:bg-slate-800"
              >
                <Link href="/recesiune">
                  Despre Recesiune
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-blue-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">9%</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Rata Inflației în România
              </div>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400">21%</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                TVA propus (creștere)
              </div>
            </div>
            <div className="rounded-2xl border border-red-200 bg-white/80 p-6 text-center shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-800/50">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400">2T</div>
              <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                Trimestru pentru recesiune
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Înțelegeți economia românească
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Explorați principalele subiecte legate de dezechilibrele economice
              actuale
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Inflation Card */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-500/10">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Inflația</CardTitle>
                <CardDescription>
                  Dezechilibrul dintre masa monetară excedentară și volumul de bunuri
                  deficitar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Euro className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
                    <span>Rata de 9% în România</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <span>Peste media europeană</span>
                  </li>
                </ul>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href="/inflatie">
                    Citește mai mult
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Recession Card */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:shadow-red-500/10">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-red-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-400">
                  <TrendingDown className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Recesiunea</CardTitle>
                <CardDescription>
                  Scădere semnificativă a activității economice pe minim 2 trimestre
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <TrendingDown className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <span>Reducerea consumului</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                    <span>Creșterea șomajului</span>
                  </li>
                </ul>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href="/recesiune">
                    Citește mai mult
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Policies Card */}
            <Card className="group relative overflow-hidden transition-all hover:shadow-lg hover:shadow-emerald-500/10 sm:col-span-2 lg:col-span-1">
              <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-emerald-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <CardHeader>
                <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400">
                  <Building2 className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">Politici Guvernamentale</CardTitle>
                <CardDescription>
                  Măsuri de stabilizare economică și echilibrare bugetară
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Euro className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>Creșterea TVA și impozitelor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span>Înghețarea salariilor</span>
                  </li>
                </ul>
                <Button asChild variant="ghost" className="w-full justify-between">
                  <Link href="/politici">
                    Citește mai mult
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="border-t bg-muted/50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tight text-foreground">
              Contextul Economic Actual
            </h2>
            <div className="rounded-2xl border bg-card p-8 shadow-sm">
              <p className="mb-4 text-lg leading-relaxed text-card-foreground">
                România se confruntă în prezent cu provocări economice semnificative.
                Cu o rată a inflației de aproximativ{" "}
                <strong className="text-blue-600 dark:text-blue-400">9%</strong>,
                țara noastră se află alături de <strong>Estonia, Croația și Austria</strong>{" "}
                printre statele care depășesc media europeană.
              </p>
              <p className="mb-4 text-lg leading-relaxed text-card-foreground">
                Acest dezechilibru inflaționist este rezultatul mai multor factori,
                printre care creșterea veniturilor fără acoperire în productivitate,
                consumul excesiv pe credit și efectele perioadelor electorale cu &quot;sume mari de bani aruncate în piață&quot;.
              </p>
              <p className="text-lg leading-relaxed text-card-foreground">
                Guvernul a propus măsuri de stabilizare precum creșterea TVA de la 19% la 21%,
                majorări de impozite și înghețarea salariilor în sectorul bugetar - măsuri menite
                să prevină alunecarea către o recesiune economică.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
