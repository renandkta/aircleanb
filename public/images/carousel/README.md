# Fotos do Carrossel

Esta pasta é destinada para armazenar as imagens que serão exibidas no carrossel da página principal.

## Como usar:

1. **Adicione suas imagens** nesta pasta
2. **Formatos suportados**: JPG, PNG, WebP
3. **Tamanho recomendado**: 800x600px ou proporção 4:3
4. **Tamanho do arquivo**: Recomendado até 500KB por imagem para melhor performance

## Estrutura sugerida para as imagens:

```
carousel/
├── cozinha-limpa.jpg
├── banheiro-limpo.jpg
├── sala-estar.jpg
├── quarto-organizado.jpg
└── area-trabalho.jpg
```

## Para atualizar o carrossel:

Após adicionar as imagens, atualize o array `carouselImages` no arquivo `src/App.tsx` com os novos caminhos:

```javascript
const carouselImages = [
  {
    src: "/images/carousel/sua-imagem.jpg",
    alt: "Descrição da imagem",
    title: "Título da imagem"
  },
  // ... mais imagens
];
```

## Dicas:

- Use nomes descritivos para os arquivos
- Otimize as imagens antes de adicionar (compressão)
- Mantenha proporções consistentes para melhor visualização 

# Gerenciamento de Imagens do Carrossel

## Como adicionar novas imagens:

1. **Adicione a imagem** nesta pasta (`public/images/carousel/`)
2. **Use formatos suportados**: `.jpg`, `.jpeg`, `.png`, `.webp`
3. **Atualize o arquivo** `src/utils/carouselLoader.ts` adicionando o nome do arquivo na lista `imageFiles`

## Como remover imagens:

1. **Delete a imagem** desta pasta
2. **Remova o nome do arquivo** da lista `imageFiles` em `src/utils/carouselLoader.ts`

## Exemplo de atualização:

```typescript
// Em src/utils/carouselLoader.ts
const imageFiles = [
  'IMG_7406.jpg',
  'IMG_7431-2.jpg', 
  'IMG_7448.jpg',
  'img banheirp.jpg',
  'IMG_3619.jpeg',
  'NOVA_IMAGEM.jpg'  // ← Adicione aqui
];
```

## Formatos suportados:
- ✅ JPG/JPEG
- ✅ PNG  
- ✅ WebP
- ❌ HEIC (não suportado pelos navegadores)

## Dicas:
- Use nomes descritivos para os arquivos
- Mantenha as imagens otimizadas para web (tamanho recomendado: < 1MB)
- O carrossel será atualizado automaticamente após salvar as mudanças 