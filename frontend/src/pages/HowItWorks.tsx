import { UserCheck, Activity, Key, Trophy, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type StepDetails = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

const steps: StepDetails[] = [
  {
    icon: UserCheck,
    title: "Select Your Plan",
    desc: "Choose an account size that fits your trading style, from $10k to $200k.",
  },
  {
    icon: Activity,
    title: "Pass the Challenge",
    desc: "Show us your skills by hitting profit targets without violating drawdown rules.",
  },
  {
    icon: Key,
    title: "Get Verified",
    desc: "Complete a quick KYC process to unlock your funded account credentials.",
  },
  {
    icon: Trophy,
    title: "Start Earning",
    desc: "Trade live capital and keep up to 90% of the profits. Withdraw anytime.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-amber-600 uppercase tracking-widest mb-3">Simple Process</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Your Path to Funding</h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0">
            <div className="absolute top-0 left-0 h-full bg-emerald-500 w-1/4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-24 h-24 mx-auto bg-white border-4 border-slate-50 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-emerald-500 transition-colors duration-300 relative">
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {index + 1}
                  </span>
                  <step.icon size={32} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed px-4">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
