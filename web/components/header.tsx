import Link from "next/link";
import { GitHubIcon, LinkedInIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/lib/config";

const navItems = [
  { href: "/#hakkimda", label: "Hakkımda" },
  { href: "/#yetenekler", label: "Yetenekler" },
  { href: "/blog", label: "Blog" },
  { href: "/#iletisim", label: "İletişim" },
];

export function Header() {
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
          <span className="hidden sm:inline">Tolga Bayrak</span>
        </Link>

        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <span className="mx-1 hidden h-5 w-px bg-border sm:inline-block" />
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hidden rounded-md p-2 text-muted transition-colors hover:text-foreground sm:inline-flex"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hidden rounded-md p-2 text-muted transition-colors hover:text-foreground sm:inline-flex"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
