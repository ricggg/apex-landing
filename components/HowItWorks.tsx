"use client";

import { motion } from "framer-motion";
import { UserPlus, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Create Your Account",
    description:
      "Sign up in under 2 minutes. No credit card required. Start your free trial instantly.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Set Up Your Workspace",
    description:
      "Customize your dashboard, connect your tools, and configure your business settings.",
  },
  {
    icon: TrendingUp,
    step: "03",
    title: "Watch Your Business Grow",
    description:
      "Launch campaigns, capture leads, and watch your revenue grow with powerful automation.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Up and Running in Minutes
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Getting started is easy. No technical skills required — just follow
            three simple steps and you are good to go.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="text-center relative"
            >
              {/* Connector arrow — hidden on mobile and after last item */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] border-t-2 border-dashed border-indigo-200" />
              )}

              <div className="relative z-10">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-600/25">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              <span className="text-6xl font-extrabold text-indigo-100 leading-none">
                {step.step}
              </span>

              <h3 className="mt-3 text-xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-3 text-slate-600 max-w-xs mx-auto leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}