import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import { GitHub, Linkedin } from "./CustomIcons";

const technologies = [
    "MERN Stack",
    "React.js",
    "Node.js & Express",
    "MongoDB Atlas",
    "Geospatial GIS (Leaflet)",
    "Full-Stack Web Apps"
];

export default function Hero() {
    const [currentTechIndex, setCurrentTechIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const activeWord = technologies[currentTechIndex];
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayedText((prev) => prev.slice(0, -1));
                setTypingSpeed(45);
            }, typingSpeed);
        } else {
            timer = setTimeout(() => {
                setDisplayedText((prev) => activeWord.slice(0, prev.length + 1));
                setTypingSpeed(80);
            }, typingSpeed);
        }

        if (!isDeleting && displayedText === activeWord) {
            // Pause at full word
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && displayedText === "") {
            setIsDeleting(false);
            setCurrentTechIndex((prev) => (prev + 1) % technologies.length);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentTechIndex, typingSpeed]);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent grain">

            {/* Decorative Nebula Elements */}
            <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-[#D4AF37]/2 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#E8C547]/2 rounded-full blur-[90px] animate-pulse-slow" />
            <div className="absolute top-[40%] right-[25%] w-[180px] h-[180px] bg-[#D4AF37]/1.5 rounded-full blur-[70px]" />

            <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Text Section */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase mb-6 w-fit backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
                        </span>
                        Welcome to my space
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-4"
                    >
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-[#D4AF37] to-[#F4D35E] bg-clip-text text-transparent md:whitespace-nowrap">
                            Abhinand T V
                        </span>
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-2xl sm:text-3xl md:text-4xl font-medium text-slate-300 mb-6 flex items-center gap-2 flex-wrap"
                    >
                        <span>Full-Stack Engineer specialized in</span>
                        <span className="text-[#D4AF37] border-r-2 border-[#D4AF37] pr-1 min-h-[40px] inline-block font-semibold">
                            {displayedText}
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-base sm:text-lg text-slate-400 leading-relaxed mb-10 max-w-xl"
                    >
                        Passionate B.Tech Computer Science student at College of Engineering Trivandrum (CET). Dedicated to building scalable MERN web applications, geospatial platforms with GIS integration, and intuitive frontend experiences that bridge engineering and design.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-wrap gap-4 items-center"
                    >
                        <a
                            href="#projects"
                            className="px-6 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#F4D35E] hover:brightness-110 text-[#0B0B0B] rounded-xl font-semibold tracking-wide shadow-lg shadow-[#D4AF37]/15 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                        >
                            Explore Projects
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="mailto:abhinandtvvelam@gmail.com"
                            className="px-6 py-3.5 bg-transparent hover:bg-[#D4AF37]/12 backdrop-blur-md text-white rounded-xl font-medium border border-[#D4AF37]/50 hover:border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.2)] transition-all flex items-center gap-2 cursor-pointer"
                        >
                            Get in Touch
                        </a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 ml-2">
                            <a
                                href="https://github.com/abhinand-ab"
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 bg-[rgba(24,24,24,0.45)] hover:bg-[rgba(24,24,24,0.8)] backdrop-blur-md text-[#B5B5B5] hover:text-[#D4AF37] rounded-xl border border-[rgba(212,175,55,0.15)] hover:border-[#D4AF37]/55 hover:shadow-[0_0_12px_rgba(212,175,55,0.2)] transition-all flex items-center justify-center pointer-events-auto"
                                title="GitHub Portfolio"
                            >
                                <GitHub className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/abhinand-tv-"
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 bg-[rgba(24,24,24,0.45)] hover:bg-[rgba(24,24,24,0.8)] backdrop-blur-md text-[#B5B5B5] hover:text-[#D4AF37] rounded-xl border border-[rgba(212,175,55,0.15)] hover:border-[#D4AF37]/55 hover:shadow-[0_0_12px_rgba(212,175,55,0.2)] transition-all flex items-center justify-center pointer-events-auto"
                                title="LinkedIn Profile"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1gKWcd1Qyd_vJnlgTQgl4qgmCr2PMvOF3/view?usp=drivesdk" // Mock Resume File
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 bg-[rgba(24,24,24,0.45)] hover:bg-[rgba(24,24,24,0.8)] backdrop-blur-md text-[#B5B5B5] hover:text-[#D4AF37] rounded-xl border border-[rgba(212,175,55,0.15)] hover:border-[#D4AF37]/55 hover:shadow-[0_0_12px_rgba(212,175,55,0.2)] transition-all flex items-center justify-center pointer-events-auto"
                                title="View CV / Resume"
                            >
                                <FileText className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                </div>

                {/* Profile / Interactive Visual Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 0 }}
                    animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.2 },
                        scale: { duration: 0.8, delay: 0.2 },
                        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="lg:col-span-5 flex justify-center items-center relative"
                >
                    {/* Main Visual Circle */}
                    <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-[rgba(212,175,55,0.2)] flex items-center justify-center p-4 bg-gradient-to-tr from-[#181818]/65 to-[#121212]/30 backdrop-blur-3xl shadow-xl shadow-black/80 glassmorphism">
                        {/* Planetary Orbit Paths and Orbiting Particles */}
                        <div className="absolute inset-0 rounded-full border border-[rgba(212,175,55,0.12)] pointer-events-none">
                            <div className="absolute inset-0 animate-orbit-cw">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D4AF37] shadow-[0_0_8px_#D4AF37]" />
                            </div>
                        </div>
                        <div className="absolute inset-4 rounded-full border border-[rgba(212,175,55,0.08)] pointer-events-none">
                            <div className="absolute inset-0 animate-orbit-ccw">
                                <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#E8C547] shadow-[0_0_8px_#E8C547]" />
                            </div>
                        </div>

                        {/* Displaying some beautiful interactive coding text in a cool editor layout */}
                        <div className="w-[85%] h-[85%] rounded-full overflow-hidden bg-[rgba(15,15,15,0.85)] border border-white/5 p-6 flex flex-col justify-center text-xs font-mono text-[#B5B5B5] leading-relaxed shadow-inner">
                            <span className="text-[#E8C547] font-bold">const</span> developer = {"{"}
                            <div className="pl-4">
                                <span>name: </span><span className="text-[#F8F8F8]">"Abhinand T V"</span>,
                                <br />
                                <span>role: </span><span className="text-[#F8F8F8]">"Full-Stack Dev"</span>,
                                <br />
                                <span>education: </span><span className="text-[#F8F8F8]">"CSE @ CET"</span>,
                                <br />
                                <span>core: </span><span className="text-[#D4AF37]">[</span>
                                <span className="text-[#F8F8F8]">"React"</span>, <span className="text-[#F8F8F8]">"Node"</span>, <span className="text-[#F8F8F8]">"GIS"</span>
                                <span className="text-[#D4AF37]">]</span>,
                                <br />
                                <span>location: </span><span className="text-[#F8F8F8]">"Kerala, India"</span>
                            </div>
                            {"};"}
                            <div className="mt-4 text-[10px] text-slate-500 border-t border-white/5 pt-4 text-center">
                                &lt;Interactive Workspace /&gt;
                            </div>
                        </div>

                        {/* Floating Orbits (badges looking like satellites) */}
                        <motion.div
                            animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 left-1/3 bg-[rgba(24,24,24,0.9)] backdrop-blur-md border border-[rgba(212,175,55,0.25)] hover:border-[#D4AF37] shadow-md hover:shadow-[0_0_12px_rgba(212,175,55,0.25)] text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer font-sans"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#D4AF37] inline-block animate-pulse shadow-[0_0_6px_#D4AF37]" />
                            React.js
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 right-1/4 bg-[rgba(24,24,24,0.9)] backdrop-blur-md border border-[rgba(212,175,55,0.25)] hover:border-[#E8C547] shadow-md hover:shadow-[0_0_12px_rgba(232,197,71,0.25)] text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer font-sans"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#E8C547] inline-block animate-pulse shadow-[0_0_6px_#E8C547]" />
                            Node.js
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, 6, 0], y: [0, -5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/3 -right-6 bg-[rgba(24,24,24,0.9)] backdrop-blur-md border border-[rgba(212,175,55,0.25)] hover:border-[#F4D35E] shadow-md hover:shadow-[0_0_12px_rgba(244,211,94,0.25)] text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer font-sans"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#F4D35E] inline-block animate-pulse shadow-[0_0_6px_#F4D35E]" />
                            Geospatial GIS
                        </motion.div>
                    </div>
                </motion.div>

            </div>

            {/* Floating Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10 opacity-70 hover:opacity-100 transition-opacity">
                <a href="#about" className="flex flex-col items-center gap-1.5">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-semibold">Scroll Down</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-9 rounded-full border border-slate-755 p-1 flex justify-center text-slate-400"
                    >
                        <span className="w-1.5 h-2 bg-[#D4AF37] rounded-full" />
                    </motion.div>
                </a>
            </div>

        </section>
    );
}
