"use client";

import Link from "next/link";
import Image from "next/image";
import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type FormEvent,
} from "react";
import { Container } from "@/components/ui/Container";
import { SearchOverlay } from "@/components/sections/SearchOverlay";
import {
  headerCategoriesLeft,
  headerCategoriesRight,
  megaMenuColumns,
  socialLinks,
} from "@/data/navigation";
import { events } from "@/data/events";

const LEARN_MORE_LINKS = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Advertise", href: "/advertise" },
  { label: "Subscribe", href: "/subscribe" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookies" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [initialSearchQuery, setInitialSearchQuery] = useState("");
  const [overlaySearch, setOverlaySearch] = useState("");
  const [nlName, setNlName] = useState("");
  const [nlEmail, setNlEmail] = useState("");
  const [nlSubmitted, setNlSubmitted] = useState(false);

  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const eventsList = useMemo(() => events.slice(0, 4), []);

  const [scrolled, setScrolled] = useState(false);
  const lastYRef = useRef(0);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    lastYRef.current = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const lastY = lastYRef.current;
      lastYRef.current = currentY;
      setScrolled(prev => {
        if (currentY < 60) return false;
        if (currentY > lastY + 8) return true;
        if (currentY < lastY - 8) return false;
        return prev;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
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
              <Link href="/podcast" className="hover:text-zinc-900">Podcast</Link>
              <Link href="/magazines" className="hover:text-zinc-900">Magazines</Link>
              <Link href="/newsletter" className="hover:text-zinc-900">Newsletter</Link>
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
        <div className={`hidden w-full relative lg:block${scrolled ? ' border-b border-zinc-200' : ''}`}>
          {!scrolled && (
            <>
              <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-zinc-200" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-zinc-200" />
            </>
          )}
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
          className="fixed inset-0 z-50 overflow-y-auto bg-zinc-900 text-zinc-50"
        >
          <Container className="py-6 lg:py-8">
            <div className="flex flex-col gap-4 border-b border-zinc-700 pb-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <nav
                className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm"
                aria-label="Quick links"
              >
                <Link href="/about" onClick={closeMenu} className="hover:underline">About</Link>
                <Link href="/news/latest" onClick={closeMenu} className="hover:underline">Latest</Link>
                <Link href="/newsletter" onClick={closeMenu} className="hover:underline">Newsletter</Link>
              </nav>
              <div className="flex items-center gap-3">
                <form
                  onSubmit={handleSearchSubmit}
                  role="search"
                  aria-label="Search Cruise Trade News"
                  className="flex h-10 items-center border border-zinc-700 bg-zinc-800"
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
                    className="h-full border-l border-zinc-700 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-200 hover:bg-zinc-700"
                    aria-label="Submit search"
                  >
                    Go
                  </button>
                </form>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeMenu}
                  className="inline-flex h-10 w-10 items-center justify-center border border-zinc-700 bg-zinc-800 text-zinc-200 hover:bg-zinc-700"
                  aria-label="Close menu"
                >
                  <span aria-hidden className="text-lg leading-none">×</span>
                </button>
              </div>
            </div>

            <div className="mt-8 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-2">
                <div className="text-2xl italic text-zinc-400 lg:text-3xl">
                  Explore
                  <br />
                  by
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-300">
                  {megaMenuColumns[0].title}
                </div>
                <ul className="mt-4 space-y-3">
                  {megaMenuColumns[0].items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="text-base font-semibold text-zinc-50 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-2">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-300">
                  {megaMenuColumns[1].title}
                </div>
                <ul className="mt-4 space-y-3">
                  {megaMenuColumns[1].items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="text-base font-semibold text-zinc-50 hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-3">
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-300">
                  {megaMenuColumns[2].title}
                </div>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link
                      href="/events"
                      onClick={closeMenu}
                      className="text-base font-semibold text-zinc-50 hover:text-white"
                    >
                      Events
                    </Link>
                    <ul className="mt-2 space-y-1 pl-3">
                      {eventsList.map((ev) => (
                        <li key={ev.slug}>
                          <Link
                            href={`/events/${ev.slug}`}
                            onClick={closeMenu}
                            className="text-sm text-zinc-300 hover:text-white"
                          >
                            {ev.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                  <li>
                    <Link
                      href="/knowledge-hub"
                      onClick={closeMenu}
                      className="text-base font-semibold text-zinc-50 hover:text-white"
                    >
                      Knowledge Hub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/agent-portal"
                      onClick={closeMenu}
                      className="text-base font-semibold text-zinc-50 hover:text-white"
                    >
                      Agent Portal
                    </Link>
                    <ul className="mt-2 space-y-1 pl-3">
                      <li>
                        <Link href="/agent-portal/competitions" onClick={closeMenu} className="text-sm text-zinc-300 hover:text-white">
                          Competitions
                        </Link>
                      </li>
                      <li>
                        <Link href="/agent-portal/incentives" onClick={closeMenu} className="text-sm text-zinc-300 hover:text-white">
                          Incentives
                        </Link>
                      </li>
                      <li>
                        <Link href="/agent-portal/offers" onClick={closeMenu} className="text-sm text-zinc-300 hover:text-white">
                          Offers
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="lg:col-span-3">
                <div className="border border-zinc-700 bg-zinc-800/60 p-5">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-300">
                    Newsletter
                  </div>
                  <h3 className="mt-2 text-xl font-semibold leading-snug text-zinc-50">
                    Sign up for our newsletter
                  </h3>
                  {nlSubmitted ? (
                    <p className="mt-4 text-sm text-zinc-300">
                      Thanks. The next CTN Briefing will land in your inbox at {nlEmail}.
                    </p>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="mt-4 space-y-3">
                      <div>
                        <label
                          htmlFor="mega-nl-name"
                          className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400"
                        >
                          Name
                        </label>
                        <input
                          id="mega-nl-name"
                          type="text"
                          value={nlName}
                          onChange={(e) => setNlName(e.target.value)}
                          className="mt-1 h-10 w-full border border-zinc-700 bg-zinc-900 px-3 text-sm text-zinc-50 outline-none focus:border-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="mega-nl-email"
                          className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400"
                        >
                          Email
                        </label>
                        <input
                          id="mega-nl-email"
                          type="email"
                          required
                          value={nlEmail}
                          onChange={(e) => setNlEmail(e.target.value)}
                          className="mt-1 h-10 w-full border border-zinc-700 bg-zinc-900 px-3 text-sm text-zinc-50 outline-none focus:border-white"
                          placeholder="you@agency.co.uk"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex h-10 items-center justify-center bg-white px-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-900 hover:bg-zinc-200"
                      >
                        Sign up
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            <div className="my-8 border-t border-zinc-700" />

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Learn more
              </div>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-200">
                {LEARN_MORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={closeMenu} className="hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-6">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                Follow us
              </div>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-200">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} onClick={closeMenu} className="hover:text-white">
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
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
