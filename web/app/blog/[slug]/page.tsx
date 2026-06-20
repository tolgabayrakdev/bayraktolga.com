import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllSlugs, getPostBySlug, formatDate } from "@/lib/posts";
import { siteConfig } from "@/lib/config";
import { Mdx } from "@/components/mdx";
import { ArrowRightIcon } from "@/components/icons";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${siteConfig.url}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [siteConfig.name],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

function ArticleJsonLd({
  title,
  description,
  date,
  slug,
}: {
  title: string;
  description: string;
  date: string;
  slug: string;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    datePublished: date,
    dateModified: date,
    inLanguage: "tr-TR",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${slug}`,
    },
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <ArticleJsonLd
        title={post.title}
        description={post.description}
        date={post.date}
        slug={post.slug}
      />

      <nav aria-label="breadcrumb" className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
        >
          <ArrowRightIcon width={14} height={14} className="rotate-180" />
          Tüm yazılar
        </Link>
      </nav>

      <header className="border-b border-border/60 pb-8">
        <div className="flex flex-wrap items-center gap-3 text-xs text-faint">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="h-1 w-1 rounded-full bg-faint" />
          <span>{post.readingTime}</span>
        </div>
        <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">{post.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-surface/40 px-3 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="mt-10">
        <Mdx source={post.content} />
      </div>

      <footer className="mt-16 border-t border-border/60 pt-8">
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-sm text-accent transition-colors hover:text-accent-soft"
        >
          <ArrowRightIcon width={14} height={14} className="rotate-180" />
          Diğer yazılara dön
        </Link>
      </footer>
    </article>
  );
}
