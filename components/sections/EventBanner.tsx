import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface EventBannerProps {
  eventName: string;
  date: string;
  location: string;
  href: string;
  ctaLabel?: string;
}

export function EventBanner({
  eventName,
  date,
  location,
  href,
  ctaLabel = "View agenda →",
}: EventBannerProps) {
  return (
    <div className="bg-zinc-900">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <span className="text-sm font-bold uppercase tracking-tight text-white">
            {eventName}
          </span>
          <span className="text-xs text-white/70">
            {date} · {location}
          </span>
        </div>
        <Link
          href={href}
          className="border border-white/60 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.1em] text-white hover:bg-white/10 transition-colors"
        >
          {ctaLabel}
        </Link>
      </Container>
    </div>
  );
}
