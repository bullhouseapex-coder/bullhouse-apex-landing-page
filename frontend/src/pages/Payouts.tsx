import { motion } from "framer-motion";
import { DollarSign, Clock, CheckCircle } from "lucide-react";

export function Payouts() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-sm font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">Rewards</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">Get Paid On Your Terms</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              We understand that cash flow is king. That's why we've built the fastest payout system in the industry. Request your withdrawal and
              receive funds in as little as 4 hours.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Fast Processing</h4>
                  <p className="text-slate-500 dark:text-slate-400">Approvals within 24 hours. Often much faster.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <DollarSign size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Multiple Methods</h4>
                  <p className="text-slate-500 dark:text-slate-400">USDT (TRC20/ERC20), BTC, or Bank Transfer.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 bg-emerald-100 dark:bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Bi-Weekly Payouts</h4>
                  <p className="text-slate-500 dark:text-slate-400">Steady cash flow for consistent traders.</p>
                </div>
              </div>
            </div>

            <button className="mt-8 px-8 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors">
              See Withdrawal Proofs
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-tr from-emerald-500 to-amber-500 rounded-3xl opacity-20 blur-xl"></div>
            <div className="relative bg-slate-900 p-8 rounded-2xl text-white shadow-2xl border border-slate-700">
              {/* Mock Payout Interface */}
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-700">
                <span className="text-slate-400 font-medium">Available for Withdrawal</span>
                <span className="text-2xl font-bold text-emerald-400">$12,450.00</span>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center p-3 bg-slate-800 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center font-bold text-xs">₿</div>
                    <span>Bitcoin (BTC)</span>
                  </div>
                  <div className="w-4 h-4 border-2 border-emerald-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  </div>
                </div>
                <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg opacity-60">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold text-xs">₮</div>
                    <span>USDT (TRC20)</span>
                  </div>
                  <div className="w-4 h-4 border-2 border-slate-600 rounded-full"></div>
                </div>
              </div>

              <div className="w-full h-12 bg-emerald-500 rounded-lg flex items-center justify-center font-bold hover:bg-emerald-600 cursor-pointer transition-colors">
                Confirm Withdrawal
              </div>
            </div>

            {/* Floating Notification */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center">
                <CheckCircle size={20} />
              </div>
              <div>
                <p className="font-bold text-sm">Payout Approved</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Just now</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
