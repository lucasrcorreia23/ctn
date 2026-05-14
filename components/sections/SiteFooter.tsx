import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

const COLUMNS = [
  {
    title: "News",
    links: [
      { label: "Ocean", href: "/news/ocean" },
      { label: "River", href: "/news/river" },
      { label: "Luxury", href: "/news/luxury" },
      { label: "Expedition", href: "/news/expedition" },
    ],
  },
  {
    title: "Features",
    links: [
      { label: "Analysis", href: "/features-analysis/analysis-comment" },
      { label: "Comment", href: "/features-analysis/analysis-comment" },
      { label: "Interviews", href: "/features-analysis/interviews" },
      { label: "Cruise Review", href: "/features-analysis/cruise-review" },
      { label: "Marketing Tips", href: "/features-analysis/mktg-tips" },
    ],
  },
  {
    title: "Trade",
    links: [
      { label: "Events", href: "/events" },
      { label: "Magazines", href: "/magazines" },
      { label: "Podcast", href: "/podcast" },
      { label: "Knowledge Hub", href: "/knowledge-hub" },
    ],
  },
  {
    title: "Agent",
    links: [
      { label: "Incentives", href: "/agent-portal/incentives" },
      { label: "Competitions", href: "/agent-portal/competitions" },
      { label: "Offers", href: "/agent-portal/offers" },
    ],
  },
  {
    title: "CTN",
    links: [
      { label: "About", href: "/about" },
      { label: "Advertise With Us", href: "/advertise" },
      { label: "Meet the Team", href: "/meet-the-team" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
];

function IconInstagram() {
  return (
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="size-5">
      <rect x="2" y="2" width="16" height="16" rx="4" />
      <circle cx="10" cy="10" r="3.5" />
      <circle cx="14.5" cy="5.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconX() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
      <path d="M15.08 2.5h2.648L11.9 8.963 18.75 17.5h-5.565l-3.771-4.985-4.314 4.985H2.25l6.268-7.245L2.003 2.5H7.7l3.407 4.55zm-.929 13.506h1.467L6.404 4.003H4.827z" />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
      <path d="M18 10.049C18 5.603 14.418 2 10 2S2 5.603 2 10.049c0 4.017 2.926 7.346 6.75 7.95v-5.622H6.719v-2.328H8.75V8.419c0-2.017 1.195-3.132 3.022-3.132.875 0 1.79.158 1.79.158v1.98h-1.008c-.994 0-1.304.62-1.304 1.257v1.515h2.219l-.355 2.328H11.25V18c3.824-.604 6.75-3.933 6.75-7.951z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
      <path d="M17.04 17.043h-2.962v-4.64c0-1.107-.023-2.531-1.544-2.531-1.544 0-1.78 1.204-1.78 2.449v4.722H7.793V7.5h2.844v1.3h.039c.397-.75 1.364-1.54 2.808-1.54 3.001 0 3.556 1.974 3.556 4.545v5.238zM4.447 6.194a1.72 1.72 0 110-3.44 1.72 1.72 0 010 3.44zm1.484 10.85H2.963V7.5h2.968v9.543zM18.522 1H1.476C.66 1 0 1.645 0 2.441v15.118C0 18.355.66 19 1.476 19h17.046C19.34 19 20 18.355 20 17.559V2.441C20 1.645 19.34 1 18.522 1z" />
    </svg>
  );
}

function IconSpotify() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
      <path d="M10 1.667A8.333 8.333 0 1010 18.333 8.333 8.333 0 0010 1.667zm3.816 12.014a.52.52 0 01-.714.173c-1.957-1.196-4.42-1.467-7.322-.803a.52.52 0 01-.232-1.013c3.175-.726 5.9-.413 8.096.928a.52.52 0 01.172.715zm1.02-2.269a.651.651 0 01-.895.214c-2.24-1.376-5.652-1.776-8.302-.971a.651.651 0 01-.376-1.244c3.026-.916 6.787-.472 9.359 1.107a.651.651 0 01.214.894zm.088-2.362c-2.686-1.595-7.118-1.742-9.683-.963a.782.782 0 01-.453-1.496c2.944-.894 7.842-.721 10.934 1.114a.781.781 0 01-.798 1.345z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-[#fafafa]">
      <Container className="py-16">
        <div className="flex items-start justify-between gap-40">

          {/* Left — logo + social icons */}
          <div className="flex shrink-0 flex-col gap-8">
            <Link href="/" aria-label="Cruise Trade News home">
              <Image
                src="/ctn-logo.png"
                alt="Cruise Trade News"
                width={912}
                height={300}
                className="h-8 w-auto"
              />
            </Link>
            <div className="flex items-center gap-4 text-zinc-500">
              <Link href="#" aria-label="Instagram" className="hover:text-zinc-900 transition-colors">
                <IconInstagram />
              </Link>
              <Link href="#" aria-label="X (Twitter)" className="hover:text-zinc-900 transition-colors">
                <IconX />
              </Link>
              <Link href="#" aria-label="Facebook" className="hover:text-zinc-900 transition-colors">
                <IconFacebook />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="hover:text-zinc-900 transition-colors">
                <IconLinkedIn />
              </Link>
              <Link href="#" aria-label="Spotify" className="hover:text-zinc-900 transition-colors">
                <IconSpotify />
              </Link>
            </div>
          </div>

          {/* Right — nav columns */}
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  {col.title}
                </div>
                <ul className="mt-3 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex items-center justify-between border-t border-zinc-200 pt-6">
          <p className="text-xs text-zinc-500">
            © {new Date().getFullYear()} Cruise Trade News. Wireframe prototype.
          </p>
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            <Link href="/terms" className="hover:text-zinc-900 transition-colors">Terms</Link>
            <Link href="/privacy" className="hover:text-zinc-900 transition-colors">Privacy</Link>
            <Link href="/contact" className="hover:text-zinc-900 transition-colors">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
