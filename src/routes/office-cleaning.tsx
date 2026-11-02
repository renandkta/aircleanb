import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import ServicePage from '../components/service/ServicePage';
import { serviceMeta } from '../components/service/serviceMeta';
import { officeCleaning } from '../content/office-cleaning';
import OfficeIllustration from '../components/illustrations/OfficeIllustration';

export const meta: MetaFunction = () => serviceMeta(officeCleaning);

// No office photos yet: the hero uses a drawn illustration (clearly labeled,
// no stock photos) until we have real ones.
export default function OfficeCleaning() {
  return (
    <ServicePage content={officeCleaning} heroMedia={<OfficeIllustration />}>
      <section id="who-its-for" className="bg-brand-ink text-white py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6">Who we clean for</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-lg">
            <li className="rounded-2xl bg-white/10 p-5">Small offices and studios, up to about 3,000 sq ft</li>
            <li className="rounded-2xl bg-white/10 p-5">Property managers who already trust us with their rentals</li>
            <li className="rounded-2xl bg-white/10 p-5">Teams that want cleaning done after hours or on weekends</li>
            <li className="rounded-2xl bg-white/10 p-5">Offices that want the same faces every visit</li>
          </ul>
          <p className="mt-6 text-white/85">
            Moving into a new or renovated space? We also do{' '}
            <Link to="/post-construction-cleaning" className="underline font-semibold text-white">post-construction cleaning</Link>.
          </p>
        </div>
      </section>
    </ServicePage>
  );
}
