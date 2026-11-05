import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Logo, Verifier, VerdictIcon, verdictChip, type Verdict } from "@/components/brand";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Tableau de bord — Ny Marina" },
      { name: "description", content: "Vérifiez une information et retrouvez vos dossiers vérifiés." },
      { property: "og:title", content: "Tableau de bord — Ny Marina" },
      { property: "og:description", content: "Espace journaliste : vérifier et consulter vos dossiers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

type Status = Verdict;
const dossiers: { t: string; d: string; type: string; date: string; status: Status; score: number }[] = [
  { t: "Hausse du prix du riz à Antananarivo", d: "Plusieurs sources de presse et le ministère confirment une hausse de 12 % ce mois-ci.", type: "Lien URL", date: "04/11/2026 · 10:24", status: "VRAI", score: 86 },
  { t: "Coupure d'eau générale de 7 jours", d: "Aucune annonce officielle de la JIRAMA, la publication d'origine a été supprimée.", type: "Image", date: "03/11/2026 · 16:02", status: "FAUX", score: 14 },
  { t: "Nouveau vaccin distribué en brousse", d: "Information partiellement relayée, sources insuffisantes pour conclure.", type: "Lien URL", date: "02/11/2026 · 09:45", status: "DOUTEUX", score: 48 },
  { t: "Cyclone attendu sur la côte Est", d: "Météo Madagascar confirme une dépression tropicale en formation.", type: "Image", date: "01/11/2026 · 18:30", status: "VRAI", score: 79 },
];

function Dossiers() {
  const count = (s: Status) => dossiers.filter((d) => d.status === s).length;
  return (
    <section className="px-6 py-12">
      <h2 className="text-6xl text-ink-foreground md:text-7xl">Mes vérifications</h2>
      <div className="mt-7 flex flex-wrap gap-3">
        {(["VRAI", "FAUX", "DOUTEUX"] as const).map((s) => (
          <span key={s} className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-wide text-sm font-bold ${verdictChip[s]}`}>
            <VerdictIcon s={s} className="h-4 w-4" /> {s}
            <span className="opacity-70">{count(s)}</span>
          </span>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {dossiers.map((x, i) => {
          const hi = i === 0;
          return (
            <article key={x.t} className={`notch animate-rise flex min-h-72 flex-col rounded-2xl p-7 ${hi ? "bg-lime text-lime-foreground" : "bg-card text-card-foreground"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-start justify-between gap-4">
                <span className="font-wide text-6xl font-medium leading-none opacity-80">{String(i + 1).padStart(2, "0")}</span>
                <span className="rounded-md border border-current/30 px-3 py-1.5 text-[11px]">{x.type}</span>
              </div>
              <div className="mt-5">
                <h3 className="font-wide text-xl font-bold normal-case leading-tight tracking-normal">{x.t}</h3>
                <p className="mt-3 text-xs leading-relaxed opacity-70">{x.d}</p>
              </div>
              <div className="mt-4 text-[11px] opacity-60">{x.date}</div>
              <div className={`-mx-7 -mb-7 mt-auto flex items-center gap-3 border-t border-ink/15 px-7 py-5 ${verdictChip[x.status]}`}>
                <VerdictIcon s={x.status} className="h-7 w-7 shrink-0" />
                <span className="font-wide text-2xl font-bold leading-none tracking-tight">{x.status}</span>
                <span className="ml-auto font-wide text-lg font-bold">{x.score}%</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Dashboard() {
  const [tab, setTab] = useState<"verifier" | "dossiers">("verifier");
  return (
    <main className="flex min-h-screen bg-ink text-ink-foreground">
      <aside className="sticky top-0 flex h-screen w-64 shrink-0 flex-col gap-2 border-r border-ink-foreground/10 p-6">
        <Logo />
        <nav className="mt-10 space-y-2">
          {([["verifier", "Vérifier"], ["dossiers", "Mes vérifications"]] as const).map(([k, l]) => (
            <button key={k} onClick={() => setTab(k)} className={`w-full rounded-2xl px-4 py-3 text-left font-display text-2xl transition ${tab === k ? "bg-primary text-primary-foreground" : "opacity-70 hover:bg-ink-soft hover:opacity-100"}`}>
              {l}
            </button>
          ))}
        </nav>
        <Link to="/" className="mt-auto rounded-xl bg-ink-soft px-4 py-3 text-sm opacity-80 hover:opacity-100">Se déconnecter</Link>
      </aside>
      <div className="flex-1 overflow-x-hidden">{tab === "verifier" ? <Verifier /> : <Dossiers />}</div>
    </main>
  );
}
