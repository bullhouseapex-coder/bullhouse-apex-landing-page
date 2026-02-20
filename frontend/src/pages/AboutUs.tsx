import { Link } from "react-router";
import { Target, Users, TrendingUp, Shield, Award, Globe } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { label: "Funded Traders", value: "10,000+" },
    { label: "Total Payouts", value: "$25M+" },
    { label: "Countries", value: "120+" },
    { label: "Success Rate", value: "78%" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "We operate with complete transparency. No hidden fees, no unclear rules. What you see is what you get.",
    },
    {
      icon: Users,
      title: "Trader-First Approach",
      description: "Our success depends on yours. We provide the tools, capital, and support you need to thrive.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously improve our platform and offerings based on trader feedback and market trends.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards and expect the same from our funded traders.",
    },
  ];

  const team = [
    {
      name: "Michael Chen",
      role: "CEO & Founder",
      description: "15+ years in proprietary trading and risk management at top-tier institutions.",
      image: "👨‍💼",
    },
    {
      name: "Sarah Martinez",
      role: "Head of Trading",
      description: "Former hedge fund manager with expertise in systematic and discretionary trading.",
      image: "👩‍💼",
    },
    {
      name: "David Thompson",
      role: "CTO",
      description: "Technology veteran who built trading platforms for Fortune 500 financial firms.",
      image: "👨‍💻",
    },
    {
      name: "Lisa Johnson",
      role: "Head of Trader Success",
      description: "Passionate about education and helping traders reach their full potential.",
      image: "👩‍🏫",
    },
  ];

  return (
    <div className="bg-[#0F1115] text-white pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-emerald-400 text-sm font-semibold mb-6">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-white to-emerald-400 bg-clip-text text-transparent">
            About Bull House Apex
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to democratize professional trading by providing talented traders with the capital they need to succeed.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50 rounded-2xl p-8 text-center hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">{stat.value}</div>
                <div className="text-slate-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50 rounded-2xl p-10 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-yellow-400/10 text-yellow-400 rounded-xl flex items-center justify-center">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-bold">Our Mission</h2>
            </div>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Bull House Apex was founded in 2020 with a simple yet powerful vision: to give skilled traders access to the capital they deserve,
              without the barriers that traditional prop firms impose.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              We believe that talent exists everywhere, but opportunity doesn't. That's why we've built a platform that's accessible, transparent, and
              designed to help traders succeed—regardless of their background or location.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Today, we're proud to have funded thousands of traders across 120+ countries, paying out over $25 million in profits. But we're just
              getting started.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-yellow-400">Core Values</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-8 hover:border-emerald-400/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-400/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                <p className="text-slate-400 text-lg leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Meet the <span className="text-yellow-400">Team</span>
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Our leadership team brings decades of experience from top financial institutions and technology companies.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-slate-900/50 border border-slate-800/50 rounded-xl p-6 text-center hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold mb-1 text-white">{member.name}</h3>
                <div className="text-yellow-400 text-sm font-semibold mb-3">{member.role}</div>
                <p className="text-slate-400 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-emerald-400/10 to-blue-400/10 border border-emerald-400/20 rounded-2xl p-10 text-center">
          <div className="w-16 h-16 bg-emerald-400/10 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Globe size={32} />
          </div>
          <h2 className="text-3xl font-bold mb-4">Global Reach, Local Support</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            With traders in over 120 countries and 24/7 multilingual support, we're building a truly global community of successful traders.
          </p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">🇺🇸 USA</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">🇬🇧 UK</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">🇩🇪 Germany</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">🇦🇺 Australia</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">🇸🇬 Singapore</span>
            <span className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full">🇧🇷 Brazil</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-yellow-400/10 to-emerald-400/10 border border-yellow-400/20 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Trading Community</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">Be part of a growing community of successful traders from around the world.</p>
          <Link
            to="/login"
            className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-0.5"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
