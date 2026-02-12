import { Metadata } from "next";
import {
  Building2,
  Receipt,
  Home,
  Car,
  Cigarette,
  Fuel,
  Wallet,
  PiggyBank,
  Dices,
  ArrowUp,
  Percent,
  Scale,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Politici Guvernamentale | Analiză Economică",
  description: "Măsuri de stabilizare economică: TVA, impozite, accize și înghețarea salariilor.",
};

const tvaChanges = [
  {
    category: "TVA Standard",
    oldRate: "19%",
    newRate: "21%",
    change: "+2%",
  },
  {
    category: "TVA Redus",
    oldRate: "9%",
    newRate: "11%",
    change: "+2%",
  },
];

const taxIncreases = [
  {
    icon: Receipt,
    category: "Dividende",
    description: "Majorarea impozitului pe dividendele distribuite",
    impact: "Investitori și acționari",
  },
  {
    icon: Home,
    category: "Locuințe",
    description: "Creșterea impozitelor pe proprietățile imobiliare",
    impact: "Proprietari de locuințe",
  },
  {
    icon: Building2,
    category: "Terenuri",
    description: "Majorarea taxelor pe terenurile agricole și construcții",
    impact: "Proprietari de terenuri",
  },
  {
    icon: Car,
    category: "Autoturisme",
    description: "Creșterea taxelor de înmatriculare și proprietate auto",
    impact: "Proprietari de vehicule",
  },
];

const exciseChanges = [
  {
    icon: Cigarette,
    name: "Tutun",
    increase: "+10%",
    description: "Majorarea accizelor la produsele din tutun",
    color: "amber",
  },
  {
    icon: Fuel,
    name: "Combustibil",
    increase: "+10%",
    description: "Majorarea accizelor la benzină și motorină",
    color: "red",
  },
];

const budgetaryMeasures = [
  {
    icon: Wallet,
    title: "Înghețarea salariilor",
    description:
      "Salariile din sectorul bugetar rămân la nivelul actual, fără indexări sau majorări.",
  },
  {
    icon: PiggyBank,
    title: "Înghețarea pensiilor",
    description:
      "Pensiile nu vor fi majorate în perioada de austeritate, afectând puterea de cumpărare a pensionarilor.",
  },
];

const otherMeasures = [
  {
    icon: Dices,
    title: "Suprataxarea jocurilor de noroc",
    description:
      "Creșterea taxelor aplicate industriei de gambling, inclusiv pariuri sportive și cazinouri.",
  },
];

export default function PoliticiPage() {
  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-emerald-50/70 via-slate-50 to-white py-16 dark:border-slate-800 dark:from-emerald-950/30 dark:via-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4 animate-fade-in">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 shadow-sm dark:bg-emerald-950">
              <Building2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700 shadow-sm dark:bg-emerald-950 dark:text-emerald-300">
              Măsuri de Stabilizare
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-foreground sm:text-5xl animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Politici Guvernamentale
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Măsurile propuse de guvern pentru echilibrarea bugetului și stabilizarea
            economiei în fața presiunilor inflaționiste.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card className="border-2 border-emerald-200/70 bg-gradient-to-br from-emerald-50/50 to-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-emerald-800 dark:from-emerald-950/50 dark:to-slate-950 dark:shadow-none">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Scale className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                Măsuri de Echilibrare Bugetară
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-card-foreground">
                Pentru a contracara dezechilibrul inflaționist și a preveni alunecarea
                în recesiune, guvernul a propus un pachet de măsuri de austeritate.
                Acestea vizează atât creșterea veniturilor la buget prin majorări de
                taxe și impozite, cât și reducerea cheltuielilor prin înghețarea
                salariilor și pensiilor.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* TVA Changes Section */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50/50 to-white py-16 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Percent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-foreground">
                Creșterea TVA
              </h2>
            </div>
            <p className="text-slate-600 dark:text-muted-foreground">
              Taxa pe valoarea adăugată va fi majorată atât pentru cota standard,
              cât și pentru cea redusă
            </p>
          </div>

          {/* TVA Table */}
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Categorie
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                    Cota Actuală
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                    Cota Nouă
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                    Modificare
                  </th>
                </tr>
              </thead>
              <tbody>
                {tvaChanges.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50"
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      {item.category}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="rounded-lg bg-slate-100 px-3 py-1 text-sm font-mono text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                        {item.oldRate}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-mono font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        {item.newRate}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 rounded-lg bg-red-100 px-3 py-1 text-sm font-mono font-semibold text-red-700 dark:bg-red-950 dark:text-red-300">
                        <ArrowUp className="h-3 w-3" />
                        {item.change}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Tax Increases Section */}
      <section className="py-16 bg-white dark:bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Receipt className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-foreground">
                Majorări de Impozite
              </h2>
            </div>
            <p className="text-slate-600 dark:text-muted-foreground">
              Impozitele vor crește în multiple domenii pentru a genera venituri
              suplimentare la buget
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {taxIncreases.map((tax, index) => (
              <Card key={index} className="group border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md dark:bg-purple-950">
                    <tax.icon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">{tax.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-3">
                    {tax.description}
                  </CardDescription>
                  <div className="rounded-lg bg-slate-100 px-3 py-2 text-xs text-muted-foreground dark:bg-slate-800">
                    <strong>Impact:</strong> {tax.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Excise Section */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50/50 to-white py-16 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Fuel className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-foreground">
                Majorări de Accize
              </h2>
            </div>
            <p className="text-slate-600 dark:text-muted-foreground">
              Accizele la tutun și combustibil vor crește cu 10%
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-2xl">
            {exciseChanges.map((excise, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-2 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-900 border-${excise.color}-200 dark:border-${excise.color}-800`}
              >
                <div
                  className={`absolute right-4 top-4 rounded-lg bg-${excise.color}-100 dark:bg-${excise.color}-950 px-3 py-1`}
                >
                  <span
                    className={`flex items-center gap-1 text-sm font-bold text-${excise.color}-700 dark:text-${excise.color}-300`}
                  >
                    <ArrowUp className="h-3 w-3" />
                    {excise.increase}
                  </span>
                </div>
                <CardHeader>
                  <div
                    className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md bg-${excise.color}-100 dark:bg-${excise.color}-950`}
                  >
                    <excise.icon
                      className={`h-6 w-6 text-${excise.color}-600 dark:text-${excise.color}-400`}
                    />
                  </div>
                  <CardTitle className="text-lg">{excise.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{excise.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Sector Section */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Wallet className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-foreground">
                Sectorul Bugetar
              </h2>
            </div>
            <p className="text-slate-600 dark:text-muted-foreground">
              Măsuri de reducere a cheltuielilor în sectorul public
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
            {budgetaryMeasures.map((measure, index) => (
              <Card
                key={index}
                className="group border-2 border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md dark:bg-slate-800">
                    <measure.icon className="h-6 w-6 text-slate-600 dark:text-slate-400" />
                  </div>
                  <CardTitle className="text-lg">{measure.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {measure.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Measures Section */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50/50 to-white py-16 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <Dices className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-foreground">
                Alte Măsuri
              </h2>
            </div>
            <p className="text-slate-600 dark:text-muted-foreground">
              Suprataxare pentru activități specifice
            </p>
          </div>

          <div className="max-w-md">
            {otherMeasures.map((measure, index) => (
              <Card
                key={index}
                className="group border-2 border-cyan-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-cyan-800 dark:bg-slate-900"
              >
                <CardHeader>
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md dark:bg-cyan-950">
                    <measure.icon className="h-6 w-6 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <CardTitle className="text-lg">{measure.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {measure.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Table */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50/50 dark:from-slate-950 dark:to-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-foreground sm:text-3xl">
              Rezumat Măsuri Fiscale
            </h2>
            <p className="mt-2 text-slate-600 dark:text-muted-foreground">
              Toate măsurile de stabilizare într-o privire de ansamblu
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:shadow-none">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Măsură
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                    Detalii
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-foreground">
                    Impact
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium text-foreground">TVA Standard</td>
                  <td className="px-6 py-4 text-muted-foreground">19% → 21%</td>
                  <td className="px-6 py-4 text-center">
                    <span className="rounded-lg bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-950 dark:text-red-300">
                      Ridicat
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium text-foreground">TVA Redus</td>
                  <td className="px-6 py-4 text-muted-foreground">9% → 11%</td>
                  <td className="px-6 py-4 text-center">
                    <span className="rounded-lg bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                      Mediu
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium text-foreground">Accize Tutun</td>
                  <td className="px-6 py-4 text-muted-foreground">+10%</td>
                  <td className="px-6 py-4 text-center">
                    <span className="rounded-lg bg-amber-100 px-2 py-1 text-xs font-medium text-amber-700 dark:bg-amber-950 dark:text-amber-300">
                      Mediu
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium text-foreground">Accize Combustibil</td>
                  <td className="px-6 py-4 text-muted-foreground">+10%</td>
                  <td className="px-6 py-4 text-center">
                    <span className="rounded-lg bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-950 dark:text-red-300">
                      Ridicat
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium text-foreground">Salarii Bugetari</td>
                  <td className="px-6 py-4 text-muted-foreground">Înghețare</td>
                  <td className="px-6 py-4 text-center">
                    <span className="rounded-lg bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-950 dark:text-red-300">
                      Ridicat
                    </span>
                  </td>
                </tr>
                <tr className="transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-6 py-4 font-medium text-foreground">Pensii</td>
                  <td className="px-6 py-4 text-muted-foreground">Înghețare</td>
                  <td className="px-6 py-4 text-center">
                    <span className="rounded-lg bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-950 dark:text-red-300">
                      Ridicat
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="border-t border-slate-200 bg-gradient-to-b from-slate-50/50 to-white py-16 dark:border-slate-800 dark:from-slate-900/50 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <h2 className="mb-4 text-2xl font-bold text-slate-900 dark:text-card-foreground">
              Concluzie
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-muted-foreground">
              Pachetul de măsuri fiscale propus de guvern urmărește să reducă
              dezechilibrul bugetar și să tempereze inflația. Cu toate acestea,
              aceste măsuri vor avea un impact semnificativ asupra populației,
              în special asupra categoriilor vulnerabile. Echilibrul între
              necesitatea stabilizării economice și protecția socială rămâne
              o provocare majoră pentru decidenții politici.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

