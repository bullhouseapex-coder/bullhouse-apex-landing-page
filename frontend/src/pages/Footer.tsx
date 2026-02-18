import { Twitter, Instagram, Linkedin, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-slate-600 dark:text-slate-400 border-t">
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white">
              <div className="w-8 h-8 bg-emerald-500 rounded-sm flex items-center justify-center">
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-10 border-b-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                BULL HOUSE <span className="text-emerald-500">APEX</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Bull House Apex is a premium proprietary trading firm empowering traders worldwide with capital and technology.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-300 dark:bg-slate-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Evaluation Process
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Scaling Plan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Trading Rules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Payout Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Affiliate Program
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Live Chat
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 mt-0.5 shrink-0" />
                <span>
                  Las Pinas,
                  <br />
                  Suite 400, New York,
                  <br />
                  NY 10005, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500 shrink-0" />
                <a href="mailto:support@bullhouseapex.com" className="hover:text-white transition-colors">
                  support@bullhouseapex.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" py-8 text-xs text-slate-600 text-center px-6">
        <p className="mb-4 max-w-4xl mx-auto">
          Risk Disclosure: Trading financial markets involves a high level of risk and may not be suitable for all investors. Bull House Apex provides
          simulated trading accounts and educational services. All trading activities occur in a simulated environment. Any performance results are
          hypothetical and do not represent actual trading.
        </p>
        <p>&copy; {new Date().getFullYear()} Bull House Apex. All rights reserved.</p>
      </div>
    </footer>
  );
}
