// Utilitário para carregar imagens do carrossel dinamicamente
// Como as imagens estão na pasta `public/images/carousel`, o Vite as serve
// diretamente a partir de `/images/carousel/...`. Em vez de usar import.meta.glob
// (que funciona melhor com arquivos em `src`), usamos uma lista explícita.
export const loadCarouselImages = async (): Promise<Array<{ src: string; alt: string; title?: string }>> => {
  const filenames = [
    '7IV01509.jpeg',
    '7IV01514.jpeg',
    'IMG_1022.jpeg',
    'IMG_1228.jpeg',
    'IMG_1239.jpeg',
    'IMG_1278.jpeg',
    'IMG_3619.jpeg',
    'IMG_7406.jpg',
    'IMG_7448.jpg',
  ];

  const images = filenames.map((filename, index) => ({
    src: `/images/carousel/${filename}`,
    alt: `Cleaning service photo ${filename}`,
    title: `Serviço de Limpeza ${index + 1}`,
  }));

  // Mantém a assinatura async utilizada em MainPage.tsx
  return Promise.resolve(images);
};