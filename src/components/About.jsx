import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Heart, User } from "lucide-react";

export default function About() {
    const cards = [
        {
            icon: <GraduationCap className="w-6 h-6 text-cyan-400" />,
            title: "Education",
            subtitle: "B.Tech in Computer Science",
            details: "College of Engineering Trivandrum (CET)",
            annotation: "Expected Graduation: 2026",
            extra: "Current CGPA: 8.65 / 10.0",
        },
        {
            icon: <Award className="w-6 h-6 text-blue-450" />,
            title: "Leadership",
            subtitle: "Technical Lead & Coordinator",
            details: "CET Alumni Association (CETAA) Web Development Committee",
            annotation: "Led frontend development & design systems.",
        },
        {
            icon: <Briefcase className="w-6 h-6 text-cyan-300" />,
            title: "Focus Areas",
            subtitle: "Developer & Architect",
            details: "Passionate about full-stack engineering, geospatial mapping platforms, and secure APIs.",
            annotation: "MERN Stack, REST APIs, & GIS Maps",
        },
        {
            icon: <Heart className="w-6 h-6 text-teal-400" />,
            title: "Areas Of Interest",
            subtitle: "Academic & Professional Focus",
            details: "Database Management Systems (DBMS), Geospatial Intelligence, UI/UX Micro-animations, Cloud Architecture.",
        },
    ];

    return (
        <section id="about" className="py-28 px-6 bg-transparent relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-[30%] -left-[10%] w-[400px] h-[400px] bg-[#0c4a6e]/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[10%] -right-[15%] w-[400px] h-[400px] bg-[#083344]/5 rounded-full blur-[120px]" />

            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Heading */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 mb-3"
                    >
                        Profile Overview
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-cyan-100 to-slate-400 bg-clip-text text-transparent"
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Summary Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 rounded-3xl p-8 shadow-2xl glassmorphism"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2.5 bg-cyan-950/20 rounded-xl border border-cyan-500/20 text-cyan-400">
                                <User className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-white">Professional Summary</h3>
                        </div>

                        <p className="text-slate-350 leading-relaxed mb-6">
                            I am a dedicated Computer Science student and software engineer who thrives at the intersection of logical backend modeling and beautiful UI/UX implementation. I focus on developing clean codebase structures and love visualizing geospatial data with Leaflet and Nominatim APIs.
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            With deep hands-on expertise building production-quality web apps containing real-time components, geospatial searches, quiz platforms, and APIs, I ensure scalability and peak performance across both desktop and mobile viewports.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            My engineering education at CET gives me a rigorous foundation in algorithms, databases, and network communication, which guides my software development decisions.
                        </p>
                    </motion.div>

                    {/* Cards Column */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="hover:bg-[#081229]/20 border border-cyan-500/10 hover:border-cyan-500/30 rounded-2xl p-6 shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.08)] transition-all duration-300 group flex flex-col justify-between glassmorphism"
                            >
                                <div>
                                    <div className="p-3 bg-white/5 rounded-xl border border-white/5 w-fit mb-5 group-hover:scale-110 transition-transform group-hover:border-cyan-500/20">
                                        {card.icon}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2">{card.title}</h4>
                                    <p className="text-xs font-semibold text-cyan-400 mb-3">{card.subtitle}</p>
                                    <p className="text-sm text-slate-300 leading-relaxed mb-4">{card.details}</p>
                                </div>

                                {card.annotation && (
                                    <div className="border-t border-cyan-500/10 pt-3 mt-auto flex flex-col gap-1">
                                        <span className="text-[11px] font-mono text-slate-500">{card.annotation}</span>
                                        {card.extra && (
                                            <span className="text-[11px] font-mono text-emerald-400 font-semibold">{card.extra}</span>
                                        )}
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                </div>

            </div>
        </section>
    );
}
