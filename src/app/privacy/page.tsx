"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main className="relative z-10 bg-background min-h-screen pt-32 pb-20 px-4 md:px-6">
      <div className="max-w-[90rem] mx-auto">
        <div className="max-w-3xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="h-[2px] w-12 bg-accent" />
              <span className="text-xs font-mono text-accent uppercase tracking-widest">
                Legal
              </span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter uppercase mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/60 text-sm font-light">
              Last updated: February 2025
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="prose prose-invert prose-lg max-w-none space-y-12"
          >
            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                1. Introduction
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                Zero1 Studio (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) respects your privacy. This policy describes how we collect, use, and protect your information when you use our website and services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                2. Information We Collect
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-4">
                We may collect information you provide directly (e.g. name, email, company, project details when you contact us or submit a form), usage data (e.g. pages visited, referrer), and technical data (e.g. IP address, browser type) for analytics and security.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                3. How We Use Your Information
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                We use your information to respond to inquiries, deliver services, improve our website and offerings, send relevant updates (with your consent), and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                4. Data Sharing &amp; Third Parties
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                We do not sell your personal data. We may share data with service providers (e.g. hosting, analytics) under strict agreements. We may disclose information when required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                5. Cookies &amp; Analytics
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                We use cookies and similar technologies for functionality and analytics. You can control cookies via your browser settings. Our site may use analytics to understand usage and improve experience.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                6. Your Rights
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                Depending on your location, you may have rights to access, correct, delete, or restrict processing of your data, and to object or withdraw consent. Contact us to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                7. Security &amp; Retention
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data. We retain information only as long as necessary for the purposes described or as required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                8. Contact
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                For privacy-related questions or requests, contact us at{" "}
                <a
                  href="mailto:hello@zero1.studio"
                  className="text-accent hover:text-accent/80 transition-colors underline underline-offset-2"
                >
                  hello@zero1.studio
                </a>
                .
              </p>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <Link
              href="/"
              className="text-sm font-medium text-white/60 hover:text-accent uppercase tracking-widest transition-colors inline-flex items-center gap-2"
            >
              ← Back to home
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
