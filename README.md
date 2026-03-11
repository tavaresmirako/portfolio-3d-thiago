# Thiago Tavares — Portfólio

Portfólio profissional desenvolvido em React + TypeScript para apresentar o trabalho de **Thiago Tavares**, com foco em animações fluidas, layout responsivo em dark mode e storytelling visual inspirado no motion design do vídeo [DIWHEBatL2E](https://www.instagram.com/p/DIWHEBatL2E/).

## ✨ Destaques

- **Hero animado** com efeito de digitação, fundo com parallax sutil e CTA duplo (projetos + download de CV).
- **Sobre mim** inspirado nas informações públicas do [GitHub](https://github.com/tavaresmirako) e descrições do LinkedIn de Yan Chapetta.
- **Projetos em destaque** com cards animados, tech badges, links para repositório e demos reais.
- **Grade de habilidades** com ícones oficiais, níveis de domínio visualizados e trilha complementar de estudos.
- **Feedbacks placeholder** para depoimentos e seções categorizadas de projetos (Desafios, Pessoais, Profissionais).
- **Botão de WhatsApp flutuante** sempre visível, com animação discreta e acessível.
- **Contato por WhatsApp** com botão pulsante pronto para abrir conversa direta.

## 🛠️ Stack Principal

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [lucide-react](https://lucide.dev/) + [clsx](https://github.com/lukeed/clsx)

## 📂 Estrutura de pastas

```
src/
├── assets/           # Ícones e mídias auxiliares
├── components/       # Componentes reutilizáveis (nav, cards, UI)
├── sections/         # Seções da página (Hero, Sobre, Projetos, etc.)
├── styles/           # Estilos globais e tokens utilitários
├── types/            # Tipagens compartilhadas
├── utils/            # Conteúdos estáticos e helpers de animação
├── App.tsx           # Entry point da aplicação
└── main.tsx          # Bootstrap do React + estilos globais
```

## 🚀 Como rodar o projeto

> Pré-requisitos: Node.js 18+, npm 9+.

```bash
# Instale as dependências
npm install

# Ambiente de desenvolvimento com HMR
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## 📌 Conteúdo dinâmico

- **Sobre mim**: resumo adaptado do que Thiago compartilha publicamente em seu GitHub e LinkedIn (foco em React/TypeScript, Node/Prisma, automações e experiência com design).
- **Projetos**: dados reais dos repositórios públicos `tavaresmirako`, `todoList-app`, `code-beats` e `movieflix-api`.
- **WhatsApp**: link configurado como placeholder (`https://wa.me/5599999999999`). Atualize para o número oficial antes do deploy.
- **Currículo**: arquivo `public/yan-chapetta-cv.pdf` é um placeholder. Substitua pelo PDF definitivo.

## 🧪 Boas práticas aplicadas

- Componentização com tipagens fortes (`src/types`).
- Variantes reutilizáveis de animação (`src/utils/motion`).
- Dados centralizados em `src/utils/content.ts` para facilitar manutenção.
- Layout responsivo, tema dark e microinterações inspiradas em motion design (Framer Motion com `whileInView`).
- Botão flutuante do WhatsApp com animação spring e acessibilidade (`aria-label`).
- Build validado com `npm run build`.

## 📄 Licença e créditos

Projeto criado como showcase pessoal. As imagens e descrições dos projetos pertencem a Yan Chapetta.

---

Caso queira adaptar o conteúdo para outro profissional, basta atualizar `src/utils/content.ts` e as referências de contato. Bons deploys! 🚀
