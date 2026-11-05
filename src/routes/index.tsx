import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow, Logo, VerdictIcon, verdictChip, type Verdict } from "@/components/brand";
import { LanguageSelect, useLanguage } from "@/lib/i18n";
import { Loupe } from "@/components/loupe";
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

const chip = (s: string) => verdictChip[s as Verdict];

function Index() {
  const { t } = useLanguage();
  const statusLabels = { VRAI: t("true"), FAUX: t("false"), DOUTEUX: t("doubtful") };
  const steps = [
    { n: "01", title: t("stepSubmit"), description: t("stepSubmitDescription") },
    { n: "02", title: t("stepExtract"), description: t("stepExtractDescription") },
    { n: "03", title: t("stepSearch"), description: t("stepSearchDescription") },
    { n: "04", title: t("stepVerdict"), description: t("stepVerdictDescription") },
  ];
  const detects = [
    { n: "01", title: t("detectUnsourced"), description: t("detectUnsourcedDescription") },
    { n: "02", title: t("detectReusedImages"), description: t("detectReusedImagesDescription") },
    { n: "03", title: t("detectContextlessNumbers"), description: t("detectContextlessNumbersDescription") },
    { n: "04", title: t("detectFakeReleases"), description: t("detectFakeReleasesDescription") },
  ];
  const previews = [
    { title: t("sampleRiceTitle"), date: "04/11/2026", status: "VRAI", score: 86 },
    { title: t("sampleWaterTitle"), date: "03/11/2026", status: "FAUX", score: 14 },
    { title: t("sampleVaccineTitle"), date: "02/11/2026", status: "DOUTEUX", score: 48 },
  ] as const;

  return (
    <main className="min-h-screen bg-background">
      <Loupe />
      {/* HERO */}
      <section className="bg-ink text-ink-foreground">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <Logo />
          <div className="hidden items-center gap-10 text-sm md:flex">
            <a href="#comment" className="opacity-80 hover:opacity-100">{t("howItWorksNav")}</a>
            <a href="#pourquoi" className="opacity-80 hover:opacity-100">{t("whyNav")}</a>
            <a href="#repere" className="opacity-80 hover:opacity-100">{t("detectNav")}</a>
          </div>
          <div className="flex items-center gap-3">
            <LanguageSelect className="hidden sm:inline-flex" />
            <Link to="/login" className="rounded-xl bg-ink-foreground px-5 py-3 text-sm font-medium text-ink hover:bg-primary hover:text-primary-foreground">
              {t("journalistSpace")}
            </Link>
          </div>
        </nav>
        <div className="mx-auto max-w-6xl px-6 pb-2 sm:hidden">
          <LanguageSelect />
        </div>

        <div className="mx-auto max-w-6xl px-6 pb-20 pt-12">
          <h1 className="animate-rise text-[13vw] leading-[0.85] md:text-[8.5rem]">
            <span className="flex flex-wrap items-center gap-4">
              {t("heroLine1")}
              <img src={strip} alt="" className="hidden h-[0.8em] w-[2.2em] rounded-2xl object-cover md:block" />
            </span>
            <span className="flex flex-wrap items-center gap-4">
              <img src={crowd} alt="" className="hidden h-[0.8em] w-[2.6em] rounded-2xl object-cover md:block" />
              {t("heroLine2")}
            </span>
            <span className="flex flex-wrap items-center gap-4">
              <span className="hidden h-[0.8em] w-[0.6em] flex-col justify-between rounded-2xl bg-accent p-2 md:flex">
                <span className="h-1/2 w-full rounded-lg bg-ink" />
                <span className="aspect-square w-full rounded-full bg-primary" />
              </span>
              {t("heroLine3")}
              <a href="#repere" className="flex h-[0.8em] w-[0.8em] items-center justify-center rounded-2xl bg-primary text-primary-foreground transition hover:rotate-[-45deg]">
                <Arrow className="h-1/2 w-1/2" />
              </a>
            </span>
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-6 text-sm md:flex-row">
            <p className="max-w-lg leading-relaxed opacity-70">
              {t("heroDescription")}
            </p>
            <p className="text-right opacity-70">
              {t("verificationLabel")}<br />{t("madeInMadagascar")}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section id="pourquoi" className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <h2 className="text-5xl md:text-6xl">
            {t("introTitle")}
            <Arrow className="ml-3 inline h-12 w-12 text-primary" />
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("introDescription")}
          </p>
        </div>
        <img src={crowd} alt={t("crowdAlt")} width={1600} height={720} loading="lazy" className="mt-12 w-full rounded-3xl object-cover" />
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            ["2", t("sourceTypes")],
            ["0", t("accountRequired")],
            ["100%", t("free")],
            ["~30s", t("perAnalysis")],
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
          <h2 className="text-5xl md:text-6xl">{t("howItWorksTitle")}</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            {t("stepsIntro")}
          </p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className={`flex min-h-64 flex-col justify-between rounded-3xl p-6 ${i === 3 ? "bg-primary text-primary-foreground" : "bg-card"}`}>
              <span className="font-display text-xl opacity-50">{s.n}</span>
              <div>
                <h3 className="text-4xl">{s.title}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${i === 3 ? "opacity-90" : "text-muted-foreground"}`}>{s.description}</p>
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
              {t("whatWeDetect")}
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed opacity-70">
              {t("detectIntro")}
            </p>
            <ul className="mt-12 divide-y divide-ink-foreground/10 border-y border-ink-foreground/10">
              {detects.map((d) => (
                <li key={d.n} className="group flex items-start gap-6 py-6">
                  <span className="font-wide pt-1 text-lg font-medium opacity-40">{d.n}</span>
                  <div className="flex-1">
                    <h3 className="text-3xl transition-colors group-hover:text-primary">{d.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed opacity-60">{d.description}</p>
                  </div>
                  <Arrow className="mt-1 h-6 w-6 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-ink-soft p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-wide text-sm font-semibold">{t("latestCases")}</h3>
              <span className="text-xs opacity-50">{t("examples")}</span>
            </div>
            <div className="mt-6 space-y-4">
              {previews.map((x, i) => (
                <article
                  key={x.title}
                  className={`notch flex items-center gap-4 rounded-2xl p-5 ${i === 0 ? "bg-lime text-lime-foreground" : "bg-card text-card-foreground"}`}
                >
                  <span className="font-wide text-2xl font-medium opacity-60">{String(i + 1).padStart(2, "0")}</span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-wide text-sm font-bold normal-case leading-snug">{x.title}</h4>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <span className={`flex items-center gap-1.5 rounded-lg border border-ink/45 px-2.5 py-1.5 font-wide text-[11px] font-bold ${chip(x.status)}`}>
                        <VerdictIcon s={x.status as Verdict} className="h-3.5 w-3.5" /> {statusLabels[x.status]}
                      </span>
                      <span className="text-[10px] font-medium opacity-80">{x.date}</span>
                    </div>
                  </div>
                  <span className="font-wide text-2xl font-bold">{x.score}%</span>
                </article>
              ))}
            </div>
            <p className="mt-6 text-[11px] leading-relaxed opacity-70">
              {t("sampleDisclaimer")}
            </p>
          </div>
        </div>
      </section>

      {/* ESPACE JOURNALISTE */}
      <section className="bg-primary px-6 py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <h2 className="max-w-xl text-6xl md:text-7xl">{t("journalistCta")}</h2>
          <Link
            to="/login"
            className="flex shrink-0 items-center justify-between gap-6 rounded-2xl bg-ink px-8 py-5 font-display text-2xl text-ink-foreground transition hover:bg-ink-soft"
          >
            {t("openJournalistSpace")}
            <Arrow className="h-7 w-7" />
          </Link>
        </div>
      </section>

      <footer className="bg-ink px-6 pb-10 text-ink-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 border-t border-ink-foreground/10 pt-10 md:flex-row md:items-center">
          <Logo />
          <p className="text-xs opacity-50">{t("resultsDisclaimer")}</p>
        </div>
      </footer>
    </main>
  );
}
