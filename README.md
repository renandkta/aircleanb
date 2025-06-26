# AirCleanB - Site de Limpeza Profissional

Site profissional para serviços de limpeza, desenvolvido com React, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Carrossel de Imagens Dinâmico**: Exibe automaticamente as imagens da pasta `public/images/carousel/`
- **Design Responsivo**: Otimizado para desktop, tablet e mobile
- **Multi-idioma**: Suporte para Português, Inglês e Espanhol
- **Formulário de Contato**: Integrado com Formspree
- **Deploy Automático**: GitHub Actions + GitHub Pages

## 🛠️ Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React (ícones)

## 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/renandkta/aircleanb.git
cd aircleanb

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev
```

## 🖼️ Gerenciamento de Imagens do Carrossel

### Adicionar novas imagens:
1. Adicione a imagem na pasta `public/images/carousel/`
2. Use formatos: `.jpg`, `.jpeg`, `.png`, `.webp`
3. Atualize a lista em `src/utils/carouselLoader.ts`

### Remover imagens:
1. Delete a imagem da pasta
2. Remova o nome do arquivo da lista em `src/utils/carouselLoader.ts`

## 🚀 Deploy

O site é automaticamente deployado no GitHub Pages quando há push para a branch `main`.

**URL de Produção**: https://renandkta.github.io/aircleanb/

## 📁 Estrutura do Projeto

```
aircleanb/
├── public/
│   └── images/carousel/     # Imagens do carrossel
├── src/
│   ├── components/          # Componentes React
│   ├── utils/              # Utilitários
│   └── App.tsx             # Componente principal
└── .github/workflows/      # GitHub Actions
```

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Verificação de código

## 📝 Licença

Este projeto está sob a licença MIT.
