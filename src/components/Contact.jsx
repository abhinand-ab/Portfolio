import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, FileText, Send, CheckCircle } from "lucide-react";
import { GitHub, Linkedin } from "./CustomIcons";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 4000);
    };

    return (
        <section id="contact" className="py-28 px-6 bg-transparent relative overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-[#D4AF37]/1.5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-[#E8C547]/1.5 rounded-full blur-[100px]" />

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
                        Connection Hub
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-[#F4D35E]/30 to-[#B5B5B5] bg-clip-text text-transparent"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-16 h-1 bg-gradient-to-r from-[#D4AF37] to-[#E8C547] mx-auto mt-4 rounded-full"
                    />
                </div>

                {/* Contact Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">

                    {/* Info Card - Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 border border-[rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all rounded-3xl p-8 flex flex-col justify-between shadow-2xl glassmorphism hover:shadow-[0_0_20px_rgba(212,175,55,0.18)]"
                    >
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Let's build something epic</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8">
                                | I am actively seeking software engineering placements, summer internships, and full-stack development collaborations. Feel free to connect directly or request my resume below!
                            </p>

                            {/* Channels List */}
                            <div className="space-y-6">
                                <a
                                    href="mailto:abhinandtvvelam@gmail.com"
                                    className="flex items-center gap-4 group p-3 bg-[rgba(24,24,24,0.4)] rounded-2xl border border-[rgba(212,175,55,0.15)] hover:border-[#D4AF37]/55 hover:shadow-[0_0_15px_rgba(212,175,55,0.18)] transition-all"
                                    title="Email direct address link"
                                >
                                    <div className="p-3 bg-[#D4AF37]/8 rounded-xl text-[#D4AF37] group-hover:scale-105 transition-transform">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-mono">Email Me</p>
                                        <p className="text-sm font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                                            abhinandtvvelam@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-4 p-3 bg-[rgba(24,24,24,0.4)] rounded-2xl border border-[rgba(212,175,55,0.12)]">
                                    <div className="p-3 bg-[#E8C547]/8 rounded-xl text-[#E8C547]">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-mono">Location</p>
                                        <p className="text-sm font-semibold text-white">Kerala, India</p>
                                    </div>
                                </div>

                                <a
                                    href="https://drive.google.com/file/d/1gKWcd1Qyd_vJnlgTQgl4qgmCr2PMvOF3/view?usp=drivesdk" // Mock Resume File
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 group p-3 bg-[rgba(24,24,24,0.4)] rounded-2xl border border-[rgba(212,175,55,0.15)] hover:border-[#F4D35E]/55 hover:shadow-[0_0_15px_rgba(244,211,94,0.18)] transition-all font-sans"
                                    title="Drive resource preview"
                                >
                                    <div className="p-3 bg-[#F4D35E]/8 rounded-xl text-[#F4D35E] group-hover:scale-105 transition-transform">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-500 font-mono">Curriculum Vitae</p>
                                        <p className="text-sm font-semibold text-white group-hover:text-[#F4D35E] transition-colors">
                                            Download PDF Resume
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social channels */}
                        <div className="pt-8 border-t border-[rgba(212,175,55,0.15)] mt-8 flex items-center gap-4">
                            <a
                                href="https://github.com/abhinand-ab"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-3 bg-transparent border border-white/10 hover:border-[#D4AF37]/50 hover:shadow-[0_0_12px_rgba(212,175,55,0.18)] text-[#B5B5B5] hover:text-[#D4AF37] rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                            >
                                <GitHub className="w-4 h-4" />
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/abhinand-tv-"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-3 bg-transparent border border-white/10 hover:border-[#D4AF37]/50 hover:shadow-[0_0_12px_rgba(212,175,55,0.18)] text-[#D4AF37] hover:text-[#E8C547] rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                            >
                                <Linkedin className="w-4 h-4" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    {/* Form Card - Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 border border-[rgba(212,175,55,0.15)] hover:border-[#D4AF37]/50 transition-all rounded-3xl p-8 flex flex-col justify-center shadow-2xl glassmorphism hover:shadow-[0_0_20px_rgba(212,175,55,0.18)]"
                    >
                        <h3 className="text-xl font-bold text-white mb-6">Send Me a Message</h3>

                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-[#D4AF37]/8 border border-[#D4AF37]/25 rounded-2xl p-8 text-center flex flex-col items-center gap-3"
                            >
                                <CheckCircle className="w-12 h-12 text-[#D4AF37] animate-bounce" />
                                <h4 className="text-white font-bold text-lg">Message Dispatched!</h4>
                                <p className="text-slate-400 text-sm max-w-xs">
                                    Thank you for reaching out, Abhinand will review your email and secure connection channels shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[rgba(24,24,24,0.65)] border border-white/10 focus:border-[#D4AF37] focus:bg-[#121212]/95 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all font-sans"
                                        placeholder="Enter your name..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[rgba(24,24,24,0.65)] border border-white/10 focus:border-[#D4AF37] focus:bg-[#121212]/95 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all font-sans"
                                        placeholder="Enter your email..."
                                    />
                                </div>

                                <div>
                                    <label className="block text-slate-400 text-xs font-semibold mb-2 uppercase tracking-wide">
                                        Detailed Message
                                    </label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[rgba(24,24,24,0.65)] border border-white/10 focus:border-[#D4AF37] focus:bg-[#121212]/95 rounded-xl px-4 py-3 text-white text-sm focus:outline-none transition-all font-sans"
                                        placeholder="Describe your project, team opportunity or request..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#E8C547] hover:brightness-110 text-[#0B0B0B] rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all font-sans cursor-pointer"
                                >
                                    <Send className="w-4 h-4" />
                                    Submit Inquiry
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>

                {/* Closing statement */}
                <div className="text-center mt-16 max-w-lg mx-auto">
                    <p className="text-xs text-slate-500 italic">
                        "Design is not just what it looks like and feels like. Design is how it works."
                    </p>
                </div>

            </div>
        </section>
    );
}
