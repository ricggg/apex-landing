"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "500+", label: "Businesses Served" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "2.4x", label: "Average Growth" },
  { value: "24/7", label: "Expert Support" },
];

export default function Stats() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-indigo-600 to-indigo-700 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-indigo-200 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}