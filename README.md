# zBesh Tech Inc. Website

Corporate website for zBesh Tech Inc. - a software company focused on building feedback systems for complex, real-world domains.

## About

zBesh Tech designs tools that make invisible systems visible by transforming complex signals into clear feedback. The company's flagship product, [YesCoach](https://yescoach.fit), is a training intelligence platform that helps people understand how their body adapts over time...

## Tech Stack

- **Framework**: Next.js 16.0.10 (App Router)
- **React**: 19.2.0
- **Styling**: TailwindCSS 4.1.9
- **UI Components**: Radix UI
- **Animations**: Framer Motion 12.29.2
- **Icons**: Lucide React
- **Form Handling**: React Hook Form + Zod
- **Analytics**: Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 20 or higher
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

### Linting

```bash
npm run lint
```

## Project Structure

```
.
├── app/
│   ├── api/          # API routes
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Homepage
├── components/
│   ├── ui/           # Reusable UI components
│   ├── contact-form.tsx
│   └── theme-provider.tsx
├── lib/              # Utility functions
└── public/           # Static assets
```

## Deployment

This project is deployed on Vercel with automatic deployments via GitHub integration.

## CI/CD

GitHub Actions workflow runs on every push and pull request to `main`:
- Dependency installation
- Linting checks
- Production build verification

## License

© 2026 zBesh Tech Inc. All rights reserved.
