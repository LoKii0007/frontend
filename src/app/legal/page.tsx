"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LegalPage() {
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
              Legal
            </h1>
            <p className="text-white/60 text-sm font-light">
              Terms of service &amp; legal notice · Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
            </p>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 1, 0.5, 1] }}
            className="space-y-12"
          >
            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                Terms of Service
              </h2>
              <p className="text-white/60 font-light leading-relaxed mb-4">
                By using the Zero1 Studio website and services, you agree to these terms. We provide website development, MVP development, 3D experiences, and e-commerce solutions. Engagement terms for projects are agreed separately in statements of work or contracts.
              </p>
              <p className="text-white/60 font-light leading-relaxed">
                You may not use our site or services for any unlawful purpose, to infringe others&apos; rights, or to transmit harmful or malicious content. We reserve the right to modify these terms; continued use after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                Intellectual Property
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                All content on this website (text, graphics, logos, design) is owned by Zero1 Studio or its licensors. Work created for clients is governed by the respective project agreement. You may not copy, modify, or distribute our materials without written permission.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                Disclaimer
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                Our website and services are provided &quot;as is&quot;. We do not warrant uninterrupted or error-free operation. We are not liable for indirect, incidental, or consequential damages arising from your use of our site or services, to the fullest extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                Limitation of Liability
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                To the maximum extent permitted by applicable law, Zero1 Studio shall not be liable for any loss of profits, data, or goodwill, or any indirect or consequential damages. Our total liability shall not exceed the amount paid by you for the relevant service, if any.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                Governing Law
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                These terms are governed by the laws of the jurisdiction in which Zero1 Studio operates. Any disputes shall be resolved in the courts of that jurisdiction, unless otherwise agreed.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-tight mb-4">
                Contact
              </h2>
              <p className="text-white/60 font-light leading-relaxed">
                For legal inquiries:{" "}
                <a
                  href="mailto:hello@zero1studio.xyz"
                  className="text-accent hover:text-accent/80 transition-colors underline underline-offset-2"
                >
                  hello@zero1studio.xyz
                </a>
                . For privacy matters, see our{" "}
                <Link
                  href="/privacy"
                  className="text-accent hover:text-accent/80 transition-colors underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
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
