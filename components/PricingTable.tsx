"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  { name: "Active Listings", basic: "5", pro: "Unlimited", enterprise: "Unlimited" },
  { name: "Analytics Dashboard", basic: "Basic", pro: "Advanced", enterprise: "Advanced" },
  { name: "Support", basic: "Community", pro: "Priority", enterprise: "Dedicated" },
  { name: "Featured Placement", basic: false, pro: true, enterprise: true },
  { name: "Custom Branding", basic: false, pro: true, enterprise: true },
  { name: "API Access", basic: false, pro: true, enterprise: true },
  { name: "White Label", basic: false, pro: false, enterprise: true },
  { name: "SLA Guarantee", basic: false, pro: false, enterprise: true },
];

export default function PricingTable() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Compare Plans
          </h2>
          <p className="text-xl text-gray-600">
            See what's included in each plan
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                    Features
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="text-lg font-bold text-gray-900">Basic</div>
                    <div className="text-2xl font-bold text-gray-900 mt-2">Free</div>
                  </th>
                  <th className="px-6 py-4 text-center bg-purple-50">
                    <div className="text-lg font-bold text-purple-600">Pro</div>
                    <div className="text-2xl font-bold text-gray-900 mt-2">$29/mo</div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="text-lg font-bold text-gray-900">Enterprise</div>
                    <div className="text-2xl font-bold text-gray-900 mt-2">$99/mo</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr key={feature.name} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {feature.name}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.basic === "boolean" ? (
                        feature.basic ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.basic}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center bg-purple-50/50">
                      {typeof feature.pro === "boolean" ? (
                        feature.pro ? (
                          <Check className="w-5 h-5 text-purple-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-900 font-medium">{feature.pro}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {typeof feature.enterprise === "boolean" ? (
                        feature.enterprise ? (
                          <Check className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-sm text-gray-600">{feature.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 px-6 py-8 grid md:grid-cols-3 gap-4">
            <button className="bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors">
              Get Started
            </button>
            <button className="bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
              Start Free Trial
            </button>
            <button className="bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}