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

            const sections = ["about", "skills", "projects", "contact"];
            const scrollPosition = window.scrollY + 120;

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
            className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
                isScrolled
                    ? "bg-[#141415]/90 backdrop-blur-md border-b border-[rgba(237,237,237,0.08)] py-3.5"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                {/* Brand Wordmark */}
                <a
                    href="#home"
                    className="text-base font-semibold tracking-tight text-[#ededed] flex items-center gap-1.5 group"
                >
                    <span>Abhinand T V</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    <ul className="flex items-center gap-6">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className={`text-sm transition-colors duration-150 relative py-1 ${
                                            isActive
                                                ? "text-[#ededed] font-medium"
                                                : "text-[#a1a1a6] hover:text-[#ededed]"
                                        }`}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D4AF37] rounded-full" />
                                        )}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center text-xs font-medium px-3.5 py-1.5 bg-[#19191b] hover:bg-[#222225] text-[#ededed] hover:text-white rounded-lg border border-[rgba(237,237,237,0.12)] hover:border-[rgba(237,237,237,0.24)] transition-colors duration-150 gap-1.5"
                    >
                        Contact
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#a1a1a6]" />
                    </a>
                </nav>

                {/* Mobile Menu button */}
                <button
                    className="md:hidden p-2 text-[#a1a1a6] hover:text-[#ededed] transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <div
                className={`fixed inset-y-0 right-0 z-40 w-full max-w-xs bg-[#141415] border-l border-[rgba(237,237,237,0.08)] p-6 shadow-2xl transition-transform duration-200 md:hidden ${
                    mobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex justify-between items-center mb-8 pb-4 border-b border-[rgba(237,237,237,0.08)]">
                    <span className="text-sm font-medium text-[#ededed]">Navigation</span>
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-1.5 text-[#a1a1a6] hover:text-[#ededed]"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <nav className="flex flex-col gap-6">
                    <ul className="flex flex-col gap-3">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.slice(1);
                            return (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`block py-2 text-base transition-colors ${
                                            isActive
                                                ? "text-[#D4AF37] font-medium"
                                                : "text-[#a1a1a6] hover:text-[#ededed]"
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
                        className="flex items-center justify-center gap-2 py-2.5 bg-[#D4AF37] text-[#0f0f10] rounded-lg text-sm font-medium hover:brightness-105 transition-all"
                    >
                        Get in touch
                        <ArrowUpRight className="w-4 h-4" />
                    </a>
                </nav>
            </div>
        </header>
    );
}
