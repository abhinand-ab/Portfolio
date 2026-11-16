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
    Server,
    Layers,
    Palette
} from "lucide-react";
import { GitHub } from "./CustomIcons";

const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "programming", label: "Languages" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools-cloud", label: "Tools & Cloud" },
];

const skillsData = [
    {
        name: "JavaScript (ES6+)",
        category: "programming",
        icon: <Code className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Asynchronous runtime patterns, modern ES modules, and clean DOM manipulation.",
    },
    {
        name: "Python",
        category: "programming",
        icon: <Terminal className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Backend microservices, spatial data scripting, automation, and API prototyping.",
    },
    {
        name: "C",
        category: "programming",
        icon: <Code className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Structured systems programming, memory management, pointers, and algorithm design.",
    },
    {
        name: "React.js",
        category: "frontend",
        icon: <Layers className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Component architecture, custom hooks, performant state management, and responsive viewports.",
    },
    {
        name: "Tailwind CSS",
        category: "frontend",
        icon: <Palette className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Utility design systems, responsive layouts, accessibility-focused styling, and dark theme tokens.",
    },
    {
        name: "Node.js",
        category: "backend",
        icon: <Server className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Event-driven asynchronous backend logic, stream processing, and server scalability.",
    },
    {
        name: "Express.js",
        category: "backend",
        icon: <Cpu className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Modular routing architectures, custom middleware pipelines, and secure RESTful endpoints.",
    },
    {
        name: "Flask",
        category: "backend",
        icon: <Layers className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Lightweight Python web microservices, blueprint architectures, and REST integrations.",
    },
    {
        name: "REST APIs & Socket.IO",
        category: "backend",
        icon: <Globe className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Standardized JSON APIs, HTTP status semantics, JWT authentication, and bi-directional websocket streams.",
    },
    {
        name: "MongoDB Atlas",
        category: "database",
        icon: <Database className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Document modeling, aggregation pipelines, and 2dsphere spatial indexes for geospatial queries.",
    },
    {
        name: "MySQL & SQLite",
        category: "database",
        icon: <Database className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Relational database normalization, schema design, ACID transactions, and structured SQL queries.",
    },
    {
        name: "Git",
        category: "tools-cloud",
        icon: <GitBranch className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Version control workflows, trunk-based development, branching strategies, and merge resolution.",
    },
    {
        name: "GitHub",
        category: "tools-cloud",
        icon: <GitHub className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Repository management, continuous integration, GitHub Actions automation, and code review.",
    },
    {
        name: "Vercel & Render",
        category: "tools-cloud",
        icon: <Cloud className="w-4 h-4 text-[#D4AF37]" />,
        desc: "Cloud deployment for decoupled frontends and backends, environment management, and domain routing.",
    },
];

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = activeCategory === "all"
        ? skillsData
        : skillsData.filter((skill) => skill.category === activeCategory);

    return (
        <section id="skills" className="py-20 px-6 bg-transparent relative">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Heading */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <span className="text-xs font-mono text-[#D4AF37] block mb-2">
                            Capabilities
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-medium text-[#ededed]">
                            Skills & Technologies
                        </h2>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap gap-1.5">
                        {skillCategories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-150 cursor-pointer ${
                                    activeCategory === cat.id
                                        ? "bg-[#D4AF37] text-[#0f0f10]"
                                        : "bg-[#19191b] hover:bg-[#222225] text-[#a1a1a6] hover:text-[#ededed] border border-[rgba(237,237,237,0.08)]"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Skills Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                layout
                                key={skill.name}
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 6 }}
                                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-[#19191b] hover:bg-[#222225] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.18)] rounded-xl p-5 transition-colors duration-150 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-lg bg-[#222225] border border-[rgba(237,237,237,0.08)] flex items-center justify-center">
                                            {skill.icon}
                                        </div>
                                        <h3 className="text-sm font-medium text-[#ededed]">
                                            {skill.name}
                                        </h3>
                                    </div>

                                    <p className="text-xs text-[#a1a1a6] leading-relaxed">
                                        {skill.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
