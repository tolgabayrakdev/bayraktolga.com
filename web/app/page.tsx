import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { getAllPostsMeta } from "@/lib/posts";
import { PostCard } from "@/components/post-card";
import {
  ArrowRightIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";

const skills = [
  {
    title: "Diller & Backend",
    items: [
      "Node.js / Express.js",
      "Java / Spring Boot",
      "Python / FastAPI · Flask",
      "TypeScript",
      "REST API",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "SSR / SEO"],
  },
  {
    title: "Mimari & Veritabanı",
    items: [
      "Event-driven mimari",
      "Asenkron sistemler",
      "Sistem tasarımı",
      "PostgreSQL",
      "Redis (cache)",
      "Veri modelleme",
    ],
  },
  {
    title: "DevOps & Altyapı",
    items: [
      "Linux sunucu yönetimi",
      "Coolify",
      "CI / CD süreçleri",
      "Docker",
      "Logging & Monitoring",
    ],
  },
];

// Tam genişlikte "nasıl çalışıyorum" şeridi
const practices = {
  title: "Mühendislik Pratikleri & Güvenlik",
  items: [
    "Clean Code",
    "SOLID",
    "Kimlik Doğrulama / JWT",
    "Yetkilendirme",
    "OWASP temelleri",
  ],
};

const focusAreas = [
  "Backend mimarisi",
  "API tasarımı",
  "Event-driven sistemler",
  "Veritabanı modelleme",
  "Sistem tasarımı",
  "DevOps & deployment",
];

function PersonJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    email: `mailto:${siteConfig.email}`,
    telephone: siteConfig.phone,
    url: siteConfig.url,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: [
      "Node.js",
      "Express.js",
      "React",
      "Next.js",
      "Java",
      "Spring Boot",
      "Python",
      "FastAPI",
      "Flask",
      "PostgreSQL",
      "Event-driven Mimari",
      "Asenkron Sistemler",
      "API Tasarımı",
      "Sistem Tasarımı",
      "Redis",
      "Clean Code",
      "SOLID",
      "Kimlik Doğrulama",
      "JWT",
      "OWASP",
      "Logging",
      "Monitoring",
      "DevOps",
      "CI/CD",
      "Docker",
      "Coolify",
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function Home() {
  const featured = getAllPostsMeta()
    .filter((p) => p.featured)
    .slice(0, 2);

  return (
    <>
      <PersonJsonLd />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute inset-0 bg-grid" />
        <div className="pointer-events-none absolute inset-0 glow" />
        <div className="relative mx-auto max-w-3xl px-6 py-24 sm:py-32">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Merhaba, ben Tolga Bayrak.
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
              Full Stack Developer.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Node.js, Express.js, React ve PostgreSQL ekosistemiyle ölçeklenebilir
            web uygulamaları, SaaS ürünleri ve gerçek dünya problemlerine çözüm üreten
            yazılımlar geliştiriyorum.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#iletisim"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-soft"
            >
              İletişime geç
              <ArrowRightIcon
                width={16}
                height={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-border-strong hover:bg-surface"
            >
              Yazılarımı oku
            </Link>
          </div>
        </div>
      </section>

      {/* Hakkımda */}
      <section id="hakkimda" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-20">
        <SectionTitle index="01" title="Hakkımda" />
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
          <p>
            Ölçeklenebilir web uygulamaları ve SaaS ürünleri geliştiren bir Full Stack
            Developer'ım. İşin özünde, gerçek dünya problemlerine sade ve kalıcı çözümler
            üretmeyi seviyorum.
          </p>
          <p>
            Özellikle <strong className="font-medium text-foreground">backend mimarisi</strong>,{" "}
            <strong className="font-medium text-foreground">API tasarımı</strong>,{" "}
            <strong className="font-medium text-foreground">event-driven ve asenkron sistemler</strong>,{" "}
            <strong className="font-medium text-foreground">veritabanı modelleme</strong> ve{" "}
            <strong className="font-medium text-foreground">sistem tasarımı</strong> konularına özel
            ilgi duyuyorum. Kod yazarken sadelik, sürdürülebilirlik ve uzun vadeli bakım
            kolaylığını her zaman ön planda tutuyorum.
          </p>
          <p>
            Node.js'in yanı sıra <strong className="font-medium text-foreground">Java / Spring Boot</strong> ve{" "}
            <strong className="font-medium text-foreground">Python / FastAPI · Flask</strong> ekosistemleriyle de
            projeler geliştirdim. Sunucu tarafında Linux yönetimi,{" "}
            <strong className="font-medium text-foreground">Coolify</strong> ile self-hosted deployment ve{" "}
            <strong className="font-medium text-foreground">CI/CD</strong> süreçleriyle uçtan uca sorumluluk
            almaktan keyif alıyorum.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2">
          {focusAreas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-border bg-surface/40 px-3 py-1 text-sm text-muted"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* Yetenekler */}
      <section id="yetenekler" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-20">
        <SectionTitle index="02" title="Yetenekler" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-surface/40 p-5"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1 w-1 rounded-full bg-faint" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Tam genişlikte: mühendislik pratikleri & güvenlik */}
          <div className="rounded-xl border border-border bg-surface/40 p-5 sm:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent">
              {practices.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {practices.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Öne çıkan yazılar */}
      {featured.length > 0 && (
        <section className="mx-auto max-w-3xl px-6 py-20">
          <div className="flex items-end justify-between">
            <SectionTitle index="03" title="Son yazılar" />
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
            >
              Tümü
              <ArrowRightIcon
                width={14}
                height={14}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {featured.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* İletişim */}
      <section id="iletisim" className="mx-auto max-w-3xl scroll-mt-20 px-6 py-20">
        <SectionTitle index="04" title="İletişim" />
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
          Bir proje fikrin mi var, yoksa sadece merhaba mı demek istiyorsun? Bana
          aşağıdaki kanallardan ulaşabilirsin.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <ContactCard
            icon={<MailIcon width={18} height={18} />}
            label="E-posta"
            value={siteConfig.email}
            href={`mailto:${siteConfig.email}`}
          />
          <ContactCard
            icon={<PhoneIcon width={18} height={18} />}
            label="Telefon"
            value={siteConfig.phone}
            href={`tel:${siteConfig.phoneHref}`}
          />
          <ContactCard
            icon={<GitHubIcon width={18} height={18} />}
            label="GitHub"
            value={siteConfig.social.githubHandle}
            href={siteConfig.social.github}
            external
          />
          <ContactCard
            icon={<LinkedInIcon width={18} height={18} />}
            label="LinkedIn"
            value="tolgabayrak0"
            href={siteConfig.social.linkedin}
            external
          />
        </div>
      </section>
    </>
  );
}

function SectionTitle({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">{title}</h2>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface/40 p-4 transition-all hover:border-border-strong hover:bg-surface"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-muted transition-colors group-hover:text-accent">
        {icon}
      </span>
      <span className="flex flex-col">
        <span className="text-xs text-faint">{label}</span>
        <span className="text-sm font-medium text-foreground">{value}</span>
      </span>
    </a>
  );
}
