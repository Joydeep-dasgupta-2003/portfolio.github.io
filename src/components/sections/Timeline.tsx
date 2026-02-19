"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";

const education = [
    {
        year: "2026 - Present",
        degree: "MCA (Masters of Computer Applications)",
        institution: "Chandigarh University Online",
        description: "Specialization in Artificial Intelligence. Starting Jan 2026.",
    },
    {
        year: "2025",
        degree: "BCA (Bachelors of Computer Applications)",
        institution: "Brainware University Kolkata",
        description: "CGPA : 9.21",
    },
    {
        year: "2022",
        degree: "Higher Secondary Exam",
        institution: "Belgharia Deshapriya Vidyaniketan",
        description: "Percentage: 89.2%",
    },
    {
        year: "2020",
        degree: "Secondary Exam",
        institution: "Belgharia Deshapriya Vidyaniketan",
        description: "Percentage: 61.2%",
    },
];

export function Timeline() {
    return (
        <section id="experience" className="relative py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
                        Education <span className="text-gradient">Timeline</span>
                    </h2>
                </motion.div>

                <div className="max-w-3xl mx-auto relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-transparent md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {education.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-black z-10 md:-translate-x-1/2 translate-y-1.5 shadow-[0_0_10px_rgba(124,58,237,0.5)]" />

                                <div className="pl-12 md:pl-0 md:w-1/2 w-full">
                                    <GlassCard className="p-6 hover:border-primary/30 transition-colors relative group">
                                        <div className={`absolute top-6 ${index % 2 === 0 ? "md:-left-2 md:translate-x-full" : "md:-right-2 md:translate-x-full"} hidden md:block w-4 h-0.5 bg-primary/50`} />

                                        <div className="flex items-center gap-2 text-primary font-bold mb-2">
                                            <Calendar size={16} />
                                            {item.year}
                                        </div>

                                        <h3 className="text-xl font-bold text-white mb-1">{item.degree}</h3>
                                        <p className="text-gray-300 font-medium mb-2 flex items-center gap-2">
                                            <GraduationCap size={16} /> {item.institution}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            {item.description}
                                        </p>
                                    </GlassCard>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
