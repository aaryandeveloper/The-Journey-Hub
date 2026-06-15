import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import heroImage from "@/assets/hero-banner.jpg";
import patternCircles from "@/assets/pattern-circles.jpg";
import ctaRehabBg from "@/assets/cta-rehab-bg.jpg";
import headshotPlaceholder from "@/assets/team-placeholder.jpg";

export const Route = createFileRoute("/about/team")({
  head: () => ({
    meta: [
      { title: "Meet the Team — Craig H. Lichtblau, M.D., P.A." },
      { name: "description", content: "Meet the CHLMD clinical team — physician assistants, doctors of physical therapy, and rehabilitation specialists delivering physician-led PM&R care." },
      { property: "og:title", content: "Meet the Team — CHLMD" },
      { property: "og:description", content: "Physician-led PM&R care from a team focused on restoring function, mobility, and quality of life." },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: TeamPage,
});

const dotPattern = {
  backgroundImage: `url(${patternCircles})`,
  backgroundSize: "900px auto",
  backgroundRepeat: "repeat",
};

type Detail = { label: string; value: string };
type Member = {
  name: string;
  role: string;
  bio: string;
  details: Detail[];
};
type Group = {
  eyebrow: string;
  title: string;
  members: Member[];
};

const groups: Group[] = [
  {
    eyebrow: "Leadership",
    title: "Leadership team",
    members: [
      {
        name: "Craig H. Lichtblau, MD",
        role: "Medical Director",
        bio: "Dr. Lichtblau has over 35 years of clinical practice experience and treats patients who have suffered from traumatic brain injuries, spinal cord injuries, strokes, amputations, burns, multiple orthopedic traumas, progressive neurologic diseases (multiple sclerosis, amyotrophic lateral sclerosis), and patients who suffer from chronic pain and disability. Dr. Lichtblau maintains privileges at 5 local hospitals, and a transitional living facility. He has surgical assistant privileges at St. Mary's Medical Center in West Palm Beach, Florida, Medicover Hospital in Warsaw, Poland and Burjeel Medical Center in Abu Dhabi, United Arab Emirates.",
        details: [
          { label: "Specialization", value: "Add text later." },
          { label: "Experience", value: "Add text later." },
          { label: "Education & Certification", value: "Add text later." },
        ],
      },
      {
        name: "Ty Cross",
        role: "Chief Executive Officer",
        bio: "Ty joined the team in 2015 bringing with him more than 30 years of enterprise-level leadership. He has worked in many divisions within the healthcare, ground transportation, and aerospace industries. As Chief Executive Officer, Cross is committed to providing high-quality healthcare to patients around the world.",
        details: [
          { label: "Specialization", value: "Add text later." },
          { label: "Experience", value: "Add text later." },
          { label: "Education & Certification", value: "Add text later." },
        ],
      },
    ],
  },
  {
    eyebrow: "Medical staff & specialists",
    title: "Physician assistant team",
    members: [
      {
        name: "Lawrence Aronowitz, PA-C",
        role: "Physician Assistant — Physiatry",
        bio: "Lawrence Aronowitz is a Physician Assistant specializing in Physiatry at CHLMD, working closely with the medical team to evaluate, diagnose, and manage a wide range of neurological and musculoskeletal conditions. He plays a key role in patient assessment, treatment planning, and ongoing rehabilitation care.",
        details: [
          { label: "Specialization", value: "Add text later." },
          { label: "Experience", value: "Add text later." },
          { label: "Education & Certification", value: "Add text later." },
        ],
      },
      {
        name: "Jay Spinka, PA-C",
        role: "Physician Assistant — Physiatry",
        bio: "Jay Spinka is a nationally certified Physician Assistant specializing in Physiatry at Craig H. Lichtblau, M.D.'s practice. Jay brings a unique blend of emergency medicine, orthopedic experience, and rehabilitation expertise to patient care.",
        details: [
          { label: "Specialization", value: "Physiatry and Orthopedics." },
          { label: "Experience", value: "Over 25 years in Physical Medicine and Rehabilitation, Orthopedic Surgery, Pain Management, and Urgent Care. He also served 10 years as a Firefighter Paramedic with the St. Lucie County Fire Department." },
          { label: "Education & Certification", value: "Bachelor of Science in Physician Assistant Studies; Firefighter/Paramedic training; Associate Degree in Fire Science. Nationally Certified Physician Assistant, DEA Licensed, ACLS and CPR certified." },
        ],
      },
    ],
  },
  {
    eyebrow: "Rehabilitation",
    title: "Physical therapy team",
    members: [
      {
        name: "Nick Rust, PT, DPT",
        role: "Clinic Manager — Doctor of Physical Therapy",
        bio: "Nick Rust serves as Clinic Manager and Doctor of Physical Therapy at CHLMD. He specializes in coordinating patient care, overseeing rehabilitation programs, and delivering high-level outpatient therapy focused on orthopedic and neurological recovery. Nick leads the clinical team in delivering structured, outcomes-driven rehabilitation care designed to restore mobility, strength, and function.",
        details: [
          { label: "Specialization", value: "Add text later." },
          { label: "Experience", value: "Add text later." },
          { label: "Education & Certification", value: "Add text later." },
        ],
      },
      {
        name: "Joseph Gentile, PT, DPT",
        role: "Physical Therapist — Acute Rehab, Acute Care & Neurological Therapy",
        bio: "Joseph Gentile is a licensed Physical Therapist with over 10 years of experience in Acute Rehabilitation, Acute Care, and Outpatient Neurological Therapy. He specializes in guiding patients through every stage of recovery — from initial injury or surgery to full functional independence.",
        details: [
          { label: "Specialization", value: "Acute Rehab, Acute Care, Neurological Therapy, and Complex Orthopedic Rehabilitation. Patient-centered, evidence-based care focused on functional restoration and seamless continuity across the recovery process." },
          { label: "Experience", value: "10+ years treating multi-stage rehabilitation cases across hospital and outpatient settings, including limb lengthening and post-amputation rehabilitation at the Paley Institute." },
          { label: "Education", value: "Doctor of Physical Therapy (DPT)." },
        ],
      },
      {
        name: "David Gordon, PTA",
        role: "Physical Therapist Assistant",
        bio: "David Gordon is a Physical Therapist Assistant specializing in hands-on rehabilitation support, therapeutic exercise progression, and patient-guided functional training. He plays a key role in supporting recovery and improving mobility outcomes.",
        details: [
          { label: "Specialization", value: "Add text later." },
          { label: "Experience", value: "Add text later." },
          { label: "Education", value: "Add text later." },
        ],
      },
      {
        name: "Cathrina Beharry, PTA",
        role: "Physical Therapist Assistant",
        bio: "Cathrina Beharry is a Physical Therapist Assistant focused on delivering structured rehabilitation support, assisting with therapeutic exercise programs, and helping patients progress through individualized recovery plans.",
        details: [
          { label: "Specialization", value: "Add text later." },
          { label: "Experience", value: "Add text later." },
          { label: "Education", value: "Add text later." },
        ],
      },
      {
        name: "Suzie Young, PTA",
        role: "Physical Therapist Assistant",
        bio: "Suzie Young is a Physical Therapist Assistant dedicated to patient-centered rehabilitation care, assisting with mobility training, therapeutic exercises, and functional recovery programs designed to improve daily movement and independence.",
        details: [
          { label: "Specialization", value: "Add text later." },
          { label: "Experience", value: "Add text later." },
          { label: "Education", value: "Add text later." },
        ],
      },
    ],
  },
];


function TeamPage() {
  return (
    <SiteShell>
      {/* HERO */}
      <header className="relative isolate w-full overflow-hidden">
        <img
          src={heroImage}
          alt="CHLMD clinical team"
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
              Meet the Team
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-white/90">
              At CHLMD, our team is built around one goal: delivering exceptional, physician-led Physical Medicine & Rehabilitation care focused on restoring function, mobility, and quality of life.
            </p>
          </div>
        </div>
      </header>

      {/* GROUPED TEAM SECTIONS */}
      {groups.map((group, gi) => (
        <section key={group.title} className="relative py-24">
          {gi % 2 === 1 && (
            <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={dotPattern} />
          )}
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-16 mx-auto max-w-3xl text-center">
              <p className="font-semibold text-sm uppercase tracking-[0.2em] text-primary">{group.eyebrow}</p>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-balance">
                {group.title}
              </h2>
            </div>

            <ul className={`grid gap-8 ${group.members.length === 1 ? "max-w-2xl mx-auto" : "md:grid-cols-2"}`}>
              {group.members.map((m) => (
                <li
                  key={m.name}
                  className="overflow-hidden rounded-3xl border border-border bg-card transition-colors hover:border-primary/40"
                >
                  <img
                    src={headshotPlaceholder}
                    alt={`Portrait placeholder for ${m.name}`}
                    loading="lazy"
                    width={768}
                    height={768}
                    className="aspect-square w-full object-cover"
                  />
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-bold tracking-tight">{m.name}</h3>
                    <p className="mt-1 font-semibold text-sm uppercase tracking-[0.15em] text-primary">{m.role}</p>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{m.bio}</p>

                    <dl className="mt-8 space-y-5 border-t border-border pt-6">
                      {m.details.map((d) => (
                        <div key={d.label}>
                          <dt className="font-semibold text-xs uppercase tracking-[0.2em] text-primary">{d.label}</dt>
                          <dd className="mt-2 leading-relaxed text-foreground/80">{d.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

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
              Meet your care team in person.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/70">
              Book a consultation and start building your personalized plan.
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
