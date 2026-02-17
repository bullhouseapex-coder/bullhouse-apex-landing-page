import { motion } from "framer-motion";
import { ArrowRight, Image, TrendingUp } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative py-32 pb-24 w-full overflow-hidden">
      <div className="absolute top-0 right-0 h-full w-1/2 bg-slate-100 transform origin-top-right -skew-x-12 translate-x-1/4"></div>
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium"
          >
            <TrendingUp size={16} />
            <span>Top-tier Prop Firm</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
          >
            Master the Market. <span className="text-emerald-500">Keep the Profit</span>
          </motion.h1>

          <motion.p variants={itemVariants} initial="hidden" animate="visible" className="text-lg text-slate-600 max-w-xl leading-relaxed">
            Trade with up to <span className="font-semibold text-slate-900">$200,000</span> of our capital. Keep up to 90% of your profits. No hidden
            rules, just pure trading.
          </motion.p>

          <motion.div variants={itemVariants} initial="hidden" animate="visible" className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-amber-500/20 flex items-center gap-2 group">
              Start your Challenge
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center">
              View Programs
            </button>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-8 pt-8 border-t border-slate-200">
            <div>
              <p className="text-3xl font-bold text-slate-900">4hrs</p>
              <p className="text-sm text-slate-500">Avg. Payout Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">$12M+</p>
              <p className="text-sm text-slate-500">Paid to Traders</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900">180+</p>
              <p className="text-sm text-slate-500">Countries Supported</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            {/* <img
              src=""
              alt="Trading Dashboard"
              className="w-full h-auto object-cover"
            /> */}
            <Image className="w-full h-auto text-slate-400" />
          </div>

          {/* Floating Card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-50"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">$</div>
              <div>
                <p className="text-xs text-slate-500">Recent Payout</p>
                <p className="font-bold text-slate-900">$4,250.00</p>
              </div>
            </div>
            <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[80%] rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
