// Drawn before/after illustration (not a photo) of a room after a renovation.
// Replace with real before/after photos of our jobs when we have them.
export default function PostConstructionIllustration() {
  return (
    <figure className="w-full">
      <svg viewBox="0 0 480 360" role="img" aria-labelledby="pc-ill-title" className="w-full h-auto rounded-2xl">
        <title id="pc-ill-title">Illustration: a dusty room after renovation on the left, the same room clean on the right</title>
        <defs>
          <clipPath id="pc-left"><rect x="0" y="0" width="240" height="360" /></clipPath>
          <clipPath id="pc-right"><rect x="240" y="0" width="240" height="360" /></clipPath>
        </defs>

        {/* BEFORE */}
        <g clipPath="url(#pc-left)">
          <rect width="480" height="360" fill="#E8E0D2" />
          <rect x="0" y="270" width="480" height="90" fill="#CDBFA6" />
          <rect x="40" y="50" width="120" height="100" rx="6" fill="#D9CDB8" stroke="#B9A88A" strokeWidth="4" />
          <path d="M40 100 H160 M100 50 V150" stroke="#B9A88A" strokeWidth="4" />
          {/* ladder */}
          <path d="M170 140 L200 280 M210 140 L240 280" stroke="#8C7A5B" strokeWidth="6" strokeLinecap="round" />
          <path d="M176 170 H214 M182 200 H220 M188 230 H226 M194 260 H232" stroke="#8C7A5B" strokeWidth="5" strokeLinecap="round" />
          {/* paint bucket */}
          <path d="M60 240 H100 L96 282 H64 Z" fill="#FFFFFF" stroke="#8C7A5B" strokeWidth="3" />
          <path d="M62 248 H98" stroke="#00739A" strokeWidth="6" />
          {/* debris and dust */}
          <g fill="#A8977A">
            <rect x="120" y="292" width="18" height="8" rx="2" transform="rotate(-12 129 296)" />
            <rect x="40" y="310" width="14" height="6" rx="2" transform="rotate(15 47 313)" />
            <circle cx="160" cy="320" r="5" />
            <circle cx="95" cy="330" r="4" />
          </g>
          <g fill="#FFFFFF" opacity="0.55">
            <circle cx="70" cy="190" r="22" />
            <circle cx="95" cy="178" r="16" />
            <circle cx="140" cy="210" r="18" />
            <circle cx="30" cy="230" r="14" />
          </g>
        </g>

        {/* AFTER */}
        <g clipPath="url(#pc-right)">
          <rect width="480" height="360" fill="#E3F2F8" />
          <rect x="0" y="270" width="480" height="90" fill="#CFE6EF" />
          <path d="M270 300 H340 M380 330 H450" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          <rect x="300" y="50" width="120" height="100" rx="6" fill="#FFFFFF" stroke="#005A78" strokeWidth="4" />
          <path d="M300 100 H420 M360 50 V150" stroke="#005A78" strokeWidth="4" />
          <rect x="306" y="56" width="50" height="40" fill="#BFE3F1" />
          {/* kitchen cabinet */}
          <rect x="290" y="196" width="150" height="80" rx="6" fill="#FFFFFF" stroke="#005A78" strokeWidth="3" />
          <path d="M365 196 V276" stroke="#005A78" strokeWidth="3" />
          <path d="M352 230 V244 M378 230 V244" stroke="#0B2A3A" strokeWidth="4" strokeLinecap="round" />
          <rect x="280" y="186" width="170" height="12" rx="3" fill="#00739A" />
          {/* sparkles */}
          <g fill="#1E7B47">
            <path d="M440 160 l4 10 10 4 -10 4 -4 10 -4 -10 -10 -4 10 -4z" />
            <path d="M275 140 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
            <path d="M420 300 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z" />
          </g>
        </g>

        {/* divider and labels */}
        <rect x="237" y="0" width="6" height="360" fill="#FFFFFF" />
        <rect x="16" y="16" width="84" height="30" rx="15" fill="#0B2A3A" />
        <text x="58" y="36" textAnchor="middle" fontFamily="Figtree, system-ui, sans-serif" fontWeight="700" fontSize="15" fill="#FFFFFF">Before</text>
        <rect x="380" y="16" width="84" height="30" rx="15" fill="#1E7B47" />
        <text x="422" y="36" textAnchor="middle" fontFamily="Figtree, system-ui, sans-serif" fontWeight="700" fontSize="15" fill="#FFFFFF">After</text>
      </svg>
      <figcaption className="mt-2 text-sm text-brand-muted">Illustration. Send us photos of your space for a real quote.</figcaption>
    </figure>
  );
}
