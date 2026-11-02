// Drawn illustration (not a photo) of a small office cleaned after hours.
// Brand palette only. Replace with real photos of offices we clean when we have them.
export default function OfficeIllustration() {
  return (
    <figure className="w-full">
      <svg viewBox="0 0 480 360" role="img" aria-labelledby="office-ill-title" className="w-full h-auto rounded-2xl">
        <title id="office-ill-title">Illustration of a tidy small office in the evening, freshly cleaned</title>
        <rect width="480" height="360" rx="24" fill="#E3F2F8" />
        {/* window with evening sky */}
        <rect x="40" y="36" width="170" height="120" rx="10" fill="#0B2A3A" />
        <circle cx="170" cy="70" r="14" fill="#FFFFFF" opacity="0.9" />
        <circle cx="176" cy="66" r="12" fill="#0B2A3A" />
        <circle cx="80" cy="60" r="2" fill="#FFFFFF" />
        <circle cx="110" cy="90" r="1.5" fill="#FFFFFF" />
        <circle cx="140" cy="54" r="1.5" fill="#FFFFFF" />
        <rect x="40" y="94" width="170" height="4" fill="#CFE6EF" />
        <rect x="123" y="36" width="4" height="120" fill="#CFE6EF" />
        {/* wall clock */}
        <circle cx="300" cy="70" r="26" fill="#FFFFFF" stroke="#005A78" strokeWidth="4" />
        <path d="M300 70 V54 M300 70 L312 76" stroke="#0B2A3A" strokeWidth="3" strokeLinecap="round" />
        {/* floor */}
        <rect x="0" y="276" width="480" height="84" fill="#CFE6EF" />
        <path d="M40 300 H200 M260 320 H440" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        {/* desk */}
        <rect x="150" y="196" width="230" height="14" rx="4" fill="#005A78" />
        <rect x="165" y="210" width="12" height="70" fill="#005A78" />
        <rect x="353" y="210" width="12" height="70" fill="#005A78" />
        {/* monitor */}
        <rect x="220" y="128" width="96" height="62" rx="6" fill="#0B2A3A" />
        <rect x="228" y="136" width="80" height="46" rx="3" fill="#00739A" />
        <rect x="260" y="190" width="16" height="8" fill="#0B2A3A" />
        {/* mug */}
        <rect x="335" y="176" width="18" height="20" rx="4" fill="#FFFFFF" stroke="#005A78" strokeWidth="3" />
        {/* chair */}
        <rect x="236" y="214" width="62" height="16" rx="6" fill="#0B2A3A" />
        <rect x="262" y="230" width="10" height="34" fill="#0B2A3A" />
        <path d="M240 272 H294" stroke="#0B2A3A" strokeWidth="8" strokeLinecap="round" />
        {/* plant */}
        <rect x="70" y="236" width="40" height="42" rx="6" fill="#FFFFFF" stroke="#005A78" strokeWidth="3" />
        <path d="M90 236 C70 210 60 196 66 180 C80 192 88 210 90 236 C92 206 100 186 116 176 C120 196 106 218 90 236" fill="#1E7B47" />
        {/* empty trash bin */}
        <path d="M398 236 H434 L428 278 H404 Z" fill="#FFFFFF" stroke="#005A78" strokeWidth="3" strokeLinejoin="round" />
        {/* sparkles */}
        <g fill="#1E7B47">
          <path d="M200 160 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" />
          <path d="M390 150 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
          <path d="M120 300 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
        </g>
      </svg>
      <figcaption className="mt-2 text-sm text-brand-muted">Illustration. After-hours cleaning, same crew every visit.</figcaption>
    </figure>
  );
}
