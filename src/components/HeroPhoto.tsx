interface HeroPhotoProps {
  // Pexels photo id; the image is served by Pexels' CDN in the size we ask for.
  pexelsId: number;
  alt: string;
  credit: string;
  creditUrl: string;
}

const pexelsUrl = (id: number, width: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${width}`;

// Free photo from Pexels (Pexels License: free for commercial use, no
// attribution required; we credit the photographer anyway). These are not
// photos of our own jobs, so the caption never says they are. Replace them with
// our own photos as soon as we have them.
export default function HeroPhoto({ pexelsId, alt, credit, creditUrl }: HeroPhotoProps) {
  return (
    <figure className="w-full">
      <img
        src={pexelsUrl(pexelsId, 800)}
        srcSet={`${pexelsUrl(pexelsId, 800)} 800w, ${pexelsUrl(pexelsId, 1400)} 1400w`}
        sizes="(max-width: 768px) 100vw, 50vw"
        alt={alt}
        width={1200}
        height={800}
        className="w-full aspect-[3/2] object-cover rounded-2xl shadow-xl bg-brand-line"
      />
      <figcaption className="mt-2 text-xs text-brand-muted">
        Photo: <a href={creditUrl} target="_blank" rel="noopener noreferrer" className="underline">{credit}</a> / Pexels
      </figcaption>
    </figure>
  );
}
