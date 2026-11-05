import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Verifier, VerdictIcon, verdictChip, type Verdict } from "@/components/brand";
import { Stats } from "@/components/stats";
import { LanguageSelect, useLanguage, type TranslationKey } from "@/lib/i18n";

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
const dossiers: { title: TranslationKey; description: TranslationKey; source: "url" | "image"; date: string; status: Status; score: number }[] = [
  { title: "sampleRiceTitle", description: "sampleRiceDescription", source: "url", date: "04/11/2026 · 10:24", status: "VRAI", score: 86 },
  { title: "sampleWaterTitle", description: "sampleWaterDescription", source: "image", date: "03/11/2026 · 16:02", status: "FAUX", score: 14 },
  { title: "sampleVaccineTitle", description: "sampleVaccineDescription", source: "url", date: "02/11/2026 · 09:45", status: "DOUTEUX", score: 48 },
  { title: "sampleCycloneTitle", description: "sampleCycloneDescription", source: "image", date: "01/11/2026 · 18:30", status: "VRAI", score: 79 },
];

function Dossiers() {
  const { t } = useLanguage();
  const count = (s: Status) => dossiers.filter((d) => d.status === s).length;
  const statusLabels: Record<Status, string> = {
    VRAI: t("true"),
    FAUX: t("false"),
    DOUTEUX: t("doubtful"),
  };
  return (
    <section className="px-6 py-12">
      <h2 className="text-6xl text-ink-foreground md:text-7xl">{t("myChecks")}</h2>
      <div className="mt-7 flex flex-wrap gap-3">
        {(["VRAI", "FAUX", "DOUTEUX"] as const).map((s) => (
          <span key={s} className={`flex items-center gap-2 rounded-xl px-4 py-2.5 font-wide text-sm font-bold ${verdictChip[s]}`}>
            <VerdictIcon s={s} className="h-4 w-4" /> {statusLabels[s]}
            <span className="opacity-70">{count(s)}</span>
          </span>
        ))}
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {dossiers.map((x, i) => {
          const hi = i === 0;
          return (
            <article key={x.title} className={`notch animate-rise flex min-h-72 flex-col rounded-2xl p-7 ${hi ? "bg-lime text-lime-foreground" : "bg-card text-card-foreground"}`} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-start justify-between gap-4">
                <span className="font-wide text-6xl font-medium leading-none opacity-80">{String(i + 1).padStart(2, "0")}</span>
                <span className="rounded-md border border-current/30 px-3 py-1.5 text-[11px]">{x.source === "url" ? t("urlSource") : t("imageSource")}</span>
              </div>
              <div className="mt-5">
                <h3 className="font-wide text-xl font-bold normal-case leading-tight tracking-normal">{t(x.title)}</h3>
                <p className="mt-3 text-xs leading-relaxed opacity-70">{t(x.description)}</p>
              </div>
              <div className="mt-4 text-[11px] opacity-60">{x.date}</div>
              <div className={`-mx-7 -mb-7 mt-auto flex items-center gap-3 border-t border-ink/15 px-7 py-5 ${verdictChip[x.status]}`}>
                <VerdictIcon s={x.status} className="h-7 w-7 shrink-0" />
                <span className="font-wide text-2xl font-bold leading-none tracking-tight">{statusLabels[x.status]}</span>
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
  const { t } = useLanguage();
  const [tab, setTab] = useState<"verifier" | "dossiers" | "stats">("verifier");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const selectTab = (nextTab: "verifier" | "dossiers" | "stats") => {
    setTab(nextTab);
    setMobileMenuOpen(false);
  };

  return (
    <main className={`flex min-h-screen flex-col bg-ink text-ink-foreground lg:flex-row ${tab === "stats" ? "dashboard-stats-mode" : ""}`}>
      <header className="dashboard-mobile-header flex items-center justify-between gap-3 border-b border-ink-foreground/10 px-4 py-3 lg:hidden">
        <Link to="/" aria-label="Ny Marina — accueil" className="block">
          <img src="/icon.svg" alt="Ny Marina" className="h-auto w-32 object-contain" />
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSelect />
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="dashboard-mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-full bg-primary px-4 py-2 font-wide text-xs font-bold uppercase text-primary-foreground transition-transform hover:scale-105"
          >
            {mobileMenuOpen ? t("closeMenu") : t("openMenu")}
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          id="dashboard-mobile-menu"
          className="dashboard-mobile-menu fixed inset-x-3 top-3 z-50 rounded-[2rem] bg-lime p-6 text-lime-foreground shadow-2xl sm:inset-x-5 sm:p-8 lg:hidden"
        >
          <div className="flex items-center justify-between">
            <span className="font-wide text-xs font-bold uppercase tracking-[.2em]">Ny Marina</span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-full border border-lime-foreground/25 px-4 py-2 font-wide text-xs font-bold uppercase"
            >
              {t("closeMenu")}
            </button>
          </div>
          <nav aria-label={t("dashboardNavigation")} className="mt-8 flex flex-col items-end gap-1">
            {([["verifier", t("verifyTab")], ["dossiers", t("myChecks")], ["stats", t("statsTab")]] as const).map(([key, label], index) => (
              <button
                key={key}
                type="button"
                onClick={() => selectTab(key)}
                className={`dashboard-mobile-menu-item text-right font-display text-5xl uppercase leading-[.95] sm:text-6xl ${tab === key ? "text-primary" : ""}`}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="mt-8 flex justify-end border-t border-lime-foreground/20 pt-5">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-sm font-semibold underline underline-offset-4">
              {t("signOut")} ↗
            </Link>
          </div>
        </div>
      )}

      <aside className="z-30 hidden h-screen w-64 shrink-0 flex-col gap-2 border-r border-ink-foreground/10 p-6 lg:sticky lg:top-0 lg:flex">
        <div className="flex items-center justify-between gap-4 lg:flex-col lg:items-stretch lg:gap-5">
          <Link to="/" aria-label="Ny Marina — accueil" className="block">
            <img src="/icon.svg" alt="Ny Marina" className="h-auto w-32 object-contain sm:w-40 lg:w-full lg:max-w-44" />
          </Link>
          <LanguageSelect />
        </div>
        <nav className="-mx-1 flex gap-2 overflow-x-auto pb-1 lg:mx-0 lg:mt-10 lg:flex-col lg:overflow-visible lg:pb-0">
          {([["verifier", t("verifyTab")], ["dossiers", t("myChecks")], ["stats", t("statsTab")]] as const).map(([k, l]) => (
            <button key={k} onClick={() => selectTab(k)} className={`shrink-0 rounded-xl px-3 py-2 text-left font-display text-lg transition sm:px-4 lg:w-full lg:rounded-2xl lg:py-3 lg:text-2xl ${tab === k ? "bg-primary text-primary-foreground" : "opacity-70 hover:bg-ink-soft hover:opacity-100"}`}>
              {l}
            </button>
          ))}
        </nav>
        <Link to="/" className="ml-auto rounded-xl bg-ink-soft px-4 py-2 text-xs opacity-80 hover:opacity-100 lg:mt-auto">{t("signOut")}</Link>
      </aside>
      <div className={`w-full min-w-0 flex-1 overflow-x-hidden ${tab === "stats" ? "dashboard-stats-content" : ""}`}>
        {tab === "verifier" ? <Verifier /> : tab === "dossiers" ? <Dossiers /> : <Stats />}
      </div>
    </main>
  );
}
