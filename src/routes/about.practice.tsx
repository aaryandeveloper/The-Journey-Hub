import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import heroImage from "@/assets/hero-banner.jpg";
import therapyImage from "@/assets/photo-gait-training.png";
import patternCircles from "@/assets/pattern-circles.jpg";
import conditionNeuro from "@/assets/condition-neuro-real.jpg";
import conditionOrtho from "@/assets/condition-ortho-real.jpg";
import treatmentExercise from "@/assets/treatment-exercise.jpg";
import treatmentEmg from "@/assets/treatment-emg.jpg";
import treatmentTrigger from "@/assets/treatment-trigger.jpg";
import treatmentInjections from "@/assets/treatment-injections.jpg";
import treatmentPain from "@/assets/treatment-pain.jpg";
import treatmentRehab from "@/assets/treatment-rehab.jpg";
import ctaRehabBg from "@/assets/cta-rehab-bg.jpg";

export const Route = createFileRoute("/about/practice")({
  head: () => ({
    meta: [
      { title: "Our Practice — CHLMD Physical Medicine & Rehabilitation" },
      { name: "description", content: "Redefining recovery through advanced Physical Medicine & Rehabilitation in North Palm Beach. Personalized, non-surgical care for neurological and orthopedic conditions." },
      { property: "og:title", content: "Our Practice — Redefining Recovery with PM&R" },
      { property: "og:description", content: "Personalized PM&R care from Craig H. Lichtblau, M.D. — restore strength, mobility, and the life you value." },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: PracticePage,
});

const dotPattern = {
  backgroundImage: `url(${patternCircles})`,
  backgroundSize: "900px auto",
  backgroundRepeat: "repeat",
};

const neuroList = [
  "Traumatic brain injury (TBI)",
  "Stroke recovery and rehabilitation",
  "Spinal cord injuries",
  "Multiple sclerosis",
  "Neuropathic pain",
  "Chronic pain conditions",
  "Osteoarthritis-related complications",
];

const orthoList = [
  "Lower back pain",
  "Neck pain and whiplash",
  "Shoulder injuries",
  "Hip pain",
  "Knee osteoarthritis",
  "Sports injuries",
];

const treatments = [
  { name: "Therapeutic Exercise", image: treatmentExercise, desc: "Programs that rebuild strength, mobility, and endurance." },
  { name: "Electromyography (EMG)", image: treatmentEmg, desc: "Precise nerve and muscle evaluation to drive your plan." },
  { name: "Trigger Point Injections", image: treatmentTrigger, desc: "Targeted relief for stubborn muscle pain and tension." },
  { name: "Joint Injections", image: treatmentInjections, desc: "Image-guided injections for inflammation and joint pain." },
  { name: "Pain Management", image: treatmentPain, desc: "Comprehensive, physician-led strategies for chronic pain." },
  { name: "Hands-On Rehabilitation", image: treatmentRehab, desc: "Manual therapy and progressive rehab to restore independence." },
];

function PracticePage() {
  return (
    <SiteShell>
      {/* HERO */}
      <header className="relative isolate w-full overflow-hidden">
        <img
          src={heroImage}
          alt="CHLMD clinical team guiding a patient through rehabilitation"
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
        <div className="mx-auto flex min-h-[310px] max-w-7xl items-center justify-center px-6 py-16 text-center lg:py-20">
          <div className="animate-fade-up max-w-3xl text-white">
            <h1 className="font-display text-5xl font-black leading-[1.05] tracking-tight text-balance text-white lg:text-6xl">
              Our Practice
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              H. Lichtblau, M.D. is a leading Florida physiotherapy specialist known for delivering personalized, results-driven care for both complex and everyday conditions.
            </p>
          </div>
        </div>
      </header>

      {/* INTRO */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">A new standard of care</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
            Personalized PM&R, built around the life you want back.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-foreground">
            At CHLMD, we are redefining what recovery looks like. Through advanced Physical Medicine & Rehabilitation, our mission is to help you regain strength, restore mobility, and return to the life you value — without unnecessary surgery. Based in North Palm Beach, Craig H. Lichtblau, M.D. is a leading Florida physiotherapy specialist known for delivering personalized, results-driven care for both complex and everyday conditions.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={therapyImage}
              alt="Clinician guiding a patient through therapeutic stretching"
              loading="lazy"
              width={1280}
              height={1600}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7 text-center">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Our mission</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Exceptional, evidence-based care that restores function.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground">
              <p>
                At CHLMD, our mission is to deliver exceptional, evidence-based medical and rehabilitation care that restores function, reduces pain, and improves quality of life. We strive to redefine patient care through a personalized, results-driven approach — combining medical expertise with advanced rehabilitation to accelerate recovery and enhance long-term wellness.
              </p>
              <p>
                We are committed to treating every patient with compassion, integrity, and individualized attention while fostering a culture of excellence where clinicians are empowered to deliver the highest standard of care. Through innovation, collaboration, and a dedication to superior outcomes, we help every individual achieve their highest level of health, function, and performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS */}
      <section className="relative py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 mx-auto max-w-3xl text-center">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Comprehensive care</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Neurological & orthopedic conditions, treated as one continuum.
            </h2>
            <p className="mt-6 text-lg text-foreground/75">
              We specialize in conditions that affect the brain, spine, nerves, muscles, and joints — combining medical expertise with hands-on rehabilitation to deliver meaningful, lasting results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={conditionNeuro}
                alt="Neurological rehabilitation"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight">Neurological Conditions</h3>
                <ul className="mt-6 space-y-3">
                  {neuroList.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={conditionOrtho}
                alt="Orthopedic rehabilitation"
                loading="lazy"
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold tracking-tight">Orthopedic Conditions</h3>
                <ul className="mt-6 space-y-3">
                  {orthoList.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-foreground">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-foreground/75">
            No matter the diagnosis, our goal is simple: reduce pain, restore function, and help you move forward with confidence.
          </p>
        </div>
      </section>

      {/* TREATMENTS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 mx-auto max-w-3xl text-center">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Advanced treatments</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Personalized plans built around your goals.
            </h2>
            <p className="mt-6 text-lg text-foreground/75">
              Every patient at CHLMD receives a fully customized treatment plan. Following a comprehensive evaluation, your care may include:
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t) => (
              <article key={t.name} className="overflow-hidden rounded-3xl border border-border bg-card">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold tracking-tight">{t.name}</h3>
                  <p className="mt-2 text-foreground/80">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-3xl text-center text-lg text-foreground/75">
            By combining advanced diagnostics with targeted therapies, we create a comprehensive, non-surgical approach that supports long-term healing, mobility, and performance.
          </p>
        </div>
      </section>

      {/* PATIENT-FIRST + TRANSFORMATION */}
      <section className="relative py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-10 text-center">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Patient-first</p>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">A collaborative approach to healing.</h3>
            <p className="mt-6 text-lg leading-relaxed text-foreground">
              At CHLMD, care is collaborative. We work closely with you throughout every stage of your recovery — tracking progress, adjusting treatments, and ensuring you feel supported, informed, and confident every step of the way.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-10 text-center">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Transformation</p>
            <h3 className="mt-4 font-display text-3xl font-bold tracking-tight">Where recovery becomes transformation.</h3>
            <p className="mt-6 text-lg leading-relaxed text-foreground">
              Rehabilitation is not just about getting back to where you were — it's about becoming stronger, more capable, and more confident than before. Whether you're recovering from injury, managing chronic pain, or navigating a neurological condition, our team is here to guide you forward.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
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
              Discover how CHLMD is redefining recovery.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Personalized Physical Medicine & Rehabilitation, designed around you.
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
