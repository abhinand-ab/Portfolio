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
                ? "bg-[#030712]/60 backdrop-blur-xl border-b border-cyan-500/10 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Brand Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-tight text-white flex items-center gap-1 group"
                >
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                        Abhinand
                    </span>
                    <span className="text-cyan-500 font-black">.</span>
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
                                        className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? "text-white" : "text-slate-400 hover:text-white"
                                            }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center text-xs font-semibold px-4 py-2 bg-[#081229]/40 hover:bg-[#0c1e45]/60 hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(6,182,212,0.15)] text-white rounded-full border border-cyan-500/20 transition-all duration-200 gap-1 group"
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
                className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-[#030712]/90 backdrop-blur-lg border-l border-cyan-500/10 p-6 shadow-2xl transition-transform duration-300 md:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
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
                                <li key={item.name} className="border-b border-cyan-500/10 pb-3">
                                    <a
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block text-lg font-medium ${isActive ? "text-cyan-400 font-semibold" : "text-slate-350 hover:text-white"
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
                        className="flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl text-sm font-semibold transition-all shadow-md shadow-blue-500/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)]"
                    >
                        Get In Touch
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
