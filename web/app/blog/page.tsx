import type { Metadata } from "next";
import { getAllPostsMeta } from "@/lib/posts";
import { siteConfig } from "@/lib/config";
import { PostCard } from "@/components/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Backend mimarisi, API tasarımı, PostgreSQL ve sürdürülebilir yazılım üzerine yazılar. Tolga Bayrak'ın notları.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${siteConfig.url}/blog`,
    title: `Blog — ${siteConfig.name}`,
    description:
      "Backend mimarisi, API tasarımı, PostgreSQL ve sürdürülebilir yazılım üzerine yazılar.",
  },
};

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <header className="border-b border-border/60 pb-10">
        <p className="font-mono text-sm text-accent">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
          Yazılar
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Backend mimarisi, API tasarımı, veritabanı ve sürdürülebilir yazılım üzerine
          düşüncelerim ve pratik notlarım.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-12 text-muted">Henüz yazı yok. Çok yakında.</p>
      ) : (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
