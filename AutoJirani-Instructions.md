# AutoJirani — Gemini CLI + Next.js + shadcn Setup Guide

This guide helps you set up a polished, animated, high‑end website for **AutoJirani**, a Kenyan‑centric car sourcing and car rental service.

## 1. Create the Next.js project
```bash
npx create-next-app autojirani --ts --eslint --tailwind
cd autojirani
```

## 2. Install shadcn/ui
```bash
npx shadcn-ui@latest init
```

Install components:
```bash
npx shadcn-ui@latest add button card input textarea accordion navigation-menu
```

## 3. Install Framer Motion
```bash
npm install framer-motion
```

## 4. Install Gemini CLI
```bash
npm install -g @google/generative-ai-cli
gcli auth login
```

## 5. Use Gemini to generate components
Example:
```bash
gcli prompt "Generate a hero section for AutoJirani in Next.js using shadcn and Tailwind"
```

## 6. Recommended Color Palette (Kenyan‑inspired)
- Primary: `#047857` (Emerald green)
- Accent: `#F59E0B` (Warm gold)
- Neutral Dark: `#0B0F0E`
- Neutral Light: `#F1F5F4`

## 7. Folder Structure
- `/components/ui`
- `/components/sections`
- `/app/(site)/page.tsx`

## 8. Deployment
```bash
npm run build
npm run start
```

Host on Vercel for best experience.

---

This file is a starter version. You can ask ChatGPT to expand any section.
