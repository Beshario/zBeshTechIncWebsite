'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Menu, X, Sun, Moon } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const sectionTransition = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
}

const navLinks = [
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'What We Do', href: '#what-we-do' },
  { label: 'YesCoach', href: '#yescoach' },
  { label: 'Contact', href: '#contact' },
]

const capabilities = [
  {
    title: 'Understand Their Own State',
    description: 'Systems that can observe and report what is happening internally.',
  },
  {
    title: 'Distinguish Signal from Noise',
    description: 'Prioritize what matters and filter what does not.',
  },
  {
    title: 'Translate Information into Decisions',
    description: 'Convert structured signals into consistent, deterministic actions.',
  },
  {
    title: 'Remain Predictable Under Complexity',
    description: 'Behave reliably as scale and complexity increase.',
  },
]

const yescoachFeatures = [
  'Muscle heatmaps and adaptation signals',
  'Weekly and monthly training feedback',
  'Clear insightful trends',
  'Designed for real-time feedback and introspection',
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-border focus:rounded"
      >
        Skip to content
      </a>

      {/* ── Navigation ── */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-mono text-lg font-semibold tracking-tight text-foreground">
              zBesh Tech
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              {mounted && (
                <button
                  type="button"
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label="Toggle theme"
                >
                  {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </button>
              )}
            </div>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="md:hidden border-t border-border bg-background/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                {mounted && (
                  <button
                    type="button"
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    {theme === 'dark' ? 'Light mode' : 'Dark mode'}
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main id="main-content">
      {/* ── Hero ── */}
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-sm font-mono text-accent mb-6 tracking-wide"
            >
              Designing feedback-driven intelligent systems.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
              className="font-heading text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance text-foreground"
            >
              We structure how complex software and data-driven platforms observe state, process signals, and guide decisions.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
              className="text-lg lg:text-xl text-muted-foreground mb-10 leading-relaxed text-pretty max-w-2xl"
            >
              From industrial environments to modern applications, we bring systems discipline to intelligent software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="font-medium" asChild>
                <Link href="#contact">Collaborate with Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="font-medium bg-transparent" asChild>
                <Link href="#yescoach">
                  Explore YesCoach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who We Are ── */}
      <section id="who-we-are" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={sectionTransition}
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-3xl border-l-2 border-accent pl-8 lg:pl-12"
          >
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-8 text-foreground">
              Who We Are
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-foreground font-medium text-xl">
                zBesh Tech is a software and systems design studio.
              </p>
              <p>
                We focus on how intelligent systems sense, interpret, and respond.
              </p>
              <p>
                As systems grow in complexity — especially with AI and automation — behavior becomes harder to predict.
              </p>
              <p className="text-foreground">
                We design the feedback layer that keeps systems clear, structured, and stable.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── What We Do ── */}
      <section id="what-we-do" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={sectionTransition}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-12"
          >
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6 text-foreground">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed text-pretty">
              We design the internal structure that allows systems to:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-12">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ ...sectionTransition, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="h-full border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_-4px_rgba(var(--accent-glow),0.15)]">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{cap.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cap.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={sectionTransition}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground max-w-3xl leading-relaxed"
          >
            This is feedback architecture applied to{' '}
            <span className="text-foreground font-medium">intelligent systems.</span>
          </motion.p>
        </div>
      </section>

      {/* ── Where We Apply It ── */}
      <section id="where-we-apply" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={sectionTransition}
            viewport={{ once: true }}
            className="font-heading text-3xl lg:text-5xl font-bold mb-12 text-foreground"
          >
            Where We Apply It
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ ...sectionTransition, delay: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="h-full border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_-4px_rgba(var(--accent-glow),0.15)]">
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Intelligent &amp; Software Systems
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Designing structured feedback layers for AI-enabled and data-driven platforms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ ...sectionTransition, delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="h-full border-border hover:border-accent/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_-4px_rgba(var(--accent-glow),0.15)]">
                <CardContent className="pt-6">
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    Industrial Automation &amp; Machine Vision
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Applying disciplined sensing and control principles in production environments.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── YesCoach Spotlight ── */}
      <section id="yescoach" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={sectionTransition}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-sm font-mono text-accent">Applied Example</span>
            </span>

            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6 text-foreground">
              YesCoach
            </h2>

            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-4 text-pretty">
              A performance platform built using the same feedback-driven design principles. Training is input. Adaptation is signal. State becomes visible.
            </p>

            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed mb-10">
              A demonstration that structured feedback applies across domains — from machines to people.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ ...sectionTransition, delay: 0.15 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
              {yescoachFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-muted-foreground text-sm leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ ...sectionTransition, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="bg-transparent font-medium" asChild>
              <a href="https://yescoach.fit" target="_blank" rel="noopener noreferrer">
                Visit YesCoach
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-20 lg:py-28 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={sectionTransition}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-heading text-3xl lg:text-5xl font-bold mb-6 text-balance text-foreground">
              Work With zBesh Tech
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-10">
              Interested in a conversation about how we can collaborate to model your system and make it visible on screen?
            </p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ ...sectionTransition, delay: 0.15 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="font-medium" asChild>
                <a href="mailto:contact@zbesh.com">
                  Email Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="font-medium bg-transparent" asChild>
                <a href="https://yescoach.fit" target="_blank" rel="noopener noreferrer">
                  Explore YesCoach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="font-mono text-lg font-semibold mb-2 text-foreground">zBesh Tech Inc.</div>
              <p className="text-sm text-muted-foreground">Intelligent systems design.</p>
            </div>
            <div className="flex gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            &copy; 2026 zBesh Tech Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
