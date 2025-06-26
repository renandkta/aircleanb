// Utilitário para carregar imagens do carrossel dinamicamente
export const loadCarouselImages = async (): Promise<Array<{src: string, alt: string, title?: string}>> => {
  // Lista de imagens suportadas (formato web)
  const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  // Lista atual de imagens na pasta carousel
  const imageFiles = [
    'IMG_7406.jpg',
    'IMG_7431-2.jpg', 
    'IMG_7448.jpg',
    'IMG_3619.jpeg'
  ];

  // Filtra apenas imagens com extensões suportadas
  const validImages = imageFiles.filter(filename => {
    const ext = filename.toLowerCase().substring(filename.lastIndexOf('.'));
    return supportedExtensions.includes(ext);
  });

  // Mapeia as imagens para o formato do carrossel
  return validImages.map((filename, index) => ({
    src: `/images/carousel/${filename}`,
    alt: `Imagem de limpeza ${index + 1}`,
    title: `Cleaning Service ${index + 1}`
  }));
};

// Função para adicionar uma nova imagem ao carrossel
export const addImageToCarousel = (filename: string): void => {
  // Esta função pode ser expandida para adicionar imagens dinamicamente
  console.log(`Nova imagem adicionada: ${filename}`);
};

// Função para remover uma imagem do carrossel
export const removeImageFromCarousel = (filename: string): void => {
  // Esta função pode ser expandida para remover imagens dinamicamente
  console.log(`Imagem removida: ${filename}`);
}; 