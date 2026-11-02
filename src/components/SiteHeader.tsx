import { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from './Logo';

const NAV = [
  { to: '/airbnb-cleaning', label: 'Airbnb Cleaning' },
  { to: '/office-cleaning', label: 'Office Cleaning' },
  { to: '/services', label: 'All Services' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
];

interface SiteHeaderProps {
  // Where "Get a quote" goes: the page's own form when it has one.
  quoteHref?: string;
}

// Header for every page except the home, which keeps its own (language picker
// and in-page links).
export default function SiteHeader({ quoteHref = '/#schedule' }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `font-semibold py-2 ${isActive ? 'text-brand' : 'text-brand-ink hover:text-brand'}`;

  return (
    <header className="bg-brand-soft border-b border-brand-line">
      <nav className="container mx-auto px-4 py-3" aria-label="Main">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" aria-label="AirCleanB home">
            <Logo size={28} tone="dark" />
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <a
              href={quoteHref}
              className="inline-flex items-center min-h-[44px] px-5 rounded-full bg-brand text-white font-bold hover:bg-brand-dark transition"
            >
              Get a quote
            </a>
          </div>
          <button
            type="button"
            className="lg:hidden w-11 h-11 flex items-center justify-center text-brand-ink"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {open && (
          <div id="site-menu" className="lg:hidden mt-3 pb-2 flex flex-col">
            {NAV.map((item) => (
              <NavLink key={item.to} to={item.to} className={(s) => `${linkClass(s)} py-3 border-t border-brand-line`} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
