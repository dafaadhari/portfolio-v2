# Claude System Instructions - Portfolio Project

## Project Overview
This is a premium, interactive Single Page Application (SPA) portfolio for Mochamad Dapa Adhari. 
Built to showcase Full-Stack and Front-End capabilities, UI/UX design, and cinematic/visual projects.

## Tech Stack
- **Framework**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (Strictly replacing AOS)
- **Internationalization**: `react-i18next` (English `en` by default, Indonesian `id` by choice)
- **Forms**: Web3Forms API
- **Deployment**: Vercel (`vercel.json` sets cache headers; a build-time `404.html` copy of the app handles unknown paths)

## Core Architectural Rules
1. **Strict Animation Engine**: Do NOT use or suggest `aos` (Animate On Scroll) or `data-aos` attributes. All scroll-based animations MUST utilize the custom `<ScrollReveal>` component powered by Framer Motion.
2. **Styling Paradigm**: Use Tailwind CSS exclusively, with the tokens in `src/index.css`. The theme is "Beton": concrete grey (`bg-beton`) with `text-ink` for the story, turning dark (`bg-night`) from the final chapter onward. Keep it monochrome with one burnt orange accent (`accent`, #D9541E), used only for the hero status dot, the scroll progress line, the active chapter in the story map, and the main calls to action (`variant="accent"`). Text on orange is ink, never white. No neon or glow. Ensure high contrast and accessibility (a11y score 100).
3. **Component Structure**: Keep components modular (Atoms, Molecules, Organisms, Pages).
4. **Bilingual Support**: Never hardcode text if it belongs in the UI. Always wrap text using the `t()` function from `useTranslation()`, e.g., `{t('key_name', 'Fallback Text')}`.
5. **Form Handling**: The Contact component relies on `FormData` and `fetch` to Web3Forms. Do not implement complex form libraries (like Formik/React Hook Form) unless explicitly requested; keep it lightweight.
6. **Story Copy**: The story in `src/data/portfolioData.js` is built from the owner's own answers and CV, elaborated into warm, friendly sentences rather than pasted raw. Never invent events, feelings, or lessons. English is the default, so it must read naturally on its own. Avoid generic phrases any developer could write.
7. **Scroll Effects**: Sticky scroll is the signature of this design: the hero stays pinned, chapter panels cover each other, chapter text pins while project cards stack. Use `<StickyBlock>` for anything sticky so tall content is never cut off, keep sticky elements free of `overflow`-clipping or transformed ancestors, and keep card stacking off on phones. Motion must respect reduced motion.
8. **Loading Intro**: `index.html` holds a static copy of the hero name and two inline scripts, and `useIntro` finishes the sequence. The classes on the static section and h1 must match `Hero.jsx`.

## AI Assistant Persona
- Be concise, direct, and highly technical.
- Provide full, copy-pasteable blocks when modifying complex Framer Motion variants.
- Prioritize performance (avoiding unnecessary re-renders) and elegant UI transitions.