import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero, type PageHeroProps } from "@/components/sections/PageHero";

export interface SimpleContentSection {
  heading?: string;
  body: string[];
}

export function SimpleContentPageTemplate({
  hero,
  sections,
  aside,
}: {
  hero: PageHeroProps;
  sections: SimpleContentSection[];
  aside?: ReactNode;
}) {
  return (
    <>
      <PageHero {...hero} />
      <Container className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <article className="space-y-8 lg:col-span-8">
            {sections.map((section, idx) => (
              <section key={idx} className="space-y-3">
                {section.heading ? (
                  <h2 className="text-xl font-semibold tracking-tight text-zinc-900">
                    {section.heading}
                  </h2>
                ) : null}
                {section.body.map((p, j) => (
                  <p key={j} className="text-base leading-relaxed text-zinc-700">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </article>
          {aside ? (
            <aside className="lg:col-span-4">{aside}</aside>
          ) : null}
        </div>
      </Container>
    </>
  );
}
