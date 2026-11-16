import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { GitHub, Linkedin } from "./CustomIcons";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-[#0f0f10] border-t border-[rgba(237,237,237,0.08)] py-10 px-6 relative">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

                {/* Left Side: Metadata */}
                <div className="text-center md:text-left">
                    <p className="text-xs text-[#a1a1a6]">
                        &copy; {new Date().getFullYear()} Abhinand T V · Computer Science, CET Trivandrum
                    </p>
                    <p className="text-[11px] text-[#71717a] mt-1 font-mono">
                        Engineered with React, Tailwind CSS & Leaflet GIS
                    </p>
                </div>

                {/* Right Side: Links & Scroll to top */}
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-3">
                        <a
                            href="https://github.com/abhinand-ab"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#a1a1a6] hover:text-[#ededed] transition-colors p-1"
                            title="GitHub Profile"
                        >
                            <GitHub className="w-4 h-4" />
                        </a>
                        <a
                            href="https://linkedin.com/in/abhinand-tv-"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#a1a1a6] hover:text-[#ededed] transition-colors p-1"
                            title="LinkedIn Profile"
                        >
                            <Linkedin className="w-4 h-4" />
                        </a>
                        <a
                            href="mailto:abhinandtvvelam@gmail.com"
                            className="text-[#a1a1a6] hover:text-[#ededed] transition-colors p-1"
                            title="Email Abhinand"
                        >
                            <Mail className="w-4 h-4" />
                        </a>
                    </div>

                    <span className="w-px h-4 bg-[rgba(237,237,237,0.1)] hidden sm:inline-block" />

                    <button
                        onClick={scrollToTop}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#19191b] hover:bg-[#222225] text-[#a1a1a6] hover:text-[#ededed] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.18)] rounded-md text-xs font-mono transition-colors duration-150 cursor-pointer"
                        aria-label="Back to top"
                    >
                        <span>Top</span>
                        <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                </div>

            </div>
        </footer>
    );
}
