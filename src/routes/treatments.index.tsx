import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell, PageHeader } from "@/components/site-shell";
import { treatments } from "@/lib/site-data";

export const Route = createFileRoute("/treatments/")({
  head: () => ({
    meta: [
      { title: "Treatments — Craig H. Lichtblau, M.D., P.A." },
      { name: "description", content: "From therapeutic exercise and EMG diagnostics to image-guided joint and trigger point injections — our full clinical toolkit." },
      { property: "og:title", content: "Treatments — Craig H. Lichtblau, M.D., P.A." },
      { property: "og:description", content: "Evidence-based interventions across diagnostics, injections, and physical rehabilitation." },
    ],
  }),
  component: TreatmentsIndex,
});

function TreatmentsIndex() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Interventions"
        title="Treatments."
        intro="Each treatment is one tool in a larger plan. Our value is in knowing which to apply, when, and how to sequence them for lasting recovery."
      />

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <ul className="divide-y divide-border border-t border-border">
          {treatments.map((t, i) => (
            <li key={t.slug}>
              <Link
                to="/treatments/$slug"
                params={{ slug: t.slug }}
                className="group grid items-baseline gap-6 py-8 transition-colors hover:bg-accent/30 md:grid-cols-12 -mx-4 px-4 rounded-2xl"
              >
                <span className="font-semibold text-sm text-muted-foreground md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-2xl font-bold tracking-tight group-hover:text-primary md:col-span-4">
                  {t.name}
                </h2>
                <p className="text-muted-foreground md:col-span-6">{t.summary}</p>
                <span className="text-right text-muted-foreground md:col-span-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
