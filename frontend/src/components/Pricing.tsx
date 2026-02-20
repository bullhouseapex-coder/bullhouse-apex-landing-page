import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Info } from "lucide-react";
import { clsx } from "clsx";

type PlanType = "oneStep" | "twoStep";

const plans = [
  {
    size: "5K",
    oneStep: {
      price: 19,
      target: "10%",
      maxDrawdown: "6%",
      drawdownType: "Trailing",
      dailyDrawdown: "4%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    twoStep: {
      price: 23,
      target: "8%",
      maxDrawdown: "8%",
      drawdownType: "Static",
      dailyDrawdown: "5%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    split: "80% Bi-Weekly",
  },
  {
    size: "10K",
    oneStep: {
      price: 44,
      target: "10%",
      maxDrawdown: "6%",
      drawdownType: "Trailing",
      dailyDrawdown: "4%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    twoStep: {
      price: 36,
      target: "8%",
      maxDrawdown: "8%",
      drawdownType: "Static",
      dailyDrawdown: "5%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    split: "80% Bi-Weekly",
  },
  {
    size: "25K",
    oneStep: {
      price: 119,
      target: "10%",
      maxDrawdown: "6%",
      drawdownType: "Trailing",
      dailyDrawdown: "4%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    twoStep: {
      price: 99,
      target: "8%",
      maxDrawdown: "8%",
      drawdownType: "Static",
      dailyDrawdown: "5%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    split: "80% Bi-Weekly",
  },
  {
    size: "50K",
    oneStep: {
      price: 249,
      target: "10%",
      maxDrawdown: "6%",
      drawdownType: "Trailing",
      dailyDrawdown: "4%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    twoStep: {
      price: 219,
      target: "8%",
      maxDrawdown: "8%",
      drawdownType: "Static",
      dailyDrawdown: "5%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    split: "80% Bi-Weekly",
  },
  {
    size: "100K",
    oneStep: {
      price: 449,
      target: "10%",
      maxDrawdown: "6%",
      drawdownType: "Trailing",
      dailyDrawdown: "4%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    twoStep: {
      price: 399,
      target: "8%",
      maxDrawdown: "8%",
      drawdownType: "Static",
      dailyDrawdown: "5%",
      minDays: "1 Day",
      consistency: "No Consistency Rule",
      newsTrading: "Allowed",
    },
    split: "80% Bi-Weekly",
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState(plans[2]);
  const [selectedType, setSelectedType] = useState<PlanType>("oneStep");

  const current = selectedPlan[selectedType];

  const drawdownTooltip =
    current.drawdownType === "Trailing"
      ? "Trailing drawdown moves up as your account grows, locking in profits."
      : "Static drawdown stays fixed at the starting balance and does not move.";

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-emerald-600 uppercase tracking-widest mb-3">Programs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 dark:text-white">Choose Your Capital</h3>
          <p className="text-slate-600 text-lg">One-time fee. No recurring monthly charges. Pass the evaluation and get funded.</p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-8">
          <div className=" border border-slate-200 dark:border-slate-600 rounded-full p-1 flex">
            <button
              onClick={() => setSelectedType("oneStep")}
              className={clsx(
                "px-6 py-2 text-sm font-bold rounded-full transition-all",
                selectedType === "oneStep" ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300",
              )}
            >
              1-Step Challenge
            </button>

            <button
              onClick={() => setSelectedType("twoStep")}
              className={clsx(
                "px-6 py-2 text-sm font-bold rounded-full transition-all",
                selectedType === "twoStep" ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900 dark:hover:text-slate-300",
              )}
            >
              2-Step Challenge
            </button>
          </div>
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
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-105"
                  : "bg-white dark:bg-slate-900/20 text-slate-500 border-slate-200 dark:border-slate-600 hover:border-emerald-500 hover:text-emerald-600",
              )}
            >
              ${plan.size}
            </button>
          ))}
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlan.size + selectedType}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="rounded-3xl shadow-xl overflow-hidden border border-slate-100 dark:border-slate-600"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left */}
                <div className="p-8 md:p-12 bg-slate-900 text-white flex flex-col justify-between">
                  <div>
                    <h4 className="text-emerald-400 font-medium mb-2">{selectedType === "oneStep" ? "1-Step Account" : "2-Step Account"}</h4>
                    <div className="text-5xl md:text-6xl font-bold mb-6">${selectedPlan.size}</div>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span className="text-3xl font-bold">${current.price}</span>
                      <span className="text-slate-400 text-sm">/ one-time fee</span>
                    </div>
                    <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors mt-4">
                      Get Started Now
                    </button>
                  </div>
                </div>

                {/* Right */}
                <div className="p-8 md:p-12">
                  <h5 className="font-bold text-lg text-slate-900 mb-6 dark:text-white">Trading Objectives</h5>
                  <ul className="space-y-4">
                    <li className="flex justify-between py-3 border-b">
                      <span className="flex items-center gap-2 text-slate-500">
                        <Check size={16} className="text-emerald-500" /> Profit Target
                      </span>
                      <span className="font-bold">{current.target}</span>
                    </li>

                    <li className="flex justify-between py-3 border-b relative group">
                      <span className="flex items-center gap-2 text-slate-500">
                        <Check size={16} className="text-emerald-500" />
                        Daily Drawdown
                        {selectedType === "twoStep" && (
                          <span className="relative group cursor-pointer">
                            <Info size={14} className="text-slate-400" />
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900 text-white text-xs rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10">
                              Daily drawdown resets every 24 hours based on your starting daily balance.
                            </span>
                          </span>
                        )}
                      </span>
                      <span className="font-bold">{current.dailyDrawdown}</span>
                    </li>

                    <li className="flex justify-between py-3 border-b relative group">
                      <span className="flex items-center gap-2 text-slate-500">
                        <Check size={16} className="text-emerald-500" />
                        Max Drawdown ({current.drawdownType})
                        <span className="relative group cursor-pointer">
                          <Info size={14} className="text-slate-400" />
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 bg-slate-900 text-white text-xs rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10">
                            {drawdownTooltip}
                          </span>
                        </span>
                      </span>
                      <span className="font-bold">{current.maxDrawdown}</span>
                    </li>

                    <li className="flex justify-between py-3 border-b">
                      <span className="flex items-center gap-2 text-slate-500">
                        <Check size={16} className="text-emerald-500" /> Minimum Trading Days
                      </span>
                      <span className="font-bold">{current.minDays}</span>
                    </li>

                    <li className="flex justify-between py-3 border-b">
                      <span className="flex items-center gap-2 text-slate-500">
                        <Check size={16} className="text-emerald-500" /> Consistency Rule
                      </span>
                      <span className="font-bold">{current.consistency}</span>
                    </li>

                    <li className="flex justify-between py-3 border-b">
                      <span className="flex items-center gap-2 text-slate-500">
                        <Check size={16} className="text-emerald-500" /> News Trading
                      </span>
                      <span className="font-bold text-emerald-600">{current.newsTrading}</span>
                    </li>

                    <li className="flex justify-between py-3 relative">
                      <span className="flex items-center gap-2 text-slate-500 group relative">
                        <Check size={16} className="text-emerald-500" />
                        Profit Split
                        <Info size={14} className="text-slate-400 cursor-pointer" />
                        {/* Tooltip */}
                        <span className="absolute left-0 top-7 w-64 bg-slate-900 text-white text-xs rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg z-10">
                          Traders keep 80% of profits and receive payouts every 10 business days.
                        </span>
                      </span>

                      <span className="font-bold text-emerald-600">80% Profit Split</span>
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
