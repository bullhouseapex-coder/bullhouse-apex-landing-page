import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { name: "Programs", href: "#programs" },
    { name: "How it Works", href: "#how-it-works" },
    { name: "About Us", href: "#about-us" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`sticky top-0 ${scrolled ? "border-b py-4 bg-white/90 backdrop-blur-md shadow-sm" : "py-6 bg-transparent"} transition-all duration-300`}
    >
      <div className="flex h-16 justify-between items-center px-4 container mx-auto">
        {/* Logo */}
        <div className="flex flex-col items-center justify-center leading-none">
          <div className="flex items-center gap-2">
            <span className="border-2 border-amber-500 px-1.5 py-0.5 text-slate-900 font-bold text-2xl tracking-tight">BULL</span>
            <span className="text-slate-900 font-bold text-2xl tracking-tight">HOUSE</span>
          </div>
          <span className="text-[0.65rem] tracking-[0.35em] text-amber-500 font-bold uppercase mt-1">APEX</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="ml-20 flex gap-2">
          <button className="text-sm font-medium text-slate-900 hover:text-emerald-600 transition-colors">
            <Link to={"/login"}>Log In</Link>
          </button>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-amber-500/20bg-amber-500">
            Start a Challenge
          </button>
        </div>
      </div>
    </nav>
  );
}
