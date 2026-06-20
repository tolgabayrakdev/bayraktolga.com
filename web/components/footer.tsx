import Link from "next/link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { siteConfig } from "@/lib/config";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-border/60">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-faint">
          © {year} {siteConfig.name}. Tüm hakları saklıdır.
        </p>
        <div className="flex items-center gap-1">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-md p-2 text-muted transition-colors hover:text-foreground"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-md p-2 text-muted transition-colors hover:text-foreground"
          >
            <LinkedInIcon width={18} height={18} />
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            aria-label="E-posta"
            className="rounded-md p-2 text-muted transition-colors hover:text-foreground"
          >
            <MailIcon width={18} height={18} />
          </a>
          <span className="mx-1 h-5 w-px bg-border" />
          <Link
            href="/blog"
            className="rounded-md px-3 py-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            Blog
          </Link>
        </div>
      </div>
    </footer>
  );
}
