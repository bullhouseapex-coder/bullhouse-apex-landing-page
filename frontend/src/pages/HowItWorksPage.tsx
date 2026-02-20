import { Link } from "react-router";
import { CheckCircle2, TrendingUp, Target, Award, ArrowRight } from "lucide-react";

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Challenge",
      description: "Select from our range of funded trader programs. Start with a demo account to prove your trading skills.",
      icon: Target,
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
    },
    {
      number: "02",
      title: "Pass the Evaluation",
      description: "Trade with discipline and meet our profit targets while managing risk. We provide you with all the tools and support needed.",
      icon: TrendingUp,
      color: "text-emerald-400",
      bgColor: "bg-emerald-400/10",
    },
    {
      number: "03",
      title: "Get Funded",
      description: "Once you pass, receive a funded account with real capital. Trade with our money and keep up to 90% of the profits you generate.",
      icon: Award,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
    },
    {
      number: "04",
      title: "Start Earning",
      description: "Receive your first payout within 14 days. Scale your account as you hit profit targets and grow your trading career.",
      icon: CheckCircle2,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
    },
  ];

  const features = [
    {
      title: "No Time Limit",
      description: "Trade at your own pace. Take as long as you need to pass your evaluation.",
    },
    {
      title: "Flexible Trading",
      description: "Trade any strategy, any style. We support scalping, day trading, swing trading, and more.",
    },
    {
      title: "24/7 Support",
      description: "Our team is always available to help you succeed. Real humans, real support.",
    },
    {
      title: "Fast Payouts",
      description: "Request withdrawals anytime. Get paid within 24-48 hours via multiple payment methods.",
    },
    {
      title: "Advanced Tools",
      description: "Access premium trading platforms, real-time data, and professional analytics.",
    },
    {
      title: "Scale Your Account",
      description: "Grow from $10K to $200K+ as you consistently hit profit targets.",
    },
  ];

  return (
    <div className="bg-[#0F1115] text-white pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-sm font-semibold mb-6">
            Simple & Transparent Process
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-white to-yellow-400 bg-clip-text text-transparent">
            How It Works
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Four simple steps to become a funded trader and start earning real profits with our capital.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative bg-linear-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50 rounded-2xl p-8 md:p-10 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Number */}
                  <div className="text-6xl font-bold text-slate-800/50 group-hover:text-slate-700/50 transition-colors">{step.number}</div>

                  {/* Icon */}
                  <div className={`${step.bgColor} ${step.color} p-4 rounded-xl`}>
                    <step.icon size={32} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">{step.title}</h3>
                    <p className="text-slate-400 text-lg leading-relaxed">{step.description}</p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                      <ArrowRight className="text-yellow-400 rotate-90" size={24} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Traders Choose <span className="text-yellow-400">Bull House Apex</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-emerald-400/10 text-emerald-400 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle2 size={20} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-yellow-400/10 to-emerald-400/10 border border-yellow-400/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who are already earning with Bull House Apex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-0.5"
            >
              Start Your Challenge
            </Link>
            <Link
              to="/faq"
              className="bg-slate-800/50 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 border border-slate-700"
            >
              View FAQ
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
