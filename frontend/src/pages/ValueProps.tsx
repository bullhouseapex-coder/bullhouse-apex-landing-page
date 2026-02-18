import { ShieldCheck, Zap, Scale, Wallet, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

type CardDetails = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const benefits: CardDetails[] = [
  {
    icon: ShieldCheck,
    title: "Transparent Rules",
    description: "No hidden clauses or confusing parameters. Our trading rules are simple and designed for your success.",
    color: "emerald",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Experience institutional-grade execution speeds with minimal slippage and tight spreads.",
    color: "amber",
  },
  {
    icon: Wallet,
    title: "Instant Payouts",
    description: "Request your withdrawal and get paid within hours. We support crypto and bank transfers globally.",
    color: "emerald",
  },
  {
    icon: Scale,
    title: "Scaling Plan",
    description: "Consistent profitability is rewarded. Scale your account up to $2,000,000 with our growth program.",
    color: "amber",
  },
];

export default function ValueProps() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-amber-500 uppercase tracking-widest mb-3">Why Bull House Apex</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Built by Traders, <br />
            For Serious Traders.
          </h3>
          <p className="text-slate-600 text-lg">
            We provide the capital, technology, and support you need to turn your trading skills into a professional career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-amber-200 group hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  benefit.color === "emerald"
                    ? "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white"
                    : "bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white"
                }`}
              >
                <benefit.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
