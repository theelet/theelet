"use client";

import { footerLinks, whatsapp } from "@/data/content";
import { comingSoonHandler } from "@/lib/coming-soon";

export function Footer() {
  return (
    <footer className="bg-teal-deep text-cream">
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="block h-12 w-12 overflow-hidden" aria-hidden="true">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/elet-logo.svg" alt="" className="h-full w-full object-contain" />
              </span>
              <span className="font-display text-2xl tracking-wide text-cream">the elet</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-cream/70">
              three karachi hotels. one point of view. warm, considered, unhurried.
            </p>
            <a
              href={whatsapp.href}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold hover:text-gold-soft"
            >
              whatsapp {whatsapp.number}
            </a>
          </div>
          <div>
            <div className="elet-eyebrow text-gold">links</div>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={l.comingSoon ? comingSoonHandler(l.label) : undefined}
                    target={!l.comingSoon && l.href.startsWith("http") ? "_blank" : undefined}
                    rel={!l.comingSoon && l.href.startsWith("http") ? "noreferrer" : undefined}
                    className="text-cream/80 hover:text-cream"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="elet-eyebrow text-gold">social</div>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.social.map((l) => (
                <li key={l.label}>
                  <a href={l.href} target="_blank" rel="noreferrer" className="text-cream/80 hover:text-cream">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="elet-eyebrow text-gold">language</div>
            <ul className="mt-4 space-y-2 text-sm">
              {footerLinks.languages.map((l) => (
                <li key={l.label}>
                  {l.active ? (
                    <button className="text-cream hover:text-cream">{l.label}</button>
                  ) : (
                    <span
                      title="coming soon"
                      className="inline-flex cursor-not-allowed items-center gap-2 text-cream/40"
                    >
                      {l.label}
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold/70">soon</span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-4 py-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:px-8">
          <span>© {new Date().getFullYear()} the elet karachi. all rights reserved.</span>
          <div className="flex items-center gap-4">
            <a href="#" onClick={comingSoonHandler("privacy policy")} className="hover:text-cream">
              privacy policy
            </a>
            <span className="elet-editorial">karachi · pakistan</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
