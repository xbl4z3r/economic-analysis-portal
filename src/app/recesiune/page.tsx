import { Metadata } from "next";
import {
  TrendingDown,
  AlertTriangle,
  Users,
  CreditCard,
  Frown,
  Plane,
  HandCoins,
  ArrowDown,
  Clock,
  LineChart,
  ShoppingBag,
  PiggyBank,
  Building,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Recesiunea Economică | Analiză Economică",
  description: "Înțelegeți recesiunea economică, tranziția de la inflație și efectele sociale.",
};

const socialEffects = [
  {
    icon: Users,
    title: "Creșterea șomajului",
    description:
      "Companiile reduc personalul pentru a face față costurilor crescute și cererii în scădere.",
    severity: "high",
  },
  {
    icon: CreditCard,
    title: "Dificultăți în creditare",
    description:
      "Băncile înăspresc condițiile de creditare, limitând accesul la finanțare pentru persoane și companii.",
    severity: "high",
  },
  {
    icon: Frown,
    title: "Pesimismul populației",
    description:
      "Încrederea consumatorilor scade, ducând la amânarea achizițiilor și a investițiilor.",
    severity: "medium",
  },
  {
    icon: Plane,
    title: "Migrația forței de muncă",
    description:
      "Lipsa oportunităților determină emigrarea forței de muncă calificate către alte țări.",
    severity: "high",
  },
  {
    icon: HandCoins,
    title: "Accentuarea sărăciei",
    description:
      "Scăderea veniturilor și creșterea prețurilor afectează disproporționat categoriile vulnerabile.",
    severity: "critical",
  },
];

const severityClasses = {
  critical: {
    bg: "bg-red-100 dark:bg-red-950",
    text: "text-red-600 dark:text-red-400",
    border: "border-red-200 dark:border-red-800",
    badge: "bg-red-500",
  },
  high: {
    bg: "bg-amber-100 dark:bg-amber-950",
    text: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800",
    badge: "bg-amber-500",
  },
  medium: {
    bg: "bg-yellow-100 dark:bg-yellow-950",
    text: "text-yellow-600 dark:text-yellow-400",
    border: "border-yellow-200 dark:border-yellow-800",
    badge: "bg-yellow-500",
  },
};

const transitionSteps = [
  {
    icon: TrendingDown,
    title: "Dezechilibru inflaționist",
    description: "Prețurile cresc rapid, erodând puterea de cumpărare",
  },
  {
    icon: ShoppingBag,
    title: "Reducerea consumului",
    description: "Consumatorii își restrâng cheltuielile",
  },
  {
    icon: PiggyBank,
    title: "Scăderea investițiilor",
    description: "Companiile amână sau anulează proiectele de investiții",
  },
  {
    icon: Building,
    title: "Reducerea profiturilor",
    description: "Afacerile se confruntă cu marje de profit în scădere",
  },
  {
    icon: LineChart,
    title: "Contracție economică",
    description: "PIB-ul scade pentru cel puțin 2 trimestre consecutive",
  },
];

export default function RecesiunePage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-red-50/70 via-slate-50 to-white py-16 dark:border-slate-800 dark:from-red-950/30 dark:via-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 animate-fade-in">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 shadow-sm dark:bg-red-950">
              <TrendingDown className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <span className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700 shadow-sm dark:bg-red-950 dark:text-red-300">
              Risc Economic
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-foreground sm:text-5xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Recesiunea Economică
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Înțelegeți ce înseamnă o recesiune, cum se ajunge la ea din dezechilibrul
            inflaționist și care sunt efectele sociale majore.
          </p>
        </div>
      </section>

      {/* Definition Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-red-200/70 bg-gradient-to-br from-red-50/50 to-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-red-800 dark:from-red-950/50 dark:to-slate-950 dark:shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                Definiție
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-card-foreground">
                <strong className="text-red-600 dark:text-red-400">Recesiunea</strong> reprezintă
                o <em>scădere semnificativă a activității economice</em> pe o perioadă de cel
                puțin <strong>2 trimestre consecutive</strong>. Aceasta se caracterizează prin
                reducerea produsului intern brut (PIB), creșterea șomajului și scăderea
                generalizată a consumului și investițiilor.
              </p>
              <div className="mt-6 flex items-center gap-4 rounded-xl bg-red-50 p-4 dark:bg-red-950/50">
                <Clock className="h-10 w-10 text-red-500" />
                <div>
                  <div className="font-semibold text-foreground">
                    2 Trimestre Consecutive
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Durata minimă pentru declararea oficială a unei recesiuni
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Transition Section */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50/50 to-white py-16 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
              De la Inflație la Recesiune
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-muted-foreground">
              Dezechilibrul inflaționist declanșează un lanț de evenimente care poate
              conduce la recesiune
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mx-auto max-w-4xl">
            {/* Connection Line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-blue-500 via-amber-500 to-red-500 md:block" />

            <div className="space-y-8">
              {transitionSteps.map((step, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <Card className="border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 shadow-sm transition-all duration-300 group-hover:scale-110 dark:bg-slate-800">
                            <step.icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                          </div>
                          <div>
                            <div className="text-xs font-medium text-muted-foreground">
                              Pas {index + 1}
                            </div>
                            <CardTitle className="text-lg">{step.title}</CardTitle>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{step.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Node */}
                  <div className="z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-background bg-gradient-to-br from-blue-500 to-red-500 shadow-lg md:flex">
                    <span className="font-bold text-white">{index + 1}</span>
                  </div>

                  {/* Spacer */}
                  <div className="hidden flex-1 md:block" />
                </div>
              ))}
            </div>

            {/* Arrow at the bottom */}
            <div className="mt-8 flex justify-center">
              <div className="flex flex-col items-center gap-2 rounded-2xl bg-red-100 px-6 py-4 shadow-sm dark:bg-red-950">
                <ArrowDown className="h-8 w-8 animate-bounce text-red-500" />
                <span className="font-semibold text-red-700 dark:text-red-300">
                  RECESIUNE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Effects Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-foreground sm:text-4xl">
              Efecte Sociale ale Recesiunii
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600 dark:text-muted-foreground">
              Recesiunea are consecințe profunde asupra societății și bunăstării
              cetățenilor
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {socialEffects.map((effect, index) => {
              const severity =
                severityClasses[effect.severity as keyof typeof severityClasses];
              return (
                <Card
                  key={index}
                  className={`group relative overflow-hidden border-2 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 ${severity.border}`}
                >
                  {/* Severity Indicator */}
                  <div
                    className={`absolute right-4 top-4 h-3 w-3 rounded-full ${severity.badge} animate-pulse`}
                  />
                  <CardHeader>
                    <div
                      className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md ${severity.bg}`}
                    >
                      <effect.icon className={`h-6 w-6 ${severity.text}`} />
                    </div>
                    <CardTitle className="text-lg">{effect.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">
                      {effect.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <span className="text-muted-foreground">Severitate critică</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="text-muted-foreground">Severitate ridicată</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="text-muted-foreground">Severitate medie</span>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50/50 to-white py-16 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-card-foreground">
              Concluzie
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-muted-foreground">
              Recesiunea reprezintă o amenințare reală pentru economia românească,
              având potențialul de a afecta profund viața de zi cu zi a cetățenilor.
              De la creșterea șomajului și dificultățile în obținerea creditelor,
              până la emigrarea forței de muncă și accentuarea sărăciei, efectele
              sunt resimțite la toate nivelurile societății. Prevenirea acestui
              scenariu necesită măsuri de politică economică echilibrate și prompte.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


