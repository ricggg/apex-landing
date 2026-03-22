"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Star,
  ArrowRight,
  Filter,
  Search,
  Heart,
  Eye,
  Tag,
} from "lucide-react";
import { useState } from "react";

const categories = [
  "All",
  "Services",
  "Products",
  "Real Estate",
  "Digital",
  "Consulting",
];

const listings = [
  {
    title: "Premium Web Development",
    category: "Services",
    price: "$2,500",
    location: "New York, NY",
    rating: 4.9,
    reviews: 127,
    views: "2.1k",
    featured: true,
    color: "from-indigo-500 to-purple-600",
    initials: "WD",
  },
  {
    title: "Marketing Strategy Bundle",
    category: "Digital",
    price: "$899",
    location: "Los Angeles, CA",
    rating: 4.8,
    reviews: 84,
    views: "1.8k",
    featured: false,
    color: "from-pink-500 to-rose-600",
    initials: "MS",
  },
  {
    title: "Business Consulting Package",
    category: "Consulting",
    price: "$3,200",
    location: "Chicago, IL",
    rating: 5.0,
    reviews: 56,
    views: "1.3k",
    featured: true,
    color: "from-amber-500 to-orange-600",
    initials: "BC",
  },
  {
    title: "E-Commerce Starter Kit",
    category: "Products",
    price: "$1,499",
    location: "Austin, TX",
    rating: 4.7,
    reviews: 203,
    views: "3.4k",
    featured: false,
    color: "from-green-500 to-emerald-600",
    initials: "EC",
  },
  {
    title: "Office Space Downtown",
    category: "Real Estate",
    price: "$4,500/mo",
    location: "San Francisco, CA",
    rating: 4.6,
    reviews: 31,
    views: "890",
    featured: false,
    color: "from-blue-500 to-cyan-600",
    initials: "OS",
  },
  {
    title: "Brand Identity Design",
    category: "Services",
    price: "$1,800",
    location: "Miami, FL",
    rating: 4.9,
    reviews: 95,
    views: "2.5k",
    featured: true,
    color: "from-violet-500 to-purple-600",
    initials: "BI",
  },
];

export default function Marketplace() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredListings =
    activeCategory === "All"
      ? listings
      : listings.filter((l) => l.category === activeCategory);

  return (
    <section id="marketplace" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-indigo-600 font-semibold text-sm uppercase tracking-wider">
            Marketplace
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Discover Top Listings
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Browse through curated listings, connect with sellers, and find
            exactly what your business needs to grow.
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 sm:p-5 mb-8"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 flex items-center bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
              <Search size={18} className="text-slate-400" />
              <input
                type="text"
                placeholder="Search listings, services, products..."
                className="flex-1 bg-transparent ml-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none"
              />
            </div>
            <button className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-600/20">
              <Filter size={16} />
              Filter
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Listings Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {filteredListings.map((listing, index) => (
            <motion.div
              key={listing.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* Card Header */}
              <div
                className={`bg-gradient-to-br ${listing.color} p-6 relative`}
              >
                {listing.featured && (
                  <span className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
                    <Tag size={10} />
                    Featured
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/40 transition-colors">
                  <Heart size={14} className="text-white" />
                </button>
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mt-4">
                  <span className="text-white text-lg font-bold">
                    {listing.initials}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full">
                    {listing.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500">
                    <Eye size={12} />
                    {listing.views}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {listing.title}
                </h3>

                <div className="flex items-center gap-1 mb-3">
                  <MapPin size={13} className="text-slate-400" />
                  <span className="text-xs text-slate-500">
                    {listing.location}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Star
                    size={13}
                    className="text-yellow-400 fill-yellow-400"
                  />
                  <span className="text-sm font-semibold text-slate-900">
                    {listing.rating}
                  </span>
                  <span className="text-xs text-slate-500">
                    ({listing.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="text-lg font-bold text-slate-900">
                    {listing.price}
                  </div>
                  <button className="flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 transition-colors">
                    View Details
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-600/25"
          >
            List Your Business
            <ArrowRight size={18} />
          </a>
          <p className="mt-3 text-sm text-slate-500">
            Join 500+ businesses already on our marketplace
          </p>
        </motion.div>
      </div>
    </section>
  );
}