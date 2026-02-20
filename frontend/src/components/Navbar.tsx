import { useTheme } from "@/context/ThemeContext";
import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BH-logo.png";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NAV_LINKS = [
    { name: "Programs", href: "/" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "About Us", href: "/about-us" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
  ];

  const handleOpenNavbar = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-20 py-4 bg-[#0F1115]/95 ${scrolled || isNavOpen ? "py-4 backdrop-blur-md shadow-sm" : "py-6 dark:bg-transparent"} transition-all duration-300`}
    >
      <div className="flex h-16 justify-between items-center px-4 container mx-auto">
        {/* Logo */}
        <div className="flex gap-2 cursor-pointer">
          <div className="w-16 sm:w-20 drop-shadow-xs drop-shadow-black rounded p-1 dark:bg-transparent">
            <img src={logo} className="w-full" alt="logo" />
          </div>
          <div className="shrink-0 flex flex-col items-center justify-center leading-none">
            <div className="flex items-center gap-2">
              <a href="/" className="text-slate-300 font-bold text-md sm:text-2xl tracking-tight ">
                BULL HOUSE
              </a>
            </div>
            <div className="flex w-full text-center items-center gap-2">
              <div className="grow h-0.5 bg-slate-400"></div>
              <span className="text-[0.65rem] tracking-[0.35em] text-amber-500 font-bold uppercase">APEX</span>
              <div className="grow h-0.5 bg-slate-400"></div>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-medium text-slate-300  hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex">
          <button
            className="mr-2 p-2 rounded-full text-slate-300  hover:bg-slate-100/30 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setTheme(theme == "light" ? "dark" : "light")}
          >
            {theme == "light" ? <Moon /> : <Sun />}
          </button>

          {/* Login & Challenge Button */}
          <div className="hidden lg:flex gap-5">
            <button className="text-sm font-medium text-slate-300 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Link to={"/login"}>Log In</Link>
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-amber-500/20bg-amber-500">
              Start a Challenge
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={handleOpenNavbar} className="text-white p-2">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Tablet & Mobile Navigation */}
      <div className={`${isNavOpen ? "h-100" : "h-0"} transition-all duration-300 overflow-hidden block lg:hidden`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-slate-300  hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-5 mt-auto">
            <button className="text-sm font-medium text-slate-300 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
              <Link to={"/login"}>Log In</Link>
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-amber-500/20bg-amber-500">
              Start a Challenge
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
