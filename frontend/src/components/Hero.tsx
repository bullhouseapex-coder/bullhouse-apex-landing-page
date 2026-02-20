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
    <section className="relative pt-40 pb-32 overflow-hidden bg-[#0F1115] text-white">
      {/* Brand Ambient Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-yellow-500/20 via-green-500/15 to-orange-500/20 blur-3xl opacity-40" />

      {/* Subtle Radial Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,200,0,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.08),transparent_40%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/5 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-white/10 backdrop-blur-md"
          >
            <TrendingUp size={16} />
            <span>Join the fastest growing firm in 2026!</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            Grow With Capital. <br />
            <span className="bg-linear-to-r from-yellow-400 via-green-400 to-orange-400 bg-clip-text text-transparent">Get Paid With Structure</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We partner with <span className="font-semibold text-white">Serious Traders </span>
            through structured monthly salary programs and scalable funding models.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
            {/* Premium Yellow Button */}
            <button className="relative bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-1 flex items-center justify-center gap-2 group overflow-hidden">
              {/* Glow effect */}
              <span className="absolute inset-0 bg-yellow-300 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl blur-xl"></span>

              <span className="relative flex items-center gap-2">
                Start Challenge
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>

            {/* Secondary Button */}
            <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl text-lg font-semibold transition-all backdrop-blur-md">
              View Programs
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center items-center gap-10 pt-12 border-t border-white/10">
            <div>
              <p className="text-3xl font-bold">4hrs</p>
              <p className="text-sm text-gray-400">Avg. Payout Time</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$12M+</p>
              <p className="text-sm text-gray-400">Paid to Traders</p>
            </div>
            <div>
              <p className="text-3xl font-bold">180+</p>
              <p className="text-sm text-gray-400">Countries Supported</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
