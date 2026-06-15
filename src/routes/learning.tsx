import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { zodValidator, fallback } from "@tanstack/zod-adapter";
import { z } from "zod";
import { SiteShell } from "@/components/site-shell";
import heroImage from "@/assets/hero-banner.jpg";
import imgConsultation from "@/assets/photo-consultation.png";
import imgArmEval from "@/assets/photo-arm-eval.png";
import imgGait from "@/assets/photo-gait-training.png";
import imgTeam from "@/assets/photo-team.png";
import imgWholePerson from "@/assets/photo-whole-person.png";
import imgTherapy from "@/assets/therapy-session.jpg";
import imgEmg from "@/assets/treatment-emg.jpg";
import imgExercise from "@/assets/treatment-exercise.jpg";
import imgRehab from "@/assets/treatment-rehab.jpg";
import imgPain from "@/assets/treatment-pain.jpg";

type Article = {
  title: string;
  journal: string;
  date: string;
  href: string;
  image: string;
  categories: string[];
  snippet: string;
};

const articleImages = [
  imgConsultation,
  imgArmEval,
  imgGait,
  imgTeam,
  imgWholePerson,
  imgTherapy,
  imgEmg,
  imgExercise,
  imgRehab,
  imgPain,
];

const rawArticles: Omit<Article, "image">[] = [
  {
    title: "Preventing Autonomic Dysreflexia with the Appropriate Type and Level of Care",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "February 9, 2024",
    href: "#",
    categories: ["Spinal Cord Injury", "Neurological"],
    snippet: "Autonomic dysreflexia is a serious, potentially life-threatening medical emergency that affects individuals with spinal cord injuries at or above the T6 level. Prompt recognition and appropriate care are essential to prevent severe complications including stroke, seizures, and even death. This article explores the critical importance of proper care settings and monitoring protocols.",
  },
  {
    title: "Need for Appropriate Type and Level of Care in Quadriplegia",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "February 9, 2024",
    href: "#",
    categories: ["Spinal Cord Injury"],
    snippet: "Individuals with quadriplegia require highly specialized, multidisciplinary care that addresses complex medical needs including respiratory management, autonomic dysfunction, pressure injury prevention, and mobility limitations. The level and type of care provided significantly impact long-term outcomes and quality of life.",
  },
  {
    title: "Long-Term Consequences of Severe TBI",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "February 9, 2024",
    href: "#",
    categories: ["Traumatic Brain Injury", "Neurological"],
    snippet: "Severe traumatic brain injury can lead to lasting physical, cognitive, and behavioral changes that persist long after the initial trauma. Understanding these long-term consequences is vital for developing comprehensive rehabilitation programs and support systems that help patients and families adapt to new challenges over time.",
  },
  {
    title: "Hydrocephalus and the Need for Continuous Personalized Care",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "February 9, 2024",
    href: "#",
    categories: ["Neurological"],
    snippet: "Hydrocephalus requires lifelong management with individualized treatment plans that adapt to changing patient needs. Shunt systems, the most common treatment, require vigilant monitoring and timely revisions to prevent complications. This article discusses the importance of continuous, personalized care in optimizing patient outcomes.",
  },
  {
    title: "Hypoxic Ischemic Brain Injury in the Developing Brain",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "February 6, 2024",
    href: "#",
    categories: ["Traumatic Brain Injury", "Pediatric"],
    snippet: "The developing brain is particularly vulnerable to hypoxic-ischemic injury, with outcomes varying significantly based on the timing, severity, and location of the insult. Early intervention and targeted neurorehabilitation strategies can substantially improve developmental trajectories and functional outcomes for affected children.",
  },
  {
    title: "Long-Term Health Consequences of a Single Traumatic Brain Injury",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "February 6, 2024",
    href: "#",
    categories: ["Traumatic Brain Injury"],
    snippet: "Even a single traumatic brain injury can have profound and lasting effects on physical health, cognitive function, and mental well-being. Emerging research highlights increased risks of neurodegenerative conditions, chronic pain, and psychiatric disorders that may manifest years after the initial injury.",
  },
  {
    title: "Challenges in the Classification and Understanding of Mild Traumatic Brain Injury",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "May 26, 2023",
    href: "#",
    categories: ["Traumatic Brain Injury", "Research"],
    snippet: "Mild traumatic brain injury, commonly known as concussion, remains challenging to classify and understand due to its variable presentation and the limitations of current diagnostic tools. This article examines the evolving criteria for diagnosis, the heterogeneity of patient experiences, and the need for improved assessment methods.",
  },
  {
    title: "Coma, Vegetative State, and Minimally Conscious State",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "May 2, 2023",
    href: "#",
    categories: ["Neurological"],
    snippet: "Disorders of consciousness encompass a spectrum of conditions including coma, vegetative state, and minimally conscious state, each with distinct diagnostic criteria and prognostic implications. Accurate diagnosis and differentiation are critical for guiding treatment decisions, family counseling, and ethical considerations in care planning.",
  },
  {
    title: "Cranioplasty: Optimizing Clinical and Cosmetic Outcomes for Cranial Defects",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "January 5, 2023",
    href: "#",
    categories: ["Orthopedic", "Surgical"],
    snippet: "Cranioplasty, the surgical repair of skull defects, plays an essential role in both protecting the brain and restoring normal cranial anatomy. Advances in materials and surgical techniques have improved both clinical and cosmetic outcomes, yet optimal timing, patient selection, and complication management remain areas of active investigation.",
  },
  {
    title:
      "Avascular Necrosis of the Femoral Head: The Challenge of Early Identification and Intervention in Idiopathic Cases",
    journal: "International Journal of Physical Medicine and Rehabilitation",
    date: "November 28, 2022",
    href: "#",
    categories: ["Orthopedic"],
    snippet: "Avascular necrosis of the femoral head is a debilitating condition characterized by bone death due to compromised blood supply. Early identification in idiopathic cases presents unique challenges, as symptoms often develop insidiously. Timely intervention can preserve joint function and delay or prevent the need for total hip replacement.",
  },
];

const articles: Article[] = rawArticles.map((a, i) => ({
  ...a,
  image: articleImages[i % articleImages.length],
}));

const PAGE_SIZE = 4;

const searchSchema = z.object({
  page: fallback(z.number().int().min(1), 1).default(1),
});

export const Route = createFileRoute("/learning")({
  validateSearch: zodValidator(searchSchema),
  head: () => ({
    meta: [
      { title: "Learning Center — Craig H. Lichtblau, M.D., P.A." },
      {
        name: "description",
        content:
          "Physical Medicine insights and peer-reviewed research from our clinical experts.",
      },
      { property: "og:title", content: "Learning Center — Craig H. Lichtblau, M.D., P.A." },
      {
        property: "og:description",
        content:
          "Physical Medicine insights and peer-reviewed research from our clinical experts.",
      },
      { property: "og:image", content: heroImage },
    ],
  }),
  component: LearningPage,
});

function LearningPage() {
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: "/learning" });

  const totalPages = Math.max(1, Math.ceil(articles.length / PAGE_SIZE));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = articles.slice(start, start + PAGE_SIZE);

  const goTo = (p: number) => {
    if (p < 1 || p > totalPages || p === currentPage) return;
    navigate({ search: { page: p }, resetScroll: true });
  };

  return (
    <SiteShell>
      {/* HERO */}
      <header className="relative isolate w-full overflow-hidden">
        <img
          src={heroImage}
          alt="Learning Center hero"
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
              Learning Center
            </h1>
            <p className="mt-6 font-display text-2xl tracking-tight text-white/90">
              Physical Medicine Insights and Research From Our Experts
            </p>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-6 py-24">
        <ul className="space-y-8">
          {visible.map((a) => (
            <li key={a.title}>
              <a
                href={a.href}
                className="group block rounded-2xl border border-border/60 bg-card shadow-[0_4px_20px_-8px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(15,23,42,0.25)]"
              >
                <div className="grid gap-6 p-5 md:grid-cols-[340px_1fr] md:gap-8 md:p-6">
                  <div className="relative overflow-hidden rounded-xl bg-muted">
                    <img
                      src={a.image}
                      alt={a.title}
                      className="aspect-[4/3] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2">
                      {a.categories.map((c) => (
                        <span
                          key={c}
                          className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-secondary-foreground"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                    <h2 className="mt-4 font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                      {a.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground">
                      <span className="italic">{a.journal}</span>
                      <span className="mx-2">|</span>
                      <span>{a.date}</span>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/80 line-clamp-3">
                      {a.snippet}
                    </p>
                    <span className="mt-5 inline-block font-semibold text-sm uppercase tracking-widest text-primary group-hover:text-primary/80">
                      Read More →
                    </span>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <nav
          aria-label="Pagination"
          className="mt-16 flex items-center justify-center gap-2"
        >
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
            const isActive = p === currentPage;
            return (
              <Link
                key={p}
                to="/learning"
                search={{ page: p }}
                aria-current={isActive ? "page" : undefined}
                className={
                  "flex h-10 min-w-10 items-center justify-center rounded-full px-4 text-sm font-semibold transition-colors " +
                  (isActive
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground hover:border-primary/40 hover:text-primary")
                }
              >
                {p}
              </Link>
            );
          })}
          {currentPage < totalPages && (
            <button
              type="button"
              onClick={() => goTo(currentPage + 1)}
              className="ml-2 flex h-10 items-center justify-center rounded-full border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              Next »
            </button>
          )}
        </nav>
      </section>
    </SiteShell>
  );
}
