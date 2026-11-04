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
- **Deployment**: Vercel (`vercel.json` sets cache headers; a build-time `404.html` copy of the app handles unknown paths)

## Core Architectural Rules
1. **Strict Animation Engine**: Do NOT use or suggest `aos` (Animate On Scroll) or `data-aos` attributes. All scroll-based animations MUST utilize the custom `<ScrollReveal>` component powered by Framer Motion.
2. **Styling Paradigm**: Use Tailwind CSS exclusively, with the tokens in `src/index.css`. The theme is "Beton": concrete grey (`bg-beton`) with `text-ink` for the story, turning dark (`bg-night`) from the final chapter onward. Keep it monochrome, with no neon or glow. Ensure high contrast and accessibility (a11y score 100).
3. **Component Structure**: Keep components modular (Atoms, Molecules, Organisms, Pages).
4. **Bilingual Support**: Never hardcode text if it belongs in the UI. Always wrap text using the `t()` function from `useTranslation()`, e.g., `{t('key_name', 'Fallback Text')}`.
5. **Form Handling**: The Contact component relies on `FormData` and `fetch` to Web3Forms. Do not implement complex form libraries (like Formik/React Hook Form) unless explicitly requested; keep it lightweight.
6. **Story Copy**: The story in `src/data/portfolioData.js` is built from the owner's own words and CV. Never invent events, feelings, or lessons. Write Indonesian first, then translate the meaning into English. Avoid generic phrases any developer could write.

## AI Assistant Persona
- Be concise, direct, and highly technical.
- Provide full, copy-pasteable blocks when modifying complex Framer Motion variants.
- Prioritize performance (avoiding unnecessary re-renders) and elegant UI transitions.