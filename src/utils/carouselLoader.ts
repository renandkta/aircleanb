// Carousel photos live in `public/images/carousel`, each in two widths
// (<name>-800.webp and <name>-1600.webp) so phones never download the large one.
// To add a photo: export both widths with those names and add an entry here.
export interface CarouselImage {
  src: string;
  srcSet: string;
  alt: string;
}

const photos: Array<{ name: string; alt: string }> = [
  { name: 'bedroom-bright', alt: 'Bright bedroom with a freshly made bed after a turnover' },
  { name: 'living-room', alt: 'Clean living room with fireplace, ready for guests' },
  { name: 'kitchen', alt: 'Clean kitchen with wiped counters' },
  { name: 'towels', alt: 'Folded white towels on a freshly made bed' },
  { name: 'coffee-station', alt: 'Restocked coffee station in the kitchen' },
  { name: 'dining-room', alt: 'Dining table set and ready for guests' },
  { name: 'bedroom-water-view', alt: 'Bedroom with a water view, ready for check-in' },
  { name: 'guest-bedroom', alt: 'Freshly made bed in a guest bedroom' },
  { name: 'bed-detail', alt: 'Made bed with red accent pillows and fresh roses' },
];

export const carouselImages: CarouselImage[] = photos.map(({ name, alt }) => ({
  src: `/images/carousel/${name}-800.webp`,
  srcSet: `/images/carousel/${name}-800.webp 800w, /images/carousel/${name}-1600.webp 1600w`,
  alt,
}));
