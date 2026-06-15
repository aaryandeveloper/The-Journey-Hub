import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { SiteShell } from "@/components/site-shell";
import heroImage from "@/assets/hero-banner.jpg";
import toolsImage from "@/assets/treatment-tools.jpg";
import therapyImage from "@/assets/photo-gait-training.png";
import careTeamImage from "@/assets/photo-team.png";
import walkingImage from "@/assets/photo-gait-training.png";
import pillarOneOnOne from "@/assets/photo-arm-eval.png";
import pillarTeam from "@/assets/photo-team.png";
import pillarRecovery from "@/assets/photo-whole-person.png";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import conditionOrtho from "@/assets/condition-ortho-real.jpg";
import conditionNeuro from "@/assets/condition-neuro-real.jpg";
import patternCircles from "@/assets/pattern-circles.jpg";
import treatmentPain from "@/assets/treatment-pain.jpg";
import treatmentInjections from "@/assets/treatment-injections.jpg";
import treatmentTrigger from "@/assets/treatment-trigger.jpg";
import treatmentRehab from "@/assets/treatment-rehab.jpg";
import treatmentExercise from "@/assets/treatment-exercise.jpg";
import treatmentEmg from "@/assets/treatment-emg.jpg";
import ctaRunnerBg from "@/assets/cta-runner-bg.jpg";
import ctaRehabBg from "@/assets/cta-rehab-bg.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CHLMD — Physical Medicine & Rehabilitation in North Palm Beach" },
      { name: "description", content: "Integrative orthopedic, neurological & pain management care. Physician-led PM&R with Doctor-of-Physical-Therapy rehab — one-on-one, individualized plans designed to get you moving again." },
      { property: "og:title", content: "CHLMD — Redefining Recovery Through PM&R" },
      { property: "og:description", content: "Pain management, orthopedic care, neurological rehabilitation, and DPT-led rehab under one roof in North Palm Beach." },
    ],
  }),
  component: Index,
});

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const neuroConditions = [
  "Traumatic brain injury (TBI)",
  "Stroke recovery",
  "Spinal cord injuries",
  "Multiple sclerosis",
  "Neuropathic pain",
  "Chronic pain syndromes",
  "Parkinson's disease",
  "Vestibular disorders",
];

const orthoConditions = [
  "Lower back pain",
  "Neck pain & whiplash",
  "Knee osteoarthritis",
  "Shoulder injuries",
  "Hip pain",
  "Sports injuries",
  "Post-surgical rehab",
  "Sciatica & disc herniation",
];

const treatmentList = [
  { name: "Pain Management", image: treatmentPain, desc: "Physician-led plans for acute and chronic pain — medication, procedures, and rehab together." },
  { name: "Joint Injections", image: treatmentInjections, desc: "Precision-guided injections for knee, shoulder, hip, and other joints to restore mobility." },
  { name: "Trigger Point Injections", image: treatmentTrigger, desc: "Direct treatment for persistent muscle knots that drive neck pain, headaches, and regional pain." },
  { name: "Physical Rehabilitation", image: treatmentRehab, desc: "Progressive, goal-driven rehab for orthopedic, neurological, and post-surgical recovery." },
  { name: "Therapeutic Exercise", image: treatmentExercise, desc: "Individualized programs that build strength, range of motion, endurance, and real-world function." },
  { name: "Electromyography (EMG)", image: treatmentEmg, desc: "In-office nerve and muscle diagnostics to pinpoint weakness, numbness, or radiating pain." },
];

const approachSteps = [
  { label: "Diagnose", desc: "Thorough evaluation and in-house EMG when indicated to find the real driver of symptoms." },
  { label: "Relieve", desc: "Targeted pain management and interventional injections to unlock movement." },
  { label: "Rebuild", desc: "Manual therapy plus individualized exercise to restore strength, mobility, and control." },
  { label: "Restore", desc: "Functional and sport-specific progressions that return you to the activities that matter." },
];

const testimonials = [
  { quote: "For the first time, I felt like someone actually understood the root of my pain — not just the symptoms.", name: "Michael R.", role: "Knee rehabilitation", image: testimonial1 },
  { quote: "The level of attention and clinical detail made all the difference in my recovery.", name: "Sarah K.", role: "Post-surgical recovery", image: testimonial2 },
  { quote: "I was given a real plan, not just temporary fixes. The improvement has been life-changing.", name: "David L.", role: "Chronic back pain", image: testimonial3 },
];

const whyChlmd = [
  "Physician-led rehabilitation care",
  "Board-certified PM&R expertise",
  "Focus on function, not just pain relief",
  "Evidence-based, results-driven treatment plans",
  "Advanced diagnostic and interventional techniques",
  "Personalized, high-touch patient care",
];

const faqs = [
  { q: "What conditions does CHLMD treat?", a: "Orthopedic (lower back, neck, knee, shoulder, hip, sports injuries, post-surgical, sciatica) and neurological (stroke, TBI, spinal cord injuries, MS, neuropathic pain, chronic pain). Contact us if unsure." },
  { q: "What makes CHLMD different?", a: "One-on-one care, integrated physician + DPT team, full continuum of diagnostics + procedures + rehab under one roof." },
  { q: "Do I need a referral?", a: "Not for many services in Florida; some insurance plans require one — call to verify." },
  { q: "What to expect at my first visit?", a: "Comprehensive evaluation: medical history, physical exam, diagnostics if needed, and a personalized plan reviewed before you leave." },
  { q: "Do you offer both pain management and rehab?", a: "Yes — designed to coordinate both; injections early in care followed by progressive rehabilitation." },
  { q: "Is treatment covered by insurance?", a: "Many plans cover services; coverage varies — call to verify co-pays, deductibles, and session limits." },
];

const pillars = [
  { image: pillarOneOnOne, title: "One-on-one individualized care", body: "You work directly with your clinician every session — never hand-offs between aides." },
  { image: pillarTeam, title: "An integrated clinical team", body: "Pain physicians, Doctors of Physical Therapy, and PTAs coordinating your care." },
  { image: pillarRecovery, title: "Whole-person recovery", body: "Plans built around strength, mobility, function, and quality of life — not just the symptom." },
];

// Geometric circles pattern for dark sections
const dotPattern = {
  backgroundImage: `url(${patternCircles})`,
  backgroundSize: "900px auto",
  backgroundRepeat: "repeat",
};

function Index() {
  return (
    <SiteShell>
      {/* HERO */}
      <header className="relative isolate w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Clinician guiding a patient through rehabilitation"
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
        <div className="mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-28 lg:py-36">
          <div className="animate-fade-up max-w-2xl text-white">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-white/80" />
              <p className="font-semibold text-[11px] uppercase tracking-[0.3em] text-white">
                North Palm Beach · Physical Medicine & Rehabilitation
              </p>
            </div>

            <h1 className="mb-8 font-display text-5xl leading-[1.05] tracking-tight text-balance text-white lg:text-6xl">
              <span className="font-light text-white/85">Redefining recovery through</span>{" "}
              <span className="block font-black text-white">
                Physical Medicine & Rehabilitation.
              </span>
            </h1>

            <p className="mb-8 max-w-[52ch] text-xl leading-relaxed text-white/90">
              Personalized neurological, orthopedic & pain management care designed to restore function, mobility, and quality of life.
            </p>


            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/book"
                className="rounded-full bg-white px-8 py-4 font-bold text-primary shadow-xl transition-all hover:bg-white/95 hover:shadow-2xl"
              >
                Book an Appointment
              </Link>
              <Link
                to="/treatments"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </header>

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
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Our mission</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Care that restores function, not just symptoms.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-foreground">
              <p>At CHLMD, our mission is to deliver exceptional, evidence-based medical and rehabilitation care that restores function, reduces pain, and improves quality of life.</p>
              <p>We don't believe in passive care or generic treatment plans. Every patient receives a structured, goal-driven rehabilitation strategy designed to produce measurable improvement in mobility, strength, and independence.</p>
              <p>Our approach blends medical expertise, advanced diagnostics, and hands-on rehabilitation to help patients achieve meaningful, long-term recovery outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHLMD + APPROACH (combined) */}
      <section className="relative py-24 text-center">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
        <div className="relative mx-auto max-w-7xl px-6">
        <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Why CHLMD</p>
        <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance">
          One-on-one care from an integrated clinical team.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-foreground/70">
          Most patients don't need just one treatment — they need the right sequence of care.
          We diagnose, relieve, rebuild, and restore around each patient.
        </p>
        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          {pillars.map((p) => (
            <article key={p.title} className="overflow-hidden rounded-3xl border border-border bg-card">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                width={800}
                height={800}
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <div className="p-8">
                <h3 className="font-display text-xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-foreground">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>



      {/* CONDITIONS */}
      <section className="relative py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Conditions we treat</p>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight">
              Neurological & Orthopedic Rehabilitation
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
              We specialize in complex conditions affecting movement, function, and daily performance.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-border bg-card text-foreground shadow-sm">
              <img
                src={conditionNeuro}
                alt="Neurological rehabilitation"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-8">
                <h3 className="mb-5 font-display text-2xl font-bold tracking-tight lg:text-3xl">Neurological</h3>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {neuroConditions.map((c) => (
                    <li key={c} className="pb-1">
                      <Link
                        to="/conditions/$slug"
                        params={{ slug: slugify(c) }}
                        className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="underline-offset-4 hover:underline">{c}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-border bg-card text-foreground shadow-sm">
              <img
                src={conditionOrtho}
                alt="Orthopedic rehabilitation"
                loading="lazy"
                width={1280}
                height={720}
                className="aspect-[16/9] w-full object-cover"
              />
              <div className="p-8">
                <h3 className="mb-5 font-display text-2xl font-bold tracking-tight lg:text-3xl">Orthopedic</h3>
                <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {orthoConditions.map((c) => (
                    <li key={c} className="pb-1">
                      <Link
                        to="/conditions/$slug"
                        params={{ slug: slugify(c) }}
                        className="flex items-center gap-3 text-foreground transition-colors hover:text-primary"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="underline-offset-4 hover:underline">{c}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/conditions"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              View all conditions →
            </Link>
          </div>
        </div>
      </section>

      {/* TREATMENTS — card grid format */}
      <section className="relative py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Treatments</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Advanced, non-surgical rehabilitation medicine.
            </h2>
            <p className="mt-4 text-foreground/70">
              Every treatment plan is customized based on diagnosis, functional limitation, and recovery goals.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {treatmentList.map((t) => (
              <article
                key={t.name}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover"
                />
                <div className="p-8">
                  <h3 className="font-display text-xl font-bold tracking-tight">{t.name}</h3>
                  <p className="mt-3 text-base leading-relaxed text-foreground">{t.desc}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/treatments"
              className="inline-block rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-md transition-all hover:shadow-xl"
            >
              Explore all treatments
            </Link>
          </div>
        </div>
      </section>


      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <img
              src={careTeamImage}
              alt="CHLMD clinical care team"
              loading="lazy"
              width={1920}
              height={1080}
              className="aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
          </div>
          <div className="lg:col-span-6">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Meet the CHLMD team</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Experienced clinicians across orthopedic, neuro & pain care.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground">
              Our team includes board-certified pain management physicians, licensed Doctors of Physical Therapy (DPTs), and Physical Therapist Assistants (PTAs) with combined expertise across complex orthopedic injuries, stroke and TBI recovery, spinal cord injury rehabilitation, and interventional pain management.
            </p>
            <Link
              to="/about/team"
              className="mt-10 inline-block rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-md transition-all hover:shadow-xl"
            >
              Meet the team
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24">
        <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Patient testimonials</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">Real recovery. Real results.</h2>
          <TestimonialsCarousel />
        </div>
      </section>


      {/* WHY CHLMD — checklist */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">Why CHLMD</p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
              Expertise that drives outcomes.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-foreground">
              CHLMD combines physician-led diagnostics, interventional pain care, and one-on-one rehabilitation under a single clinical roof — so every plan is built on real expertise, not guesswork.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7 auto-rows-fr">
            {whyChlmd.map((item) => (
              <li key={item} className="flex h-full items-start gap-3 rounded-2xl border border-border bg-card p-5">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">✓</span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">FAQ</p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight text-balance">
            Frequently asked questions.
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl">
          <FAQList />
        </div>
      </section>

      {/* FINAL CTA */}
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
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight lg:text-6xl text-balance">
              Experience a higher standard of rehabilitation care.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              If you're looking for more than temporary relief, CHLMD delivers structured, physician-led rehabilitation designed to restore real function and long-term quality of life.
            </p>
            <Link to="/book" className="mt-10 inline-block rounded-full bg-white px-12 py-5 text-lg font-bold text-primary shadow-xl transition-transform hover:scale-105">
              Book an Appointment
            </Link>
          </div>
          <div className="absolute right-0 top-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-primary/30 blur-[120px]" />
        </div>
      </section>
    </SiteShell>
  );
}

function FAQList() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <ul className="divide-y divide-border border-y border-border">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 py-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-semibold tracking-tight">{f.q}</span>
              <span className="font-mono text-xl text-primary">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && (
              <p className="pb-6 pr-10 text-base leading-relaxed text-foreground">{f.a}</p>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function TestimonialsCarousel() {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setSelected(api.selectedScrollSnap());
    const onSelect = () => setSelected(api.selectedScrollSnap());
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel opts={{ align: "start", loop: true }} className="mt-16" setApi={setApi}>
      <CarouselContent className="-ml-6">
        {testimonials.map((t) => (
          <CarouselItem key={t.name} className="pl-6 md:basis-1/2 lg:basis-1/3">
            <figure className="h-full rounded-3xl border border-border bg-card p-8 text-left text-foreground shadow-sm">
              <div className="mb-4 flex gap-1 text-yellow-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.15 1 5.85L10 14.9l-5.25 2.8 1-5.85L1.5 7.7l5.9-.9L10 1.5z"/></svg>
                ))}
              </div>
              <blockquote className="font-display text-lg leading-snug text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/70">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="mt-10 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => api?.scrollPrev()}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105"
        >
          <span className="text-2xl leading-none">←</span>
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => api?.scrollNext()}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-transform hover:scale-105"
        >
          <span className="text-2xl leading-none">→</span>
        </button>
      </div>
    </Carousel>
  );
}
