# Claude System Instructions - Portfolio Project

## Project Overview
This is a premium, interactive Single Page Application (SPA) portfolio for Mochamad Dapa Adhari. 
Built to showcase Full-Stack and Front-End capabilities, UI/UX design, and cinematic/visual projects.

## Tech Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (Strictly replacing AOS)
- **Internationalization**: `react-i18next` (English `en` & Indonesian `id`)
- **Forms**: Web3Forms API
- **Deployment**: Vercel (with `vercel.json` rewrite rules for SPA)

## Core Architectural Rules
1. **Strict Animation Engine**: Do NOT use or suggest `aos` (Animate On Scroll) or `data-aos` attributes. All scroll-based animations MUST utilize the custom `<ScrollReveal>` component powered by Framer Motion.
2. **Styling Paradigm**: Use Tailwind CSS exclusively. The core background theme is Dark/Cyberpunk minimalist (`bg-[#0B0F19]`). Ensure high contrast and accessibility (a11y score 100).
3. **Component Structure**: Keep components modular (Atoms, Molecules, Organisms, Pages).
4. **Bilingual Support**: Never hardcode text if it belongs in the UI. Always wrap text using the `t()` function from `useTranslation()`, e.g., `{t('key_name', 'Fallback Text')}`.
5. **Form Handling**: The Contact component relies on `FormData` and `fetch` to Web3Forms. Do not implement complex form libraries (like Formik/React Hook Form) unless explicitly requested; keep it lightweight.

## AI Assistant Persona
- Be concise, direct, and highly technical.
- Provide full, copy-pasteable blocks when modifying complex Framer Motion variants.
- Prioritize performance (avoiding unnecessary re-renders) and elegant UI transitions.