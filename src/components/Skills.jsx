import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code,
    Globe,
    Database,
    Terminal,
    Cpu,
    Cloud,
    GitBranch,
    Github,
    Server,
    Layers,
    Palette
} from "lucide-react";

const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "programming", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools-cloud", label: "Tools & Cloud" },
];

const skillsData = [
    // Programming Languages
    {
        name: "JavaScript (ES6+)",
        category: "programming",
        icon: <Code className="w-5 h-5 text-yellow-450" />,
        desc: "Robust interactive behavior, asynchronous state management, and modern ES modules.",
    },
    {
        name: "Python",
        category: "programming",
        icon: <Terminal className="w-5 h-5 text-blue-450" />,
        desc: "Clean backend scriptings, automation, and API prototyping.",
    },
    // Frontend
    {
        name: "React.js",
        category: "frontend",
        icon: <Layers className="w-5 h-5 text-cyan-400" />,
        desc: "Component-based architecture, advanced rendering, hooks, and responsive state.",
    },
    {
        name: "Tailwind CSS",
        category: "frontend",
        icon: <Palette className="w-5 h-5 text-teal-400" />,
        desc: "Utility-first stylesheet configurations, responsive viewports, and modern dark modes.",
    },
    // Backend
    {
        name: "Node.js",
        category: "backend",
        icon: <Server className="w-5 h-5 text-green-500" />,
        desc: "Event-driven runtime for high-performance server logic and operations.",
    },
    {
        name: "Express.js",
        category: "backend",
        icon: <Cpu className="w-5 h-5 text-indigo-400" />,
        desc: "Minimalist server routing, middleware integrations, and RESTful API structures.",
    },
    {
        name: "Flask",
        category: "backend",
        icon: <Layers className="w-5 h-5 text-sky-400" />,
        desc: "Lightweight Python framework for clean backend APIs and microservices.",
    },
    {
        name: "REST APIs",
        category: "backend",
        icon: <Globe className="w-5 h-5 text-amber-500" />,
        desc: "Standardized request handling, JSON responses, and third-party integrations.",
    },
    // Database
    {
        name: "MongoDB Atlas",
        category: "database",
        icon: <Database className="w-5 h-5 text-emerald-500" />,
        desc: "NoSQL database management, 2dsphere GIS spatial indexings, and cloud clusters.",
    },
    {
        name: "MySQL / SQLite",
        category: "database",
        icon: <Database className="w-5 h-5 text-indigo-400" />,
        desc: "Relational database tables, structured queries, and secure integration.",
    },
    // Tools & Cloud (Deployment / Version Control)
    {
        name: "Git",
        category: "tools-cloud",
        icon: <GitBranch className="w-5 h-5 text-orange-500" />,
        desc: "Distributed version control, branches management, and clean change logs.",
    },
    {
        name: "GitHub",
        category: "tools-cloud",
        icon: <Github className="w-5 h-5 text-white" />,
        desc: "Online workspaces deployments, actions workflow, and team collaborations.",
    },
    {
        name: "Vercel / Render",
        category: "tools-cloud",
        icon: <Cloud className="w-5 h-5 text-cyan-400" />,
        desc: "Cloud platforms hosting frontend builds and backends with environment config.",
    },
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = activeCategory === "all"
        ? skillsData
        : skillsData.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="py-28 px-6 bg-slate-900/50 relative overflow-hidden">
            {/* Glow highlight */}
            <div className="absolute top-[10%] right-[10%] w-[350px] h-[350px] bg-indigo-500/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[120px]" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-xs font-semibold uppercase tracking-[0.25em] text-indigo-400 mb-3"
                    >
                        Technical Capability
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-indigo-200 to-slate-400 bg-clip-text text-transparent"
                    >
                        Skills & Technologies
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-1 bg-gradient-to-r from-indigo-505 to-purple-505 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-16 max-w-3xl mx-auto">
                    {skillCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${activeCategory === cat.id
                                    ? "bg-gradient-to-r from-indigo-550 to-purple-600 text-white shadow-md shadow-indigo-600/10 border-transparent scale-105"
                                    : "bg-slate-900 hover:bg-slate-850 text-slate-400 hover:text-white border border-white/5"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill, idx) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.3, delay: idx * 0.05 }}
                                whileHover={{ y: -6 }}
                                className="bg-slate-950/80 border border-white/5 hover:border-indigo-500/30 rounded-2xl p-6 shadow-xl relative overflow-hidden group transition-all duration-300"
                            >
                                {/* Micro-glow on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-650/0 to-indigo-500/0 group-hover:from-indigo-650/5 group-hover:to-indigo-500/5 transition-all duration-300 pointer-events-none" />

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-slate-900 border border-white/5 rounded-xl text-slate-300 group-hover:text-white group-hover:bg-slate-850 group-hover:border-indigo-500/20 transition-all duration-300">
                                        {skill.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-white tracking-wide">
                                        {skill.name}
                                    </h3>
                                </div>

                                <p className="text-sm text-slate-400 leading-relaxed font-sans mt-2">
                                    {skill.desc}
                                </p>

                                {/* Decorative border light indicator */}
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500 transition-all duration-500" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
