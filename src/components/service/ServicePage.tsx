import type { ReactNode } from 'react';
import SiteHeader from '../SiteHeader';
import SiteFooter from '../SiteFooter';
import StickyContactBar from '../StickyContactBar';
import QuoteForm from '../QuoteForm';
import type { ServiceContent } from '../../content/types';
import { crumbsFor } from './serviceMeta';
import { Breadcrumbs, CtaBand, FaqList, IncludedList, PricingFrom, ProcessSteps, ServiceArea, ServiceHero } from './sections';

interface ServicePageProps {
  content: ServiceContent;
  heroMedia?: ReactNode;
  // Page-specific bands, shown after "How it works".
  children?: ReactNode;
}

// The shared layout of every service page: the page itself is mostly content.
export default function ServicePage({ content, heroMedia, children }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-brand-soft">
      <SiteHeader quoteHref="#quote" />
      <main>
        <Breadcrumbs crumbs={crumbsFor(content)} />
        <ServiceHero content={content} media={heroMedia} />
        <IncludedList included={content.included} />
        <ProcessSteps process={content.process} />
        {children}
        {content.pricing && <PricingFrom pricing={content.pricing} />}
        <ServiceArea area={content.area} />
        <FaqList faqs={content.faqs} />
        <section id="quote" className="py-14 md:py-20 scroll-mt-4">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-brand-line p-6 md:p-10">
              <h2 className="font-display text-3xl font-extrabold mb-2">{content.quote.title}</h2>
              <p className="text-brand-muted mb-6">{content.quote.subtitle}</p>
              <QuoteForm
                service={content.key}
                defaultServiceName={content.formServiceName}
                notesPlaceholder={content.quote.notesPlaceholder}
              />
            </div>
          </div>
        </section>
        <CtaBand title={content.cta.title} subtitle={content.cta.subtitle} service={content.key} />
      </main>
      <SiteFooter service={content.key} />
      <StickyContactBar label="Text us for a quote" service={content.key} />
    </div>
  );
}
