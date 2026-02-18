import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-emerald-5 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full text-sm font-medium border border-emerald-100 dark:border-emerald-500/20"
          >
            <TrendingUp size={16} />
            <span>Top-Tier Prop Firm</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]"
          >
            Master the Market. <br />
            <span className="text-emerald-500">Keep the Profit.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
            Trade with up to <span className="font-semibold text-slate-900 dark:text-white">$200,000</span> of our capital. Keep up to 90% of your
            profits. No hidden rules, just pure trading.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 group">
              Start Your Challenge
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center">
              View Programs
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-8 pt-8 border-t border-slate-100 dark:border-slate-800/50">
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">4hrs</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Avg. Payout Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">$12M+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Paid to Traders</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">180+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Countries Supported</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-amber-500 to-emerald-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/50 dark:border-slate-700/50 bg-white dark:bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1765299856473-abaac2f1aa70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0cmFkaW5nJTIwZGFzaGJvYXJkJTIwbW9uaXRvciUyMGRhcmslMjBtb2RlfGVufDF8fHx8MTc3MTAzMTM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Trading Dashboard"
              className="w-full h-auto object-cover transform scale-100 group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-900 p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-800 max-w-50"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold">
                $
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Recent Payout</p>
                <p className="font-bold text-slate-900 dark:text-white">$4,250.00</p>
              </div>
            </div>
            <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[80%] rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
