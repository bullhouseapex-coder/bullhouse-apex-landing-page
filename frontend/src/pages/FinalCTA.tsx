import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-24 text-white overflow-hidden relative">
      <div className="absolute top-0 right-1/2 w-1/3 h-1/3 bg-emerald-500/20 blur-[100px] rounded-full translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-1/2 w-1/3 h-1/3 bg-amber-500/20 blur-[100px] rounded-full -translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl text-slate-900 dark:text-white font-bold mb-6 tracking-tight leading-tight"
        >
          Ready to Start Your <span className="text-amber-500">Trading Career?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto"
        >
          Join thousands of funded traders and take your portfolio to the next level. No more risking your own capital.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 group">
            Start Challenge Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-transparent border border-slate-700 hover:border-slate-500 text-slate-700 dark:text-white px-8 py-4 rounded-xl text-lg font-bold transition-all">
            Join Discord Community
          </button>
        </motion.div>
      </div>
    </section>
  );
}
