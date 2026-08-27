import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { whatsapp } from "@/data/content";

// Layout wrapper for the static/inner pages (our-story, journal, faqs, …).
// The root layout already renders <Toaster>, so it isn't repeated here.
export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Nav solid />
      <main className="pt-20 sm:pt-24">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pt-12 pb-10 sm:px-8 sm:pt-16">
      {eyebrow && <div className="elet-eyebrow text-teal">{eyebrow}</div>}
      <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-6xl">{title}</h1>
      {subtitle && <p className="mt-4 max-w-2xl text-ink-soft">{subtitle}</p>}
    </div>
  );
}

// Splits a plain-text block on blank lines into styled paragraphs.
export function Prose({ text }: { text: string }) {
  return (
    <div className="flex flex-col gap-5">
      {text
        .trim()
        .split(/\n\s*\n/)
        .map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-ink-soft sm:text-lg">
            {p}
          </p>
        ))}
    </div>
  );
}

export function WhatsappButton({ children }: { children: ReactNode }) {
  return (
    <a
      href={whatsapp.href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center justify-center bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-soft"
    >
      {children}
    </a>
  );
}
