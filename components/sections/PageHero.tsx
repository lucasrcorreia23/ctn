import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  meta?: string;
  align?: "left" | "center";
}

export function PageHero({
  eyebrow,
  title,
  description,
  meta,
  align = "left",
}: PageHeroProps) {
  return (
    <section className="border-b border-zinc-200 bg-zinc-50">
      <Container className="py-14 lg:py-20">
        <div
          className={
            align === "center"
              ? "mx-auto max-w-3xl text-center"
              : "max-w-3xl"
          }
        >
          {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">{description}</p>
          ) : null}
          {meta ? (
            <p className="mt-3 text-xs uppercase tracking-[0.16em] text-zinc-500">
              {meta}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
