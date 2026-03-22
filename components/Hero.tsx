"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/80 via-white to-purple-50/50 -z-10" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-indigo-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
              Now serving 500+ businesses
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Grow Your Business{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                With Confidence
              </span>
            </h1>

            <p className="mt-6 text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg">
              The all-in-one platform that helps you launch, manage, and scale
              your business. Get more leads, convert more customers, and grow
              faster.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25 text-base"
              >
                Get Started Free
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#how-it-works"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-semibold hover:bg-slate-50 hover:border-slate-300 transition-all text-base"
              >
                <Play size={18} className="fill-slate-700" />
                See How It Works
              </motion.a>
            </div>

            {/* Mini social proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {["bg-indigo-400", "bg-purple-400", "bg-pink-400", "bg-amber-400"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {["S", "M", "E", "J"][i]}
                    </div>
                  )
                )}
              </div>
              <div className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">500+</span>{" "}
                businesses already growing
              </div>
            </div>
          </motion.div>

          {/* Right - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200/80 p-5 lg:p-6">
              {/* Browser dots */}
              <div className="flex items-center gap-2 mb-5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="flex-1 bg-slate-100 h-6 rounded-md ml-3" />
              </div>

              {/* Dashboard content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="h-7 bg-slate-100 rounded-lg w-48" />
                  <div className="h-7 bg-indigo-100 rounded-lg w-24" />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-indigo-600">2.4k</div>
                    <div className="text-xs text-slate-500 mt-1">New Leads</div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">98%</div>
                    <div className="text-xs text-slate-500 mt-1">Satisfaction</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">$12k</div>
                    <div className="text-xs text-slate-500 mt-1">Revenue</div>
                  </div>
                </div>

                {/* Chart placeholder */}
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="h-4 bg-slate-200 rounded w-24" />
                    <div className="h-4 bg-slate-200 rounded w-16" />
                  </div>
                  <div className="flex items-end gap-2 h-24">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map(
                      (h, i) => (
                        <motion.div
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 0.5, delay: 0.5 + i * 0.05 }}
                          className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-sm"
                        />
                      )
                    )}
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="h-5 bg-slate-100 rounded w-full" />
                  <div className="h-5 bg-slate-100 rounded w-2/3" />
                </div>
              </div>
            </div>

            {/* Floating decorations */}
            <div className="absolute -top-4 -right-4 w-28 h-28 bg-indigo-300 rounded-full opacity-30 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-purple-300 rounded-full opacity-30 blur-2xl" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg border border-slate-100 px-4 py-3 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-lg">↑</span>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900">+47%</div>
                <div className="text-xs text-slate-500">Growth</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}