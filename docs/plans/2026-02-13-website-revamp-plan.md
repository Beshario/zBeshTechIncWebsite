# Website Revamp Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Full visual overhaul of zbeshtech.com to match the brand identity from id.md — dark-first design, teal signal accents, structured typography, refined copy.

**Architecture:** Single-page Next.js app. Rewrite globals.css with new color palette, add Google Fonts (Space Grotesk, Inter, JetBrains Mono), rewrite page.tsx with new section structure and copy, clean up unused components. Use framer-motion for controlled animations. Use next-themes for dark/light mode with dark default.

**Tech Stack:** Next.js 15, Tailwind CSS v4, shadcn/ui (Button, Card, Input, Textarea only), Framer Motion, next-themes

---

### Task 1: Set Up Fonts

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Add Google Fonts via next/font**

Import Space Grotesk, Inter, and JetBrains Mono using `next/font/google`. Apply Inter as the body default, Space Grotesk as a CSS variable for headings, JetBrains Mono as a CSS variable for mono elements.

**Step 2: Update the `<body>` tag**

Apply the font classes and CSS variables to the body element so Tailwind can reference them.

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no font errors.

---

### Task 2: Overhaul Color System

**Files:**
- Modify: `app/globals.css`

**Step 1: Rewrite CSS custom properties**

Replace both `:root` (light) and `.dark` theme variables with the new palette:

Dark mode (default via `.dark` class):
- background: #0F1115
- foreground/text-primary: #E6EDF3
- card/surface: #1E2430
- card-foreground: #E6EDF3
- muted-foreground: #9BA3AF
- accent/signal: #00D1C1
- border: #2A3040
- ring: #00D1C1
- Add `--signal` custom property for #00D1C1
- Add `--warning` custom property for #F4B942

Light mode (`:root`):
- background: #FAFBFC
- foreground: #1A1D23
- card/surface: #F0F2F5
- card-foreground: #1A1D23
- muted-foreground: #6B7280
- accent/signal: #00B8A9 (slightly darker teal for light bg contrast)
- border: #E2E5EA

**Step 2: Update font-family references**

Change `--font-sans` to reference Inter, add `--font-heading` for Space Grotesk, update `--font-mono` for JetBrains Mono.

**Step 3: Remove sidebar and chart variables**

These are unused. Remove all `--sidebar-*` and `--chart-*` variables.

**Step 4: Remove duplicate `styles/globals.css`**

The file at `styles/globals.css` is not imported anywhere meaningful. Remove it.

**Step 5: Verify build**

Run: `npm run build`
Expected: Build succeeds, no CSS errors.

---

### Task 3: Enable Dark Mode Default

**Files:**
- Modify: `app/layout.tsx`

**Step 1: Wrap children in ThemeProvider**

Import and use the existing `components/theme-provider.tsx` with `attribute="class"`, `defaultTheme="dark"`, and `enableSystem={false}`.

**Step 2: Add `suppressHydrationWarning` to `<html>` tag**

Required by next-themes to avoid hydration mismatch warnings.

**Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds. Page renders with dark background by default.

---

### Task 4: Remove Unused UI Components

**Files:**
- Remove 50+ files from `components/ui/` (keep ONLY: button.tsx, card.tsx, input.tsx, textarea.tsx)
- Remove: `components/ui/use-toast.ts`, `components/ui/use-mobile.tsx`
- Remove: `hooks/use-toast.ts`, `hooks/use-mobile.ts`
- Remove: `styles/globals.css` (duplicate)

**Keep:**
- `components/ui/button.tsx`
- `components/ui/card.tsx`
- `components/ui/input.tsx`
- `components/ui/textarea.tsx`
- `components/contact-form.tsx`
- `components/theme-provider.tsx`
- `lib/utils.ts`

**Step 1: Remove unused component files**

Delete all .tsx files in components/ui/ except button.tsx, card.tsx, input.tsx, textarea.tsx.

**Step 2: Remove unused hooks**

Delete `components/ui/use-toast.ts`, `components/ui/use-mobile.tsx`, `hooks/use-toast.ts`, `hooks/use-mobile.ts`.

**Step 3: Remove duplicate styles file**

Delete `styles/globals.css`.

**Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds with no missing import errors.

---

### Task 5: Rewrite Page — Full Overhaul

**Files:**
- Modify: `app/page.tsx`

**REQUIRED SUB-SKILL:** Use `frontend-design:frontend-design` for creative implementation of this task.

**Step 1: Rewrite the complete page**

Replace the entire page.tsx with the new section structure. Use the frontend-design skill for creative freedom within these constraints:

**Sections (in order):**

1. **Navigation** — Fixed top, backdrop blur, dark bg. Logo "zBesh Tech" in mono. Links: What We Do / YesCoach / Contact.

2. **Hero** — Tagline mono: "Modeling systems. Synthesizing signals. Enabling decisions." H1: "We design the feedback layer that makes complex systems behave." Subtitle from id.md. Two CTAs: "Collaborate with Us" (primary teal), "Explore YesCoach" (outline).

3. **The Problem** — Text-forward. Teal accent line left border. Copy from id.md about systems failing because feedback is unclear. Let the words breathe.

4. **What We Do** — H2. Brief intro. Grid of surface cards with teal dot accents: System boundaries, Measurable state, Signal hierarchy, Feedback pathways, Decision logic. Closing line about production.

5. **Where We Apply It** — Two cards side by side. Industrial Automation & Machine Vision. Intelligent & Software-Defined Systems. Copy from id.md.

6. **YesCoach Spotlight** — "Applied Example" tag. H2 "YesCoach". Copy about feedback-driven performance. Link to yescoach.fit.

7. **Contact** — H2 "Work With zBesh Tech". Existing ContactForm component. YesCoach link below.

8. **Footer** — Minimal. Brand, tagline, nav links, copyright 2026.

**Animation guidelines:**
- Framer Motion fade-up on scroll into view, `once: true`
- Hero: stagger fade-in (tagline → heading → subtitle → CTAs)
- Cards: subtle hover scale + teal border glow
- No infinite loops, no spring bounce
- Clean eases only

**Design guidelines from id.md:**
- Dark system board feel
- Minimal UI, layered blocks
- Signal highlights on hover
- Nothing screams, only feedback glows
- Space Grotesk for headings (`font-heading` class)
- JetBrains Mono for technical labels (`font-mono` class)
- Inter for body text (default `font-sans`)

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors.

---

### Task 6: Style Contact Form

**Files:**
- Modify: `components/contact-form.tsx`

**Step 1: Update form styling**

Align the contact form to the new palette:
- Input/textarea: dark surface background (`bg-card`), teal focus ring
- Labels: soft white text
- Submit button: teal primary
- Success state: teal accent border and text
- Error state: amber warning color

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds.

---

### Task 7: Final Verification & Cleanup

**Step 1: Full build check**

Run: `npm run build`
Expected: Clean build, zero errors, zero warnings.

**Step 2: Check for dead code**

Grep for any remaining imports of deleted components. Fix any broken references.

**Step 3: Dev server visual check**

Run: `npm run dev`
Verify: Dark theme loads by default, all sections render, contact form works, hover interactions work, responsive layout on mobile.
