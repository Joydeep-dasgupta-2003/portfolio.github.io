"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Linkedin, Phone, Send } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="relative py-20">
            <div className="container mx-auto px-4 max-w-4xl">
                <GlassCard className="p-6 md:p-12 text-center relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-6">
                            Let's build something <span className="text-gradient">amazing</span> together 🚀
                        </h2>
                        <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
                            I'm available for freelance projects and job opportunities.
                            Feel free to reach out if you want to collaborate!
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-12">
                            <a
                                href="mailto:joydasgupta78@gmail.com"
                                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/50 transition-all duration-300"
                            >
                                <div className="p-2 rounded-full bg-primary/20 text-primary group-hover:scale-110 transition-transform">
                                    <Mail size={20} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400">Email Me</p>
                                    <p className="font-semibold text-white">joydasgupta78@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/joydeep-dasgupta-2003-/"
                                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
                            >
                                <div className="p-2 rounded-full bg-blue-500/20 text-blue-500 group-hover:scale-110 transition-transform">
                                    <Linkedin size={20} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400">LinkedIn</p>
                                    <p className="font-semibold text-white">Connect with me</p>
                                </div>
                            </a>

                            <a
                                href="tel:+917439525901"
                                className="group flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-green-500/50 transition-all duration-300"
                            >
                                <div className="p-2 rounded-full bg-green-500/20 text-green-500 group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs text-gray-400">Phone</p>
                                    <p className="font-semibold text-white">+91-7439525901</p>
                                </div>
                            </a>
                        </div>
                    </motion.div>
                </GlassCard>
            </div>
        </section>
    );
}
