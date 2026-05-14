import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { footerColumns, socialLinks } from "@/data/navigation";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500">
                {col.title}
              </div>
              <ul className="mt-3 space-y-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-700 hover:text-zinc-900"
                    >
                      {link.label}
                    </Link>
                    {link.children && link.children.length > 0 ? (
                      <ul className="mt-2 space-y-1 pl-3">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="text-xs text-zinc-600 hover:text-zinc-900"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Cruise Trade News home"
            >
              <Image
                src="/ctn-logo.png"
                alt="Cruise Trade News"
                width={912}
                height={300}
                className="h-8 w-auto"
              />
            </Link>
            <div className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Cruise Trade News. Wireframe
              prototype.
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-zinc-500">
            {socialLinks.map((s) => (
              <Link key={s.label} href={s.href} className="hover:text-zinc-900">
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
