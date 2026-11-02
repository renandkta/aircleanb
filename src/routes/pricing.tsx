import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import StickyContactBar from '../components/StickyContactBar';
import ContactButtons from '../components/ContactButtons';
import { pageMeta } from '../seo';

export const meta: MetaFunction = () =>
  pageMeta({
    path: '/pricing',
    title: 'Pricing - Airbnb Turnovers from $110 - AirCleanB',
    description:
      'Turnover prices: studio from $110, 2 bedrooms from $140, 3 bedrooms from $180. Same-day at no extra fee. 30% off your first turnover.',
  });

const ROWS = [
  { service: 'Airbnb turnover, studio or 1 bedroom', price: 'from $110', to: '/airbnb-cleaning' },
  { service: 'Airbnb turnover, 2 bedrooms', price: 'from $140', to: '/airbnb-cleaning' },
  { service: 'Airbnb turnover, 3 bedrooms', price: 'from $180', to: '/airbnb-cleaning' },
  { service: 'Extra full bathroom / half bathroom', price: '+$20 / +$10', to: '/airbnb-cleaning' },
  { service: 'Deep Clean Reset (studio / 2BR / 3BR)', price: 'from $230 / $280 / $360', to: '/airbnb-cleaning#deep-clean' },
  { service: 'Office cleaning', price: 'flat monthly price after a free walkthrough', to: '/office-cleaning' },
  { service: 'Post-construction / post-renovation cleaning', price: 'quote from photos', to: '/post-construction-cleaning' },
  { service: 'Upholstery & mattress cleaning', price: 'quote from photos', to: '/services' },
];

export default function Pricing() {
  return (
    <div className="min-h-screen bg-brand-soft">
      <SiteHeader />
      <main className="container mx-auto px-4 py-10 md:py-16 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4">Pricing</h1>
        <p className="text-lg text-brand-muted mb-8">
          Prices for new clients. We confirm the final price after you send your listing or we see the space.
        </p>
        <div className="bg-white rounded-2xl border border-brand-line p-6 md:p-8 mb-8">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-brand-line">
                <th scope="col" className="py-3 pr-4">Service</th>
                <th scope="col" className="py-3 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.service} className="border-b border-brand-line">
                  <th scope="row" className="py-3 pr-4 font-semibold">
                    <Link to={r.to} className="hover:text-brand underline-offset-2 hover:underline">{r.service}</Link>
                  </th>
                  <td className="py-3 text-right font-bold text-brand-dark">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <ul className="mt-6 space-y-2 text-brand-muted">
            <li>Same-day turnovers at no extra fee.</li>
            <li>30% off your first turnover, one unit per new client.</li>
            <li>Free cancellation up to 24 hours before the clean; 50% after that.</li>
          </ul>
        </div>
        <ContactButtons service="general" placement="pricing" />
      </main>
      <SiteFooter />
      <StickyContactBar label="Text us for a quote" />
    </div>
  );
}
