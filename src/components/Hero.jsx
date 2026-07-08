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
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 bg-transparent grain">

            {/* Decorative Nebula Elements */}
            <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-[#0c4a6e]/5 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-[#1e1b4b]/5 rounded-full blur-[90px] animate-pulse-slow" />
            <div className="absolute top-[40%] right-[25%] w-[180px] h-[180px] bg-[#083344]/5 rounded-full blur-[70px]" />

            <div className="max-w-[1500px] mx-auto px-16 sm:px-24 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

                {/* Text Section */}
                <div className="flex flex-col justify-center text-left">

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-6 w-fit backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
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
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent md:whitespace-nowrap">
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
                        <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 min-h-[40px] inline-block font-semibold">
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
                            className="px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-xl font-medium tracking-wide shadow-md shadow-blue-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            Explore Projects
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="mailto:abhinandtvvelam@gmail.com"
                            className="px-6 py-3.5 bg-slate-950/40 hover:bg-slate-900/60 backdrop-blur-md text-white rounded-xl font-medium border border-white/10 hover:border-cyan-500/35 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all flex items-center gap-2"
                        >
                            Get in Touch
                        </a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 ml-2">
                            <a
                                href="https://github.com/abhinand-ab"
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 bg-[#081229]/40 hover:bg-[#0c1e45]/60 backdrop-blur-md text-slate-350 hover:text-cyan-400 rounded-xl border border-white/10 hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all flex items-center justify-center pointer-events-auto"
                                title="GitHub Portfolio"
                            >
                                <GitHub className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/abhinand-tv-"
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 bg-[#081229]/40 hover:bg-[#0c1e45]/60 backdrop-blur-md text-slate-350 hover:text-cyan-400 rounded-xl border border-white/10 hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all flex items-center justify-center pointer-events-auto"
                                title="LinkedIn Profile"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://quizz-app-theta-seven.vercel.app/" // Using a projects link for context or resume link placeholder
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 bg-[#081229]/40 hover:bg-[#0c1e45]/60 backdrop-blur-md text-slate-350 hover:text-cyan-400 rounded-xl border border-white/10 hover:border-cyan-500/35 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all flex items-center justify-center pointer-events-auto"
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
                    className="flex justify-center items-center relative w-full"
                >
                    <div className="hero-visual-wrapper relative flex items-center justify-center select-none">
                        {/* Main Visual Circle */}
                        <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-cyan-500/10 flex items-center justify-center p-4 bg-gradient-to-tr from-slate-950/60 to-blue-950/20 backdrop-blur-3xl shadow-xl shadow-cyan-950/15 glassmorphism">
                            {/* Planetary Orbit Paths and Orbiting Particles */}
                            <div className="absolute inset-0 rounded-full border border-cyan-500/10 pointer-events-none">
                                <div className="absolute inset-0 animate-orbit-cw">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
                                </div>
                            </div>
                            <div className="absolute inset-4 rounded-full border border-blue-500/10 pointer-events-none">
                                <div className="absolute inset-0 animate-orbit-ccw">
                                    <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#60a5fa]" />
                                </div>
                            </div>

                            {/* Displaying some beautiful interactive coding text in a cool editor layout */}
                            <div className="w-[85%] h-[85%] rounded-[2rem] overflow-hidden bg-slate-950/40 border border-white/5 p-6 flex flex-col justify-center text-xs font-mono text-cyan-300/90 leading-relaxed shadow-inner">
                                <span className="text-cyan-455 font-bold">const</span> developer = {"{"}
                                <div className="pl-4">
                                    <span>name: </span><span className="text-emerald-300">"Abhinand T V"</span>,
                                    <br />
                                    <span>role: </span><span className="text-emerald-300">"Full-Stack Dev"</span>,
                                    <br />
                                    <span>education: </span><span className="text-emerald-300">"CSE @ CET"</span>,
                                    <br />
                                    <span>core: </span><span className="text-cyan-300">[</span>
                                    <span className="text-amber-300">"React"</span>, <span className="text-amber-300">"Node"</span>, <span className="text-amber-300">"GIS"</span>
                                    <span className="text-cyan-300">]</span>,
                                    <br />
                                    <span>location: </span><span className="text-emerald-300">"Kerala, India"</span>
                                </div>
                                {"};"}
                                <div className="mt-4 text-[10px] text-slate-550 border-t border-white/5 pt-4 text-center">
                                    &lt;Interactive Workspace /&gt;
                                </div>
                            </div>

                            {/* Floating Orbits (badges looking like satellites) */}
                            <motion.div
                                animate={{ y: [0, -8, 0], x: [0, 4, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 left-1/3 bg-[#081229]/80 backdrop-blur-md border border-cyan-500/25 hover:border-cyan-400 shadow-md hover:shadow-[0_0_12px_rgba(34,211,238,0.25)] text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer font-sans"
                            >
                                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-pulse shadow-[0_0_6px_#22d3ee]" />
                                React.js
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
                                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-4 right-1/4 bg-[#081229]/80 backdrop-blur-md border border-emerald-500/25 hover:border-emerald-400 shadow-md hover:shadow-[0_0_12px_rgba(52,211,153,0.25)] text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer font-sans"
                            >
                                <span className="w-2 h-2 rounded-full bg-emerald-405 inline-block animate-pulse shadow-[0_0_6px_#34d399]" />
                                Node.js
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, 6, 0], y: [0, -5, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/3 -right-6 bg-[#081229]/80 backdrop-blur-md border border-amber-500/25 hover:border-amber-400 shadow-md hover:shadow-[0_0_12px_rgba(251,191,36,0.25)] text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer font-sans"
                            >
                                <span className="w-2 h-2 rounded-full bg-amber-400 inline-block animate-pulse shadow-[0_0_6px_#fbbf24]" />
                                Geospatial GIS
                            </motion.div>
                        </div>
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
                        className="w-5 h-9 rounded-full border border-slate-750 p-1 flex justify-center text-slate-400"
                    >
                        <span className="w-1.5 h-2 bg-cyan-500 rounded-full" />
                    </motion.div>
                </a>
            </div>

        </section>
    );
}
