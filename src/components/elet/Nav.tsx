"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { properties } from "@/data/content";
import { comingSoonHandler } from "@/lib/coming-soon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const links: { label: string; href: string; comingSoon?: boolean }[] = [
  { label: "why book with us", href: "/our-story" },
  { label: "offers", href: "#elet-express" },
  { label: "journal", href: "/journal" },
  { label: "faqs", href: "/faqs" },
];

// `solid` renders the nav in its opaque state at the top of the page — used on
// inner/static pages that have no hero behind the header. On those pages the
// in-page hash links point back to the homepage's sections (e.g. "/#perks").
export function Nav({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  // At the very top the announcement bar is visible, so the nav sits just
  // below it; once you scroll the bar hides and the nav rises to the top.
  const [announcementVisible, setAnnouncementVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      setAnnouncementVisible(window.scrollY <= 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const opaque = scrolled || solid;
  // In-page anchors (#…) must route back to the homepage from inner pages;
  // absolute routes (/our-story, /journal, …) are used as-is.
  const resolveHref = (href: string) =>
    href.startsWith("#") ? (solid ? `/${href}` : href) : href;

  const scrollToProperty = (id: string) => {
    const target = id === "express" ? "elet-express" : `property-${id}`;
    if (solid) {
      window.location.assign(`/#${target}`);
      return;
    }
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 z-40 transition-all duration-500",
        solid ? "top-0" : announcementVisible ? "top-9" : "top-0",
        opaque
          ? "bg-cream/95 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-8">
        <a
          href={solid ? "/" : "#top"}
          className="inline-flex items-center gap-2.5 transition-all duration-500"
        >
          <span className="block h-9 w-9 overflow-hidden" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/elet-logo.svg" alt="" className="h-full w-full object-contain" />
          </span>
          <span
            className={cn(
              "font-display text-xl tracking-wide transition-colors",
              opaque ? "text-ink" : "text-cream",
            )}
          >
            the elet
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                "inline-flex items-center gap-1 text-sm elet-editorial transition-colors outline-none",
                opaque ? "text-ink hover:text-teal" : "text-cream hover:text-gold",
              )}
            >
              select location
              <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[240px]">
              {properties.map((p) => (
                <DropdownMenuItem
                  key={p.id}
                  onSelect={() => scrollToProperty(p.id)}
                  className="flex flex-col items-start"
                >
                  <span className="font-display text-base">{p.name}</span>
                  <span className="text-xs text-ink-soft">{p.location}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {links.map((l) => (
            <a
              key={l.label}
              href={l.comingSoon ? l.href : resolveHref(l.href)}
              onClick={l.comingSoon ? comingSoonHandler(l.label) : undefined}
              className={cn(
                "text-sm elet-editorial transition-colors",
                opaque ? "text-ink hover:text-teal" : "text-cream hover:text-gold",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={resolveHref("#booking")}
            className="hidden rounded-none bg-gold px-5 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink transition-colors hover:bg-gold-soft sm:inline-flex"
          >
            find a room
          </a>
          <button
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full lg:hidden",
              opaque ? "text-ink" : "text-cream",
            )}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-cream lg:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-4 py-6 sm:px-8">
            <div className="text-xs elet-eyebrow text-teal">select location</div>
            <div className="flex flex-col gap-2">
              {properties.map((p) => (
                <button
                  key={p.id}
                  onClick={() => scrollToProperty(p.id)}
                  className="flex items-baseline justify-between border-b border-border py-2 text-left"
                >
                  <span className="font-display text-lg">{p.name}</span>
                  <span className="text-xs text-ink-soft">{p.location}</span>
                </button>
              ))}
            </div>
            <div className="mt-2 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.comingSoon ? l.href : resolveHref(l.href)}
                  onClick={(e) => {
                    if (l.comingSoon) {
                      comingSoonHandler(l.label)(e);
                    }
                    setMobileOpen(false);
                  }}
                  className="text-sm elet-editorial text-ink"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
