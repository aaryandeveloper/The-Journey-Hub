import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const menu = [
  { label: "About Us", to: "/about/practice" as const },
  { label: "Team", to: "/about/team" as const },
  { label: "Treatments", to: "/treatments" as const },
  { label: "Conditions", to: "/conditions" as const },
  { label: "Learning Center", to: "/learning" as const },
];

const treatments = [
  { label: "Therapeutic Exercise", slug: "therapeutic-exercise" },
  { label: "Electromyography (EMG)", slug: "electromyography-emg" },
  { label: "Trigger Point Injections", slug: "trigger-point-injections" },
  { label: "Physical Rehabilitation", slug: "physical-rehabilitation" },
  { label: "Pain Management", slug: "pain-management" },
  { label: "Joint Injections", slug: "joint-injections" },
];

const conditions = [
  { label: "Osteoarthritis", slug: "osteoarthritis" },
  { label: "Chronic Pain", slug: "chronic-pain" },
  { label: "Lower Back Pain", slug: "lower-back-pain" },
  { label: "Shoulder Injuries", slug: "shoulder-injuries" },
  { label: "Knee Osteoarthritis", slug: "knee-osteoarthritis" },
  { label: "Stroke Recovery", slug: "stroke-recovery" },
];

const hours = [
  { day: "Mon – Thu", time: "8 AM – 5 PM" },
  { day: "Fri", time: "8 AM – 4 PM" },
  { day: "Sat & Sun", time: "Closed" },
];

const ADDRESS = "550 Northlake Blvd., North Palm Beach, Florida 33408, US";
const MAP_QUERY = encodeURIComponent(ADDRESS);

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Top: brand + contact card with map */}
      <div className="mx-auto max-w-7xl px-6 pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Link to="/" aria-label="Craig H. Lichtblau, M.D., P.A.">
              <img src={logo} alt="Craig H. Lichtblau, M.D., P.A." className="h-12 w-auto" />
            </Link>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Craig H. Lichtblau, M.D., P.A. is a Physiatrist clinic offering customized
              nonsurgical treatment like therapeutic exercise.
            </p>

            <div className="mt-8 space-y-4 text-sm">
              <a href="tel:+15618423694" className="group flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">Tel</span>
                  <span className="font-medium group-hover:text-primary">+1 (561) 842-3694</span>
                </span>
              </a>
              <a href="mailto:info@chlmd.com" className="group flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">Email</span>
                  <span className="font-medium group-hover:text-primary">info@chlmd.com</span>
                </span>
              </a>
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground">Address</span>
                  <span className="font-medium">{ADDRESS}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Map to Craig H. Lichtblau, M.D., P.A."
                src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
                className="h-[320px] w-full lg:h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary hover:underline"
            >
              Get directions →
            </a>
          </div>
        </div>
      </div>

      {/* Middle: link columns + hours */}
      <div className="mx-auto mt-16 max-w-7xl border-t border-border px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="mb-4 font-semibold text-xs uppercase tracking-widest text-muted-foreground">Menu</p>
            <ul className="space-y-3 text-sm">
              {menu.map((m) => (
                <li key={m.label}>
                  <Link to={m.to} className="hover:text-primary">{m.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-xs uppercase tracking-widest text-muted-foreground">Treatments</p>
            <ul className="space-y-3 text-sm">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link to="/treatments/$slug" params={{ slug: t.slug }} className="hover:text-primary">
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-xs uppercase tracking-widest text-muted-foreground">Conditions</p>
            <ul className="space-y-3 text-sm">
              {conditions.map((c) => (
                <li key={c.slug}>
                  <Link to="/conditions/$slug" params={{ slug: c.slug }} className="hover:text-primary">
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-4 font-semibold text-xs uppercase tracking-widest text-muted-foreground">Open Days</p>
            <dl className="space-y-3 text-sm">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between gap-4 border-b border-border/60 pb-2 last:border-0">
                  <dt className="text-muted-foreground">{h.day}</dt>
                  <dd className="font-medium">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Bottom: legal */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-xs text-muted-foreground md:flex-row">
          <span>
            © {new Date().getFullYear()} Physical Medicine & Rehabilitation in North Palm Beach | Dr. Craig H. Lichtblau. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-primary">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
