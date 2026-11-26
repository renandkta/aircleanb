import { Link } from 'react-router';
import Logo from './Logo';
import { EMAIL, PHONE_DISPLAY, SERVING_LINE, mailtoUrl, telUrl, trackCallClick, trackEmailClick, type ServiceKey } from '../utils/contact';
import { GOOGLE_BUSINESS_PROFILE_URL } from '../seo';

interface SiteFooterProps {
  service?: ServiceKey;
}

// Footer for every page except the home. Service links help Google find each
// page and help people who scroll to the bottom looking for "office cleaning".
export default function SiteFooter({ service = 'general' }: SiteFooterProps) {
  const ctx = { service, placement: 'footer' } as const;
  return (
    <footer className="bg-brand-ink text-white pt-12 pb-24 md:pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <Link to="/" aria-label="AirCleanB home">
              <Logo size={28} />
            </Link>
            <p className="text-white/85 text-sm">Cleaning for Airbnb hosts and small offices in DC, Maryland &amp; Virginia.</p>
          </div>
          <div>
            <h2 className="font-bold mb-3">Services</h2>
            <ul className="space-y-2 text-white/85">
              <li><Link to="/airbnb-cleaning" className="hover:text-white">Airbnb turnover cleaning</Link></li>
              <li><Link to="/airbnb-cleaning#deep-clean" className="hover:text-white">Deep Clean Reset</Link></li>
              <li><Link to="/office-cleaning" className="hover:text-white">Office cleaning</Link></li>
              <li><Link to="/post-construction-cleaning" className="hover:text-white">Post-construction cleaning</Link></li>
              <li><Link to="/upholstery-mattress-cleaning" className="hover:text-white">Upholstery &amp; mattress</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-3">Contact</h2>
            <ul className="space-y-2 text-white/85">
              <li>
                <a href={telUrl} data-phone-link onClick={() => trackCallClick(ctx)} className="hover:text-white">
                  <span data-phone-text>{PHONE_DISPLAY}</span>
                </a>
              </li>
              <li><a href={mailtoUrl} onClick={() => trackEmailClick(ctx)} className="hover:text-white">{EMAIL}</a></li>
              <li>8am to 8pm, 7 days</li>
              {GOOGLE_BUSINESS_PROFILE_URL && (
                <li><a href={GOOGLE_BUSINESS_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white">Find us on Google</a></li>
              )}
              <li className="text-sm">{SERVING_LINE}</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold mb-3">AirCleanB</h2>
            <ul className="space-y-2 text-white/85">
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
              <li><Link to="/guides" className="hover:text-white">Guides for hosts</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-2 text-sm text-white/75">
          <span>English · Português · Español</span>
          <span>© {new Date().getFullYear()} AirCleanB. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
