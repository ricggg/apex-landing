"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, FormEvent } from "react";

export default function CTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-28 bg-slate-900 relative overflow-hidden"
    >
      {/* Background blurs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Ready to Grow{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Your Business?
            </span>
          </h2>
          <p className="mt-5 text-lg text-slate-300 max-w-xl mx-auto">
            Join 500+ businesses already using Apex to scale. Start your free
            trial today — no credit card required.
          </p>

          {!submitted ? (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 max-w-md mx-auto"
            >
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition backdrop-blur-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition backdrop-blur-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/30 text-base"
                >
                  Get Started Free
                  <ArrowRight size={18} />
                </motion.button>
              </div>
              <p className="mt-5 text-xs text-slate-500">
                Free 14-day trial · No credit card required · Cancel anytime
              </p>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="mt-10 bg-green-500/15 border border-green-500/25 rounded-2xl p-8 max-w-md mx-auto backdrop-blur-sm"
            >
              <CheckCircle2 className="w-14 h-14 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white">
                You&apos;re All Set!
              </h3>
              <p className="mt-2 text-green-200/80">
                Thank you for signing up. We&apos;ll be in touch shortly with
                your account details.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}