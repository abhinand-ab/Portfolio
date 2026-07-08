import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText, ArrowRight, MousePointer } from "lucide-react";
import { Github, Linkedin } from "./CustomIcons";

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
        <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-hero grain">

            {/* Decorative Blob Elements */}
            <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-indigo-600/10 rounded-full blur-[90px] animate-pulse" />
            <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-purple-600/10 rounded-full blur-[80px] animate-pulse-slow" />
            <div className="absolute top-[40%] right-[25%] w-[180px] h-[180px] bg-indigo-500/5 rounded-full blur-[60px]" />

            <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">

                {/* Text Section */}
                <div className="lg:col-span-7 flex flex-col justify-center text-left">

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-6 w-fit"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
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
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
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
                        <span className="text-indigo-400 border-r-2 border-indigo-400 pr-1 min-h-[40px] inline-block font-semibold">
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
                            className="px-6 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl font-medium tracking-wide shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                        >
                            Explore Projects
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="mailto:abhinandtvvelam@gmail.com"
                            className="px-6 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium border border-white/10 hover:border-white/20 transition-all flex items-center gap-2"
                        >
                            Get in Touch
                        </a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3 ml-2">
                            <a
                                href="https://github.com/abhinand-ab"
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 bg-white/5 hover:bg-white/10 text-slate-350 hover:text-white rounded-xl border border-white/10 transition-all flex items-center justify-center"
                                title="GitHub Portfolio"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/abhinand-tv-"
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 bg-white/5 hover:bg-white/10 text-slate-350 hover:text-white rounded-xl border border-white/10 transition-all flex items-center justify-center"
                                title="LinkedIn Profile"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="https://quizz-app-theta-seven.vercel.app/" // Using a projects link for context or resume link placeholder
                                target="_blank"
                                rel="noreferrer"
                                className="w-11 h-11 bg-white/5 hover:bg-white/10 text-slate-350 hover:text-white rounded-xl border border-white/10 transition-all flex items-center justify-center"
                                title="View CV / Resume"
                            >
                                <FileText className="w-5 h-5" />
                            </a>
                        </div>
                    </motion.div>

                </div>

                {/* Profile / Interactive Visual Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:col-span-5 flex justify-center items-center relative"
                >
                    {/* Main Visual Circle */}
                    <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full border border-white/10 flex items-center justify-center p-4 bg-gradient-to-tr from-slate-900/60 to-indigo-950/20 backdrop-blur-2xl shadow-2xl glassmorphism">
                        {/* Spinning/pulsing dashed rings */}
                        <div className="absolute inset-0 rounded-full border border-dashed border-indigo-500/20 animate-spin-slow" />
                        <div className="absolute inset-4 rounded-full border border-double border-purple-500/10" />

                        {/* Displaying some beautiful interactive coding text in a cool editor layout */}
                        <div className="w-[85%] h-[85%] rounded-full overflow-hidden bg-slate-950/80 border border-white/10 p-6 flex flex-col justify-center text-xs font-mono text-indigo-300 leading-relaxed shadow-inner">
                            <span className="text-purple-400">const</span> developer = {"{"}
                            <div className="pl-4">
                                <span>name: </span><span className="text-emerald-400">"Abhinand T V"</span>,
                                <br />
                                <span>role: </span><span className="text-emerald-400">"Full-Stack Dev"</span>,
                                <br />
                                <span>education: </span><span className="text-emerald-400">"CSE @ CET"</span>,
                                <br />
                                <span>core: </span><span className="text-indigo-400">[</span>
                                <span className="text-amber-400">"React"</span>, <span className="text-amber-400">"Node"</span>, <span className="text-amber-400">"GIS"</span>
                                <span className="text-indigo-400">]</span>,
                                <br />
                                <span>location: </span><span className="text-emerald-400">"Kerala, India"</span>
                            </div>
                            {"};"}
                            <div className="mt-4 text-[10px] text-slate-500 border-t border-white/5 pt-4 text-center">
                                &lt;Interactive Workspace /&gt;
                            </div>
                        </div>

                        {/* Floating Orbits (badges) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 left-1/3 bg-slate-900 border border-white/10 hover:border-indigo-500/50 shadow-lg text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer font-sans"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-blue-400 inline-block animate-pulse" />
                            React.js
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-4 right-1/4 bg-slate-900 border border-white/10 hover:border-purple-500/50 shadow-lg text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer font-sans"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-green-500 inline-block animate-pulse" />
                            Node.js
                        </motion.div>

                        <motion.div
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/3 -right-6 bg-slate-900 border border-white/10 hover:border-indigo-500/50 shadow-lg text-[10px] px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:scale-105 transition-all cursor-pointer font-sans"
                        >
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block animate-pulse" />
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
                        className="w-5 h-9 rounded-full border border-slate-450 p-1 flex justify-center text-slate-400"
                    >
                        <span className="w-1.5 h-2 bg-indigo-500 rounded-full" />
                    </motion.div>
                </a>
            </div>

        </section>
    );
}
