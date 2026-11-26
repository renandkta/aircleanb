import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import ServicePage from '../components/service/ServicePage';
import { serviceMeta } from '../components/service/serviceMeta';
import ImageCarousel from '../components/ImageCarousel';
import { carouselImages } from '../utils/carouselLoader';
import { airbnbCleaning } from '../content/airbnb-cleaning';
import { testimonials } from '../content/testimonials';

export const meta: MetaFunction = () => serviceMeta(airbnbCleaning);

export default function AirbnbCleaning() {
  return (
    <ServicePage
      content={airbnbCleaning}
      heroMedia={<ImageCarousel images={carouselImages} sizes="(max-width: 768px) 100vw, 50vw" />}
    >
      <section id="deep-clean" className="bg-brand-ink text-white py-14 md:py-20 scroll-mt-4">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-3">Deep Clean Reset</h2>
          <p className="text-lg text-white/85 mb-6">
            For a new listing, after a party or a long stay. Kitchen, bathrooms, inside appliances and baseboards,
            then back to regular turnovers.
          </p>
          <ul className="grid sm:grid-cols-3 gap-4 mb-4">
            <li className="rounded-2xl bg-white/10 p-5"><span className="block text-white/75">Studio or 1 bedroom</span><strong className="text-2xl">from $230</strong></li>
            <li className="rounded-2xl bg-white/10 p-5"><span className="block text-white/75">2 bedrooms</span><strong className="text-2xl">from $280</strong></li>
            <li className="rounded-2xl bg-white/10 p-5"><span className="block text-white/75">3 bedrooms</span><strong className="text-2xl">from $360</strong></li>
          </ul>
          <p className="text-white/75">Photo report after every clean, same as a turnover.</p>
        </div>
      </section>

      <section id="reviews" className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center mb-10">What hosts say</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {testimonials.map((item) => (
              <figure key={item.name} className="bg-brand-soft rounded-2xl p-6">
                <blockquote className="text-brand-ink text-lg mb-4">"{item.quote}"</blockquote>
                <figcaption className="text-sm font-semibold text-brand-muted">
                  <span className="font-bold text-brand-ink">{item.name}</span> · {item.place}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="text-center text-brand-muted mt-8">
            Also for hosts: <Link to="/upholstery-mattress-cleaning" className="underline text-brand-dark font-semibold">upholstery and mattress cleaning</Link>.
            {' '}Setting your cleaning fee? Read <Link to="/guides/airbnb-cleaning-cost" className="underline text-brand-dark font-semibold">how much Airbnb cleaning costs in the DMV</Link>.
            {' '}Manage an office too? See <Link to="/office-cleaning" className="underline text-brand-dark font-semibold">office cleaning</Link>.
          </p>
        </div>
      </section>
    </ServicePage>
  );
}
