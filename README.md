# Annapinkerman.com - Site de Aniversário de 15 Anos

Este é o repositório oficial para o site de 15 anos da Anna Pinkerman, um convite digital e uma plataforma interativa para os convidados da festa.

## 🎉 Sobre o Projeto

O site segue o tema **"Paris Floral"**, combinando a elegância e o romance de Paris com a delicadeza e a beleza das flores. A experiência do usuário deve ser sofisticada, limpa e imersiva.

**Data da Festa:** 06 de Setembro de 2025, às 18:00

---

## 🎨 Design System

### Paleta de Cores

- **Primária (Fundo):** Branco (`#FFFFFF` ou `#FFF8F8` para um tom levemente aquecido)
- **Secundária (Destaques):** Rosa Claro (`#FADADD` ou um tom similar)
- **Texto Principal:** Cinza Escuro (`#333333`) para legibilidade
- **Texto de Destaque/Caligrafia:** Um tom de rosa mais forte ou cinza

### Tipografia

- **Fonte de Títulos e Nomes (Ex: "Anna Pinkerman"):**
  - **Estilo:** Script / Caligrafia Formal
  - **Fonte Sugerida (Google Fonts):** `Great Vibes`
  - **Peso:** Regular (400)
- **Fonte de Corpo de Texto (Parágrafos, menus):**
  - **Estilo:** Sans-serif, limpa e moderna
  - **Fonte Sugerida (Google Fonts):** `Inter` ou `Montserrat`
  - **Peso:** Regular (400) e Medium (500)

---

## 🏗️ Estrutura do Site

O site será uma Single Page Application (SPA) com seções bem definidas, navegáveis através do menu superior.

### Menu de Navegação

- **Home:** Aterrissagem inicial com contagem regressiva e vídeo
- **About Me:** Uma pequena biografia ou mensagem da Anna
- **Party:** Detalhes da festa (local, mapa, dress code)
- **Messages:** Mural de depoimentos enviados pelos convidados
- **Photos:** Galeria de fotos do ensaio pré-aniversário
- **Real Time Photos:** Galeria especial que será atualizada em tempo real durante a festa

### Estrutura da Página Principal (Home)

1. **Header:** Menu de navegação fixo no topo
2. **Nome da Aniversariante:** "Anna Pinkerman" em destaque com a fonte `Great Vibes`
3. **Contagem Regressiva:** Um relógio dinâmico contando os dias, horas, minutos e segundos até **06 de Setembro de 2025, às 18:00**
4. **Vídeo de Apresentação:** Seção com um vídeo vertical da Anna

---

## 🚀 Stack de Tecnologias

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Estilização:** Tailwind CSS
- **Ícones:** Lucide React
- **Backend & Armazenamento:** Supabase (planejado)
- **Hospedagem:** Vercel (planejado)
- **Editor IA:** Cursor
- **Assistente IA:** Gemini CLI

---

## 🏁 Como Iniciar o Projeto Localmente

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/dkapture1/Annapinkerman-site.git
   cd Annapinkerman-site
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Rode o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Abra [http://localhost:5173](http://localhost:5173) no seu navegador**

---

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Verificação de código

---

## 📁 Estrutura do Projeto

```
Annapinkerman-site/
├── public/
│   └── images/              # Imagens do site
├── src/
│   ├── components/          # Componentes React
│   ├── utils/              # Utilitários
│   ├── App.tsx             # Componente principal
│   └── main.tsx            # Ponto de entrada
├── tailwind.config.js       # Configuração do Tailwind
└── vite.config.ts          # Configuração do Vite
```

---

## 🎯 Próximos Passos

1. **Configuração do Design System**
   - Implementar paleta de cores
   - Configurar fontes Google Fonts
   - Criar componentes base

2. **Desenvolvimento das Seções**
   - Header com navegação
   - Hero com contagem regressiva
   - Seção "About Me"
   - Detalhes da festa
   - Sistema de mensagens
   - Galerias de fotos

3. **Integração com Backend**
   - Configurar Supabase
   - Sistema de mensagens em tempo real
   - Upload de fotos durante a festa

4. **Deploy e Hospedagem**
   - Configurar Vercel
   - Domínio personalizado
   - SSL e otimizações

---

## 📝 Licença

Este projeto está sob a licença MIT.

---

## 👥 Contribuição

Este é um projeto pessoal para o aniversário de 15 anos da Anna Pinkerman. Para contribuições ou sugestões, entre em contato através do repositório.

---

**✨ Que a magia de Paris e a beleza das flores inspirem este site especial! ✨**
