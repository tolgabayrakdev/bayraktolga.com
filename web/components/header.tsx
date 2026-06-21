"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/lib/config";

const navItems = [
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#yetenekler", label: "Yetenekler" },
  { href: "/#projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
  { href: "/#iletisim", label: "İletişim" },
];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {open ? (
        <path d="M18 6 6 18M6 6l12 12" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" />
      )}
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  // Menü açıkken sayfanın arkada kaymasını engelle.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold tracking-tight text-foreground"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface text-sm font-bold text-accent transition-colors group-hover:border-accent/50">
            T
          </span>
          <span>Tolga Bayrak</span>
        </Link>

        {/* Masaüstü navigasyon */}
        <nav className="hidden items-center gap-1 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 inline-block h-5 w-px bg-border" />
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex rounded-md p-2 text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex rounded-md p-2 text-muted transition-colors hover:text-foreground"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobil kontroller */}
        <div className="flex items-center gap-1 sm:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-md p-2 text-muted transition-colors hover:text-foreground"
          >
            <MenuIcon open={open} />
          </button>
        </div>
      </div>

      {/* Mobil menü paneli */}
      {open && (
        <nav
          id="mobile-menu"
          className="border-t border-border/60 bg-background/95 backdrop-blur-xl sm:hidden"
        >
          <div className="mx-auto flex max-w-3xl flex-col px-6 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-3 text-base text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-1 border-t border-border/60 pt-3">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex rounded-md p-2 text-muted transition-colors hover:text-foreground"
              >
                <GitHubIcon width={20} height={20} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex rounded-md p-2 text-muted transition-colors hover:text-foreground"
              >
                <LinkedInIcon width={20} height={20} />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
