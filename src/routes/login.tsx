import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Arrow, Logo } from "@/components/brand";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Connexion journaliste — Ny Marina" },
      { name: "description", content: "Accédez à votre espace journaliste Ny Marina pour vérifier des informations." },
      { property: "og:title", content: "Connexion journaliste — Ny Marina" },
      { property: "og:description", content: "Espace privé de vérification pour journalistes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [card, setCard] = useState<File | null>(null);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/dashboard" });
  };
  const field = "w-full rounded-2xl border border-ink-foreground/15 bg-ink px-5 py-4 text-sm outline-none placeholder:opacity-40 focus:border-primary";

  return (
    <main className="min-h-screen bg-ink px-6 py-6 text-ink-foreground">
      <div className="mx-auto max-w-6xl">
        <Logo />
        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <h1 className="animate-rise text-7xl md:text-8xl">
            Espace <span className="text-primary">journaliste</span>
          </h1>
          <form onSubmit={submit} className="space-y-3 rounded-3xl bg-ink-soft p-6">
            <label className="block text-xs uppercase tracking-widest opacity-60">E-mail</label>
            <input type="email" placeholder="vous@redaction.mg" className={field} />
            <label className="block pt-2 text-xs uppercase tracking-widest opacity-60">Mot de passe</label>
            <input type="password" placeholder="••••••••" className={field} />
            <label className="block pt-2 text-xs uppercase tracking-widest opacity-60">Carte de presse</label>
            <label className="flex cursor-pointer items-center gap-4 rounded-2xl border-2 border-dashed border-ink-foreground/20 bg-ink p-5 hover:border-lime">
              <span className="flex h-14 w-20 shrink-0 flex-col justify-between rounded-lg bg-lime p-2">
                <span className="h-3 w-3 rounded-full bg-ink" />
                <span className="h-1.5 w-full rounded bg-ink/40" />
              </span>
              <span>
                <span className="block font-wide text-sm font-bold">{card ? card.name : "Importer votre carte de presse"}</span>
                <span className="mt-1 block text-xs opacity-50">Recto, PNG, JPG ou PDF</span>
              </span>
              <input type="file" accept="image/*,.pdf" className="hidden" onChange={(e) => setCard(e.target.files?.[0] ?? null)} />
            </label>
            <button className="mt-3 flex w-full items-center justify-between rounded-2xl bg-primary px-6 py-4 font-display text-2xl text-primary-foreground hover:brightness-110">
              Se connecter <Arrow className="h-7 w-7" />
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
