import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as LanguageSelect, r as useLanguage } from "./i18n-DZ_Q7JQs.mjs";
import { a as verdictChip, i as Verifier, r as VerdictIcon } from "./brand-liNQl9SW.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-BUeU9wLz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var counts = {
	VRAI: 58,
	FAUX: 31,
	DOUTEUX: 17
};
var monthly = [
	{
		m: "06",
		v: 9
	},
	{
		m: "07",
		v: 14
	},
	{
		m: "08",
		v: 12
	},
	{
		m: "09",
		v: 21
	},
	{
		m: "10",
		v: 23
	},
	{
		m: "11",
		v: 27
	}
];
var avgScore = 64;
function Curve() {
	const W = 600, P = 24;
	const max = Math.max(...monthly.map((d) => d.v)) * 1.15;
	const pts = monthly.map((d, i) => [P + i * 552 / (monthly.length - 1), 196 - d.v / max * 172]);
	const line = pts.map((p, i) => {
		if (i === 0) return `M${p[0]},${p[1]}`;
		const [px, py] = pts[i - 1];
		const cx = (px + p[0]) / 2;
		return `C${cx},${py} ${cx},${p[1]} ${p[0]},${p[1]}`;
	}).join(" ");
	const last = pts[pts.length - 1], first = pts[0];
	const area = `${line} L${last[0]},196 L${first[0]},196 Z`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${W} 240`,
		className: "stats-chart-svg h-auto w-full",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
				id: "curveFill",
				x1: "0",
				x2: "0",
				y1: "0",
				y2: "1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "0%",
					stopColor: "var(--primary)",
					stopOpacity: "0.45"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
					offset: "100%",
					stopColor: "var(--primary)",
					stopOpacity: "0"
				})]
			}) }),
			[
				.25,
				.5,
				.75
			].map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
				x1: P,
				x2: 576,
				y1: P + f * 172,
				y2: P + f * 172,
				stroke: "currentColor",
				strokeOpacity: "0.1",
				strokeDasharray: "4 6"
			}, f)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: area,
				fill: "url(#curveFill)"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: line,
				fill: "none",
				stroke: "var(--primary)",
				strokeWidth: "4",
				strokeLinecap: "round"
			}),
			pts.map(([x, y], i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: x,
					cy: y,
					r: "7",
					fill: "var(--ink)",
					stroke: "var(--primary)",
					strokeWidth: "3"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x,
					y: y - 16,
					textAnchor: "middle",
					fill: "currentColor",
					fontSize: "14",
					fontWeight: "700",
					className: "font-wide",
					children: monthly[i].v
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("text", {
					x,
					y: 232,
					textAnchor: "middle",
					fill: "currentColor",
					fillOpacity: "0.5",
					fontSize: "12",
					children: [monthly[i].m, "/26"]
				})
			] }, i))
		]
	});
}
function Stats() {
	const { t } = useLanguage();
	const total = counts.VRAI + counts.FAUX + counts.DOUTEUX;
	const pct = (s) => Math.round(counts[s] / total * 100);
	const labels = {
		VRAI: t("true"),
		FAUX: t("false"),
		DOUTEUX: t("doubtful")
	};
	const order = [
		"VRAI",
		"FAUX",
		"DOUTEUX"
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "stats-page px-6 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "stats-page-title text-6xl text-ink-foreground md:text-7xl",
				children: t("statsTab")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stats-cards mt-10 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stats-total-card notch animate-rise flex min-h-48 flex-col rounded-2xl bg-lime p-7 text-lime-foreground md:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase opacity-70",
							children: t("statsTotal")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-auto font-wide text-8xl font-bold leading-none",
							children: total
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stats-total-card notch animate-rise flex min-h-48 flex-col rounded-2xl bg-card p-7 text-card-foreground md:col-span-2",
						style: { animationDelay: "0.1s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase opacity-70",
							children: t("statsAvg")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-auto font-wide text-8xl font-bold leading-none",
							children: [avgScore, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-4xl opacity-60",
								children: "%"
							})]
						})]
					}),
					order.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `stats-verdict-card animate-rise flex flex-col gap-4 rounded-2xl p-6 ${verdictChip[s]}`,
						style: { animationDelay: `${.2 + i * .1}s` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2 font-wide text-sm font-bold",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerdictIcon, {
										s,
										className: "h-5 w-5"
									}),
									" ",
									labels[s]
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-wide text-6xl font-bold leading-none",
								children: [pct(s), "%"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-xs opacity-70",
								children: [
									counts[s],
									" / ",
									total
								]
							})
						]
					}, s)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "stats-share-card animate-rise col-span-2 flex flex-col justify-center gap-3 rounded-2xl bg-ink-soft p-6 md:col-span-1",
						style: { animationDelay: "0.5s" },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs uppercase opacity-60",
							children: t("statsShare")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-4 overflow-hidden rounded-full",
							children: order.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: verdictChip[s],
								style: { width: `${pct(s)}%` }
							}, s))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "stats-trend-card animate-rise mt-5 rounded-2xl bg-ink-soft p-7",
				style: { animationDelay: "0.6s" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-wide text-xl font-bold normal-case tracking-normal",
					children: t("statsTrend")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "stats-chart mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Curve, {})
				})]
			})
		]
	});
}
var dossiers = [
	{
		title: "sampleRiceTitle",
		description: "sampleRiceDescription",
		source: "url",
		date: "04/11/2026 · 10:24",
		status: "VRAI",
		score: 86
	},
	{
		title: "sampleWaterTitle",
		description: "sampleWaterDescription",
		source: "image",
		date: "03/11/2026 · 16:02",
		status: "FAUX",
		score: 14
	},
	{
		title: "sampleVaccineTitle",
		description: "sampleVaccineDescription",
		source: "url",
		date: "02/11/2026 · 09:45",
		status: "DOUTEUX",
		score: 48
	},
	{
		title: "sampleCycloneTitle",
		description: "sampleCycloneDescription",
		source: "image",
		date: "01/11/2026 · 18:30",
		status: "VRAI",
		score: 79
	}
];
function Dossiers() {
	const { t } = useLanguage();
	const count = (s) => dossiers.filter((d) => d.status === s).length;
	const statusLabels = {
		VRAI: t("true"),
		FAUX: t("false"),
		DOUTEUX: t("doubtful")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-6 py-12",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-6xl text-ink-foreground md:text-7xl",
				children: t("myChecks")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-7 flex flex-wrap gap-3",
				children: [
					"VRAI",
					"FAUX",
					"DOUTEUX"
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `flex items-center gap-2 rounded-xl px-4 py-2.5 font-wide text-sm font-bold ${verdictChip[s]}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerdictIcon, {
							s,
							className: "h-4 w-4"
						}),
						" ",
						statusLabels[s],
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "opacity-70",
							children: count(s)
						})
					]
				}, s))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 md:grid-cols-2",
				children: dossiers.map((x, i) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: `notch animate-rise flex min-h-72 flex-col rounded-2xl p-7 ${i === 0 ? "bg-lime text-lime-foreground" : "bg-card text-card-foreground"}`,
						style: { animationDelay: `${i * .1}s` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-wide text-6xl font-medium leading-none opacity-80",
									children: String(i + 1).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md border border-current/30 px-3 py-1.5 text-[11px]",
									children: x.source === "url" ? t("urlSource") : t("imageSource")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-wide text-xl font-bold normal-case leading-tight tracking-normal",
									children: t(x.title)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs leading-relaxed opacity-70",
									children: t(x.description)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-[11px] opacity-60",
								children: x.date
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `-mx-7 -mb-7 mt-auto flex items-center gap-3 border-t border-ink/15 px-7 py-5 ${verdictChip[x.status]}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerdictIcon, {
										s: x.status,
										className: "h-7 w-7 shrink-0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-wide text-2xl font-bold leading-none tracking-tight",
										children: statusLabels[x.status]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-auto font-wide text-lg font-bold",
										children: [x.score, "%"]
									})
								]
							})
						]
					}, x.title);
				})
			})
		]
	});
}
function Dashboard() {
	const { t } = useLanguage();
	const [tab, setTab] = (0, import_react.useState)("verifier");
	const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
	const selectTab = (nextTab) => {
		setTab(nextTab);
		setMobileMenuOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: `flex min-h-screen flex-col bg-ink text-ink-foreground lg:flex-row ${tab === "stats" ? "dashboard-stats-mode" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "dashboard-mobile-header flex items-center justify-between gap-3 border-b border-ink-foreground/10 px-4 py-3 lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					"aria-label": "Ny Marina — accueil",
					className: "block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/icon.svg",
						alt: "Ny Marina",
						className: "h-auto w-32 object-contain"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-expanded": mobileMenuOpen,
						"aria-controls": "dashboard-mobile-menu",
						onClick: () => setMobileMenuOpen((open) => !open),
						className: "rounded-full bg-primary px-4 py-2 font-wide text-xs font-bold uppercase text-primary-foreground transition-transform hover:scale-105",
						children: mobileMenuOpen ? t("closeMenu") : t("openMenu")
					})]
				})]
			}),
			mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				id: "dashboard-mobile-menu",
				className: "dashboard-mobile-menu fixed inset-x-3 top-3 z-50 rounded-[2rem] bg-lime p-6 text-lime-foreground shadow-2xl sm:inset-x-5 sm:p-8 lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-wide text-xs font-bold uppercase tracking-[.2em]",
							children: "Ny Marina"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMobileMenuOpen(false),
							className: "rounded-full border border-lime-foreground/25 px-4 py-2 font-wide text-xs font-bold uppercase",
							children: t("closeMenu")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						"aria-label": t("dashboardNavigation"),
						className: "mt-8 flex flex-col items-end gap-1",
						children: [
							["verifier", t("verifyTab")],
							["dossiers", t("myChecks")],
							["stats", t("statsTab")]
						].map(([key, label], index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => selectTab(key),
							className: `dashboard-mobile-menu-item text-right font-display text-5xl uppercase leading-[.95] sm:text-6xl ${tab === key ? "text-primary" : ""}`,
							style: { animationDelay: `${index * 70}ms` },
							children: label
						}, key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex justify-end border-t border-lime-foreground/20 pt-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							onClick: () => setMobileMenuOpen(false),
							className: "text-sm font-semibold underline underline-offset-4",
							children: [t("signOut"), " ↗"]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "z-30 hidden h-screen w-64 shrink-0 flex-col gap-2 border-r border-ink-foreground/10 p-6 lg:sticky lg:top-0 lg:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between gap-4 lg:flex-col lg:items-stretch lg:gap-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							"aria-label": "Ny Marina — accueil",
							className: "block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/icon.svg",
								alt: "Ny Marina",
								className: "h-auto w-32 object-contain sm:w-40 lg:w-full lg:max-w-44"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "-mx-1 flex gap-2 overflow-x-auto pb-1 lg:mx-0 lg:mt-10 lg:flex-col lg:overflow-visible lg:pb-0",
						children: [
							["verifier", t("verifyTab")],
							["dossiers", t("myChecks")],
							["stats", t("statsTab")]
						].map(([k, l]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => selectTab(k),
							className: `shrink-0 rounded-xl px-3 py-2 text-left font-display text-lg transition sm:px-4 lg:w-full lg:rounded-2xl lg:py-3 lg:text-2xl ${tab === k ? "bg-primary text-primary-foreground" : "opacity-70 hover:bg-ink-soft hover:opacity-100"}`,
							children: l
						}, k))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "ml-auto rounded-xl bg-ink-soft px-4 py-2 text-xs opacity-80 hover:opacity-100 lg:mt-auto",
						children: t("signOut")
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex-1 overflow-x-hidden ${tab === "stats" ? "dashboard-stats-content" : ""}`,
				children: tab === "verifier" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Verifier, {}) : tab === "dossiers" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dossiers, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {})
			})
		]
	});
}
//#endregion
export { Dashboard as component };
