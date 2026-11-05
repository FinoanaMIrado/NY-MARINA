import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as LanguageSelect, r as useLanguage } from "./i18n-qmd7XwEY.mjs";
import { n as Logo, t as Arrow } from "./brand-C_aEMW7F.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-CTKGxHsr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Login() {
	const { t } = useLanguage();
	const navigate = useNavigate();
	const [card, setCard] = (0, import_react.useState)(null);
	const submit = (e) => {
		e.preventDefault();
		navigate({ to: "/dashboard" });
	};
	const field = "w-full rounded-2xl border border-ink-foreground/15 bg-ink px-5 py-4 text-sm outline-none placeholder:opacity-40 focus:border-primary";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "min-h-screen bg-ink px-4 py-5 text-ink-foreground sm:px-6 sm:py-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LanguageSelect, {})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "animate-rise text-6xl sm:text-7xl md:text-8xl",
					children: [
						t("loginTitle"),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: t("loginTitleHighlight")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "space-y-3 rounded-3xl bg-ink-soft p-4 sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs uppercase tracking-widest opacity-60",
							children: t("email")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: t("emailPlaceholder"),
							className: field
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block pt-2 text-xs uppercase tracking-widest opacity-60",
							children: t("password")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							placeholder: "••••••••",
							className: field
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block pt-2 text-xs uppercase tracking-widest opacity-60",
							children: t("pressCard")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-dashed border-ink-foreground/20 bg-ink p-5 hover:border-lime",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex h-14 w-20 shrink-0 flex-col justify-between rounded-lg bg-lime p-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-3 w-3 rounded-full bg-ink" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-full rounded bg-ink/40" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-wide text-sm font-bold",
									children: card ? card.name : t("uploadPressCard")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block text-xs opacity-50",
									children: t("pressCardFormats")
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: "image/*,.pdf",
									className: "hidden",
									onChange: (e) => setCard(e.target.files?.[0] ?? null)
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "mt-3 flex w-full items-center justify-between rounded-2xl bg-primary px-6 py-4 font-display text-2xl text-primary-foreground hover:brightness-110",
							children: [
								t("signIn"),
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrow, { className: "h-7 w-7" })
							]
						})
					]
				})]
			})]
		})
	});
}
//#endregion
export { Login as component };
