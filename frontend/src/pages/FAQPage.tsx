import { Link } from "react-router";
import { MessageCircle, Mail, Phone } from "lucide-react";
import FAQ from "@/components/FAQ";

export default function FAQPage() {
  return (
    <div className="bg-[#0F1115] text-white pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-emerald-400/10 border border-emerald-400/20 rounded-full text-emerald-400 text-sm font-semibold mb-6">
            Help Center
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-linear-to-r from-white via-white to-emerald-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our funded trader programs, payouts, and trading rules.
          </p>
        </div>
      </section>

      {/* FAQ Component */}
      <section className="container mx-auto px-6 mb-20">
        <FAQ />
      </section>

      {/* Still Have Questions Section */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-linear-to-br from-slate-900/50 to-slate-800/30 border border-slate-800/50 rounded-2xl p-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-slate-400 text-lg mb-8">Our support team is here to help you 24/7. Reach out anytime!</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                <div className="w-12 h-12 bg-yellow-400/10 text-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={24} />
                </div>
                <h3 className="font-bold mb-2">Live Chat</h3>
                <p className="text-slate-400 text-sm mb-4">Chat with our team instantly</p>
                <button className="text-yellow-400 font-semibold hover:text-yellow-300 transition-colors">Start Chat</button>
              </div>

              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                <div className="w-12 h-12 bg-emerald-400/10 text-emerald-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail size={24} />
                </div>
                <h3 className="font-bold mb-2">Email Support</h3>
                <p className="text-slate-400 text-sm mb-4">Get help via email</p>
                <a href="mailto:support@bullhouseapex.com" className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors">
                  Send Email
                </a>
              </div>

              <div className="bg-slate-900/50 border border-slate-700 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-400/10 text-blue-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone size={24} />
                </div>
                <h3 className="font-bold mb-2">Phone Support</h3>
                <p className="text-slate-400 text-sm mb-4">Call us directly</p>
                <a href="tel:+1-800-BULL-APX" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                  +1-800-BULL-APX
                </a>
              </div>
            </div>

            <Link
              to="/login"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-slate-900 px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-yellow-400/40 hover:-translate-y-0.5"
            >
              Start Your Challenge
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
