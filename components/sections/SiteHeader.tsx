"use client";

import Link from "next/link";
import Image from "next/image";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { Container } from "@/components/ui/Container";
import { SearchOverlay } from "@/components/sections/SearchOverlay";
import {
  headerCategoriesLeft,
  headerCategoriesRight,
} from "@/data/navigation";


export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [initialSearchQuery, setInitialSearchQuery] = useState("");
  const [overlaySearch, setOverlaySearch] = useState("");
  const [nlEmail, setNlEmail] = useState("");
  const [nlSubmitted, setNlSubmitted] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const currentY = window.scrollY;
        setScrolled(prev => {
          if (!prev && currentY > 120) return true;
          if (prev && currentY < 60) return false;
          return prev;
        });
      });
    };

    setScrolled(window.scrollY > 120);

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const menuTrigger = menuButtonRef.current;
    const closeBtn = closeButtonRef.current;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);

    const t = window.setTimeout(() => {
      closeBtn?.focus();
    }, 0);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
      menuTrigger?.focus();
    };
  }, [menuOpen]);

  const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInitialSearchQuery(overlaySearch);
    setMenuOpen(false);
    setSearchOpen(true);
  };

  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!nlEmail) return;
    setNlSubmitted(true);
  };

  return (
    <>
      <header className={`sticky top-0 z-40 bg-white transition-shadow duration-150 ease-in-out`}>

        {/* Topbar — collapses on scroll */}
        <div
          className={`overflow-hidden transition-[max-height] duration-150 ease-in-out ${
            scrolled ? "max-h-0" : "max-h-16"
          }`}
        >
        <Container className="flex py-3 items-center justify-between">
            <nav
              aria-label="Utility"
              className="hidden items-center gap-5 text-[11px] uppercase tracking-[0.16em] text-zinc-600 sm:flex"
            >
              <Link href="/about" className="hover:text-zinc-900">About</Link>
              <Link href="/advertise" className="hover:text-zinc-900">Advertise with us</Link>
              <Link href="/meet-the-team" className="hover:text-zinc-900">Meet the team</Link>
              <Link href="/contact" className="hover:text-zinc-900">Contact us</Link>
            </nav>

            <div className="flex items-center gap-4 text-xs uppercase tracking-[0.16em] text-zinc-600">
              <Link
                href="/subscribe"
                className="inline-flex h-9 items-center justify-center bg-zinc-900 px-3.5 font-medium text-white hover:bg-zinc-700"
              >
                Subscribe
              </Link>
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="inline-flex items-center gap-1.5 hover:text-zinc-900"
                aria-label="Open search"
              >
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="h-3.5 w-3.5 flex-shrink-0"
                >
                  <circle cx="6.5" cy="6.5" r="4.5" />
                  <line x1="10" y1="10" x2="14" y2="14" />
                </svg>
              </button>
              <button
                ref={menuButtonRef}
                type="button"
                onClick={() => setMenuOpen(true)}
                className="inline-flex items-center gap-1.5 hover:text-zinc-900"
                aria-label="Open menu"
                aria-controls="mega-menu-panel"
                aria-expanded={menuOpen}
              >
                <span aria-hidden className="flex flex-col gap-[3px]">
                  <span className="block h-px w-3 bg-zinc-600" />
                  <span className="block h-px w-3 bg-zinc-600" />
                  <span className="block h-px w-3 bg-zinc-600" />
                </span>
              </button>
            </div>
          </Container>
        </div>

        {/* Navbar — centered logo flanked by category nav */}

        {/* Mobile: logo only */}
        <div className="flex py-4 items-center border-b border-zinc-200 px-4 py-4 lg:hidden">
          <Link href="/" aria-label="Cruise Trade News home">
            <Image
              src="/ctn-logo.png"
              alt="Cruise Trade News"
              width={912}
              height={300}
              priority
              className="h-10 w-auto  sm:h-12"
            />
          </Link>
        </div>

        {/* Desktop: navbar */}
        <div className={`hidden w-full relative lg:block ${scrolled ? 'border-b border-zinc-200' : 'border-b-0'}`}>
          <div aria-hidden className={`absolute inset-x-0 top-0 h-px bg-zinc-200 transition-opacity duration-150 ${scrolled ? 'opacity-0' : 'opacity-100'}`} />
          <div aria-hidden className={`absolute inset-x-0 bottom-0 h-px bg-zinc-200 transition-opacity duration-150 ${scrolled ? 'opacity-0' : 'opacity-100'}`} />
          <div className="relative mx-auto flex max-w-7xl items-center px-8">
            <nav
              aria-label="Primary categories left"
              className={`flex flex-1 items-center justify-end gap-10 pr-8 transition-[padding] duration-150 ease-in-out ${scrolled ? 'py-4' : 'py-8'}`}
            >
              {headerCategoriesLeft.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`font-semibold uppercase tracking-[0.16em] text-zinc-900 hover:underline transition-[font-size] duration-150 ease-in-out ${scrolled ? 'text-xs' : 'text-sm'}`}
                >
                  {cat.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/"
              className={`relative z-10 flex self-stretch items-center bg-white py-1 transition-[padding] duration-150 ease-in-out ${scrolled ? 'px-6' : 'px-12'}`}
              aria-label="Cruise Trade News home"
            >
              <Image
                src="/ctn-logo.png"
                alt="Cruise Trade News"
                width={912}
                height={300}
                priority
                className={`w-auto transition-[height] duration-150 ease-in-out ${scrolled ? 'h-10' : 'h-16'}`}
              />
            </Link>

            <nav
              aria-label="Primary categories right"
              className={`flex flex-1 items-center gap-10 pl-8 transition-[padding] duration-150 ease-in-out ${scrolled ? 'py-4' : 'py-8'}`}
            >
              {headerCategoriesRight.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`font-semibold uppercase tracking-[0.16em] text-zinc-900 hover:underline transition-[font-size] duration-150 ease-in-out ${scrolled ? 'text-xs' : 'text-sm'}`}
                >
                  {cat.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

      </header>

      {/* Mega menu */}
      {menuOpen ? (
        <div
          id="mega-menu-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 overflow-y-auto bg-black text-zinc-50"
        >
          <Container className="py-10">

            {/* Top row — utility nav + search + close */}
            <div className="flex items-center justify-between border-b border-zinc-700 pb-6">
              <nav aria-label="Utility" className="flex flex-wrap items-center gap-5 text-[11px] uppercase tracking-[0.16em] text-white">
                <Link href="/about" onClick={closeMenu} className="hover:text-zinc-300">About</Link>
                <Link href="/advertise" onClick={closeMenu} className="hover:text-zinc-300">Advertise With Us</Link>
                <Link href="/meet-the-team" onClick={closeMenu} className="hover:text-zinc-300">Meet the Team</Link>
                <Link href="/contact" onClick={closeMenu} className="hover:text-zinc-300">Contact Us</Link>
              </nav>
              <div className="flex items-center gap-3">
                <form
                  onSubmit={handleSearchSubmit}
                  role="search"
                  aria-label="Search Cruise Trade News"
                  className="flex h-10 items-center border border-zinc-700 bg-[#27272a]"
                >
                  <input
                    type="search"
                    value={overlaySearch}
                    onChange={(e) => setOverlaySearch(e.target.value)}
                    placeholder="Search"
                    aria-label="Search query"
                    className="h-full w-44 bg-transparent px-3 text-sm text-zinc-50 placeholder-zinc-500 outline-none sm:w-64"
                  />
                  <button
                    type="submit"
                    className="h-full border-l border-zinc-700 px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-300 hover:bg-zinc-700"
                    aria-label="Submit search"
                  >
                    Go
                  </button>
                </form>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-10 w-10 items-center justify-center border border-zinc-700 bg-[#27272a] text-zinc-200 hover:bg-zinc-700"
                  aria-label="Close menu"
                >
                  <span aria-hidden className="text-lg leading-none">×</span>
                </button>
              </div>
            </div>

            {/* Main content — "Explore by" + nav columns + newsletter */}
            <div className="mt-14 flex items-start gap-12 lg:gap-16">
              <p className="shrink-0 text-3xl text-white">Explore by</p>

              <div className="flex flex-1 gap-8 sm:gap-12">
                {/* News */}
                <div className="flex flex-col gap-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">News</div>
                  <ul className="space-y-3">
                    {[
                      { label: "Ocean", href: "/news/ocean" },
                      { label: "River", href: "/news/river" },
                      { label: "Luxury", href: "/news/luxury" },
                      { label: "Expedition", href: "/news/expedition" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeMenu} className="text-base font-semibold text-[#fafafa] hover:text-white">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="flex flex-col gap-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Features</div>
                  <ul className="space-y-3">
                    {[
                      { label: "Analysis", href: "/features-analysis/analysis-comment" },
                      { label: "Comment", href: "/features-analysis/analysis-comment" },
                      { label: "Interviews", href: "/features-analysis/interviews" },
                      { label: "Cruise Review", href: "/features-analysis/cruise-review" },
                      { label: "Marketing Tips", href: "/features-analysis/mktg-tips" },
                    ].map((item) => (
                      <li key={item.label}>
                        <Link href={item.href} onClick={closeMenu} className="text-base font-semibold text-[#fafafa] hover:text-white">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Trade */}
                <div className="flex flex-col gap-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Trade</div>
                  <ul className="space-y-3">
                    {[
                      { label: "Events", href: "/events" },
                      { label: "Magazines", href: "/magazines" },
                      { label: "Podcast", href: "/podcast" },
                      { label: "Knowledge Hub", href: "/knowledge-hub" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeMenu} className="text-base font-semibold text-[#fafafa] hover:text-white">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Agent */}
                <div className="flex flex-col gap-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Agent</div>
                  <ul className="space-y-3">
                    {[
                      { label: "Incentives", href: "/agent-portal/incentives" },
                      { label: "Competitions", href: "/agent-portal/competitions" },
                      { label: "Offers", href: "/agent-portal/offers" },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeMenu} className="text-base font-semibold text-[#fafafa] hover:text-white">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Newsletter */}
              <div className="w-80 shrink-0 border border-zinc-700 bg-[rgba(39,39,42,0.6)] p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Newsletter</div>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-[#fafafa]">
                  Sign up for our newsletter
                </h3>
                {nlSubmitted ? (
                  <p className="mt-4 text-sm text-zinc-300">
                    Thanks. The next CTN Briefing will land in your inbox at {nlEmail}.
                  </p>
                ) : (
                  <form onSubmit={handleNewsletterSubmit} className="mt-3 space-y-3">
                    <div>
                      <label
                        htmlFor="mega-nl-email"
                        className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400"
                      >
                        Email
                      </label>
                      <div className="mt-2 flex h-10 items-stretch gap-3">
                        <input
                          id="mega-nl-email"
                          type="email"
                          required
                          value={nlEmail}
                          onChange={(e) => setNlEmail(e.target.value)}
                          className="h-full min-w-0 flex-1 border border-zinc-700 bg-[#18181b] px-3 text-sm text-zinc-50 placeholder-zinc-600 outline-none focus:border-white"
                          placeholder="you@agency.co.uk"
                        />
                        <button
                          type="submit"
                          className="h-full shrink-0 bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-900 hover:bg-zinc-200"
                        >
                          Sign up
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Divider */}
            <div className="mt-10 border-t border-zinc-700" />

            {/* Follow us */}
            <div className="mt-6 flex items-center gap-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Follow us
              </div>
              <div className="flex items-center gap-4 text-zinc-400">
                {[
                  { label: "Instagram", href: "#" },
                  { label: "X", href: "#" },
                  { label: "Facebook", href: "#" },
                  { label: "LinkedIn", href: "#" },
                  { label: "Spotify", href: "#" },
                ].map((s) => (
                  <Link key={s.label} href={s.href} onClick={closeMenu} className="text-sm hover:text-white">
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>

          </Container>
        </div>
      ) : null}

      <SearchOverlay
        open={searchOpen}
        onClose={() => {
          setSearchOpen(false);
          setInitialSearchQuery("");
        }}
        initialQuery={initialSearchQuery}
      />
    </>
  );
}
