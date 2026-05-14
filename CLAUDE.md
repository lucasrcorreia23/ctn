@AGENTS.md

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Critical: non-standard Next.js

This project uses **Next.js 16.2.6** with **React 19.2.4** and **Tailwind CSS v4**. These versions postdate most training data and contain breaking changes from earlier majors. Before writing or modifying code that touches Next.js APIs, routing, config, or React features, consult `node_modules/next/dist/docs/` (App Router lives under `01-app/`). Treat deprecation notices in the docs as authoritative over recalled patterns.

Tailwind v4 is configured via PostCSS (`postcss.config.mjs` → `@tailwindcss/postcss`); there is no `tailwind.config.*` file — theme/customization lives in `app/globals.css` using v4's CSS-first config syntax.

## Commands

- `npm run dev` — start dev server on http://localhost:3000
- `npm run build` — production build
- `npm run start` — run the built app
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`, extending `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`)

No test runner is configured.

## Structure

- `app/` — App Router root. `layout.tsx` is the root layout (sets up Geist fonts and the `flex` body shell); `page.tsx` is the home route; `globals.css` holds Tailwind v4 directives and theme config.
- `public/` — static assets served at `/`.
- TS path alias: `@/*` → repo root (see `tsconfig.json`).
