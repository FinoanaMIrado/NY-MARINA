import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow, Logo, VerdictIcon, verdictChip, type Verdict } from "@/components/brand";
import crowd from "@/assets/crowd.jpg";
import strip from "@/assets/strip.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ny Marina — Vérifiez la fiabilité d'une information" },
      { name: "description", content: "Ny Marina repère rumeurs, images recyclées et chiffres sortis de contexte, puis estime la fiabilité d'une information en pourcentage." },
      { property: "og:title", content: "Ny Marina — Vérifiez avant de partager" },
      { property: "og:description", content: "Détection des signes de désinformation et estimation de fiabilité, gratuitement et sans compte." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const steps = [
  { n: "01", t: "Soumettez", d: "Un lien URL ou une capture d'écran contenant l'information." },
  { n: "02", t: "Extraction", d: "Le texte et les affirmations principales sont identifiés." },
  { n: "03", t: "Recherche", d: "D'autres sources sur Internet sont collectées et comparées." },
  { n: "04", t: "Verdict", d: "Un taux de fiabilité, une jauge et une explication claire." },
];

const detects = [
  { n: "01", t: "Rumeurs sans source", d: "Une publication affirme un fait, mais rien n'indique d'où il vient." },
  { n: "02", t: "Images recyclées", d: "Une photo ou une vidéo d'un ancien événement présentée comme actuelle." },
  { n: "03", t: "Chiffres sortis de contexte", d: "Un pourcentage vrai, lu sans comparaison ni période de référence." },
  { n: "04", t: "Communiqués imités", d: "Un faux communiqué qui reprend la mise en page d'une institution." },
];

const apercus = [
  { t: "Hausse du prix du riz à Antananarivo", date: "04/11/2026", status: "VRAI", score: 86 },
  { t: "Coupure d'eau générale de 7 jours", date: "03/11/2026", status: "FAUX", score: 14 },
  { t: "Nouveau vaccin distribué en brousse", date: "02/11/2026", status: "DOUTEUX", score: 48 },
] as const;

const chip = (s: string) => verdictChip[s as Verdict];

function Index() {
  return (
    <main className="min-h-screen bg-background">
      {/* HERO */}
      <section className="bg-ink text-ink-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Logo />
          <div className="hidden items-center gap-10 text-sm md:flex">
            <a href="#comment" className="opacity-80 hover:opacity-100">Comment ça marche</a>
            <a href="#pourquoi" className="opacity-80 hover:opacity-100">Pourquoi</a>
            <a href="#repere" className="opacity-80 hover:opacity-100">Ce qu'on repère</a>
          </div>
          <Link to="/login" className="rounded-xl bg-ink-foreground px-5 py-3 text-sm font-medium text-ink hover:bg-primary hover:text-primary-foreground">
            Espace journaliste
          </Link>
        </nav>

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-12">
          <h1 className="animate-rise text-[13vw] leading-[0.85] md:text-[8.5rem]">
            <span className="flex flex-wrap items-center gap-4">
              Vérifiez l'info
              <img src={strip} alt="" className="hidden h-[0.8em] w-[2.2em] rounded-2xl object-cover md:block" />
            </span>
            <span className="flex flex-wrap items-center gap-4">
              <img src={crowd} alt="" className="hidden h-[0.8em] w-[2.6em] rounded-2xl object-cover md:block" />
              avant de la
            </span>
            <span className="flex flex-wrap items-center gap-4">
              <span className="hidden h-[0.8em] w-[0.6em] flex-col justify-between rounded-2xl bg-accent p-2 md:flex">
                <span className="h-1/2 w-full rounded-lg bg-ink" />
                <span className="aspect-square w-full rounded-full bg-primary" />
              </span>
              partager
              <a href="#repere" className="flex h-[0.8em] w-[0.8em] items-center justify-center rounded-2xl bg-primary text-primary-foreground transition hover:rotate-[-45deg]">
                <Arrow className="h-1/2 w-1/2" />
              </a>
            </span>
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-6 text-sm md:flex-row">
            <p className="max-w-lg leading-relaxed opacity-70">
              Ny Marina analyse un lien ou une capture d'écran, recherche des sources qui confirment ou contredisent l'information, puis vous
              donne une estimation de sa fiabilité. Gratuit, sans inscription.
            </p>
            <p className="text-right opacity-70">
              Vérification d'informations<br />Fait à Madagascar
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="pourquoi" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <h2 className="text-5xl md:text-6xl">
            Ne vous laissez plus piéger par les fausses infos
            <Arrow className="ml-3 inline h-12 w-12 text-primary" />
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Sur les réseaux sociaux, une rumeur circule plus vite qu'un démenti. Ny Marina — « la vérité » — vous aide à faire le tri entre
            ce qui est fiable, trompeur ou non vérifié.
          </p>
        </div>
        <img src={crowd} alt="Foule de personnages lisant des journaux et des téléphones" width={1600} height={720} loading="lazy" className="mt-12 w-full rounded-3xl object-cover" />
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["2", "Types de sources"],
            ["0", "Compte requis"],
            ["100%", "Gratuit"],
            ["~30s", "Par analyse"],
          ].map(([v, l]) => (
            <div key={l} className="flex items-center gap-4 rounded-2xl bg-ink px-6 py-5 text-ink-foreground">
              <span className="font-display text-5xl">{v}</span>
              <span className="text-xs leading-tight opacity-70">{l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* STEPS */}
      <section id="comment" className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <h2 className="text-5xl md:text-6xl">Comment ça marche</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Quatre étapes automatiques, de la soumission à l'explication du résultat.
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className={`flex min-h-64 flex-col justify-between rounded-3xl p-6 ${i === 3 ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              <span className="font-display text-xl opacity-50">{s.n}</span>
              <div>
                <h3 className="text-4xl">{s.t}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${i === 3 ? "opacity-90" : "text-muted-foreground"}`}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CE QU'ON REPÈRE */}
      <section id="repere" className="bg-ink px-6 py-24 text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h2 className="text-6xl md:text-7xl">
              Ce que Ny Marina <span className="text-primary">repère</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-70">
              Avant de calculer un taux de fiabilité, l'analyse cherche les signes connus de désinformation dans le contenu soumis.
            </p>
            <ul className="mt-12 divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
              {detects.map((d) => (
                <li key={d.n} className="group flex items-start gap-6 py-6">
                  <span className="font-wide pt-1 text-lg font-medium opacity-40">{d.n}</span>
                  <div className="flex-1">
                    <h3 className="text-3xl transition-colors group-hover:text-primary">{d.t}</h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-60">{d.d}</p>
                  </div>
                  <Arrow className="mt-1 h-6 w-6 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-ink-soft p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-wide text-sm font-semibold">Derniers dossiers vérifiés</h3>
              <span className="text-xs opacity-50">Exemples</span>
            </div>
            <div className="mt-6 space-y-4">
              {apercus.map((x, i) => (
                <article
                  key={x.t}
                  className={`notch flex items-center gap-4 rounded-2xl p-5 ${i === 0 ? "bg-lime text-lime-foreground" : "bg-card text-card-foreground"}`}
                >
                  <span className="font-wide text-2xl font-medium opacity-60">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-wide text-sm font-bold normal-case leading-snug">{x.t}</h4>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className={`flex items-center gap-1.5 rounded-lg border border-ink/45 px-2.5 py-1.5 font-wide text-[11px] font-bold ${chip(x.status)}`}>
                        <VerdictIcon s={x.status as Verdict} className="h-3.5 w-3.5" /> {x.status}
                      </span>
                      <span className="text-[10px] font-medium opacity-80">{x.date}</span>
                    </div>
                  </div>
                  <span className="font-wide text-2xl font-bold">{x.score}%</span>
                </article>
              ))}
            </div>
            <p className="mt-6 text-[11px] leading-relaxed opacity-70">
              Exemples de dossiers déjà vérifiés. Les taux sont des estimations, pas des garanties.
            </p>
          </div>
        </div>
      </section>

      {/* ESPACE JOURNALISTE */}
      <section className="bg-primary px-6 py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-xl text-6xl md:text-7xl">Journaliste, vérifiez avant vos lecteurs</h2>
          <Link
            to="/login"
            className="flex shrink-0 items-center justify-between gap-6 rounded-2xl bg-ink px-8 py-5 font-display text-2xl text-ink-foreground transition hover:bg-ink-soft"
          >
            Ouvrir l'espace journaliste
            <Arrow className="h-7 w-7" />
          </Link>
        </div>
      </section>

      <footer className="bg-ink px-6 pb-10 text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 border-t border-ink-foreground/10 pt-10 md:flex-row md:items-center">
          <Logo />
          <p className="text-xs opacity-50">Les résultats sont des estimations et ne constituent pas une garantie absolue de véracité.</p>
        </div>
      </footer>
    </main>
  );
}
