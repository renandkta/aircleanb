import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { Bath, BedDouble, CheckCircle, ChevronRight, Grid3x3, Monitor, PackageCheck, SprayCan, UtensilsCrossed, Wind } from 'lucide-react';
import type { Crumb } from '../../seo';
import type { Faq, IncludedIcon, ServiceContent } from '../../content/types';

const INCLUDED_ICONS: Record<IncludedIcon, typeof Bath> = {
  desk: Monitor,
  kitchen: UtensilsCrossed,
  bath: Bath,
  dust: Wind,
  floor: Grid3x3,
  bed: BedDouble,
  restock: PackageCheck,
  spray: SprayCan,
};
import { SERVICE_AREA } from '../../seo';
import ContactButtons from '../ContactButtons';
import type { ServiceKey } from '../../utils/contact';

// Building blocks of a service page. Each takes content and renders one band.

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-4 text-sm text-brand-muted">
      <ol className="flex flex-wrap items-center gap-1">
        {crumbs.map((c, i) => (
          <li key={c.path} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="h-4 w-4" aria-hidden="true" />}
            {i < crumbs.length - 1 ? (
              <Link to={c.path} className="hover:text-brand underline-offset-2 hover:underline">{c.name}</Link>
            ) : (
              <span aria-current="page" className="text-brand-ink font-semibold">{c.name}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ServiceHero({ content, media }: { content: ServiceContent; media?: ReactNode }) {
  return (
    <section className="container mx-auto px-4 pt-6 pb-10 md:py-14">
      <div className={`grid gap-8 md:gap-12 ${media ? 'md:grid-cols-2 items-center' : 'max-w-3xl'}`}>
        <div className="flex flex-col gap-4">
          <p className="text-base font-semibold text-brand-dark">{content.eyebrow}</p>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight text-brand-ink">
            {content.h1}
          </h1>
          <p className="text-lg md:text-xl text-brand-muted">{content.intro}</p>
          <p className="text-lg font-bold text-brand-ink">{content.priceLine}</p>
          <ContactButtons service={content.key} placement="hero" />
        </div>
        {media && <div>{media}</div>}
      </div>
    </section>
  );
}

export function IncludedList({ included }: { included: ServiceContent['included'] }) {
  return (
    <section id="included" className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">{included.title}</h2>
        {included.intro && <p className="text-brand-muted text-lg mb-8 max-w-3xl">{included.intro}</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {included.groups.map((g) => (
            <div key={g.heading} className="rounded-2xl border border-brand-line p-6">
              <h3 className="font-bold text-lg mb-3 flex items-center gap-3">
                {g.icon && (() => {
                  const Icon = INCLUDED_ICONS[g.icon];
                  return (
                    <span className="w-10 h-10 flex-none flex items-center justify-center rounded-full bg-brand-soft">
                      <Icon className="h-5 w-5 text-brand" aria-hidden="true" />
                    </span>
                  );
                })()}
                {g.heading}
              </h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-brand-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Full class names so Tailwind keeps them in the build.
const STEP_COLS: Record<number, string> = { 1: '', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3', 4: 'md:grid-cols-4' };

export function ProcessSteps({ process }: { process: ServiceContent['process'] }) {
  return (
    <section id="how-it-works" className="py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-10">{process.title}</h2>
        <ol className={`grid gap-8 ${STEP_COLS[Math.min(process.steps.length, 4)]}`}>
          {process.steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="w-10 h-10 flex-none flex items-center justify-center rounded-full bg-brand text-white font-bold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-bold text-lg mb-1">{s.title}</h3>
                <p className="text-brand-muted">{s.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PricingFrom({ pricing }: { pricing: NonNullable<ServiceContent['pricing']> }) {
  return (
    <section id="pricing" className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">{pricing.title}</h2>
        {pricing.intro && <p className="text-brand-muted text-lg mb-6">{pricing.intro}</p>}
        <table className="w-full text-left border-collapse">
          <tbody>
            {pricing.rows.map((r) => (
              <tr key={r.label} className="border-b border-brand-line">
                <th scope="row" className="py-3 pr-4 font-semibold">{r.label}</th>
                <td className="py-3 text-right font-bold text-brand-dark whitespace-nowrap">{r.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ul className="mt-6 space-y-2 text-brand-muted">
          {pricing.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServiceArea({ area }: { area: ServiceContent['area'] }) {
  return (
    <section id="service-area" className="py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">{area.title}</h2>
        <p className="text-brand-muted text-lg mb-6">{area.intro}</p>
        <ul className="flex flex-wrap gap-2">
          {SERVICE_AREA.map((city) => (
            <li key={city} className="px-4 py-2 rounded-full bg-white border border-brand-line font-semibold">
              {city}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-8">Questions we get</h2>
        <div className="divide-y divide-brand-line border-y border-brand-line">
          {faqs.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-4 font-bold text-lg">
                {f.q}
                <span className="text-brand group-open:rotate-45 transition text-2xl leading-none" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-brand-muted">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand({ title, subtitle, service }: { title: string; subtitle: string; service: ServiceKey }) {
  return (
    <section className="bg-brand py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-2xl text-center text-white">
        <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">{title}</h2>
        <p className="text-lg md:text-xl mb-8">{subtitle}</p>
        <ContactButtons service={service} placement="cta_band" tone="dark" />
      </div>
    </section>
  );
}
