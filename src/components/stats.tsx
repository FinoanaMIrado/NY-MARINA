import { VerdictIcon, verdictChip, type Verdict } from "@/components/brand";
import { useLanguage } from "@/lib/i18n";

// Données de démonstration (à remplacer par la base Neon plus tard)
const counts: Record<Verdict, number> = { VRAI: 58, FAUX: 31, DOUTEUX: 17 };
const monthly = [
  { m: "06", v: 9 }, { m: "07", v: 14 }, { m: "08", v: 12 },
  { m: "09", v: 21 }, { m: "10", v: 23 }, { m: "11", v: 27 },
];
const avgScore = 64;

function Curve() {
  const W = 600, H = 220, P = 24;
  const max = Math.max(...monthly.map((d) => d.v)) * 1.15;
  const pts = monthly.map((d, i) => [P + (i * (W - 2 * P)) / (monthly.length - 1), H - P - (d.v / max) * (H - 2 * P)] as [number, number]);
  const line = pts.map((p, i) => {
    if (i === 0) return `M${p[0]},${p[1]}`;
    const [px, py] = pts[i - 1]!;
    const cx = (px + p[0]) / 2;
    return `C${cx},${py} ${cx},${p[1]} ${p[0]},${p[1]}`;
  }).join(" ");
  const last = pts[pts.length - 1]!, first = pts[0]!;
  const area = `${line} L${last[0]},${H - P} L${first[0]},${H - P} Z`;
  return (
    <svg viewBox={`0 0 ${W} ${H + 20}`} className="stats-chart-svg h-auto w-full">
      <defs>
        <linearGradient id="curveFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.45" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={P} x2={W - P} y1={P + f * (H - 2 * P)} y2={P + f * (H - 2 * P)} stroke="currentColor" strokeOpacity="0.1" strokeDasharray="4 6" />
      ))}
      <path d={area} fill="url(#curveFill)" />
      <path d={line} fill="none" stroke="var(--primary)" strokeWidth="4" strokeLinecap="round" />
      {pts.map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="7" fill="var(--ink)" stroke="var(--primary)" strokeWidth="3" />
          <text x={x} y={y - 16} textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="700" className="font-wide">{monthly[i]!.v}</text>
          <text x={x} y={H + 12} textAnchor="middle" fill="currentColor" fillOpacity="0.5" fontSize="12">{monthly[i]!.m}/26</text>
        </g>
      ))}
    </svg>
  );
}

export function Stats() {
  const { t } = useLanguage();
  const total = counts.VRAI + counts.FAUX + counts.DOUTEUX;
  const pct = (s: Verdict) => Math.round((counts[s] / total) * 100);
  const labels: Record<Verdict, string> = { VRAI: t("true"), FAUX: t("false"), DOUTEUX: t("doubtful") };
  const order = ["VRAI", "FAUX", "DOUTEUX"] as const;

  return (
    <section className="stats-page px-6 py-12">
      <h2 className="stats-page-title text-6xl text-ink-foreground md:text-7xl">{t("statsTab")}</h2>

      <div className="stats-cards mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
        <div className="stats-total-card notch animate-rise flex min-h-48 flex-col rounded-2xl bg-lime p-7 text-lime-foreground md:col-span-2">
          <span className="text-xs uppercase opacity-70">{t("statsTotal")}</span>
          <span className="mt-auto font-wide text-8xl font-bold leading-none">{total}</span>
        </div>
        <div className="stats-total-card notch animate-rise flex min-h-48 flex-col rounded-2xl bg-card p-7 text-card-foreground md:col-span-2" style={{ animationDelay: "0.1s" }}>
          <span className="text-xs uppercase opacity-70">{t("statsAvg")}</span>
          <span className="mt-auto font-wide text-8xl font-bold leading-none">{avgScore}<span className="text-4xl opacity-60">%</span></span>
        </div>
        {order.map((s, i) => (
          <div key={s} className={`stats-verdict-card animate-rise flex flex-col gap-4 rounded-2xl p-6 ${verdictChip[s]}`} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
            <div className="flex items-center gap-2 font-wide text-sm font-bold">
              <VerdictIcon s={s} className="h-5 w-5" /> {labels[s]}
            </div>
            <span className="font-wide text-6xl font-bold leading-none">{pct(s)}%</span>
            <span className="text-xs opacity-70">{counts[s]} / {total}</span>
          </div>
        ))}
        <div className="stats-share-card animate-rise col-span-2 flex flex-col justify-center gap-3 rounded-2xl bg-ink-soft p-6 md:col-span-1" style={{ animationDelay: "0.5s" }}>
          <span className="text-xs uppercase opacity-60">{t("statsShare")}</span>
          <div className="flex h-4 overflow-hidden rounded-full">
            {order.map((s) => <div key={s} className={verdictChip[s]} style={{ width: `${pct(s)}%` }} />)}
          </div>
        </div>
      </div>

      <div className="stats-trend-card animate-rise mt-5 rounded-2xl bg-ink-soft p-7" style={{ animationDelay: "0.6s" }}>
        <h3 className="font-wide text-xl font-bold normal-case tracking-normal">{t("statsTrend")}</h3>
        <div className="stats-chart mt-6"><Curve /></div>
      </div>
    </section>
  );
}
