import Link from "next/link";

import { contact, navLinks } from "@/lib/content";
import { Icon } from "@/components/ui";
import { siteConfig } from "@/lib/site";

const columns: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/pricing", label: "Pricing & plans" },
      { href: "/channels", label: "Channel line up" },
      { href: "/installation-guide", label: "Installation guide" },
      { href: "/faq", label: "Setup & FAQ" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/contact", label: "Contact us" },
      { href: "/faq", label: "How it works" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/faq", label: "Refund policy" },
      { href: "/contact", label: "Report an issue" },
    ],
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10 bg-[#0d0c10]">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-1 to-brand-3 text-white">
                <Icon name="play" className="h-4 w-4" />
              </span>
              <span className="text-[15px] tracking-tight">
                IPTV<span className="text-white/50">Website</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              A fast, tidy IPTV subscription for live TV, sport and films on
              every device in the UK, with instant activation and real support.
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-4 inline-flex items-center gap-2 text-sm text-white/70 hover:text-white"
            >
              <Icon name="mail" className="h-4 w-4" />
              {contact.email}
            </a>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/65 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.organization.legalName}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">
            This site sells access to an IPTV streaming service. Customers are
            responsible for holding any rights required to view content in their
            country.
          </p>
        </div>

        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/40">
          <Link href="/" className="hover:text-white/70">
            Home
          </Link>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white/70">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
