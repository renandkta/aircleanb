import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import ServicePage from '../components/service/ServicePage';
import { serviceMeta } from '../components/service/serviceMeta';
import { postConstructionCleaning } from '../content/post-construction-cleaning';
import HeroPhoto from '../components/HeroPhoto';

export const meta: MetaFunction = () => serviceMeta(postConstructionCleaning);

// Free Pexels photo until we have before/after photos of our own jobs.
export default function PostConstructionCleaning() {
  return (
    <ServicePage content={postConstructionCleaning} heroMedia={
        <HeroPhoto
          pexelsId={6197108}
          alt="Cleaners mopping the floor and wiping glass in a modern dining room"
          credit="Tima Miroshnichenko"
          creditUrl="https://www.pexels.com/photo/group-of-people-cleaning-a-dining-room-6197108/"
        />
      }>
      <section id="who-its-for" className="bg-brand-ink text-white py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-6">Who we clean for</h2>
          <ul className="grid sm:grid-cols-2 gap-4 text-lg">
            <li className="rounded-2xl bg-white/10 p-5">Homeowners after a kitchen, bathroom or full renovation</li>
            <li className="rounded-2xl bg-white/10 p-5">Airbnb hosts getting a renovated unit ready for photos and guests</li>
            <li className="rounded-2xl bg-white/10 p-5">Contractors who want the space handed over clean</li>
            <li className="rounded-2xl bg-white/10 p-5">Small offices moving into a new or renovated space</li>
          </ul>
          <p className="mt-6 text-white/85">
            Need regular cleaning after the move-in? See{' '}
            <Link to="/airbnb-cleaning" className="underline font-semibold text-white">Airbnb turnovers</Link> and{' '}
            <Link to="/office-cleaning" className="underline font-semibold text-white">office cleaning</Link>.
          </p>
        </div>
      </section>
    </ServicePage>
  );
}
