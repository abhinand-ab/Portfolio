import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, Code2, Globe, Heart, Activity, MapPin, ShieldAlert, Award, Timer, CloudSun, Bus } from "lucide-react";
import { GitHub } from "./CustomIcons";

const projectsData = [
    {
        title: "AI Fitness Tracker",
        desc: "A full-stack fitness tracking application built using the MERN stack. Features secure JWT authentication, workout CRUD operations, BMI and calorie analysis, progress analytics, interactive charts, MongoDB Atlas integration, and cloud deployment using Render and Vercel.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS", "Recharts", "REST API"],
        live: "https://ai-fitness-black.vercel.app",
        git: "https://github.com/abhinand-ab/AI-FITNESS",
        features: ["Secure JWT authorization & session management", "Calorie & BMI progress charts using Recharts", "Comprehensive workout logger CRUD flow"],
        bgClass: "from-[#D4AF37]/25 via-[#181818] to-[#0B0B0B]",
        visual: <Activity className="w-12 h-12 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
    {
        title: "Blood Donation System",
        desc: "A complete full-stack MERN application developed for managing blood donors and recipients efficiently. Includes donor registration, donor search by blood group, CRUD operations, MongoDB Atlas cloud database, and deployment using Render and Vercel.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API", "Axios"],
        live: "https://blood-donation-system-beta-three.vercel.app",
        git: "https://github.com/abhinand-ab/blood-donation-system",
        features: ["Blood group indexed searching logic", "MERN stack configuration with Atlas Cloud", "Responsive dashboard showing donor records status"],
        bgClass: "from-[#E8C547]/25 via-[#181818] to-[#0B0B0B]",
        visual: <Heart className="w-12 h-12 text-[#E8C547] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
    {
        title: "Flood Risk Intelligence Platform",
        desc: "Developed a full-stack Flood Risk Intelligence Platform that performs GPS-based flood risk analysis using MongoDB geospatial queries. Integrated Leaflet.js interactive maps, OpenWeather API, OpenStreetMap, and geospatial flood zone visualization to provide real-time weather information, district-wise flood risk, safety scores, emergency contacts, and responsive dashboards optimized for desktop and mobile devices.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Leaflet.js", "OpenWeather API", "Tailwind CSS", "Axios"],
        live: "https://flood-risk-psi.vercel.app/",
        git: "https://github.com/abhinand-ab/Flood-Risk.git",
        features: ["GPS-based location mapping utilizing Leaflet.js", "Real-time OpenWeather integrations & scoring alerts", "Safety maps & district emergency contacts directory"],
        bgClass: "from-[#D4AF37]/25 via-[#181818] to-[#0B0B0B]",
        visual: <ShieldAlert className="w-12 h-12 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
    {
        title: "Farmer Land Registry",
        desc: "Developed a full-stack MERN application for managing farmer and agricultural land records with an interactive GIS-based interface. Users can register farmland, visualize farm locations on Leaflet maps, perform CRUD operations, search farmers, discover nearby farms using MongoDB 2dsphere geospatial indexing, and view agricultural statistics on a responsive dashboard. The backend is deployed on Render with MongoDB Atlas cloud storage.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Leaflet.js", "Tailwind CSS", "Axios"],
        live: "https://farmer-land-registry-tan.vercel.app/",
        git: "https://github.com/abhinand-ab/Farmer_Land_Registry.git",
        features: ["Leaflet GIS map coordinate plot and visualization", "MongoDB 2dsphere geospatial proximity locator querying", "Interactive administration statistics panel chart HUD"],
        bgClass: "from-[#E8C547]/25 via-[#181818] to-[#0B0B0B]",
        visual: <MapPin className="w-12 h-12 text-[#E8C547] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
    {
        title: "Neighbourhood Green Space Map",
        desc: "Developed an interactive geospatial web application using Leaflet.js and OpenStreetMap to visualize urban green spaces. Implemented GeoJSON park boundaries, tree-density heatmaps using Leaflet.heat, layer controls, city search with the Nominatim API, geolocation support, and live statistics in a responsive user interface.",
        tech: ["HTML", "CSS", "JavaScript", "Leaflet.js", "GeoJSON", "OpenStreetMap", "Overpass API", "Leaflet.heat"],
        live: "https://neighbourhood-green-space-map-c749.vercel.app/",
        git: "https://github.com/abhinand-ab/Neighbourhood-Green-Space-Map.git",
        features: ["Interactive leaflet.heat density visualizers", "Nominatim city coordinates search autocomplete integrations", "Overpass API spatial parser for environmental analysis"],
        bgClass: "from-[#D4AF37]/25 via-[#181818] to-[#0B0B0B]",
        visual: <Globe className="w-12 h-12 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
    {
        title: "CSE Placement Quiz",
        desc: "Developed a modern interactive placement preparation quiz application using HTML5, CSS3, JavaScript, and JSON. The application dynamically loads quiz questions using the Fetch API, randomizes questions using the Fisher–Yates shuffle algorithm, includes a 15-second countdown timer, instant answer validation with explanations, progress tracking, category-wise quiz flow, responsive glassmorphism UI, and persistent high scores using LocalStorage.",
        tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "JSON", "Fetch API", "LocalStorage"],
        live: "https://quizz-app-theta-seven.vercel.app/",
        git: "https://github.com/abhinand-ab/Quizz_app.git",
        features: ["Interval 15-second timer & quiz flow engine", "Randomized Fisher-Yates array logic selection", "High-scores persistence mapping via LocalStorage API"],
        bgClass: "from-[#E8C547]/25 via-[#181818] to-[#0B0B0B]",
        visual: <Timer className="w-12 h-12 text-[#E8C547] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
    {
        title: "Weather Dashboard",
        desc: "A responsive weather forecasting application that provides real-time weather conditions, temperature, humidity, wind speed, and forecast data using weather APIs. Designed with a modern UI and optimized user experience.",
        tech: ["JavaScript", "Weather API", "REST API", "CSS", "Responsive Design"],
        live: "https://weather-dashboard-ten-tan.vercel.app/",
        git: "https://github.com/abhinand-ab/Weather_Dashboard.git",
        features: ["Live weather API payload fetching operations", "Visual 5-day weather condition card dashboards", "Responsive styling supporting mobile HUD views"],
        bgClass: "from-[#D4AF37]/25 via-[#181818] to-[#0B0B0B]",
        visual: <CloudSun className="w-12 h-12 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
    {
        title: "CETAA Website",
        desc: "A responsive educational and renovation-themed website developed using HTML, CSS, and JavaScript. Focused on responsive layouts and clean UI design for alumni networkings.",
        tech: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/abhinand-ab/cetaa-website",
        features: ["Renovation layout theme configuration", "Smooth UI navigation structures & elements styling", "HTML5 semantic page layouts for indexing"],
        bgClass: "from-[#E8C547]/25 via-[#181818] to-[#0B0B0B]",
        visual: <Award className="w-12 h-12 text-[#E8C547] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
    {
        title: "Bus Reservation System",
        desc: "Frontend bus booking system developed using HTML, CSS, and JavaScript. Includes booking confirmation, local storage handling, and interactive user interface features.",
        tech: ["HTML", "CSS", "JavaScript", "Local Storage"],
        git: "https://github.com/abhinand-ab/Bus-reservation",
        features: ["Interactive seating grids choice representation", "Booking confirmations display status notifications", "Web browsers LocalStorage memory persistence"],
        bgClass: "from-[#D4AF37]/25 via-[#181818] to-[#0B0B0B]",
        visual: <Bus className="w-12 h-12 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
    {
        title: "Dhamani Backend",
        desc: "Flask backend application with donor and recipient registration APIs, validation logic, SQLite database integration, and nearby donor mapping features.",
        tech: ["Python", "Flask", "SQLite", "REST API"],
        git: "https://github.com/abhinand-ab/Dhamani-backend",
        features: ["Flask endpoint structures and routing APIs", "SQLite local data structures management", "Donor matches mapping proximity distance utilities"],
        bgClass: "from-[#E8C547]/25 via-[#181818] to-[#0B0B0B]",
        visual: <Code2 className="w-12 h-12 text-[#E8C547] group-hover:scale-110 transition-transform duration-500" />,
        featured: true,
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-28 px-6 bg-transparent relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-[40%] right-[-5%] w-[450px] h-[450px] bg-[#D4AF37]/1.5 rounded-full blur-[120px]" />
            <div className="absolute bottom-[20%] left-[-5%] w-[450px] h-[450px] bg-[#E8C547]/1.2 rounded-full blur-[120px]" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Heading */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D4AF37] mb-3"
                    >
                        My Creations
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-[#F4D35E]/30 to-[#B5B5B5] bg-clip-text text-transparent"
                    >
                        Featured Projects
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E8C547] mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projectsData.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.5, delay: (idx % 2) * 0.1 }}
                            className="group border border-[rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 rounded-3xl overflow-hidden shadow-2xl glassmorphism flex flex-col justify-between h-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(212,175,55,0.18)]"
                        >

                            {/* Project Image/Visual Visualizer Placeholder */}
                            <div className={`relative h-48 w-full bg-gradient-to-br ${project.bgClass} flex items-center justify-center p-6 border-b border-[rgba(212,175,55,0.15)] overflow-hidden`}>
                                {/* Visual grid bg pattern */}
                                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_100%,transparent_100%)] opacity-45" />

                                {/* Orb blur glow */}
                                <div className="absolute w-24 h-24 rounded-full bg-[#D4AF37]/5 blur-xl group-hover:scale-125 transition-transform duration-500" />

                                {project.visual}

                                {/* Star featured tag */}
                                {project.featured && (
                                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#D4AF37] border border-transparent px-3 py-1 rounded-full text-[10px] font-bold text-[#0B0B0B] shadow-[#D4AF37]/20 hover:shadow-[0_0_10px_#D4AF37] transition-all backdrop-blur-md">
                                        <Star className="w-3.5 h-3.5 fill-[#0B0B0B] text-[#0B0B0B]" />
                                        Featured
                                    </div>
                                )}
                            </div>

                            {/* Card Details */}
                            <div className="p-8 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
                                    {project.desc}
                                </p>

                                {/* Key Features Bullet list */}
                                <div className="mb-6 flex-grow">
                                    <h4 className="text-white text-xs font-semibold uppercase tracking-wider mb-2">Key Features</h4>
                                    <ul className="list-disc pl-4 text-xs text-slate-400 space-y-1">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="font-sans leading-relaxed">
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Badges */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1.5 bg-[#121212] hover:bg-[#181818] border border-[rgba(212,175,55,0.35)] hover:border-[#D4AF37] text-[#D4AF37] hover:text-[#F8F8F8] font-mono text-[10px] rounded-md transition-all duration-300 cursor-default"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Links Buttons */}
                                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-[rgba(212,175,55,0.15)]">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-[#D4AF37] to-[#E8C547] hover:brightness-110 text-[#0B0B0B] rounded-xl text-xs font-semibold shadow-md shadow-[#D4AF37]/15 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] group/btn transition-all cursor-pointer"
                                        >
                                            Live Demo
                                            <ExternalLink className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </a>
                                    )}

                                    <a
                                        href={project.git}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`inline-flex items-center justify-center gap-2 px-5 py-3 bg-transparent hover:bg-[#D4AF37]/10 text-white border border-[#D4AF37]/40 hover:border-[#D4AF37] hover:shadow-[0_0_12px_rgba(212,175,55,0.2)] rounded-xl text-xs font-semibold transition-all cursor-pointer ${project.live ? "w-[40%]" : "flex-1"
                                            }`}
                                    >
                                        <GitHub className="w-4 h-4" />
                                        GitHub
                                    </a>
                                </div>

                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
