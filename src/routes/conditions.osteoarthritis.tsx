import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import heroImage from "@/assets/hero-banner.jpg";
import conditionOrtho from "@/assets/condition-ortho-real.jpg";
import treatmentInjections from "@/assets/treatment-injections.jpg";
import treatmentExercise from "@/assets/treatment-exercise.jpg";
import patternCircles from "@/assets/pattern-circles.jpg";
import ctaRehabBg from "@/assets/cta-rehab-bg.jpg";

export const Route = createFileRoute("/conditions/osteoarthritis")({
  head: () => {
    const title = "Osteoarthritis Care — Craig H. Lichtblau, M.D., P.A.";
    const description =
      "Non-surgical osteoarthritis care in North Palm Beach — reducing joint pain, restoring mobility, and helping you stay active.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:image", content: heroImage },
      ],
    };
  },
  component: OsteoarthritisPage,
});

const dotPattern = {
  backgroundImage: `url(${patternCircles})`,
  backgroundSize: "900px auto",
  backgroundRepeat: "repeat",
};

const treatments = [
  "Therapeutic exercise to strengthen muscles and support joints",
  "Joint injections for targeted pain and inflammation relief",
  "Trigger point injections for muscle tightness and pain",
  "Pain management strategies tailored to your condition",
  "Electromyography (EMG) when nerve involvement is suspected",
  "Physical rehabilitation to improve flexibility and movement",
  "Assistive devices to reduce joint stress and improve mobility",
];

const focusAreas = [
  { title: "Knee osteoarthritis", desc: "Walking stability, pain reduction, and improved function." },
  { title: "Hip osteoarthritis", desc: "Mobility, stiffness, and daily movement support." },
  { title: "Spine osteoarthritis", desc: "Neck and lower back pain management." },
  { title: "Shoulder osteoarthritis", desc: "Range of motion and upper-body function." },
];

function OsteoarthritisPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <header className="relative isolate w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Clinician evaluating a patient with osteoarthritis"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to right, oklch(0.2 0.08 265 / 0.9) 0%, oklch(0.2 0.08 265 / 0.82) 35%, oklch(0.2 0.08 265 / 0.55) 55%, oklch(0.2 0.08 265 / 0.25) 70%, oklch(0.2 0.08 265 / 0.08) 82%, transparent 95%)",
          }}
        />
        <div className="mx-auto flex min-h-[420px] max-w-7xl items-center justify-center px-6 py-16 text-center lg:py-20">
          <div className="animate-fade-up max-w-3xl text-white">
            <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight text-balance text-white lg:text-6xl">
              Osteoarthritis Care
            </h1>
            <p className="mt-6 font-display text-2xl tracking-tight text-white/90">
              Reducing pain, restoring possibility.
            </p>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">
            Non-surgical, physician-led care
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
            Move better. Feel stronger. Live with less pain.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground">
            <p>
              Osteoarthritis can make everyday movement painful and limiting—but it doesn't have to
              control your life. At CHLMD, we provide advanced Physical Medicine &amp; Rehabilitation
              focused on reducing joint pain, improving mobility, and helping you stay active without
              surgery whenever possible.
            </p>
            <p>
              Based in North Palm Beach, Craig H. Lichtblau, M.D., P.A. delivers personalized,
              non-surgical care for osteoarthritis affecting the knees, hips, spine, shoulders, and
              other joints.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT IS OA */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={conditionOrtho}
              alt="Diagram-style view of an osteoarthritic joint"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-center lg:text-left">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">
              Understanding the condition
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              What is osteoarthritis?
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                Osteoarthritis is a degenerative joint condition caused by the gradual breakdown of
                cartilage. This leads to pain, stiffness, swelling, and reduced range of motion—most
                commonly in the knees, hips, lower back, neck, and shoulders.
              </p>
              <p>
                While it is a progressive condition, targeted treatment can significantly improve
                function, slow progression, and reduce pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="relative py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-6 text-center lg:text-left">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">
              Our treatment approach
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Personalized. Non-surgical. Results-focused.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground/80">
              Every patient receives a customized plan based on their symptoms, mobility level, and
              goals. Our focus is on restoring function and protecting joint health long-term.
            </p>
            <ul className="mt-8 grid gap-3 text-left">
              {treatments.map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <img
              src={treatmentInjections}
              alt="Image-guided joint injection treatment"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">
              Focus areas
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              We treat osteoarthritis across major joints.
            </h2>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {focusAreas.map((f) => (
              <div
                key={f.title}
                className="rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-display text-2xl font-bold tracking-tight">{f.title}</h3>
                <p className="mt-3 text-foreground/80">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE GOAL */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={treatmentExercise}
              alt="Patient walking comfortably during rehabilitation"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-center lg:text-left">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">The goal</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Keep you moving.
            </h2>
            <p className="mt-8 text-lg leading-relaxed text-foreground">
              Osteoarthritis care isn't just about pain relief—it's about preserving independence.
              Our approach is designed to help you stay active, reduce limitations, and maintain
              quality of life for as long as possible.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — matches homepage / practice */}
      <section className="px-6 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[3rem] bg-foreground p-12 text-center text-white lg:p-24">
          <img src={ctaRehabBg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 70% at center, color-mix(in oklab, var(--foreground) 92%, transparent) 0%, color-mix(in oklab, var(--foreground) 80%, transparent) 40%, color-mix(in oklab, var(--foreground) 30%, transparent) 80%, transparent 100%)",
            }}
          />
          <div aria-hidden className="absolute inset-0 opacity-[0.08] mix-blend-screen" style={dotPattern} />
          <div className="relative z-10">
            <h2 className="font-display text-4xl font-bold tracking-tight lg:text-6xl text-balance">
              Take the next step.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              You don't have to accept joint pain as your new normal. Schedule a consultation today
              and learn how CHLMD can help you move better, feel stronger, and live with less pain.
            </p>
            <Link to="/book" className="mt-10 inline-block rounded-full bg-white px-12 py-5 text-lg font-bold text-primary shadow-xl transition-transform hover:scale-105">
              Contact Us
            </Link>
          </div>
          <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/30 blur-[120px]" />
        </div>
      </section>
    </SiteShell>
  );
}
