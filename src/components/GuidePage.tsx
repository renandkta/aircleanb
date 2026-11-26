import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import StickyContactBar from './StickyContactBar';
import ContactButtons from './ContactButtons';
import { Breadcrumbs, CtaBand, FaqList } from './service/sections';
import type { Guide } from '../content/guides/types';
import { crumbsFor, formatDate } from './guideMeta';

export default function GuidePage({ guide }: { guide: Guide }) {
  return (
    <div className="min-h-screen bg-brand-soft">
      <SiteHeader />
      <main>
        <Breadcrumbs crumbs={crumbsFor(guide)} />
        <article className="container mx-auto px-4 pt-6 pb-14 max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold leading-[1.08] tracking-tight mb-3">
            {guide.h1}
          </h1>
          <p className="text-sm text-brand-muted mb-6">
            By the AirCleanB team · Updated <time dateTime={guide.updated}>{formatDate(guide.updated)}</time>
          </p>
          <p className="text-lg md:text-xl text-brand-ink mb-10">{guide.intro}</p>

          {guide.sections.map((s) => (
            <section key={s.heading} className="mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold mb-4">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p} className="text-lg text-brand-ink/90 mb-4">{p}</p>
              ))}
              {s.list && (
                <ul className="list-disc pl-6 space-y-2 text-lg text-brand-ink/90 mb-4">
                  {s.list.map((item) => <li key={item}>{item}</li>)}
                </ul>
              )}
              {s.table && (
                <div className="bg-white rounded-2xl border border-brand-line p-4 md:p-6">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-brand-line">
                        <th scope="col" className="py-2 pr-4">{s.table.head[0]}</th>
                        <th scope="col" className="py-2 text-right">{s.table.head[1]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map(([label, value]) => (
                        <tr key={label} className="border-b border-brand-line last:border-0">
                          <th scope="row" className="py-2 pr-4 font-semibold">{label}</th>
                          <td className="py-2 text-right font-bold text-brand-dark">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <div className="bg-white rounded-2xl border border-brand-line p-6 md:p-8">
            <p className="font-display text-xl font-extrabold mb-2">Want a price for your unit?</p>
            <p className="text-brand-muted mb-5">
              Text us your bedrooms, city and checkout time. We reply within 30 minutes, 8am to 8pm.
            </p>
            <ContactButtons service={guide.next.service} placement="guide" />
            <Link
              to={guide.next.to}
              className="mt-5 inline-flex items-center gap-2 font-bold text-brand-dark underline underline-offset-2"
            >
              {guide.next.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </article>
        <FaqList faqs={guide.faqs} />
        <CtaBand
          title="Ready for your next checkout?"
          subtitle="Send us your bedrooms, city and checkout time. We reply within 30 minutes."
          service={guide.next.service}
        />
      </main>
      <SiteFooter />
      <StickyContactBar label="Text us for a quote" />
    </div>
  );
}
