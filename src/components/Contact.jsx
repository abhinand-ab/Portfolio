import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, FileText, Send, CheckCircle2 } from "lucide-react";
import { GitHub, Linkedin } from "./CustomIcons";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: "", email: "", message: "" });
        }, 4000);
    };

    return (
        <section id="contact" className="py-20 px-6 bg-transparent relative">
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Section Heading */}
                <div className="mb-12">
                    <span className="text-xs font-mono text-[#D4AF37] block mb-2">
                        Contact
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-medium text-[#ededed]">
                        Get in Touch
                    </h2>
                </div>

                {/* Contact Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Info Card - Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-5 bg-[#19191b] border border-[rgba(237,237,237,0.08)] rounded-xl p-6 sm:p-7 flex flex-col justify-between"
                    >
                        <div>
                            <h3 className="text-lg font-medium text-[#ededed] mb-2">Direct Channels</h3>
                            <p className="text-sm text-[#a1a1a6] leading-relaxed mb-6">
                                Actively seeking software engineering placements, internships, and technical collaborations. Reach out directly or download my resume below.
                            </p>

                            {/* Channels List */}
                            <div className="space-y-3">
                                <a
                                    href="mailto:abhinandtvvelam@gmail.com"
                                    className="flex items-center gap-3.5 p-3 bg-[#0f0f10] rounded-lg border border-[rgba(237,237,237,0.06)] hover:border-[rgba(237,237,237,0.18)] transition-colors duration-150"
                                >
                                    <div className="w-8 h-8 rounded-md bg-[#19191b] flex items-center justify-center text-[#D4AF37] shrink-0">
                                        <Mail className="w-4 h-4" />
                                    </div>
                                    <div className="overflow-hidden">
                                        <p className="text-[11px] text-[#71717a] font-mono">Email</p>
                                        <p className="text-xs font-medium text-[#ededed] truncate">
                                            abhinandtvvelam@gmail.com
                                        </p>
                                    </div>
                                </a>

                                <div className="flex items-center gap-3.5 p-3 bg-[#0f0f10] rounded-lg border border-[rgba(237,237,237,0.06)]">
                                    <div className="w-8 h-8 rounded-md bg-[#19191b] flex items-center justify-center text-[#D4AF37] shrink-0">
                                        <MapPin className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-[#71717a] font-mono">Location</p>
                                        <p className="text-xs font-medium text-[#ededed]">
                                            Kerala, India · CET Trivandrum
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href="https://drive.google.com/file/d/1FhLkQKRUVjVrzOH6U8DNxhgmw_PBVUe9/view?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3.5 p-3 bg-[#0f0f10] rounded-lg border border-[rgba(237,237,237,0.06)] hover:border-[rgba(237,237,237,0.18)] transition-colors duration-150"
                                >
                                    <div className="w-8 h-8 rounded-md bg-[#19191b] flex items-center justify-center text-[#D4AF37] shrink-0">
                                        <FileText className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-[11px] text-[#71717a] font-mono">Curriculum Vitae</p>
                                        <p className="text-xs font-medium text-[#ededed]">
                                            View PDF Resume
                                        </p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Social channels */}
                        <div className="pt-6 border-t border-[rgba(237,237,237,0.08)] mt-6 flex items-center gap-3">
                            <a
                                href="https://github.com/abhinand-ab"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-2 px-3 bg-[#0f0f10] hover:bg-[#222225] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.18)] text-[#a1a1a6] hover:text-[#ededed] rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors duration-150"
                            >
                                <GitHub className="w-3.5 h-3.5" />
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/abhinand-tv-"
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-2 px-3 bg-[#0f0f10] hover:bg-[#222225] border border-[rgba(237,237,237,0.08)] hover:border-[rgba(237,237,237,0.18)] text-[#a1a1a6] hover:text-[#ededed] rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors duration-150"
                            >
                                <Linkedin className="w-3.5 h-3.5" />
                                LinkedIn
                            </a>
                        </div>
                    </motion.div>

                    {/* Form Card - Right */}
                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.35, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 bg-[#19191b] border border-[rgba(237,237,237,0.08)] rounded-xl p-6 sm:p-7"
                    >
                        <h3 className="text-lg font-medium text-[#ededed] mb-6">Send a Message</h3>

                        {submitted ? (
                            <div className="bg-[#0f0f10] border border-[rgba(237,237,237,0.08)] rounded-lg p-6 text-center flex flex-col items-center gap-2.5">
                                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                                <h4 className="text-[#ededed] font-medium text-sm">Message Sent</h4>
                                <p className="text-[#a1a1a6] text-xs max-w-sm leading-relaxed">
                                    Thank you for reaching out. I have received your message and will reply via email shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-[#a1a1a6] text-xs font-medium mb-1.5">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-[#0f0f10] border border-[rgba(237,237,237,0.08)] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-[#ededed] text-xs focus:outline-none transition-colors duration-150 placeholder:text-[#52525b]"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#a1a1a6] text-xs font-medium mb-1.5">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-[#0f0f10] border border-[rgba(237,237,237,0.08)] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-[#ededed] text-xs focus:outline-none transition-colors duration-150 placeholder:text-[#52525b]"
                                        placeholder="name@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-[#a1a1a6] text-xs font-medium mb-1.5">
                                        Message
                                    </label>
                                    <textarea
                                        required
                                        rows="4"
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-[#0f0f10] border border-[rgba(237,237,237,0.08)] focus:border-[#D4AF37] rounded-lg px-3.5 py-2.5 text-[#ededed] text-xs focus:outline-none transition-colors duration-150 placeholder:text-[#52525b]"
                                        placeholder="Details regarding your project, opportunity or question"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-2.5 bg-[#D4AF37] hover:bg-[#e0bc45] text-[#0f0f10] rounded-lg text-xs font-medium flex items-center justify-center gap-2 transition-colors duration-150 cursor-pointer"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                    Send message
                                </button>
                            </form>
                        )}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}
