## AirCleanB – Google Ads Readiness Roadmap

Este documento resume o plano de melhoria para o funil de Google Ads e o estado atual de implementação.  
Ele foi escrito para ser lido por outros AIs (Claude, Gemini, etc.) e por desenvolvedores humanos.

---

### Visão geral do projeto

- **Stack:** React 18 + TypeScript + Vite + Tailwind CSS
- **Routing:** React Router (`BrowserRouter` em `src/main.tsx`, rotas em `src/App.tsx`)
- **Formulário principal:** dentro de `MainPage.tsx` (seção "Schedule an Assessment")
- **Formulário de oferta 50% OFF:** dentro de `PromotionalModal.tsx` + `LeadForm.tsx`
- **Tracking:** `gtag.js` no `index.html` + eventos de conversão no `ThankYou.tsx` e nos callbacks de sucesso dos formulários.

---

### Fase 1 – Fundamentos para Google Ads (Sprint 1) ✅

**Objetivo:** garantir requisitos mínimos de conformidade (política de privacidade), message match básico e evento de conversão funcional.

Implementado:

1. **Title da página alinhado a “Airbnb Cleaning” + DMV**
   - Arquivo: `index.html`
   - Title atual:  
     `AirCleanB - Professional Airbnb Turnover Cleaning in DC, MD & VA`

2. **Hero e above the fold com menção clara à região DMV**
   - Arquivo: `src/components/MainPage.tsx`
   - H1 fala de experiência 5 estrelas para Airbnb; subtítulo logo abaixo menciona explicitamente:  
     `Serving Washington DC, Maryland & Virginia (DMV area) with expert Airbnb turnover cleaning.`

3. **Página de Política de Privacidade + rota dedicada**
   - Componente: `src/components/PrivacyPolicy.tsx`
   - Rota: `/privacy` cadastrada em `src/App.tsx`
   - Footer: link `{t.footer.privacy}` agora aponta para `/privacy` (antes era `href="#"`).

4. **Depoimentos/prova social visíveis na landing principal**
   - Arquivo: `src/components/MainPage.tsx`
   - Nova seção `Testimonials` entre “Benefits” e o formulário, usando 4 depoimentos reais que antes estavam apenas no modal.

5. **Correção do carrossel de imagens (avisos do Vite)**
   - Arquivo: `src/utils/carouselLoader.ts`
   - Substituição do `import.meta.glob` em `/public/...` por uma lista explícita de arquivos servidos em `/images/carousel/...`.
   - Mantida a UI do carrossel em `ImageCarousel.tsx`.

6. **Evento de conversão funcionando de forma robusta**
   - Arquivo: `src/components/ThankYou.tsx`  
     - `useEffect` dispara `window.gtag('event', 'conversion', { send_to: 'AW-17464291569/lBYMCJ-s3b8bEPHhz4dB' })` ao montar a página `/thank-you`.
   - Arquivo: `src/components/MainPage.tsx`  
     - Em `useEffect` que observa `state.succeeded` do formulário principal:  
       - Log de debug (para esta sessão).  
       - Disparo adicional de `gtag('event','conversion', ...)` antes de `navigate('/thank-you')`.
   - Arquivo: `src/components/LeadForm.tsx`  
     - Em `useEffect` que observa `state.succeeded` do formulário do modal:  
       - Log de debug.  
       - Disparo adicional de `gtag('event','conversion', ...)` antes de `navigate('/thank-you')`.

---

### Fase 2 – Conversão & SPA Tracking (Sprint 2) ✅

**Objetivo:** reduzir fricção no mobile, melhorar a qualidade dos dados enviados e garantir tracking de pageview em SPA.

Implementado:

1. **Formulário principal mais enxuto (melhor para mobile)**
   - Arquivo: `src/components/MainPage.tsx`, seção `Schedule` (formulário principal).
   - Campos visíveis atualmente:
     - `Name` (obrigatório)
     - `Email` (obrigatório)
     - `Phone` (obrigatório, com máscara)
     - `Notes` (opcional)
   - Campos que existiam e foram removidos da UI (comentados como decisão de UX):
     - `Date`, `Time`, `Property Type`  
   - A validação e o payload seguem focados nos 3 obrigatórios + notas.

2. **Selects com opção vazia (quando usados)**
   - Ainda existem opções no código para `time` e `propertyType`, caso sejam reintroduzidos.  
   - Quando exibidos, agora começam com `<option value="">Select...</option>` para evitar dados “default” não intencionais.

3. **Tracking de pageview em navegações SPA**
   - Arquivo: `src/App.tsx`
   - Usa `useLocation` e `useEffect` para chamar:
     ```ts
     gtag('config', 'AW-17464291569', {
       page_path: location.pathname + location.search,
     });
     ```
   - Isso garante pageview para:
     - `/`
     - `/thank-you`
     - `/privacy`
     - `/about`
     - `/services`
     - `/pricing`

4. **Hero copy em inglês focada em Airbnb + DMV**
   - Arquivo: `src/translations.ts`, chave `translations.en.hero`:
     - `title`: `"Airbnb Turnover Cleaning in DC, MD & VA"`
     - `subtitle`: `"Fast, reliable turnovers and deep cleans for Airbnb and short-term rentals across the DMV."`

---

### Fase 3 – Estrutura para Sitelink Extensions (Sprint 3) ✅

**Objetivo:** criar páginas dedicadas para usar como sitelinks em Google Ads e melhorar a narrativa de confiança.

Implementado:

1. **Página /about**
   - Componente: `src/components/About.tsx`
   - Rota: `/about` em `src/App.tsx`
   - Conteúdo:
     - Quem é a AirCleanB, foco em Airbnb/short-term rentals.
     - Descrição da área de atendimento (DC, Northern VA, MD, partes de Baltimore).
     - Razões para hosts escolherem a empresa.
     - Contatos (email e telefone).

2. **Página /services**
   - Componente: `src/components/ServicesPage.tsx`
   - Rota: `/services` em `src/App.tsx`
   - Conteúdo:
     - Cards para:
       - Turnover Cleaning
       - Deep Clean Reset
       - Photo & Issue Reporting
     - Seção final explicando encaixe para hosts/co-hosts e contato para plano customizado.

3. **Página /pricing**
   - Componente: `src/components/PricingPage.tsx`
   - Rota: `/pricing` em `src/App.tsx`
   - Conteúdo:
     - Faixas de preço típicas (não valores exatos), pensadas para transparência:
       - Standard Turnover: `$90–$140`
       - Deep Clean Reset: `$180–$260`
       - Multi–Unit / Custom: “Custom”
     - Seção “Next Steps” orientando a usar o formulário da home ou contato direto para orçamento exato.

4. **Links para essas páginas no footer (descoberta + UX)**
   - Arquivo: `src/components/MainPage.tsx`, footer:
     - Nova coluna “Company” com links:
       - `/about`
       - `/services`
       - `/pricing`

---

### Fase 4 – Landing dedicada para Google Ads (Sprint 4) ✅

**Objetivo:** criar uma URL final específica para anúncios de Google Ads, 100% focada em “Airbnb Turnover Cleaning in DC, MD & VA”, com formulário acima da dobra e narrativa mais direta para hosts.

Implementado:

1. **Nova landing `/airbnb-cleaning`**
   - Componente: `src/components/AirbnbCleaningLanding.tsx`
   - Rota: `/airbnb-cleaning` registrada em `src/App.tsx`
   - Características principais:
     - Header simples com `Logo` e navegação curta (How it works, Benefits, Get a quote).
     - **Hero section** com:
       - H1: “Airbnb Turnover Cleaning in DC, MD & VA”.
       - Subcopy explicando foco em turnovers e Deep Clean Resets para o DMV.
       - Bullets com benefícios imediatos (guest-ready, Deep Clean Reset, photo proof).
       - Botão “Get my cleaning quote” que faz scroll suave para o formulário.
       - Carrossel de imagens reutilizando `ImageCarousel` + `loadCarouselImages` (apenas em telas desktop).
     - Seção “How it works” resumida em 3 passos (Free assessment, Deep Clean Reset opcional, Ongoing turnovers).
     - Seção “Benefits” focada em busy hosts (menos stress, mais reviews 5★, paz de espírito remota).
     - **Formulário acima da dobra “estendida”**:
       - Seção `Tell us about your Airbnb` com ID `airbnb-cleaning-form`.
       - Usa o componente existente `LeadForm` dentro de um card branco.
       - Continua integrado ao Formspree e ao fluxo de conversão já configurado.

---

### Débitos técnicos e próximos passos sugeridos

Estes itens NÃO foram implementados ainda e podem compor as próximas sprints:

1. **Otimização de imagens (performance mobile)**  
   - Arquivos pesados:
     - `src/assets/logo.png` e `public/logo.png` (~1.7MB cada).
     - Imagens JPEG/JPG do carrossel sem compressão agressiva.
   - Ações sugeridas:
     - Comprimir logo para `<100KB` ou migrar para SVG.
     - Converter imagens principais para WebP (mantendo fallback quando necessário).
     - Avaliar lazy–loading explícito em imagens abaixo da dobra.

2. **Landing dedicada /airbnb-cleaning**  
   - Objetivo: URL final específica para Google Ads, 100% focada em “Airbnb Turnover Cleaning in DC, MD & VA”.
   - Sugestão:
     - Nova rota `/airbnb-cleaning` com:
       - Hero ainda mais direto.
       - Depoimentos.
       - Lista curta de benefícios.
       - Formulário ainda mais enxuto.

3. **Integração com Google Business Profile e provas sociais adicionais**
   - Quando o perfil estiver disponível:
     - Adicionar link visível (ex: “See our reviews on Google”).
   - Criar seção “Service Areas” mais destacada, possivelmente na `/about` ou na landing dedicada.

4. **Refinamento de tracking / eventos**
   - Hoje:
     - Conversão é disparada no mount de `/thank-you` e nos callbacks de sucesso dos formulários.
   - Possível refinamento:
     - Consolidar a lógica de conversão num único lugar (por exemplo, hook customizado) e remover logs de debug temporários quando não forem mais necessários.

---

### Boas práticas de versionamento recomendadas

Para futuros commits neste repositório:

- **Granularidade:**
  - Prefira commits pequenos e temáticos (ex.: “feat: add /about, /services and /pricing pages” separado de “chore: update audit roadmap”).
- **Mensagens de commit sugeridas:**
  - `feat: implement privacy policy page and route`
  - `feat: add SPA pageview tracking for Google Ads`
  - `feat: create about/services/pricing pages for sitelinks`
  - `docs: update AUDIT_ROADMAP with sprint status`
- **Branches:**
  - Para grandes mudanças, usar branches do tipo `feature/google-ads-landing` ou `feature/perf-images`.
- **Lint e build:**
  - Rodar `npm run lint` e `npm run build` antes de merges importantes.

---

Se você é um AI (Claude, Gemini, etc.) assumindo este projeto:

1. Leia este `AUDIT_ROADMAP.md` por completo antes de sugerir grandes mudanças.
2. Respeite as decisões já tomadas nas sprints anteriores (especialmente relacionadas a Google Ads).
3. Quando for implementar novas fases, atualize este arquivo na mesma PR/commit para manter o histórico claro.

