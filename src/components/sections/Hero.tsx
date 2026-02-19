"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Code, Database, Sparkles, Terminal } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

const techStack = [
    { name: "HTML", color: "bg-orange-500", icon: <Code size={16} /> },
    { name: "CSS", color: "bg-blue-500", icon: <Sparkles size={16} /> },
    { name: "JS", color: "bg-yellow-400 text-black", icon: <Terminal size={16} /> },
    { name: "Bootstrap", color: "bg-purple-600", icon: <Sparkles size={16} /> },
    { name: "Tailwind", color: "bg-cyan-400 text-black", icon: <Sparkles size={16} /> },
    { name: "PHP", color: "bg-purple-500", icon: <Database size={16} /> },
    { name: "MySQL", color: "bg-blue-600", icon: <Database size={16} /> },
];

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-xs font-medium mb-4 backdrop-blur-md">
                            Available for Work
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold font-outfit leading-tight tracking-tight">
                            Hi, I'm <span className="text-gradient">Joydeep</span> <span className="animate-wave inline-block">👋</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-outfit text-gray-300 mt-2">
                            I build modern <span className="text-secondary">web experiences</span>.
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-gray-400 max-w-xl"
                    >
                        BCA Graduate specializing in Web Development. Turning ideas into smooth digital products with clean code and modern aesthetics.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3.5 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_30px_rgba(124,58,237,0.7)] hover:-translate-y-1 flex items-center justify-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/Joydeep_Dasgupta_Resume_BCA.pdf"
                            download="Joydeep_Dasgupta_Resume.pdf"
                            className="px-8 py-3.5 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-md flex items-center justify-center gap-2"
                        >
                            Download Resume
                            <Download size={20} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap gap-3 pt-4"
                    >
                        {techStack.map((tech, i) => (
                            <motion.span
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: 0.6 + (i * 0.1) }}
                                className={cn(
                                    "px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-black/20",
                                    tech.color.includes("gradient") ? tech.color : `bg-gray-800 text-gray-300 border border-white/5`
                                )}
                                whileHover={{ scale: 1.1, y: -2 }}
                            >
                                {tech.icon} {tech.name}
                            </motion.span>
                        ))}
                    </motion.div>
                </div>

                {/* Right Content - 3D/Floating Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden lg:flex items-center justify-center z-10"
                >
                    {/* Central Glass Card */}
                    <GlassCard className="relative w-80 h-96 flex flex-col items-center justify-center bg-white/5 border-white/20 z-20 backdrop-blur-2xl">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-secondary mb-6 shadow-[0_0_40px_rgba(124,58,237,0.5)] animate-pulse-glow" />
                        <div className="space-y-3 w-full">
                            <div className="h-3 w-3/4 bg-white/10 rounded-full mx-auto" />
                            <div className="h-3 w-1/2 bg-white/10 rounded-full mx-auto" />
                            <div className="h-3 w-2/3 bg-white/10 rounded-full mx-auto" />
                        </div>

                        <div className="mt-8 flex gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Code size={20} className="text-primary" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Sparkles size={20} className="text-secondary" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                <Database size={20} className="text-purple-500" />
                            </div>
                        </div>
                    </GlassCard>

                    {/* Floating Blobs around card */}
                    <motion.div
                        animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 w-24 h-24 rounded-2xl bg-secondary/20 backdrop-blur-xl border border-white/10 z-10 flex items-center justify-center"
                    >
                        <span className="text-4xl">🚀</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [20, -20, 20], rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-5 -left-10 w-20 h-20 rounded-full bg-primary/20 backdrop-blur-xl border border-white/10 z-30 flex items-center justify-center"
                    >
                        <span className="text-3xl">💻</span>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-2"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent" />
            </motion.div>
        </section>
    );
}
