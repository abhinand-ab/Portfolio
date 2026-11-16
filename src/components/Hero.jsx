import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Layers, ExternalLink } from "lucide-react";
import { GitHub, Linkedin } from "./CustomIcons";

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 overflow-hidden bg-transparent">
            <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-7 flex flex-col justify-center text-left"
                >
                    {/* Signature Status Indicator */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#19191b] border border-[rgba(237,237,237,0.08)] text-xs text-[#a1a1a6] font-mono mb-6 w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" />
                        <span>8.5463° N, 76.9063° E · CET Trivandrum</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#ededed] mb-4">
                        Abhinand T V
                    </h1>

                    <h2 className="text-xl sm:text-2xl font-normal text-[#a1a1a6] mb-6">
                        Full-Stack Software Engineer & Geospatial Systems Developer
                    </h2>

                    <p className="text-sm sm:text-base text-[#a1a1a6] leading-relaxed mb-8 max-w-xl">
                        Computer Science undergraduate at College of Engineering Trivandrum (CET). Specializing in scalable MERN architectures, real-time disaster intelligence platforms, Leaflet GIS mapping, and robust API design.
                    </p>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 items-center">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#D4AF37] hover:bg-[#dec050] text-[#0f0f10] rounded-lg text-sm font-medium transition-colors duration-150"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4" />
                        </a>

                        <a
                            href="mailto:abhinandtvvelam@gmail.com"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#19191b] hover:bg-[#222225] border border-[rgba(237,237,237,0.12)] hover:border-[rgba(237,237,237,0.22)] text-[#ededed] rounded-lg text-sm font-medium transition-colors duration-150"
                        >
                            Get in touch
                        </a>

                        <div className="flex items-center gap-2 sm:ml-2">
                            <a
                                href="https://github.com/abhinand-ab"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2.5 bg-[#19191b] hover:bg-[#222225] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.2)] text-[#a1a1a6] hover:text-[#ededed] rounded-lg transition-colors duration-150"
                                title="GitHub Profile"
                            >
                                <GitHub className="w-4 h-4" />
                            </a>
                            <a
                                href="https://linkedin.com/in/abhinand-tv-"
                                target="_blank"
                                rel="noreferrer"
                                className="p-2.5 bg-[#19191b] hover:bg-[#222225] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.2)] text-[#a1a1a6] hover:text-[#ededed] rounded-lg transition-colors duration-150"
                                title="LinkedIn Profile"
                            >
                                <Linkedin className="w-4 h-4" />
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1gKWcd1Qyd_vJnlgTQgl4qgmCr2PMvOF3/view?usp=drivesdk"
                                target="_blank"
                                rel="noreferrer"
                                className="px-3 py-2 bg-[#19191b] hover:bg-[#222225] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.2)] text-xs font-mono text-[#a1a1a6] hover:text-[#ededed] rounded-lg transition-colors duration-150"
                                title="Curriculum Vitae"
                            >
                                Resume PDF
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Craft Moment: Architectural GIS Telemetry Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="lg:col-span-5"
                >
                    <div className="bg-[#19191b] border border-[rgba(237,237,237,0.08)] rounded-xl overflow-hidden shadow-2xl">
                        
                        {/* Terminal / telemetry header */}
                        <div className="px-4 py-3 bg-[#0f0f10] border-b border-[rgba(237,237,237,0.08)] flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27272a]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27272a]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#27272a]" />
                                <span className="text-xs font-mono text-[#71717a] ml-2">disaster-intel.kerala.gov</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <span>LIVE OSM STREAM</span>
                            </div>
                        </div>

                        {/* Interactive GIS Preview Canvas */}
                        <div className="p-5">
                            <div className="relative bg-[#0f0f10] rounded-lg border border-[rgba(237,237,237,0.06)] p-4 h-56 flex flex-col justify-between overflow-hidden">
                                
                                {/* Background Grid overlay */}
                                <div 
                                    className="absolute inset-0 opacity-15 pointer-events-none" 
                                    style={{
                                        backgroundImage: 'radial-gradient(#ededed 1px, transparent 1px)',
                                        backgroundSize: '16px 16px'
                                    }}
                                />

                                {/* Map telemetry indicators */}
                                <div className="relative z-10 flex items-center justify-between text-xs font-mono text-[#71717a]">
                                    <div className="flex items-center gap-1 text-[#a1a1a6]">
                                        <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                                        <span>10.8505° N, 76.2711° E</span>
                                    </div>
                                    <span className="text-[11px] bg-[#222225] px-2 py-0.5 rounded text-[#a1a1a6]">
                                        ZOOM: 10x
                                    </span>
                                </div>

                                {/* Simulated Active GIS Incidents */}
                                <div className="relative z-10 space-y-2 my-auto">
                                    <div className="flex items-center justify-between p-2 rounded bg-[#19191b]/90 border border-[rgba(237,237,237,0.06)] text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                                            <span className="text-[#ededed] font-medium">Wayanad Sector</span>
                                        </div>
                                        <span className="font-mono text-[11px] text-[#a1a1a6]">Rainfall: 142mm · Watch</span>
                                    </div>

                                    <div className="flex items-center justify-between p-2 rounded bg-[#19191b]/90 border border-[rgba(237,237,237,0.06)] text-xs">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                            <span className="text-[#ededed] font-medium">Idukki Relief Hub</span>
                                        </div>
                                        <span className="font-mono text-[11px] text-emerald-400">Shelter Open (Cap: 450)</span>
                                    </div>
                                </div>

                                {/* Active GIS Layers */}
                                <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[rgba(237,237,237,0.06)] text-[11px] font-mono text-[#71717a]">
                                    <div className="flex items-center gap-2">
                                        <Layers className="w-3 h-3 text-[#D4AF37]" />
                                        <span>GeoJSON Overlays</span>
                                    </div>
                                    <span className="text-[#a1a1a6]">Leaflet.heat Active</span>
                                </div>
                            </div>

                            {/* Card Footer Telemetry Stats */}
                            <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                                <div className="p-2.5 rounded-lg bg-[#0f0f10] border border-[rgba(237,237,237,0.06)]">
                                    <div className="text-[10px] font-mono text-[#71717a]">DISTRICTS</div>
                                    <div className="text-sm font-medium text-[#ededed] mt-0.5 tabular-nums">14 Active</div>
                                </div>
                                <div className="p-2.5 rounded-lg bg-[#0f0f10] border border-[rgba(237,237,237,0.06)]">
                                    <div className="text-[10px] font-mono text-[#71717a]">LATENCY</div>
                                    <div className="text-sm font-medium text-[#ededed] mt-0.5 tabular-nums">24 ms</div>
                                </div>
                                <div className="p-2.5 rounded-lg bg-[#0f0f10] border border-[rgba(237,237,237,0.06)]">
                                    <div className="text-[10px] font-mono text-[#71717a]">STACK</div>
                                    <div className="text-sm font-medium text-[#D4AF37] mt-0.5">MERN + GIS</div>
                                </div>
                            </div>

                            {/* Link to flagship project */}
                            <div className="mt-4 pt-3 border-t border-[rgba(237,237,237,0.08)] flex items-center justify-between text-xs">
                                <span className="text-[#a1a1a6]">Flagship Architecture</span>
                                <a
                                    href="https://kerala-disaster-intelligence-platfo.vercel.app"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-1 text-[#D4AF37] hover:underline font-medium"
                                >
                                    Open Platform
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
