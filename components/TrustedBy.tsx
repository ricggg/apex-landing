"use client";

import { motion } from "framer-motion";

const companies = [
  "TechCorp",
  "Innovate Inc",
  "GrowthLab",
  "ScaleUp",
  "CloudBase",
  "DataFlow",
];

export default function TrustedBy() {
  return (
    <section className="py-14 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-8"
        >
          Trusted by industry-leading companies
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 md:gap-x-16">
          {companies.map((company, index) => (
            <motion.span
              key={company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="text-xl font-bold text-slate-300 hover:text-indigo-300 transition-colors duration-300 cursor-default"
            >
              {company}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}