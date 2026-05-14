import { Container } from "@/components/ui/Container";
import { Placeholder, type PlaceholderKind } from "@/components/ui/Placeholder";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  Breadcrumbs,
  type BreadcrumbItem,
} from "@/components/sections/Breadcrumbs";

export function DetailHeader({
  breadcrumbs,
  eyebrow,
  title,
  meta,
  excerpt,
  imageKind = "generic",
  imageRatio = "16/9",
}: {
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
  title: string;
  meta?: string;
  excerpt?: string;
  imageKind?: PlaceholderKind;
  imageRatio?: "16/9" | "4/3" | "2/1";
}) {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <Container className="py-10 lg:py-14">
        <Breadcrumbs items={breadcrumbs} />
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
              {title}
            </h1>
            {excerpt ? (
              <p className="mt-3 max-w-2xl text-base text-zinc-600 sm:text-lg">
                {excerpt}
              </p>
            ) : null}
            {meta ? (
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-zinc-500">
                {meta}
              </p>
            ) : null}
          </div>
          <div className="lg:col-span-4">
            <Placeholder kind={imageKind} ratio={imageRatio} />
          </div>
        </div>
      </Container>
    </header>
  );
}
