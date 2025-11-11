// Utilitário para carregar imagens do carrossel dinamicamente
export const loadCarouselImages = async (): Promise<Array<{src: string, alt: string, title?: string}>> => {
  // Use import.meta.glob para importar dinamicamente as imagens do diretório público.
  // Este é um recurso do Vite que cria um mapa de caminhos de imagem em tempo de compilação.
  const imageModules = import.meta.glob('/public/images/carousel/**/*.{jpeg,jpg,png,webp}', { eager: true, as: 'url' });

  // imageModules é um objeto onde as chaves são os caminhos dos arquivos e os valores são as URLs públicas.
  // Ex: { '/public/images/carousel/foto.jpg': '/images/carousel/foto.jpg' }

  const images = Object.entries(imageModules).map(([path, src], index) => {
    const filename = path.substring(path.lastIndexOf('/') + 1);

    return {
      src: src,
      alt: `Imagem de limpeza ${filename}`,
      title: `Serviço de Limpeza ${index + 1}`
    };
  });

  // A função deve retornar uma Promise para ser compatível com a forma como é chamada no MainPage.tsx
  return Promise.resolve(images);
};