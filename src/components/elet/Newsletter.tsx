"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ScrollFadeIn } from "./ScrollFadeIn";
import { comingSoonHandler } from "@/lib/coming-soon";

export function Newsletter() {
  const [first, setFirst] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("you're on the list", {
      description: "we'll send the good stuff, sparingly.",
    });
    setFirst("");
    setEmail("");
  };

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-8">
        <ScrollFadeIn>
          <div className="elet-eyebrow text-teal">the newsletter</div>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-6xl">get the inside scoop</h2>
          <p className="mt-4 text-ink-soft">
            offers, new openings, and the occasional karachi city guide. no spam, no filler.
          </p>
          <form onSubmit={submit} className="mt-10 grid gap-3 text-left sm:grid-cols-[1fr_1.4fr_auto]">
            <div className="flex flex-col gap-1">
              <label className="elet-eyebrow text-ink-soft" htmlFor="first">
                first name
              </label>
              <input
                id="first"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                className="border-b border-ink/20 bg-transparent py-2 text-base text-ink focus:border-teal focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="elet-eyebrow text-ink-soft" htmlFor="email">
                email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-b border-ink/20 bg-transparent py-2 text-base text-ink focus:border-teal focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="self-end bg-gold px-6 py-3 text-xs font-medium uppercase tracking-[0.22em] text-ink hover:bg-gold-soft"
            >
              sign me up
            </button>
          </form>
          <p className="mt-4 text-xs text-ink-soft">
            by signing up you agree to our{" "}
            <a
              href="#"
              onClick={comingSoonHandler("privacy policy")}
              className="underline underline-offset-4 hover:text-teal"
            >
              privacy policy
            </a>
            .
          </p>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
