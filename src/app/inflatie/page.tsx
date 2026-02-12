import { Metadata } from "next";
import {
  TrendingUp,
  Wallet,
  ShoppingCart,
  Factory,
  Import,
  Receipt,
  Vote,
  AlertCircle,
  Globe,
  BarChart3,
  ArrowUpRight,
  ArrowRight,
  RefreshCw,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Inflația în România | Analiză Economică",
  description: "Analiza cauzelor inflației de 9% în România și contextul european.",
};

const causes = [
  {
    icon: Wallet,
    title: "Creșterea veniturilor fără productivitate",
    description:
      "În 2025, veniturile au crescut fără o acoperire corespunzătoare în productivitate, creând un dezechilibru între cerere și ofertă.",
    color: "blue",
  },
  {
    icon: ShoppingCart,
    title: "Creșterea consumului și creditului",
    description:
      "Expansiunea creditului de consum a alimentat cererea agregată, contribuind la presiunile inflaționiste.",
    color: "purple",
  },
  {
    icon: Factory,
    title: "Scăderea producției interne",
    description:
      "Falimentul firmelor și reducerea producției interne au limitat oferta de bunuri pe piață.",
    color: "red",
  },
  {
    icon: Import,
    title: "Importuri excesive",
    description:
      "Deficitul comercial cauzat de importurile masive a pus presiune pe balanța de plăți și pe cursul valutar.",
    color: "amber",
  },
  {
    icon: Receipt,
    title: "Deficit bugetar și împrumuturi",
    description:
      "Deficitul bugetar peste limitele admise și împrumuturile excesive au contribuit la creșterea masei monetare.",
    color: "emerald",
  },
  {
    icon: Vote,
    title: "Efectul perioadelor electorale",
    description:
      'În perioadele electorale, "sume mari de bani aruncate în piață" au amplificat dezechilibrele monetare.',
    color: "cyan",
  },
];

const spiralSteps = [
  {
    id: 1,
    title: "Cresc indicii de prețuri (INFLAȚIE)",
    description: "Prețurile bunurilor și serviciilor cresc generalizat",
    icon: TrendingUp,
    color: "red",
  },
  {
    id: 2,
    title: "Cresc salariile",
    description: "Angajații cer salarii mai mari pentru a face față costurilor",
    icon: Wallet,
    color: "blue",
  },
  {
    id: 3,
    title: "Cresc costurile de producție",
    description: "Companiile suportă costuri mai mari cu forța de muncă",
    icon: Factory,
    color: "purple",
  },
  {
    id: 4,
    title: "Cresc prețurile materiilor prime",
    description: "Materiile prime devin tot mai scumpe pe piață",
    icon: ShoppingCart,
    color: "amber",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-blue-100 dark:bg-blue-950",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-800",
  },
  purple: {
    bg: "bg-purple-100 dark:bg-purple-950",
    text: "text-purple-600 dark:text-purple-400",
    border: "border-purple-200 dark:border-purple-800",
  },
  red: {
    bg: "bg-red-100 dark:bg-red-950",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-200 dark:border-red-800",
  },
  amber: {
    bg: "bg-amber-100 dark:bg-amber-950",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800",
  },
  emerald: {
    bg: "bg-emerald-100 dark:bg-emerald-950",
    text: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800",
  },
  cyan: {
    bg: "bg-cyan-100 dark:bg-cyan-950",
    text: "text-cyan-600 dark:text-cyan-400",
    border: "border-cyan-200 dark:border-cyan-800",
  },
};

const euCountries = [
  { name: "România", rate: 9, flag: "🇷🇴", highlight: true },
  { name: "Estonia", rate: 8.5, flag: "🇪🇪", highlight: true },
  { name: "Croația", rate: 7.8, flag: "🇭🇷", highlight: true },
  { name: "Austria", rate: 7.2, flag: "🇦🇹", highlight: true },
  { name: "Media UE", rate: 5.5, flag: "🇪🇺", highlight: false },
  { name: "Germania", rate: 4.2, flag: "🇩🇪", highlight: false },
  { name: "Franța", rate: 4.0, flag: "🇫🇷", highlight: false },
];

export default function InflatiePage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-blue-50 via-slate-50 to-white py-16 dark:border-slate-800 dark:from-blue-950/30 dark:via-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 animate-fade-in">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 shadow-sm dark:bg-blue-950">
              <TrendingUp className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 shadow-sm dark:bg-blue-950 dark:text-blue-300">
              Rată: 9%
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Inflația în România
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Inflația reprezintă dezechilibrul dintre masa monetară excedentară și volumul
            de bunuri deficitar, afectând puterea de cumpărare a populației.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Definition Card */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg shadow-blue-100/50 transition-all duration-300 hover:shadow-xl dark:border-blue-800 dark:from-blue-950/50 dark:to-slate-950 dark:shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <AlertCircle className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  Definiție
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed text-card-foreground">
                  <strong className="text-blue-600 dark:text-blue-400">Inflația</strong> este
                  dezechilibrul dintre <em>masa monetară excedentară</em> și <em>volumul de
                  bunuri deficitar</em>. Aceasta se manifestă prin creșterea generalizată
                  și susținută a prețurilor bunurilor și serviciilor, erodând puterea de
                  cumpărare a monedei naționale.
                </p>
              </CardContent>
            </Card>

            {/* EU Context Card */}
            <Card className="border-2 border-slate-200 shadow-lg shadow-slate-100/50 transition-all duration-300 hover:shadow-xl dark:border-slate-700 dark:shadow-none">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Globe className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                  Context European
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-muted-foreground">
                  România, alături de Estonia, Croația și Austria, depășește media europeană
                  în ceea ce privește rata inflației.
                </p>
                <div className="space-y-3">
                  {euCountries.map((country) => (
                    <div
                      key={country.name}
                      className={`flex items-center justify-between rounded-lg p-3 transition-all duration-200 hover:scale-[1.02] ${
                        country.highlight
                          ? "bg-amber-50 shadow-sm dark:bg-amber-950/30"
                          : "bg-slate-50 dark:bg-slate-800/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{country.flag}</span>
                        <span className={country.highlight ? "font-medium" : ""}>
                          {country.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div
                          className="h-2 rounded-full bg-blue-500"
                          style={{ width: `${country.rate * 10}px` }}
                        />
                        <span
                          className={`font-mono text-sm ${
                            country.highlight
                              ? "font-bold text-amber-600 dark:text-amber-400"
                              : "text-muted-foreground"
                          }`}
                        >
                          {country.rate}%
                        </span>
                        {country.highlight && (
                          <ArrowUpRight className="h-4 w-4 text-amber-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Inflationary Spiral Diagram */}
          <div className="mt-12">
            <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white dark:border-orange-800 dark:from-orange-950/30 dark:to-slate-950">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-2 text-2xl">
                  <RefreshCw className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                  Spirala Inflațonistă
                </CardTitle>
                <CardDescription className="text-base">
                  Ciclul vicios al inflației: cum creșterea salariilor și a prețurilor se alimentează reciproc
                </CardDescription>
              </CardHeader>
              <CardContent>
                {/* Desktop Spiral View - Plus Layout with Simple Arrows */}
                <div className="hidden md:block">
                  <div className="relative mx-auto flex flex-col items-center gap-6 py-8">
                    {/* Top Card - INFLAȚIE */}
                    {(() => {
                      const step = spiralSteps[0];
                      const colors = colorClasses[step.color as keyof typeof colorClasses];
                      return (
                        <div className={`w-72 rounded-xl border-2 ${colors.border} bg-white p-5 shadow-lg transition-transform hover:scale-105 dark:bg-slate-900`}>
                          <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}>
                            <step.icon className={`h-6 w-6 ${colors.text}`} />
                          </div>
                          <h4 className="text-base font-bold text-foreground">{step.title}</h4>
                          <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      );
                    })()}

                    {/* Arrow from Top to Right */}
                    <div className="absolute right-[calc(50%-250px)] top-30 flex items-center justify-center">
                      <ArrowRight className="h-16 w-16 rotate-45 text-orange-500" />
                    </div>

                    {/* Arrow from Left to Top */}
                    <div className="absolute left-[calc(50%-250px)] top-30 flex items-center justify-center">
                      <ArrowRight className="h-16 w-16 -rotate-45 text-orange-500" />
                    </div>

                    {/* Middle Row */}
                    <div className="flex w-full max-w-5xl items-center justify-between gap-8">
                      {/* Left Card - Materii prime */}
                      {(() => {
                        const step = spiralSteps[3];
                        const colors = colorClasses[step.color as keyof typeof colorClasses];
                        return (
                          <div className={`w-72 rounded-xl border-2 ${colors.border} bg-white p-5 shadow-lg transition-transform hover:scale-105 dark:bg-slate-900`}>
                            <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}>
                              <step.icon className={`h-6 w-6 ${colors.text}`} />
                            </div>
                            <h4 className="text-base font-bold text-foreground">{step.title}</h4>
                            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        );
                      })()}

                      {/* Central Spiral Icon */}
                      <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-4 border-orange-400 bg-gradient-to-br from-orange-100 to-orange-200 shadow-xl dark:border-orange-500 dark:from-orange-900 dark:to-orange-800">
                        <RefreshCw className="h-10 w-10 animate-spin text-orange-600 dark:text-orange-400" style={{ animationDuration: '8s' }} />
                      </div>

                      {/* Right Card - Salarii */}
                      {(() => {
                        const step = spiralSteps[1];
                        const colors = colorClasses[step.color as keyof typeof colorClasses];
                        return (
                          <div className={`w-72 rounded-xl border-2 ${colors.border} bg-white p-5 shadow-lg transition-transform hover:scale-105 dark:bg-slate-900`}>
                            <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}>
                              <step.icon className={`h-6 w-6 ${colors.text}`} />
                            </div>
                            <h4 className="text-base font-bold text-foreground">{step.title}</h4>
                            <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                          </div>
                        );
                      })()}
                    </div>

                    {/* Arrow from Right to Bottom */}
                    <div className="absolute bottom-30 right-[calc(50%-250px)] flex items-center justify-center">
                      <ArrowRight className="h-16 w-16 rotate-135 text-orange-500" />
                    </div>

                    {/* Arrow from Bottom to Left */}
                    <div className="absolute bottom-30 left-[calc(50%-250px)] flex items-center justify-center">
                      <ArrowRight className="h-16 w-16 -rotate-135 text-orange-500" />
                    </div>

                    {/* Bottom Card - Costuri producție */}
                    {(() => {
                      const step = spiralSteps[2];
                      const colors = colorClasses[step.color as keyof typeof colorClasses];
                      return (
                        <div className={`w-72 rounded-xl border-2 ${colors.border} bg-white p-5 shadow-lg transition-transform hover:scale-105 dark:bg-slate-900`}>
                          <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}>
                            <step.icon className={`h-6 w-6 ${colors.text}`} />
                          </div>
                          <h4 className="text-base font-bold text-foreground">{step.title}</h4>
                          <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                        </div>
                      );
                    })()}

                  </div>
                </div>

                {/* Mobile Linear View */}
                <div className="md:hidden">
                  <div className="space-y-4">
                    {spiralSteps.map((step, index) => {
                      const colors = colorClasses[step.color as keyof typeof colorClasses];
                      return (
                        <div key={step.id}>
                          <div className={`rounded-xl border-2 ${colors.border} bg-white p-4 dark:bg-slate-900`}>
                            <div className="flex items-start gap-4">
                              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${colors.bg}`}>
                                <step.icon className={`h-6 w-6 ${colors.text}`} />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground">{step.title}</h4>
                                <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                              </div>
                            </div>
                          </div>
                          {index < spiralSteps.length - 1 && (
                            <div className="flex justify-center py-2">
                              <ArrowRight className="h-6 w-6 rotate-90 text-orange-400" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                    {/* Loop back indicator */}
                    <div className="flex items-center justify-center gap-2 rounded-lg bg-orange-100 p-3 dark:bg-orange-950/50">
                      <RefreshCw className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                      <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
                        Ciclul se repetă continuu
                      </span>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                <div className="mt-8 rounded-lg bg-orange-50 p-4 dark:bg-orange-950/30">
                  <p className="text-center text-sm text-orange-800 dark:text-orange-200">
                    <strong>Spirala inflațonistă</strong> descrie fenomenul în care creșterea salariilor duce la
                    creșterea costurilor de producție, care determină creșterea prețurilor, reducând puterea de
                    cumpărare și generând noi cereri de majorare salarială. Acest ciclu se auto-întreține și
                    poate accelera inflația dacă nu este întrerupt prin politici economice adecvate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50 to-white py-16 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm dark:bg-blue-950 dark:text-blue-300">
              <BarChart3 className="h-4 w-4" />
              Rata de 9%
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Cauzele Inflației în România
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Rata inflației de 9% este rezultatul combinării mai multor factori
              economici și politici
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {causes.map((cause, index) => {
              const colors = colorClasses[cause.color as keyof typeof colorClasses];
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-2 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 ${colors.border}`}
                >
                  <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-gradient-to-br from-current to-transparent opacity-5 transition-transform duration-300 group-hover:scale-150" />
                  <CardHeader>
                    <div
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${colors.bg}`}
                    >
                      <cause.icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <CardTitle className="text-lg">{cause.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {cause.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <h2 className="mb-4 text-2xl font-bold text-card-foreground">
              Concluzie
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Inflația de 9% în România este rezultatul unui complex de factori
              interconectați: de la politici fiscale expansioniste și cheltuieli
              publice ineficiente, până la dezechilibre structurale în economie și
              efectele ciclurilor electorale. Această situație plasează România
              printre țările cu cele mai mari rate ale inflației din Uniunea Europeană,
              necesitând măsuri urgente de stabilizare.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

