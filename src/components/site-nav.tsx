import { Link } from "@tanstack/react-router";
import { conditions, treatments } from "@/lib/site-data";
import logo from "@/assets/logo.png";

export function SiteNav() {
  const neuro = conditions.filter((c) => c.category === "neurological");
  const ortho = conditions.filter((c) => c.category === "orthopedic");

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-white">
      <div className="mx-auto flex h-24 max-w-7xl items-center gap-10 px-6">
        <Link to="/" className="flex items-center" aria-label="Craig H. Lichtblau, M.D., P.A.">
          <img src={logo} alt="Craig H. Lichtblau, M.D., P.A." className="h-16 w-auto" />
        </Link>
        <div className="ml-auto flex items-center gap-10">
          <div className="hidden gap-8 text-sm font-medium tracking-tight md:flex">
            <Link to="/" className="transition-colors hover:text-primary">Home</Link>

            {/* About Us dropdown */}
            <div className="group relative">
              <span className="inline-flex cursor-default items-center gap-1 transition-colors hover:text-primary">
                About Us
              </span>
              <div className="pointer-events-none absolute -left-4 top-full w-[240px] translate-y-2 rounded-xl border border-border bg-card p-5 opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="space-y-3">
                  <li>
                    <Link to="/about/practice" className="text-sm hover:underline">
                      Our Practice
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/team" className="text-sm hover:underline">
                      Meet Our Team
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Conditions dropdown */}
            <div className="group relative">
              <Link to="/conditions" className="inline-flex cursor-default items-center gap-1 transition-colors hover:text-primary">
                Conditions
              </Link>
              <div className="pointer-events-none absolute -left-4 top-full w-[560px] translate-y-2 rounded-xl border border-border bg-card p-6 opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="mb-4 font-semibold text-xs uppercase tracking-widest text-muted">Neurological</p>
                    <ul className="space-y-3">
                      {neuro.map((c) => (
                        <li key={c.slug}>
                          <Link to="/conditions/$slug" params={{ slug: c.slug }} className="text-sm hover:underline">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-4 font-semibold text-xs uppercase tracking-widest text-muted">Orthopedic</p>
                    <ul className="space-y-3">
                      {ortho.map((c) => (
                        <li key={c.slug}>
                          <Link to="/conditions/$slug" params={{ slug: c.slug }} className="text-sm hover:underline">
                            {c.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Treatments dropdown */}
            <div className="group relative">
              <Link to="/treatments" className="inline-flex cursor-default items-center gap-1 transition-colors hover:text-primary">
                Treatments
              </Link>
              <div className="pointer-events-none absolute -left-4 top-full w-[280px] translate-y-2 rounded-xl border border-border bg-card p-5 opacity-0 shadow-2xl transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <ul className="space-y-3">
                  {treatments.map((t) => (
                    <li key={t.slug}>
                      <Link to="/treatments/$slug" params={{ slug: t.slug }} className="text-sm hover:underline">
                        {t.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link to="/learning" className="transition-colors hover:text-primary">Learning Center</Link>
          </div>
          <Link
            to="/book"
            className="rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:shadow-lg hover:brightness-110"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
}
