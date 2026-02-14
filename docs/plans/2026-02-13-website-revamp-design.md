# zBesh Tech Website Revamp - Design Document

## Overview

Full visual overhaul of zbeshtech.com to align with the brand identity defined in id.md. Dark-first design system with teal signal accents, structured typography, and refined copy.

## Color System

### Dark Mode (Default)

| Layer | Purpose | Hex |
|-------|---------|-----|
| Base | Background | #0F1115 |
| Surface | Cards, panels | #1E2430 |
| Signal | Primary accent, CTAs, glows | #00D1C1 |
| Warning | Alerts, attention | #F4B942 |
| Text Primary | Headings, body | #E6EDF3 |
| Text Secondary | Captions, muted | #9BA3AF |
| Border | Subtle dividers | #2A3040 |

### Light Mode

- Background: #FAFBFC
- Surface: #F0F2F5
- Signal: #00D1C1 (slightly darkened for contrast)
- Text: Dark charcoal
- Same hierarchy, inverted luminance

### Principle

Background = calm. Structure = clean. Signal = glow. Nothing screams.

## Typography

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| Headings | Space Grotesk | 700 | H1-H3, section titles |
| Body | Inter | 400/500 | Paragraphs, descriptions |
| Technical | JetBrains Mono | 400 | Nav labels, tags, mono accents |

### Scale

- Hero H1: text-5xl lg:text-7xl
- Section H2: text-3xl lg:text-4xl
- Body: text-lg, leading-relaxed
- Mono labels: text-sm, uppercase, tracked

## Page Structure

### 1. Navigation
Fixed top, backdrop blur on dark. Links: About / What We Do / YesCoach / Contact

### 2. Hero
- Tagline (mono): "Modeling systems. Synthesizing signals. Enabling decisions."
- H1: "We design the feedback layer that makes complex systems behave."
- Subtitle: "From industrial automation to intelligent software, we structure systems so they see clearly before they act."
- CTAs: [Collaborate with Us] [Explore YesCoach]

### 3. The Problem
- Text-forward section with teal accent line
- Copy from id.md about feedback being unclear

### 4. What We Do
- Replaces old About section
- Grid of surface cards: System boundaries, Measurable state, Signal hierarchy, Feedback pathways, Decision logic
- Closing: "So the system behaves predictably under pressure. Not just in demos. In production."

### 5. Where We Apply It
- Two-column layout
- Industrial Automation & Machine Vision
- Intelligent & Software-Defined Systems

### 6. YesCoach Spotlight
- Tag: "Applied Example"
- Refined copy about feedback-driven performance system
- Link to yescoach.fit

### 7. Contact
- Same form, styled to new palette

### 8. Footer
- Minimal: brand, tagline, nav links, copyright

## Removed

- Old About section (redundant with What We Do)
- Signal flow diagram (gimmicky, copy communicates concept better)
- ~40 unused shadcn/ui components

## Interaction & Animation

- Navigation: slide-down on load, backdrop blur
- Hero: fade-in stagger with clean eases
- Sections: fade-up on scroll into view, once: true
- Cards: slight scale + teal border glow on hover
- CTA buttons: teal fill primary, teal glow outline on hover
- No gratuitous animation, every motion has purpose

## Decisions

- Dark-only default with light mode support
- Font choices: Space Grotesk / Inter / JetBrains Mono
- Copy: id.md as base, edited for redundancy
- Full overhaul approach (not incremental reskin)
