import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";

export default function Support() {
  return (
    <section className="py-24 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 -skew-x-12 transform origin-top-right translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl relative"
          >
            <img
              src="https://images.unsplash.com/photo-1647866427893-0057366e91b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGN1c3RvbWVyJTIwc3VwcG9ydCUyMGFnZW50JTIwaGVhZHNldHxlbnwxfHx8fDE3NzEwMzEzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Customer Support Team"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-slate-900/90 to-transparent p-8">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-200 dark:bg-slate-700" />
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-300 dark:bg-slate-600" />
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-slate-400 dark:bg-slate-500" />
                  <div className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 bg-amber-500 text-white flex items-center justify-center text-xs font-bold shadow-lg z-10">
                    +12
                  </div>
                </div>
                <div className="text-white">
                  <p className="font-bold">Active Now</p>
                  <p className="text-xs text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Available to chat
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-sm font-semibold text-amber-600 dark:text-amber-500 uppercase tracking-widest mb-3">Support</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">We're Here For You 24/7</h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Trading never stops, and neither do we. Whether you have a technical question or need clarification on a rule, our team is always ready
              to assist.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg transition-all group cursor-pointer">
                <MessageCircle className="w-8 h-8 text-emerald-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Live Chat</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Average response time: &lt; 2 mins</p>
              </div>

              <div className="bg-white dark:bg-slate-950 p-6 rounded-xl border border-slate-100 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg transition-all group cursor-pointer">
                <Mail className="w-8 h-8 text-amber-500 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="font-bold text-slate-900 dark:text-white mb-2">Email Support</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Detailed assistance for complex queries</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
