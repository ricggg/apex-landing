"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  FileText,
  Bell,
  Search,
  TrendingUp,
  Mail,
  Calendar,
  ChevronRight,
  Circle,
} from "lucide-react";
import { useState } from "react";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Leads", active: false },
  { icon: FileText, label: "Listings", active: false },
  { icon: Mail, label: "Messages", active: false },
  { icon: Calendar, label: "Schedule", active: false },
];

const recentLeads = [
  {
    name: "Alex Thompson",
    email: "alex@company.com",
    status: "New",
    statusColor: "bg-green-100 text-green-700",
    time: "2 min ago",
  },
  {
    name: "Maria Garcia",
    email: "maria@startup.io",
    status: "Contacted",
    statusColor: "bg-blue-100 text-blue-700",
    time: "15 min ago",
  },
  {
    name: "James Wilson",
    email: "james@enterprise.co",
    status: "Qualified",
    statusColor: "bg-purple-100 text-purple-700",
    time: "1 hour ago",
  },
  {
    name: "Sarah Kim",
    email: "sarah@agency.com",
    status: "New",
    statusColor: "bg-green-100 text-green-700",
    time: "2 hours ago",
  },
];

const portalStats = [
  {
    label: "Total Leads",
    value: "1,247",
    change: "+12.5%",
    positive: true,
    icon: Users,
  },
  {
    label: "Active Listings",
    value: "84",
    change: "+8.2%",
    positive: true,
    icon: FileText,
  },
  {
    label: "Conversion Rate",
    value: "24.8%",
    change: "+3.1%",
    positive: true,
    icon: TrendingUp,
  },
  {
    label: "Messages",
    value: "38",
    change: "5 new",
    positive: true,
    icon: Mail,
  },
];

export default function Portal() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <section id="portal" className="py-20 lg:py-28 bg-white">
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
            Interactive Portal
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Your Command Center
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Manage leads, track conversions, and monitor your marketplace — all
            from one powerful, intuitive dashboard.
          </p>
        </motion.div>

        {/* Portal Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-200 overflow-hidden"
        >
          {/* Top Bar */}
          <div className="bg-slate-900 px-4 sm:px-6 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="hidden sm:flex items-center bg-slate-800 rounded-lg px-3 py-1.5 ml-4">
                <Search size={14} className="text-slate-400" />
                <span className="text-slate-500 text-xs ml-2">
                  Search leads, listings...
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Bell size={18} className="text-slate-400" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
              </div>
              <div className="w-7 h-7 bg-indigo-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">A</span>
              </div>
            </div>
          </div>

          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:block w-56 bg-slate-50 border-r border-slate-100 p-4 min-h-[500px]">
              <div className="space-y-1">
                {sidebarItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setActiveTab(item.label)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeTab === item.label
                        ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    <item.icon size={18} />
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Sidebar CTA */}
              <div className="mt-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-4 text-white">
                <p className="text-sm font-semibold">Upgrade to Pro</p>
                <p className="text-xs text-indigo-100 mt-1">
                  Unlock unlimited leads and listings
                </p>
                <button className="mt-3 w-full bg-white text-indigo-600 text-xs font-semibold py-2 rounded-lg hover:bg-indigo-50 transition-colors">
                  Upgrade Now
                </button>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 sm:p-6">
              {/* Welcome Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-3">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Welcome back, Admin
                  </h3>
                  <p className="text-sm text-slate-500">
                    Here is what is happening with your marketplace today.
                  </p>
                </div>
                <button className="self-start sm:self-auto bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center gap-1">
                  Add New Lead
                  <ChevronRight size={14} />
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                {portalStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="bg-slate-50 rounded-xl p-3 sm:p-4 border border-slate-100"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <stat.icon size={16} className="text-slate-400" />
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">
                        {stat.change}
                      </span>
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Chart Area */}
              <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-100 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Lead Activity
                  </h4>
                  <div className="flex gap-2">
                    <span className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-lg text-slate-600 font-medium">
                      7 Days
                    </span>
                    <span className="text-xs bg-indigo-600 text-white px-3 py-1 rounded-lg font-medium">
                      30 Days
                    </span>
                  </div>
                </div>
                <div className="flex items-end gap-1.5 sm:gap-2 h-32">
                  {[30, 55, 40, 70, 45, 85, 60, 90, 50, 75, 65, 95, 55, 80].map(
                    (h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + i * 0.05,
                        }}
                        className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t-sm hover:from-indigo-700 hover:to-indigo-500 transition-colors cursor-pointer"
                      />
                    )
                  )}
                </div>
              </div>

              {/* Recent Leads Table */}
              <div className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                <div className="px-4 sm:px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-slate-900">
                    Recent Leads
                  </h4>
                  <a
                    href="#"
                    className="text-xs text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    View All
                  </a>
                </div>
                <div className="divide-y divide-slate-100">
                  {recentLeads.map((lead, index) => (
                    <motion.div
                      key={lead.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                      className="px-4 sm:px-5 py-3 flex items-center justify-between hover:bg-white transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                          <span className="text-indigo-600 text-xs font-bold">
                            {lead.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-slate-900">
                            {lead.name}
                          </div>
                          <div className="text-xs text-slate-500 hidden sm:block">
                            {lead.email}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${lead.statusColor}`}
                        >
                          {lead.status}
                        </span>
                        <span className="text-xs text-slate-400 hidden sm:block">
                          {lead.time}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}