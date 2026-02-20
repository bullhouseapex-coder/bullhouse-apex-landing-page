import { useTheme } from "@/context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BH-logo.png";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
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
      className={`fixed w-full top-0 z-20 ${scrolled ? "py-4 bg-[oklch(0.145_0_0)]/90 backdrop-blur-md shadow-sm dark:bg-background/90" : "py-6 bg-transparent"} transition-all duration-300`}
    >
      <div className="flex h-16 justify-between items-center px-4 container mx-auto">
        {/* Logo */}
        <div className="flex gap-2 cursor-pointer">
          <div className="w-20 drop-shadow-xs drop-shadow-black rounded p-1 dark:bg-transparent">
            <img src={logo} className="w-full" alt="logo" />
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center leading-none">
            <div className="flex items-center gap-2">
              <span className="text-slate-300 font-bold text-2xl tracking-tight dark:text-slate-300">BULL HOUSE</span>
            </div>
            <div className="flex w-full text-center items-center gap-2">
              <div className="grow h-0.5 bg-slate-400"></div>
              <span className="text-[0.65rem] tracking-[0.35em] text-amber-500 font-bold uppercase">APEX</span>
              <div className="grow h-0.5 bg-slate-400"></div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="ml-20 flex gap-5">
          <button
            className="p-2 rounded-full text-slate-300 dark:text-slate-300 hover:bg-slate-100/30 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          >
            {theme == "light" ? <Moon /> : <Sun />}
          </button>

          <button className="text-sm font-medium text-slate-300 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
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
