"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Code, Smartphone, Zap } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section id="about" className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
                        About <span className="text-gradient">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    {/* Left - Image/Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-xs md:max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl blur-2xl opacity-20 animate-pulse-glow" />
                            <GlassCard className="w-full h-full flex items-center justify-center bg-white/5 border-white/10 overflow-hidden relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                { /* Profile Image */}
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src="/profile.jpg"
                                        alt="Joydeep Dasgupta"
                                        fill
                                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                </div>

                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-white/10">
                                        <p className="font-outfit font-bold text-white">Joydeep Dasgupta</p>
                                        <p className="text-sm text-gray-400">Kolkata, India 🇮🇳</p>
                                    </div>
                                </div>
                            </GlassCard>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <GlassCard className="p-8">
                            <h3 className="text-2xl font-bold font-outfit mb-4 flex items-center gap-2">
                                <Code className="text-primary" />
                                The Developer
                            </h3>
                            <p className="text-gray-300 leading-relaxed mb-6">
                                I'm a BCA graduate from Brainware University (CGPA 9.21) with a deep passion for building
                                modern web applications. My journey started with simple HTML pages
                                and has evolved into creating complex, data-driven applications. I am currently pursuing my
                                <span className="text-secondary font-semibold"> MCA</span> from Chandigarh University with a specialization in <span className="text-primary">Artificial Intelligence</span> to master AI-driven solutions.
                            </p>

                            <div className="space-y-4">
                                <SkillBar name="Frontend Development" percentage={90} color="bg-primary" />
                                <SkillBar name="Backend Development" percentage={85} color="bg-secondary" />
                            </div>
                        </GlassCard>

                        <div className="grid grid-cols-2 gap-4">
                            <GlassCard className="p-4 text-center hover:bg-white/5 transition-colors">
                                <Smartphone className="w-8 h-8 text-secondary mx-auto mb-2" />
                                <h4 className="font-bold">Responsive</h4>
                                <p className="text-xs text-gray-400">Mobile First Design</p>
                            </GlassCard>
                            <GlassCard className="p-4 text-center hover:bg-white/5 transition-colors">
                                <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                                <h4 className="font-bold">Fast</h4>
                                <p className="text-xs text-gray-400">Optimized Performance</p>
                            </GlassCard>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function SkillBar({ name, percentage, color }: { name: string; percentage: number; color: string }) {
    return (
        <div>
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-300">{name}</span>
                <span className="text-sm font-medium text-gray-400">{percentage}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`h-2.5 rounded-full ${color}`}
                />
            </div>
        </div>
    );
}
