import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const placeholders: { title: string; href: string; description: string }[] = [
  {
    title: "Title 1",
    href: "/title1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque ad magni? Totam aliquam sed quasi in saepe repellat, animi blanditiis, magnam unde accusamus, repellendus vitae! Vero atque, rem praesentium impedit corporis repudiandae distinctio blanditiis totam accusantium explicabo veniam numquam!",
  },
  {
    title: "Title 2",
    href: "/title2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque ad magni? Totam aliquam sed quasi in saepe repellat, animi blanditiis, magnam unde accusamus, repellendus vitae! Vero atque, rem praesentium impedit corporis repudiandae distinctio blanditiis totam accusantium explicabo veniam numquam!",
  },
  {
    title: "Title 3",
    href: "/title3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque ad magni? Totam aliquam sed quasi in saepe repellat, animi blanditiis, magnam unde accusamus, repellendus vitae! Vero atque, rem praesentium impedit corporis repudiandae distinctio blanditiis totam accusantium explicabo veniam numquam!",
  },
  {
    title: "Title 4",
    href: "/title4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque ad magni? Totam aliquam sed quasi in saepe repellat, animi blanditiis, magnam unde accusamus, repellendus vitae! Vero atque, rem praesentium impedit corporis repudiandae distinctio blanditiis totam accusantium explicabo veniam numquam!",
  },
  {
    title: "Title 5",
    href: "/title5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque ad magni? Totam aliquam sed quasi in saepe repellat, animi blanditiis, magnam unde accusamus, repellendus vitae! Vero atque, rem praesentium impedit corporis repudiandae distinctio blanditiis totam accusantium explicabo veniam numquam!",
  },
  {
    title: "Title 6",
    href: "/title6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure itaque ad magni? Totam aliquam sed quasi in saepe repellat, animi blanditiis, magnam unde accusamus, repellendus vitae! Vero atque, rem praesentium impedit corporis repudiandae distinctio blanditiis totam accusantium explicabo veniam numquam!",
  },
];

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

function ListItem({ title, children, href, ...props }: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
}
