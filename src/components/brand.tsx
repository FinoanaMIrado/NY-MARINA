import { useState, type FormEvent } from "react";
import { useLanguage } from "@/lib/i18n";

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 6l12 12M18 8v10H8" />
    </svg>
  );
}

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <span className="relative flex h-6 w-8">
        <span className="absolute left-0 top-0 h-3.5 w-3.5 rounded-full bg-primary" />
        <span className="absolute bottom-0 left-2 h-3.5 w-3.5 rounded-full bg-accent" />
        <span className="absolute right-0 top-1 h-3.5 w-3.5 rounded-full bg-ink-foreground" />
      </span>
      <span className="font-display text-2xl tracking-tight">Ny Marina</span>
    </a>
  );
}

type Result = { score: number; source: string };

function Gauge({ score }: { score: number }) {
  const r = 80;
  const len = Math.PI * r;
  const tone = score >= 70 ? "text-success" : score >= 40 ? "text-warning" : "text-destructive";
  return (
    <div className="relative mx-auto w-64">
      <svg viewBox="0 0 200 110" className="w-full">
        <path d="M20 100 A80 80 0 0 1 180 100" fill="none" stroke="currentColor" strokeWidth="18" strokeLinecap="round" className="text-ink-soft" />
        <path
          key={score}
          d="M20 100 A80 80 0 0 1 180 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="18"
          strokeLinecap="round"
          className={tone}
          strokeDasharray={len}
          strokeDashoffset={len * (1 - score / 100)}
          style={{ ["--gauge-len" as string]: len, animation: "gauge 1.6s cubic-bezier(.2,.8,.2,1)" }}
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 text-center">
        <div className="font-display text-6xl">{score}%</div>
      </div>
    </div>
  );
}

export function Verifier() {
  const { t } = useLanguage();
  const [mode, setMode] = useState<"url" | "image">("url");
  const [url, setUrl] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const source = mode === "url" ? url : file?.name ?? "";
    if (!source) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      setResult({ score: 30 + ((source.length * 37) % 65), source });
      setLoading(false);
    }, 1800);
  };

  const verdict = (s: number) =>
    s >= 70 ? t("likelyReliable") : s >= 40 ? t("useCaution") : t("likelyMisleading");

  return (
    <section id="verifier" className="bg-ink px-6 py-24 text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-6xl md:text-7xl">
            {t("verifyNow")}<br /><span className="text-sun">{t("shareLater")}</span>
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed opacity-70">
            {t("verifyIntro")}
          </p>

          <form onSubmit={submit} className="mt-10 rounded-3xl bg-ink-soft p-3">
            <div className="grid grid-cols-2 gap-2">
              {(["url", "image"] as const).map((m) => (
                <button
                  type="button"
                  key={m}
                  onClick={() => setMode(m)}
                  className={`rounded-2xl py-3 text-sm font-medium transition ${mode === m ? "bg-ink-foreground text-ink" : "opacity-70 hover:opacity-100"}`}
                >
                  {m === "url" ? t("urlSource") : t("screenshot")}
                </button>
              ))}
            </div>
            <div className="p-3">
              {mode === "url" ? (
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full rounded-2xl border border-ink-foreground/15 bg-ink px-5 py-4 text-sm outline-none placeholder:opacity-40 focus:border-primary"
                />
              ) : (
                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-foreground/20 bg-ink px-5 py-8 text-center text-sm hover:border-primary">
                  <span className="font-display text-2xl">{file ? file.name : t("dropImage")}</span>
                  <span className="mt-1 opacity-50">{t("screenshotFormats")}</span>
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
                </label>
              )}
              <button
                disabled={loading}
                className="mt-3 flex w-full items-center justify-between rounded-2xl bg-primary px-6 py-4 font-display text-2xl text-primary-foreground transition hover:brightness-110 disabled:opacity-60"
              >
                {loading ? t("analyzing") : t("startVerification")}
                <Arrow className="h-7 w-7" />
              </button>
            </div>
          </form>
        </div>

        <div className="flex min-h-[420px] flex-col justify-center rounded-3xl bg-ink-soft p-8">
          {loading && (
            <ul className="space-y-4 font-display text-3xl">
              {[t("extracting"), t("searchingSources"), t("analyzingWithAi")].map((step, i) => (
                <li key={step} className="animate-rise flex items-center gap-3" style={{ animationDelay: `${i * 0.4}s` }}>
                  <span className="h-3 w-3 animate-pulse rounded-full bg-primary" /> {step}
                </li>
              ))}
            </ul>
          )}
          {!loading && !result && (
            <div className="text-center">
              <div className="font-display text-8xl text-sun">?%</div>
              <p className="mt-4 text-sm opacity-60">{t("resultPlaceholder")}</p>
            </div>
          )}
          {result && (
            <div className="animate-rise">
              <Gauge score={result.score} />
              <h3 className="mt-6 text-center text-4xl">{verdict(result.score)}</h3>
              <p className="mt-4 text-sm leading-relaxed opacity-70">
                {t("sampleJustification")}
              </p>
              <p className="mt-4 truncate text-xs opacity-40">{t("analyzedSource")} {result.source}</p>
              <p className="mt-2 text-xs opacity-40">{t("scoreDisclaimer")}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export type Verdict = "VRAI" | "FAUX" | "DOUTEUX";

export const verdictChip: Record<Verdict, string> = {
  VRAI: "bg-success text-ink",
  FAUX: "bg-destructive text-ink-foreground",
  DOUTEUX: "bg-warning text-ink",
};

export function VerdictIcon({ s, className = "h-5 w-5" }: { s: Verdict; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {s === "VRAI" && <path d="M4 13l5 5L20 6" />}
      {s === "FAUX" && <path d="M6 6l12 12M18 6L6 18" />}
      {s === "DOUTEUX" && (
        <>
          <path d="M9.4 9.2a2.7 2.7 0 1 1 4 2.4c-.9.7-1.4 1.2-1.4 2.3" />
          <path d="M12 17.4h.01" />
        </>
      )}
    </svg>
  );
}
