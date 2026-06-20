import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
        Sayfa bulunamadı
      </h1>
      <p className="mt-4 max-w-md text-muted">
        Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.
      </p>
      <Link
        href="/"
        className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-accent-soft"
      >
        Ana sayfaya dön
        <ArrowRightIcon
          width={16}
          height={16}
          className="transition-transform group-hover:translate-x-0.5"
        />
      </Link>
    </div>
  );
}
