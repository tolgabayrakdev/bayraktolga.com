import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/posts";
import { ArrowRightIcon } from "./icons";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex flex-col rounded-xl border border-border bg-surface/40 p-5 transition-all hover:border-border-strong hover:bg-surface"
    >
      <div className="flex items-center gap-3 text-xs text-faint">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span className="h-1 w-1 rounded-full bg-faint" />
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-3 text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
        {post.title}
      </h3>

      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
        {post.description}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <ArrowRightIcon
          width={16}
          height={16}
          className="text-faint transition-all group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>
    </Link>
  );
}
