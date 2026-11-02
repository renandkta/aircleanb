interface HeroPhotoProps {
  // Either a Pexels photo id (served by Pexels' CDN in the size we ask for) or
  // our own copy in public/images: `local` maps each width to its file.
  pexelsId?: number;
  local?: { src: string; width: number }[];
  alt: string;
  credit: string;
  creditUrl: string;
  // Set when our copy was changed from the original (e.g. uniform color).
  edited?: boolean;
}

const pexelsUrl = (id: number, width: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

// Free photo from Pexels (Pexels License: free for commercial use, edits
// allowed, no attribution required; we credit the photographer anyway). These
// are not photos of our own jobs, so the caption never says they are. Replace
// them with our own photos as soon as we have them.
export default function HeroPhoto({ pexelsId, local, alt, credit, creditUrl, edited }: HeroPhotoProps) {
  const sources = local ?? (pexelsId ? [800, 1400].map((w) => ({ src: pexelsUrl(pexelsId, w), width: w })) : []);
  if (sources.length === 0) return null;
  return (
    <figure className="w-full">
      <img
        src={sources[0].src}
        srcSet={sources.map((s) => `${s.src} ${s.width}w`).join(', ')}
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={alt}
        width={1200}
        height={800}
        className="w-full aspect-[3/2] object-cover rounded-2xl shadow-xl bg-brand-line"
      />
      <figcaption className="mt-2 text-xs text-brand-muted">
        Photo: <a href={creditUrl} target="_blank" rel="noopener noreferrer" className="underline">{credit}</a> / Pexels{edited ? ' (edited)' : ''}
      </figcaption>
    </figure>
  );
}
