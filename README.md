# Projeto Família Esperança

Site institucional da Igreja Família Esperança, localizada em Joinville/SC. A aplicação oferece uma presença digital da igreja, com apresentação da identidade, células, redes de relacionamento por faixa etária, canais de contato e formas de contribuição via PIX.

**Acesse:** https://yh1d3k12.github.io/Projeto-Familia-Esperanca/

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura de pastas](#estrutura-de-pastas)
- [Executando localmente](#executando-localmente)
- [Scripts disponíveis](#scripts-disponíveis)
- [Deploy](#deploy)
- [Boas práticas de código](#boas-práticas-de-código)
- [Documentação do projeto](#documentação-do-projeto)

---

## Sobre o projeto

O site foi desenvolvido como uma Single Page Application (SPA) em React, com o objetivo de centralizar as informações institucionais da Igreja Família Esperança e facilitar o primeiro contato de visitantes com a comunidade. A navegação foi pensada para ser simples e acolhedora, cobrindo desde a apresentação da igreja até os meios práticos de engajamento (células, contribuição financeira e contato direto via WhatsApp).

Nesta versão o sistema é composto exclusivamente pelo frontend, publicado no GitHub Pages. Não há backend, banco de dados ou área administrativa. Funcionalidades como inscrição em eventos e cursos são delegadas à plataforma externa oficial da igreja.

---

## Funcionalidades

- **Página inicial** com vídeo institucional, chamada principal, missão e horários das celebrações.
- **Quem Somos** com missão, visão, valores e apresentação dos pastores responsáveis.
- **Faixa Etária** com a lista das redes de relacionamento (Metanoia, Visionárias, Homens de Honra, Shout, Plug e GPS).
- **Células** com a grade de todas as células cadastradas (título, líder, local e tipo) e botão de contato direto com a liderança via WhatsApp.
- **Contribua** com QR Code PIX, dados bancários da igreja e botões de cópia para a área de transferência.
- **Canais externos** no rodapé e menu (WhatsApp, Instagram, Google Maps e plataforma de eventos e cursos).
- **Menu responsivo** com versão hamburger em dispositivos móveis.

---

## Tecnologias

| Tecnologia | Versão | Uso |
|------------|--------|-----|
| [React](https://react.dev/) | 19 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.7 | Tipagem estática |
| [Vite](https://vite.dev/) | 6 | Build e servidor de desenvolvimento |
| [React Router DOM](https://reactrouter.com/) | 7 | Roteamento SPA |
| [React Icons](https://react-icons.github.io/react-icons/) | 5 | Conjunto de ícones |
| [ESLint](https://eslint.org/) | 9 | Padronização de código |
| [gh-pages](https://www.npmjs.com/package/gh-pages) | 6 | Publicação no GitHub Pages |

---

## Estrutura de pastas

```
Projeto-Familia-Esperanca/
├── backend/                    # (reservado para expansões futuras)
└── frontend/
    ├── public/                 # Arquivos estáticos públicos
    ├── src/
    │   ├── App.tsx             # Componente raiz
    │   ├── App.css             # Utilitárias globais
    │   ├── main.tsx            # Ponto de entrada
    │   ├── assets/             # Imagens e vídeo institucional
    │   ├── components/         # Componentes reutilizáveis
    │   │   ├── Layout/
    │   │   ├── Navbar/
    │   │   └── Footer/
    │   ├── pages/              # Páginas da aplicação
    │   │   ├── Home/           # Home e Quem Somos
    │   │   ├── Donate/         # Contribua
    │   │   ├── Ministry/       # Faixa Etária
    │   │   └── Cell/           # Células
    │   └── routes/             # Configuração das rotas
    ├── index.html
    ├── package.json
    ├── tsconfig.json
    └── vite.config.ts
```

Cada página e componente segue o padrão de pasta própria com um arquivo `index.tsx` (ou arquivo nomeado) e o respectivo `styles.css`.

---

## Executando localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) 18 ou superior
- npm (já incluso no Node.js) ou outro gerenciador compatível

### Passos

```bash
# 1. Clonar o repositório
git clone https://github.com/YH1d3k12/Projeto-Familia-Esperanca.git

# 2. Acessar a pasta do frontend
cd Projeto-Familia-Esperanca/frontend

# 3. Instalar as dependências
npm install

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

O Vite exibirá no terminal a URL local (padrão: `http://localhost:5173`).

---

## Scripts disponíveis

Executados a partir da pasta `frontend/`:

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com hot reload |
| `npm run build` | Gera o build de produção (verificação de tipos + Vite build) |
| `npm run preview` | Serve localmente o build de produção para conferência |
| `npm run lint` | Executa o ESLint em todo o projeto |
| `npm run predeploy` | Roda antes do deploy (executa o build) |
| `npm run deploy` | Publica o conteúdo da pasta `dist/` no GitHub Pages |

---

## Deploy

O site está publicado em **https://yh1d3k12.github.io/Projeto-Familia-Esperanca/** por meio do GitHub Pages.

A aplicação está configurada com o `basename="/Projeto-Familia-Esperanca"` no `BrowserRouter` para funcionar corretamente dentro do subpath do GitHub Pages.

Para publicar uma nova versão:

```bash
cd frontend
npm run deploy
```

O script `deploy` executa o `build` e publica a pasta `dist/` na branch `gh-pages` do repositório.

---

## Boas práticas de código

As boas práticas e convenções adotadas no projeto estão documentadas em [`frontend/README.md`](./frontend/README.md), incluindo:

- Ordem de importações (terceiros → serviços → componentes).
- Estrutura padrão de arquivos React.
- Organização de pastas para `components`, `pages` e `routes`.
- Uso de `lazy()` para carregamento assíncrono das páginas.
- Linha em branco ao final de todos os arquivos.

---

## Documentação do projeto

A documentação do projeto está organizada nos seguintes artefatos:

- **Documento de Requisitos** — Especificação dos requisitos funcionais e não funcionais.
- **Diagrama de Casos de Uso** — Visão geral das interações do visitante com o sistema.
- **Casos de Uso** — Descrição textual detalhada de cada caso de uso.
- **Documentação de Código** — Referência de IDs, classes CSS, componentes, funções e hooks utilizados.

---

## Licença

Este projeto é de uso institucional da Igreja Família Esperança.
