"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Apex transformed how we manage our business. Our leads increased by 150% in just 3 months. The platform is incredibly intuitive and easy to use.",
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc",
    initials: "SJ",
    color: "bg-indigo-500",
  },
  {
    quote:
      "The best investment we have made for our company. The analytics dashboard alone saves us 10 hours per week. Highly recommended for any growing business!",
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthLab",
    initials: "MC",
    color: "bg-purple-500",
  },
  {
    quote:
      "Outstanding support team and an amazing product. We have doubled our revenue since switching to Apex. Can not imagine running our business without it.",
    name: "Emily Rodriguez",
    role: "Founder",
    company: "ScaleUp Agency",
    initials: "ER",
    color: "bg-pink-500",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-slate-50">
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
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Loved by Businesses Everywhere
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Do not just take our word for it — hear from some of our amazing
            customers who transformed their businesses.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="w-10 h-10 text-indigo-100 absolute top-7 right-7" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div
                  className={`w-11 h-11 ${testimonial.color} rounded-full flex items-center justify-center text-sm font-bold text-white`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-slate-500 text-xs">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}