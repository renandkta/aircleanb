# Fotos do carrossel

Cada foto existe em duas larguras, `<nome>-800.webp` e `<nome>-1600.webp`, em proporção 4:3.
O celular baixa só a de 800 px, e só a foto que está na tela.

Para adicionar uma foto:

1. Exporte as duas larguras em WebP (qualidade ~75) com um nome descritivo, por exemplo `bathroom-800.webp` e `bathroom-1600.webp`.
2. Coloque os dois arquivos nesta pasta.
3. Adicione `{ name: 'bathroom', alt: 'Descrição real da foto' }` à lista em `src/utils/carouselLoader.ts`.

Não use HEIC (os navegadores não exibem) nem fotos direto da câmera (5 MB ou mais cada).
