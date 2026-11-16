import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Compass, User } from "lucide-react";

export default function About() {
    const cards = [
        {
            icon: <GraduationCap className="w-4 h-4 text-[#D4AF37]" />,
            title: "Education",
            subtitle: "B.Tech in Computer Science",
            details: "College of Engineering Trivandrum (CET)",
            annotation: "Expected Graduation: 2026",
            extra: "Current CGPA: 8.67 / 10.0",
        },
        {
            icon: <Award className="w-4 h-4 text-[#D4AF37]" />,
            title: "Leadership",
            subtitle: "Technical & Community Leadership",
            details: "Operations Lead at μLearn CET and Technical Lead at CETalks.",
            annotation: "Technical events, developer workshops, and collaborative initiatives",
        },
        {
            icon: <Briefcase className="w-4 h-4 text-[#D4AF37]" />,
            title: "Focus Areas",
            subtitle: "Full-Stack & Systems",
            details: "Architecting scalable web applications, geospatial intelligence mapping, and resilient API microservices.",
            annotation: "MERN Stack · Leaflet GIS · REST APIs",
        },
        {
            icon: <Compass className="w-4 h-4 text-[#D4AF37]" />,
            title: "Core Interests",
            subtitle: "Engineering Disciplines",
            details: "Distributed systems, spatial databases with MongoDB 2dsphere indexing, cloud deployment, and accessible interface engineering.",
        },
    ];

    return (
        <section id="about" className="py-20 px-6 bg-transparent relative">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Heading */}
                <div className="mb-12">
                    <span className="text-xs font-mono text-[#D4AF37] block mb-2">
                        Background
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-medium text-[#ededed]">
                        About Me
                    </h2>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Summary Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 bg-[#19191b] border border-[rgba(237,237,237,0.08)] rounded-xl p-6 sm:p-7 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 rounded-lg bg-[#222225] border border-[rgba(237,237,237,0.08)] flex items-center justify-center text-[#D4AF37]">
                                <User className="w-4 h-4" />
                            </div>
                            <h3 className="text-base font-medium text-[#ededed]">Engineering Profile</h3>
                        </div>

                        <p className="text-sm text-[#a1a1a6] leading-relaxed mb-4">
                            I am a Computer Science student and software engineer who focuses on scalable backend models and clean, usable interface implementations. I build geospatial platforms utilizing Leaflet and Nominatim APIs to solve real-world logistical and monitoring problems.
                        </p>
                        <p className="text-sm text-[#a1a1a6] leading-relaxed mb-4">
                            My experience spans full-stack MERN production platforms with real-time updates via Socket.IO, disaster monitoring systems with GeoJSON overlays, and high-concurrency APIs deployed on Vercel and Render.
                        </p>
                        <p className="text-sm text-[#a1a1a6] leading-relaxed">
                            My computer science coursework at CET provides a solid foundation in algorithm analysis, data structures, and computer networks that guides my architecture decisions.
                        </p>
                    </motion.div>

                    {/* Cards Column */}
                    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {cards.map((card, index) => (
                            <motion.div
                                key={card.title}
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.35, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                className="bg-[#19191b] hover:bg-[#222225] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.18)] rounded-xl p-5 transition-colors duration-150 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="w-8 h-8 rounded-lg bg-[#222225] border border-[rgba(237,237,237,0.08)] flex items-center justify-center mb-4">
                                        {card.icon}
                                    </div>
                                    <h4 className="text-sm font-medium text-[#ededed] mb-1">{card.title}</h4>
                                    <p className="text-xs text-[#D4AF37] font-medium mb-2.5">{card.subtitle}</p>
                                    <p className="text-xs text-[#a1a1a6] leading-relaxed mb-4">{card.details}</p>
                                </div>

                                {card.annotation && (
                                    <div className="border-t border-[rgba(237,237,237,0.06)] pt-3 mt-auto flex flex-col gap-1">
                                        <span className="text-[11px] font-mono text-[#71717a]">{card.annotation}</span>
                                        {card.extra && (
                                            <span className="text-[11px] font-mono text-[#ededed] tabular-nums font-medium">{card.extra}</span>
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
