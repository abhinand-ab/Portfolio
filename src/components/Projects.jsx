import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { GitHub } from "./CustomIcons";

const featuredProjects = [
    {
        title: "Kerala Disaster Intelligence Platform",
        desc: "A real-time disaster intelligence platform designed to monitor floods, landslides, weather conditions, emergency shelters, air quality, and live incidents across Kerala. Combines geospatial visualization, live APIs, and websocket communication for public safety response.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Leaflet.js", "Socket.IO", "OpenWeather API", "GeoJSON", "Render"],
        live: "https://kerala-disaster-intelligence-platfo.vercel.app",
        git: "https://github.com/abhinand-ab/Kerala-Disaster-Intelligence-Platform",
        features: [
            "Real-time flood & landslide monitoring with GeoJSON spatial boundaries",
            "Interactive Leaflet.js GIS maps with air quality index (AQI) & emergency shelter locators",
            "Live incident reporting pipeline with Socket.IO bidirectional stream updates"
        ],
        badge: "Flagship GIS Platform"
    },
    {
        title: "Flood Risk Intelligence Platform",
        desc: "Full-stack disaster analysis system that performs GPS-based flood risk assessments using MongoDB geospatial queries. Integrates OpenWeather API telemetry, interactive Leaflet mapping, safety scoring models, and district emergency directories.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Leaflet.js", "OpenWeather API", "Tailwind CSS"],
        live: "https://flood-risk-psi.vercel.app/",
        git: "https://github.com/abhinand-ab/Flood-Risk.git",
        features: [
            "GPS coordinate calculation with Leaflet.js interactive maps",
            "Real-time OpenWeather integration & district-wise safety scoring",
            "Geospatial flood zone overlays and rapid emergency response directory"
        ],
        badge: "Geospatial Intelligence"
    },
    {
        title: "Farmer Land Registry",
        desc: "Agricultural land management system featuring an interactive GIS interface. Facilitates farmland registration, location plotting on Leaflet maps, farmer discovery via MongoDB 2dsphere indexing, and real-time agricultural statistics.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Leaflet.js", "Tailwind CSS", "Axios"],
        live: "https://farmer-land-registry-tan.vercel.app/",
        git: "https://github.com/abhinand-ab/Farmer_Land_Registry.git",
        features: [
            "Leaflet GIS map coordinate plotting and boundary visualization",
            "MongoDB 2dsphere geospatial indexing for proximity discovery",
            "Administrative statistics dashboard with parcel record analytics"
        ],
        badge: "Spatial Database"
    },
];

const otherProjects = [
    {
        title: "Blood Donation System",
        desc: "Full-stack MERN application for managing blood donors and recipient requests with donor index search and cloud database clustering.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "REST API"],
        live: "https://blood-donation-system-beta-three.vercel.app",
        git: "https://github.com/abhinand-ab/blood-donation-system",
    },
    {
        title: "Neighbourhood Green Space Map",
        desc: "Interactive GIS web app using Leaflet.js and OpenStreetMap to visualize urban tree density heatmaps, park boundaries, and Nominatim spatial search.",
        tech: ["JavaScript", "Leaflet.js", "GeoJSON", "Overpass API", "Leaflet.heat"],
        live: "https://neighbourhood-green-space-map-c749.vercel.app/",
        git: "https://github.com/abhinand-ab/Neighbourhood-Green-Space-Map.git",
    },
    {
        title: "AI Fitness Tracker",
        desc: "MERN fitness management platform with secure JWT authorization, workout CRUD tracking, BMI calculations, and Recharts analytics.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Recharts"],
        live: "https://ai-fitness-black.vercel.app",
        git: "https://github.com/abhinand-ab/AI-FITNESS",
    },
    {
        title: "CSE Placement Quiz",
        desc: "Interactive preparation quiz with Fetch API question loader, Fisher–Yates shuffle algorithm, interval timers, and local storage scoring.",
        tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "LocalStorage API"],
        live: "https://quizz-app-theta-seven.vercel.app/",
        git: "https://github.com/abhinand-ab/Quizz_app.git",
    },
    {
        title: "Weather Dashboard",
        desc: "Responsive forecasting tool providing real-time conditions, humidity, wind velocity, and multi-day meteorological forecasts via REST APIs.",
        tech: ["JavaScript", "Weather API", "REST API", "Tailwind CSS"],
        live: "https://weather-dashboard-ten-tan.vercel.app/",
        git: "https://github.com/abhinand-ab/Weather_Dashboard.git",
    },
    {
        title: "Dhamani Backend",
        desc: "Flask REST microservice with donor registration validation logic, SQLite local data storage, and nearby donor distance calculation.",
        tech: ["Python", "Flask", "SQLite", "REST API"],
        git: "https://github.com/abhinand-ab/Dhamani-backend",
    },
    {
        title: "Bus Reservation System",
        desc: "Front-end seat reservation interface with interactive grid layout, booking confirmations, and persistent browser storage.",
        tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
        git: "https://github.com/abhinand-ab/Bus-reservation",
    },
    {
        title: "CETAA Alumni Website",
        desc: "Responsive educational web platform for engineering alumni networking, chapter initiatives, and event announcements.",
        tech: ["HTML5", "CSS3", "JavaScript"],
        git: "https://github.com/abhinand-ab/cetaa-website",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-6 bg-transparent relative">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Heading */}
                <div className="mb-12">
                    <span className="text-xs font-mono text-[#D4AF37] block mb-2">
                        Portfolio
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-medium text-[#ededed]">
                        Featured Projects
                    </h2>
                </div>

                {/* Tier 1: Featured Flagship Systems */}
                <div className="space-y-6 mb-16">
                    {featuredProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.35, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-[#19191b] hover:bg-[#222225] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.18)] rounded-xl p-6 sm:p-7 transition-colors duration-150"
                        >
                            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2.5 mb-2.5 flex-wrap">
                                        <h3 className="text-lg sm:text-xl font-medium text-[#ededed]">
                                            {project.title}
                                        </h3>
                                        <span className="text-[11px] font-mono text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-0.5 rounded border border-[#D4AF37]/20">
                                            {project.badge}
                                        </span>
                                    </div>

                                    <p className="text-sm text-[#a1a1a6] leading-relaxed mb-4 max-w-3xl">
                                        {project.desc}
                                    </p>

                                    {/* Architectural features */}
                                    <ul className="space-y-1.5 mb-5 text-xs text-[#a1a1a6]">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-[#D4AF37] mt-0.5 font-mono">›</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Tech tags */}
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-1 bg-[#0f0f10] border border-[rgba(237,237,237,0.06)] text-[#a1a1a6] font-mono text-[11px] rounded"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Project Action Links */}
                                <div className="flex sm:flex-col gap-2 shrink-0">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#D4AF37] hover:bg-[#e0bc45] text-[#0f0f10] rounded-lg text-xs font-medium transition-colors duration-150"
                                        >
                                            Live Demo
                                            <ExternalLink className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                    <a
                                        href={project.git}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#19191b] hover:bg-[#222225] border border-[rgba(237,237,237,0.12)] hover:border-[rgba(237,237,237,0.22)] text-[#ededed] rounded-lg text-xs font-medium transition-colors duration-150"
                                    >
                                        <GitHub className="w-3.5 h-3.5" />
                                        Repository
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tier 2: Additional Software Engineering Projects */}
                <div className="mb-6">
                    <h3 className="text-sm font-medium text-[#a1a1a6] uppercase tracking-wider font-mono mb-4">
                        Additional Software Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {otherProjects.map((project, idx) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 12 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.3, delay: (idx % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-[#19191b] hover:bg-[#222225] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.18)] rounded-xl p-5 transition-colors duration-150 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-start justify-between gap-3 mb-2">
                                        <h4 className="text-sm font-medium text-[#ededed]">
                                            {project.title}
                                        </h4>
                                        <div className="flex items-center gap-2 shrink-0">
                                            {project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-[#a1a1a6] hover:text-[#D4AF37] transition-colors p-1"
                                                    title="Live Demo"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                            <a
                                                href={project.git}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-[#a1a1a6] hover:text-[#ededed] transition-colors p-1"
                                                title="GitHub Repository"
                                            >
                                                <GitHub className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </div>

                                    <p className="text-xs text-[#a1a1a6] leading-relaxed mb-4">
                                        {project.desc}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-1 pt-3 border-t border-[rgba(237,237,237,0.06)]">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-2 py-0.5 bg-[#0f0f10] text-[#71717a] font-mono text-[10px] rounded"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
