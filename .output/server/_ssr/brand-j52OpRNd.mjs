import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as useLanguage } from "./i18n-BbklbTVS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-j52OpRNd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Arrow({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2.5,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 8v10H8" })
	});
}
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: "/",
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative flex h-6 w-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute left-0 top-0 h-3.5 w-3.5 rounded-full bg-primary" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute bottom-0 left-2 h-3.5 w-3.5 rounded-full bg-accent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute right-0 top-1 h-3.5 w-3.5 rounded-full bg-ink-foreground" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl tracking-tight",
			children: "Ny Marina"
		})]
	});
}
function Gauge({ score }) {
	const len = Math.PI * 80;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto w-64",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 200 110",
			className: "w-full",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 100 A80 80 0 0 1 180 100",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "18",
				strokeLinecap: "round",
				className: "text-ink-soft"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M20 100 A80 80 0 0 1 180 100",
				fill: "none",
				stroke: "currentColor",
				strokeWidth: "18",
				strokeLinecap: "round",
				className: score >= 70 ? "text-success" : score >= 40 ? "text-warning" : "text-destructive",
				strokeDasharray: len,
				strokeDashoffset: len * (1 - score / 100),
				style: {
					["--gauge-len"]: len,
					animation: "gauge 1.6s cubic-bezier(.2,.8,.2,1)"
				}
			}, score)]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 bottom-0 text-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "font-display text-6xl",
				children: [score, "%"]
			})
		})]
	});
}
function Verifier() {
	const { t } = useLanguage();
	const [mode, setMode] = (0, import_react.useState)("url");
	const [url, setUrl] = (0, import_react.useState)("");
	const [file, setFile] = (0, import_react.useState)(null);
	const [loading, setLoading] = (0, import_react.useState)(false);
	const [result, setResult] = (0, import_react.useState)(null);
	const submit = (e) => {
		e.preventDefault();
		const source = mode === "url" ? url : file?.name ?? "";
		if (!source) return;
		setLoading(true);
		setResult(null);
		setTimeout(() => {
			setResult({
				score: 30 + source.length * 37 % 65,
				source
			});
			setLoading(false);
		}, 1800);
	};
	const verdict = (s) => s >= 70 ? t("likelyReliable") : s >= 40 ? t("useCaution") : t("likelyMisleading");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "verifier",
		className: "bg-ink px-6 py-24 text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-6xl md:text-7xl",
					children: [
						t("verifyNow"),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sun",
							children: t("shareLater")
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-6 max-w-md text-sm leading-relaxed opacity-70",
					children: t("verifyIntro")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-10 rounded-3xl bg-ink-soft p-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-2",
						children: ["url", "image"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setMode(m),
							className: `rounded-2xl py-3 text-sm font-medium transition ${mode === m ? "bg-ink-foreground text-ink" : "opacity-70 hover:opacity-100"}`,
							children: m === "url" ? t("urlSource") : t("screenshot")
						}, m))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3",
						children: [mode === "url" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "url",
							value: url,
							onChange: (e) => setUrl(e.target.value),
							placeholder: "https://...",
							className: "w-full rounded-2xl border border-ink-foreground/15 bg-ink px-5 py-4 text-sm outline-none placeholder:opacity-40 focus:border-primary"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-ink-foreground/20 bg-ink px-5 py-8 text-center text-sm hover:border-primary",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-2xl",
									children: file ? file.name : t("dropImage")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 opacity-50",
									children: t("screenshotFormats")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*",
									className: "hidden",
									onChange: (e) => setFile(e.target.files?.[0] ?? null)
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							disabled: loading,
							className: "mt-3 flex w-full items-center justify-between rounded-2xl bg-primary px-6 py-4 font-display text-2xl text-primary-foreground transition hover:brightness-110 disabled:opacity-60",
							children: [loading ? t("analyzing") : t("startVerification"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-7 w-7" })]
						})]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-h-[420px] flex-col justify-center rounded-3xl bg-ink-soft p-8",
				children: [
					loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4 font-display text-3xl",
						children: [
							t("extracting"),
							t("searchingSources"),
							t("analyzingWithAi")
						].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "animate-rise flex items-center gap-3",
							style: { animationDelay: `${i * .4}s` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 animate-pulse rounded-full bg-primary" }),
								" ",
								step
							]
						}, step))
					}),
					!loading && !result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-8xl text-sun",
							children: "?%"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm opacity-60",
							children: t("resultPlaceholder")
						})]
					}),
					result && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "animate-rise",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { score: result.score }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-6 text-center text-4xl",
								children: verdict(result.score)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm leading-relaxed opacity-70",
								children: t("sampleJustification")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-4 truncate text-xs opacity-40",
								children: [
									t("analyzedSource"),
									" ",
									result.source
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs opacity-40",
								children: t("scoreDisclaimer")
							})
						]
					})
				]
			})]
		})
	});
}
var verdictChip = {
	VRAI: "bg-success text-ink",
	FAUX: "bg-destructive text-ink-foreground",
	DOUTEUX: "bg-warning text-ink"
};
function VerdictIcon({ s, className = "h-5 w-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		className,
		fill: "none",
		stroke: "currentColor",
		strokeWidth: 2.6,
		strokeLinecap: "round",
		strokeLinejoin: "round",
		"aria-hidden": "true",
		children: [
			s === "VRAI" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 13l5 5L20 6" }),
			s === "FAUX" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6 6l12 12M18 6L6 18" }),
			s === "DOUTEUX" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9.4 9.2a2.7 2.7 0 1 1 4 2.4c-.9.7-1.4 1.2-1.4 2.3" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 17.4h.01" })] })
		]
	});
}
//#endregion
export { verdictChip as a, Verifier as i, Logo as n, VerdictIcon as r, Arrow as t };
