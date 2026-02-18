import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How do I get funded?",
    answer:
      "Simply choose a plan, pass the evaluation phase by hitting the profit target without violating the drawdown rules, and verify your identity. Once completed, you will receive your funded account credentials.",
  },
  {
    question: "What are the drawdown rules?",
    answer:
      "We have a 5% daily drawdown limit (based on the previous day's closing balance) and a 10% maximum trailing drawdown from your initial account balance.",
  },
  {
    question: "How often can I withdraw my profits?",
    answer:
      "You can request your first payout 14 days after your first trade on the funded account. Subsequent payouts can be requested bi-weekly. Payouts are processed within 24 hours.",
  },
  {
    question: "Are there any time limits?",
    answer:
      "No. We have removed all time limits for the evaluation phase. Take as much time as you need to reach the profit target. No stress, just good trading.",
  },
  {
    question: "What instruments can I trade?",
    answer:
      "You can trade Forex, Crypto, Indices, Metals, and Energies. We offer raw spreads and low commissions to give you the best trading environment.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest mb-3">Questions</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden transition-all hover:border-emerald-200 dark:hover:border-emerald-500/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors"
              >
                <span className="font-bold text-slate-900 dark:text-white text-lg">{faq.question}</span>
                <span
                  className={`p-2 rounded-full transition-colors flex items-center justify-center ${
                    openIndex === index
                      ? "bg-amber-100 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400"
                      : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                  }`}
                >
                  {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
