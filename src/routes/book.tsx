import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteShell, PageHeader } from "@/components/site-shell";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book an Appointment — Craig H. Lichtblau, M.D., P.A." },
      { name: "description", content: "Schedule an initial consultation with our board-certified physiatrists and rehabilitation team." },
      { property: "og:title", content: "Book an Appointment — Craig H. Lichtblau, M.D., P.A." },
      { property: "og:description", content: "Schedule a consultation with our rehabilitation specialists." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <SiteShell>
      <PageHeader
        eyebrow="Book Appointment"
        title="Start your recovery."
        intro="Tell us a little about your situation. A care coordinator will reach out within one business day to confirm a time."
      />

      <section className="mx-auto max-w-3xl px-6 pb-24">
        {submitted ? (
          <div className="rounded-3xl border border-primary/30 bg-primary/5 p-12 text-center">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Request received</p>
            <h2 className="mt-4 font-display text-3xl font-bold">Thank you.</h2>
            <p className="mt-4 text-muted-foreground">
              We'll be in touch within one business day to confirm your consultation.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6 rounded-3xl border border-border bg-card p-8 lg:p-12"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="First name" name="first" required />
              <Field label="Last name" name="last" required />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <div>
              <label className="mb-2 block font-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground">
                What brings you in?
              </label>
              <select
                name="reason"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
              >
                <option>Neurological condition</option>
                <option>Orthopedic / musculoskeletal pain</option>
                <option>Sports injury</option>
                <option>Post-surgical rehabilitation</option>
                <option>Second opinion</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block font-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Tell us more (optional)
              </label>
              <textarea
                name="notes"
                rows={4}
                className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
                placeholder="Brief description of your situation, history, or what you're hoping to address."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all hover:shadow-lg"
            >
              Request Appointment
            </button>
            <p className="text-center text-xs text-muted-foreground">
              By submitting, you agree to be contacted by our care team. We never share your information.
            </p>
          </form>
        )}
      </section>
    </SiteShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block font-semibold text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none focus:border-primary"
      />
    </div>
  );
}
