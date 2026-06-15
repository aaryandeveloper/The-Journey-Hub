import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { conditions } from "@/lib/site-data";

export const Route = createFileRoute("/conditions/$slug")({
  loader: ({ params }) => {
    const condition = conditions.find((c) => c.slug === params.slug);
    if (!condition) throw notFound();
    return { condition };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Condition — Craig H. Lichtblau, M.D., P.A." }] };
    const { condition } = loaderData;
    const title = `${condition.name} — Craig H. Lichtblau, M.D., P.A.`;
    return {
      meta: [
        { title },
        { name: "description", content: condition.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: condition.summary },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Condition not found</h1>
        <Link to="/conditions" className="mt-6 inline-block text-primary hover:underline">
          ← Back to all conditions
        </Link>
      </div>
    </SiteShell>
  ),
  component: ConditionDetail,
});

function ConditionDetail() {
  const { condition } = Route.useLoaderData();
  const related = conditions
    .filter((c) => c.category === condition.category && c.slug !== condition.slug)
    .slice(0, 4);

  return (
    <SiteShell>
      <article className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
        <Link
          to="/conditions"
          className="font-semibold text-sm uppercase tracking-[0.2em] text-primary hover:underline"
        >
          ← {condition.category === "neurological" ? "Neurological" : "Orthopedic"}
        </Link>
        <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tighter text-balance lg:text-7xl">
          {condition.name}
        </h1>
        <p className="mt-8 text-xl leading-relaxed text-muted-foreground">{condition.summary}</p>

        <div className="prose mt-16 max-w-none border-t border-border pt-12">
          <p className="text-lg leading-relaxed text-foreground">{condition.description}</p>
          <p className="mt-6 text-lg leading-relaxed text-foreground">
            Every recovery plan begins with a comprehensive evaluation — gait analysis, functional
            testing, and where indicated, electrodiagnostic or imaging studies. From that foundation
            we build a sequenced protocol that adapts as you progress.
          </p>
        </div>

        <div className="mt-16 rounded-3xl bg-foreground p-10 text-background">
          <h2 className="font-display text-2xl font-bold">Ready to begin?</h2>
          <p className="mt-3 text-background/70">
            Schedule a consultation to discuss your specific case with our team.
          </p>
          <Link
            to="/book"
            className="mt-6 inline-block rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground"
          >
            Book Appointment
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <p className="mb-6 font-semibold text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Related conditions
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {related.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/conditions/$slug"
                    params={{ slug: c.slug }}
                    className="block rounded-xl border border-border p-4 transition-colors hover:bg-accent/40"
                  >
                    <span className="font-medium">{c.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </article>
    </SiteShell>
  );
}
