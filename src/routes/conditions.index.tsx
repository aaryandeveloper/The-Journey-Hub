import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import { conditions } from "@/lib/site-data";

export const Route = createFileRoute("/conditions/")({
  head: () => ({
    meta: [
      { title: "Conditions We Treat — Craig H. Lichtblau, M.D., P.A." },
      { name: "description", content: "Comprehensive care for neurological and orthopedic conditions, from stroke recovery and TBI to sports injuries and chronic pain." },
      { property: "og:title", content: "Conditions We Treat — Craig H. Lichtblau, M.D., P.A." },
      { property: "og:description", content: "Comprehensive care for neurological and orthopedic conditions." },
    ],
  }),
  component: ConditionsIndex,
});

function ConditionsIndex() {
  const neuro = conditions.filter((c) => c.category === "neurological");
  const ortho = conditions.filter((c) => c.category === "orthopedic");

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Specializations"
        title="Conditions we treat."
        intro="From acute injury through complex neurological recovery, our team brings clinical depth to the conditions that resist single-discipline care."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <CategoryColumn label="Neurological" title="Complex Restoration" items={neuro} />
          <CategoryColumn label="Orthopedic" title="Structural Integrity" items={ortho} />
        </div>
      </section>
    </SiteShell>
  );
}

function CategoryColumn({
  label,
  title,
  items,
}: {
  label: string;
  title: string;
  items: typeof conditions;
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-8">
      <p className="mb-6 font-semibold text-sm text-primary">{label}</p>
      <h2 className="mb-8 font-display text-3xl font-bold tracking-tight">{title}</h2>
      <ul className="space-y-1">
        {items.map((c) => (
          <li key={c.slug}>
            <Link
              to="/conditions/$slug"
              params={{ slug: c.slug }}
              className="group flex items-start justify-between gap-6 border-b border-border py-5 transition-colors hover:bg-accent/40 -mx-3 px-3 rounded-lg"
            >
              <div>
                <p className="text-lg font-medium group-hover:text-primary">{c.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.summary}</p>
              </div>
              <span className="mt-1 text-muted-foreground">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
