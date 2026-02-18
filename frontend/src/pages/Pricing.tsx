import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { clsx } from "clsx";

const plans = [
  { size: "10K", price: 99, target: "8%", dailyDrawdown: "5%", maxDrawdown: "10%", split: "80/20" },
  { size: "25K", price: 199, target: "8%", dailyDrawdown: "5%", maxDrawdown: "10%", split: "80/20" },
  { size: "50K", price: 299, target: "8%", dailyDrawdown: "5%", maxDrawdown: "10%", split: "80/20", popular: true },
  { size: "100K", price: 499, target: "8%", dailyDrawdown: "5%", maxDrawdown: "10%", split: "90/10" },
  { size: "200K", price: 999, target: "8%", dailyDrawdown: "5%", maxDrawdown: "10%", split: "90/10" },
];

export function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(plans[2]); // Default to 50K

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-3">Programs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Choose Your Capital</h3>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            One-time fee. No recurring monthly charges. Pass the evaluation and get funded.
          </p>
        </div>

        {/* Plan Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {plans.map((plan) => (
            <button
              key={plan.size}
              onClick={() => setSelectedPlan(plan)}
              className={clsx(
                "px-6 py-3 rounded-full text-sm font-bold transition-all border",
                selectedPlan.size === plan.size
                  ? "bg-slate-900 dark:bg-emerald-500 text-white border-slate-900 dark:border-emerald-500 shadow-lg scale-105"
                  : "bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400",
              )}
            >
              ${plan.size}
            </button>
          ))}
        </div>

        {/* Plan Details Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlan.size}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-800"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 md:p-12 bg-slate-900 dark:bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden border-r border-slate-800">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                  <div>
                    <h4 className="text-emerald-400 font-medium mb-2">Selected Account</h4>
                    <div className="text-5xl md:text-6xl font-bold mb-6">${selectedPlan.size}</div>
                    <p className="text-slate-400 text-sm mb-8">The perfect starting point for serious traders looking to scale.</p>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-bold">${selectedPlan.price}</span>
                      <span className="text-slate-400 text-sm">/ one-time fee</span>
                    </div>
                    <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors mt-4 shadow-lg shadow-amber-500/20">
                      Get Started Now
                    </button>
                    <p className="text-center text-xs text-slate-500 mt-3">Refundable with first payout</p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <h5 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Trading Objectives</h5>
                  <ul className="space-y-4">
                    <li className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" /> Profit Target
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{selectedPlan.target}</span>
                    </li>
                    <li className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" /> Daily Drawdown
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{selectedPlan.dailyDrawdown}</span>
                    </li>
                    <li className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" /> Max Drawdown
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">{selectedPlan.maxDrawdown}</span>
                    </li>
                    <li className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" /> Profit Split
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">{selectedPlan.split}</span>
                    </li>
                    <li className="flex items-center justify-between py-3 border-b border-slate-50 dark:border-slate-800">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" /> Minimum Trading Days
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">0 Days</span>
                    </li>
                    <li className="flex items-center justify-between py-3 pt-4">
                      <span className="text-slate-500 dark:text-slate-400 flex items-center gap-2">
                        <Check size={16} className="text-emerald-500" /> Leverage
                      </span>
                      <span className="font-bold text-slate-900 dark:text-white">1:100</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
