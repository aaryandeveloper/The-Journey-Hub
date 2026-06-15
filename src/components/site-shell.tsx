import type { ReactNode } from "react";
import { SiteNav } from "./site-nav";
import { SiteFooter } from "./site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-body text-foreground selection:bg-primary/10">
      <SiteNav />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      {eyebrow && (
        <p className="mb-6 font-semibold text-sm uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      )}
      <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tighter text-balance lg:text-7xl">
        {title}
      </h1>
      {intro && (
        <p className="mt-8 max-w-[58ch] text-lg leading-relaxed text-muted-foreground lg:text-xl">
          {intro}
        </p>
      )}
    </header>
  );
}
