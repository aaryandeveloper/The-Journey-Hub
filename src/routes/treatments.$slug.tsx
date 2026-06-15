import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { treatments } from "@/lib/site-data";

export const Route = createFileRoute("/treatments/$slug")({
  loader: ({ params }) => {
    const treatment = treatments.find((t) => t.slug === params.slug);
    if (!treatment) throw notFound();
    return { treatment };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Treatment — Craig H. Lichtblau, M.D., P.A." }] };
    const { treatment } = loaderData;
    const title = `${treatment.name} — Craig H. Lichtblau, M.D., P.A.`;
    return {
      meta: [
        { title },
        { name: "description", content: treatment.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: treatment.summary },
      ],
    };
  },
  notFoundComponent: () => (
    <SiteShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-4xl font-bold">Treatment not found</h1>
        <Link to="/treatments" className="mt-6 inline-block text-primary hover:underline">
          ← Back to all treatments
        </Link>
      </div>
    </SiteShell>
  ),
  component: TreatmentDetail,
});

function TreatmentDetail() {
  const { treatment } = Route.useLoaderData();

  return (
    <SiteShell>
      <article className="mx-auto max-w-4xl px-6 py-20 lg:py-28">
        <Link
          to="/treatments"
          className="font-semibold text-sm uppercase tracking-[0.2em] text-primary hover:underline"
        >
          ← All treatments
        </Link>
        <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.95] tracking-tighter text-balance lg:text-7xl">
          {treatment.name}
        </h1>
        <p className="mt-8 text-xl leading-relaxed text-muted-foreground">{treatment.summary}</p>

        <div className="mt-16 border-t border-border pt-12">
          <p className="text-lg leading-relaxed">{treatment.description}</p>
          <p className="mt-6 text-lg leading-relaxed">
            Treatments are never offered in isolation. They are sequenced inside a recovery plan
            tailored to your diagnosis, goals, and stage of healing — and reassessed at every visit.
          </p>
        </div>

        <div className="mt-16 rounded-3xl bg-foreground p-10 text-background">
          <h2 className="font-display text-2xl font-bold">Discuss this treatment with our team</h2>
          <p className="mt-3 text-background/70">
            We'll review whether it's right for your specific case during your consultation.
          </p>
          <Link
            to="/book"
            className="mt-6 inline-block rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground"
          >
            Book Appointment
          </Link>
        </div>
      </article>
    </SiteShell>
  );
}
