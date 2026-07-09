import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Simple scroll spy logic
            const sections = ["about", "skills", "projects", "contact"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const top = el.offsetTop;
                    const height = el.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-[rgba(18,18,18,0.55)] backdrop-blur-md border-b border-[rgba(212,175,55,0.15)] py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Brand Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-tight text-white flex items-center gap-1 group"
                >
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D35E] bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                        Abhinand
                    </span>
                    <span className="text-[#D4AF37] font-black">.</span>
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <li key={item.name} className="relative">
                                    <a
                                        href={item.href}
                                        className={`text-sm font-medium tracking-wide transition-colors duration-200 relative group pb-1 ${isActive ? "text-[#D4AF37]" : "text-[#B5B5B5] hover:text-[#F4D35E]"
                                            }`}
                                    >
                                        {item.name}
                                        <span className={`absolute -bottom-0.5 left-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
                                            }`} />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2 bg-transparent hover:bg-[#D4AF37]/15 hover:border-[#D4AF37] hover:shadow-[0_0_12px_rgba(212,175,55,0.25)] text-white rounded-full border border-[#D4AF37]/50 transition-all duration-200 gap-1 group cursor-pointer"
                    >
                        Hire Me
                        <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                </nav>

                {/* Mobile Menu button */}
                <button
                    className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-[#121212]/98 backdrop-blur-lg border-l border-[rgba(212,175,55,0.15)] p-6 shadow-2xl transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center mb-10">
                    <span className="text-xl font-bold text-white">Navigation</span>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1.5 text-slate-400 hover:text-white"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                <nav className="flex flex-col gap-6">
                    <ul className="flex flex-col gap-4">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <li key={item.name} className="border-b border-[#D4AF37]/10 pb-3">
                                    <a
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block text-lg font-medium ${isActive ? "text-[#D4AF37] font-semibold" : "text-[#B5B5B5] hover:text-white"
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <a
                        href="#contact"
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E8C547] hover:brightness-110 text-[#0B0B0B] rounded-xl text-sm font-semibold transition-all shadow-md shadow-[#D4AF37]/15 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                    >
                        Get In Touch
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
