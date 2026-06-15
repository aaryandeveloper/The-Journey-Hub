import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import { learningArticles } from "@/lib/site-data";

export const Route = createFileRoute("/learning")({
  head: () => ({
    meta: [
      { title: "Learning Center — Craig H. Lichtblau, M.D., P.A." },
      { name: "description", content: "Plain-language guides from our clinical team on pain science, rehabilitation, and recovery." },
      { property: "og:title", content: "Learning Center — Craig H. Lichtblau, M.D., P.A." },
      { property: "og:description", content: "Plain-language guides on pain science, rehabilitation, and recovery." },
    ],
  }),
  component: LearningPage,
});

function LearningPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Learning Center"
        title="Clear answers, written by clinicians."
        intro="Honest, plain-language explanations of the conditions we treat and the treatments we use — written by the team that performs them."
      />

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <ul className="grid gap-6 md:grid-cols-2">
          {learningArticles.map((a) => (
            <li key={a.slug}>
              <Link
                to="/learning"
                className="group block h-full rounded-3xl border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-accent px-3 py-1 font-semibold text-xs uppercase tracking-[0.15em] text-foreground">
                    {a.category}
                  </span>
                  <span className="font-semibold text-sm text-muted-foreground">{a.readTime}</span>
                </div>
                <h2 className="mt-6 font-display text-2xl font-bold tracking-tight group-hover:text-primary">
                  {a.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{a.excerpt}</p>
                <span className="mt-6 inline-block font-semibold text-sm uppercase tracking-widest text-primary">
                  Read article →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
