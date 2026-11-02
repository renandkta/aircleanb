import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import ServicePage from '../components/service/ServicePage';
import { serviceMeta } from '../components/service/serviceMeta';
import { upholsteryMattressCleaning } from '../content/upholstery-mattress-cleaning';
import HeroPhoto from '../components/HeroPhoto';

export const meta: MetaFunction = () => serviceMeta(upholsteryMattressCleaning);

// Free Pexels photo until we have before/after photos of our own jobs.
export default function UpholsteryMattressCleaning() {
  return (
    <ServicePage content={upholsteryMattressCleaning} heroMedia={
        <HeroPhoto
          pexelsId={4401538}
          alt="Close-up of a cleaner vacuuming a modern armchair"
          credit="Jesus Arias"
          creditUrl="https://www.pexels.com/photo/cleaner-vacuuming-a-sofa-chair-4401538/"
        />
      }>
      <section id="who-its-for" className="bg-brand-ink text-white py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6">Who it's for</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-lg">
            <li className="rounded-2xl bg-white/10 p-5">Airbnb hosts getting sofas and mattresses ready for guests</li>
            <li className="rounded-2xl bg-white/10 p-5">Homes with pets, kids or a spill that will not come out</li>
            <li className="rounded-2xl bg-white/10 p-5">Moving in or out and want the furniture fresh</li>
            <li className="rounded-2xl bg-white/10 p-5">Small offices with fabric chairs or a waiting-room sofa</li>
          </ul>
          <p className="mt-6 text-white/85">
            Need the whole unit cleaned too? See{' '}
            <Link to="/airbnb-cleaning" className="underline font-semibold text-white">Airbnb turnovers</Link> and{' '}
            <Link to="/office-cleaning" className="underline font-semibold text-white">office cleaning</Link>.
          </p>
        </div>
      </section>
    </ServicePage>
  );
}
