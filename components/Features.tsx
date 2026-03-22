"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Zap,
  Shield,
  Users,
  Globe,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Get deep insights into your business performance with real-time dashboards and comprehensive reports.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed and performance. Your tools load instantly so you can focus on growing.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "Bank-grade encryption and security protocols to keep your data safe and protected at all times.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Work seamlessly with your team. Assign roles, share reports, and stay aligned on goals.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Expand to new markets with multi-language support and international payment processing.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description:
      "Our expert support team is always available to help you succeed, day or night.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-slate-50">
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
            Features
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Everything You Need to Scale
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Powerful tools designed to help you grow faster, work smarter, and
            deliver exceptional results for your customers.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-lg hover:border-indigo-100 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}