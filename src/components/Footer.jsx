import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GitHub, Linkedin } from "./CustomIcons";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-slate-950 border-t border-white/5 py-12 px-6 relative overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

                {/* Left Side: Copyright */}
                <div className="text-center md:text-left">
                    <p className="text-sm text-slate-400">
                        &copy; {new Date().getFullYear()} Abhinand T V. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-650 mt-1.5 font-mono">
                        Designed & Engineered with React + Tailwind CSS
                    </p>
                </div>

                {/* Middle/Right Side: Actions & Links */}
                <div className="flex items-center gap-6">
                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/abhinand-ab"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                            title="GitHub"
                        >
                            <GitHub className="w-5 h-5" />
                        </a>
                        <a
                            href="https://linkedin.com/in/abhinand-tv-"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                            title="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="mailto:abhinandtvvelam@gmail.com"
                            className="text-slate-400 hover:text-white transition-colors"
                            title="Email"
                        >
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>

                    <span className="w-px h-6 bg-white/10 hidden sm:inline-block" />

                    {/* Scroll to Top */}
                    <button
                        onClick={scrollToTop}
                        className="p-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 rounded-full transition-all duration-200 group cursor-pointer"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                </div>

            </div>
        </footer>
    );
}
