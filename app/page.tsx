'use client'

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, ArrowDown } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef } from "react"
import { ContactForm } from "@/components/contact-form"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const feedbackScale = useTransform(smoothProgress, [0.1, 0.25, 0.4], [1, 1.15, 1])
  const feedbackOpacity = useTransform(smoothProgress, [0.1, 0.25, 0.4], [0.5, 1, 0.5])
  const feedbackGlow = useTransform(smoothProgress, [0.1, 0.25, 0.4], [0, 20, 0])

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <div className="font-mono text-lg font-semibold">zBesh Tech</div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Product
              </Link>
 
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-sm font-mono text-muted-foreground mb-6"
              >
                {'Modeling systems. Synthesizing signals. Enabling decisions.'}
              </motion.p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-balance">
                Making Invisible Systems <span className="text-accent">Visible</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed text-pretty max-w-2xl">
                {'Building from first principles.'}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="font-medium" asChild>
                <Link href="#contact">Collaborate with Us</Link>
              </Button>
              <Button size="lg" variant="outline" className="font-medium bg-transparent" asChild>
                <Link href="#product">
                  Explore YesCoach
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signal Flow Diagram - Animated on Scroll */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-32 h-32 rounded-lg border-2 border-border bg-card flex items-center justify-center"
            >
              <span className="font-mono text-sm text-muted-foreground">Input</span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <ArrowRight className="hidden lg:block h-8 w-8 text-muted-foreground" />
              <ArrowDown className="lg:hidden h-8 w-8 text-muted-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-32 h-32 rounded-lg border-2 border-border bg-card flex items-center justify-center"
            >
              <span className="font-mono text-sm text-muted-foreground">System</span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: false }}
              className="relative"
            >
              <ArrowRight className="hidden lg:block h-8 w-8 text-accent" />
              <ArrowDown className="lg:hidden h-8 w-8 text-accent" />
              <motion.div
                initial={{ opacity: 0.3 }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 blur-md"
              >
                <ArrowRight className="hidden lg:block h-8 w-8 text-accent" />
                <ArrowDown className="lg:hidden h-8 w-8 text-accent" />
              </motion.div>
            </motion.div>

            {/* Feedback Node - The Star of the Show */}
            <motion.div
              style={{
                scale: feedbackScale,
                opacity: feedbackOpacity,
              }}
              className="relative"
            >
              <motion.div
                style={{
                  filter: useTransform(feedbackGlow, (v) => `blur(${v}px)`),
                  opacity: useTransform(feedbackGlow, (v) => v / 30)
                }}
                className="absolute inset-0 -m-4 bg-accent rounded-lg"
              />
              <div className="relative w-40 h-40 rounded-lg border-2 border-accent bg-accent/5 flex items-center justify-center overflow-hidden group">
                <motion.div
                  initial={{ opacity: 0.1 }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-accent"
                />
                <span className="font-mono text-base text-accent relative z-10 font-bold">Signal</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
              viewport={{ once: false }}
            >
              <ArrowRight className="hidden lg:block h-8 w-8 text-muted-foreground" />
              <ArrowDown className="lg:hidden h-8 w-8 text-muted-foreground" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: false, amount: 0.5 }}
              className="w-32 h-32 rounded-lg border-2 border-border bg-card flex items-center justify-center"
            >
              <span className="font-mono text-sm text-muted-foreground">Decision</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-24 lg:py-32 px-6 lg:px-12 bg-muted/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
              className="text-4xl lg:text-5xl font-bold mb-8 text-balance"
            >
              About zBesh Tech
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground leading-relaxed">
                {'zBesh Tech Inc. is a software-focused company that models complex real-world systems from first principles and makes their behavior understandable.'}
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                {'Our mission is to model real-world systems and make their behavior clear and actionable.'}
              </p>
            
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Product Spotlight - YesCoach */}
      <section id="product" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="mb-12"
          >
            <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <span className="text-sm font-mono text-accent">Product Spotlight</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">YesCoach — A Body Feedback System</h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {'Training inputs are treated as signals acting on a dynamic biological system; adaptation is synthesized into clear, interpretable outputs.'}
            </p>
          </motion.div>



          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <Card className="p-8 h-full border-l-4 border-l-accent">
                <h3 className="text-lg font-semibold mb-4">Key capabilities:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.4 }}
                      viewport={{ once: false }}
                      className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"
                    />
                    <span className="text-muted-foreground leading-relaxed">Muscle heatmaps and adaptation signals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      viewport={{ once: false }}
                      className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"
                    />
                    <span className="text-muted-foreground leading-relaxed">Weekly and monthly training feedback</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: false }}
                      className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"
                    />
                    <span className="text-muted-foreground leading-relaxed">Clear insightful trends</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                      viewport={{ once: false }}
                      className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0"
                    />
                    <span className="text-muted-foreground leading-relaxed">Designed for real-time feedback and introspection.</span>
                  </li>
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false }}
            >
              <Card className="p-8 h-full bg-muted/50">
                <h3 className="text-lg font-semibold mb-4">Why it matters:</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {'When people can see what\'s happening inside their body, they make better decisions—faster, and with confidence.'}
                </p>
                <Button variant="outline" className="bg-transparent" asChild>
                  <a href="https://yescoach.fit" target="_blank" rel="noopener noreferrer">
                    Visit YesCoach →
                  </a>
                </Button>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Contact Section */}
      <section id="contact" className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">{"Work With zBesh Tech"}</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {'Interested in a conversation about how we can collaborate to '}
                <br />
                {"model your system and make it visible on screen?"}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              className="mt-12 text-center"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Or explore our product
              </p>
              <Button variant="outline" className="bg-transparent" asChild>
                <a href="https://yescoach.fit" target="_blank" rel="noopener noreferrer">
                  Visit YesCoach →
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <div className="font-mono text-lg font-semibold mb-2">zBesh Tech Inc.</div>
              <p className="text-sm text-muted-foreground">Modeling real-world systems from first principles.</p>
            </div>
            <div className="flex gap-8">
              <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
              <Link href="#product" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Product
              </Link>
              <Link href="#collaborate" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Collaborate
              </Link>
              <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2026 zBesh Tech Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
