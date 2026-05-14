"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface NewsletterCTAProps {
  variant?: "section" | "compact";
  title?: string;
  description?: string;
}

export function NewsletterCTA({
  variant = "section",
  title = "The CTN Briefing",
  description = "A weekly editorial briefing for the UK cruise trade. No spam, no fluff.",
}: NewsletterCTAProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className="space-y-2">
        <label
          className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
          htmlFor="newsletter-compact"
        >
          Newsletter
        </label>
        {submitted ? (
          <div className="border border-zinc-300 bg-white px-3 py-3 text-sm text-zinc-700">
            Thanks. You are subscribed to {email}.
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              id="newsletter-compact"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@agency.co.uk"
              className="h-10 flex-1 border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-zinc-900"
            />
            <Button type="submit" size="sm" variant="primary">
              Subscribe
            </Button>
          </div>
        )}
      </form>
    );
  }

  return (
    <section className="border-y border-zinc-200 bg-white">
      <Container className="py-14 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionLabel>Newsletter</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
              {title}
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-600 sm:text-base">
              {description}
            </p>
          </div>

          <div className="lg:col-span-5">
            <form
              onSubmit={handleSubmit}
              className="border border-zinc-200 bg-zinc-50 p-6"
            >
              {submitted ? (
                <div className="space-y-2">
                  <div className="text-base font-semibold text-zinc-900">
                    You are subscribed.
                  </div>
                  <p className="text-sm text-zinc-600">
                    Look out for the next CTN Briefing in your inbox at {email}.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  <label
                    htmlFor="newsletter-section"
                    className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500"
                  >
                    Work email
                  </label>
                  <div className="flex gap-2">
                    <input
                      id="newsletter-section"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@agency.co.uk"
                      className="h-11 flex-1 border border-zinc-300 bg-white px-3 text-sm outline-none focus:border-zinc-900"
                    />
                    <Button type="submit" variant="primary">
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-xs text-zinc-500">
                    By subscribing you agree to receive editorial emails from CTN.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
