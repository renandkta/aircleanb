import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { CarouselImage } from '../utils/carouselLoader';

interface ImageCarouselProps {
  images: CarouselImage[];
  sizes?: string;
}

// Manual carousel: no auto-advance (it distracts people who are reading), and
// only the photo on screen is in the DOM, so the browser downloads one photo
// at a time instead of the whole set on page load.
const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  sizes = '(max-width: 768px) 100vw, 896px',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  if (images.length === 0) {
    return null;
  }

  const goTo = (index: number) => setCurrentIndex((index + images.length) % images.length);
  const image = images[currentIndex];

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) > 40) goTo(currentIndex + (delta < 0 ? 1 : -1));
  };

  return (
    <div
      className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl bg-[#E3F2F8]"
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of homes we cleaned"
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={handleTouchEnd}
    >
      <img
        key={image.src}
        src={image.src}
        srcSet={image.srcSet}
        sizes={sizes}
        alt={image.alt}
        width={800}
        height={600}
        className="w-full h-full object-cover"
        loading={currentIndex === 0 ? 'eager' : 'lazy'}
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(currentIndex - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/90 text-[#0B2A3A] shadow hover:bg-white"
            aria-label="Previous photo"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => goTo(currentIndex + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-white/90 text-[#0B2A3A] shadow hover:bg-white"
            aria-label="Next photo"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex px-2 bg-[#0B2A3A]/55 rounded-full">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                className="w-6 h-6 flex items-center justify-center"
                aria-label={`Show photo ${index + 1} of ${images.length}`}
                aria-current={index === currentIndex}
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-5 bg-white' : 'w-2 bg-white/60'
                  }`}
                />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
