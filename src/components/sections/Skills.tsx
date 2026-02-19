"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { cn } from "@/lib/utils";

const skills = [
    { category: "Languages", items: ["HTML", "CSS", "JavaScript", "Java", "PHP", "MySQL"] },
    { category: "Frameworks & Libraries", items: ["Bootstrap CSS", "Tailwind CSS"] },
    { category: "Soft Skills", items: ["Adaptability", "Communication Skills", "Problem-solving"] },
];

export function Skills() {
    return (
        <section id="skills" className="relative py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
                        My <span className="text-gradient">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The technologies and tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <GlassCard className="h-full hover:border-primary/30 transition-colors duration-300">
                                <h3 className="text-xl font-bold font-outfit mb-6 text-center border-b border-white/10 pb-4">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {category.items.map((item, i) => (
                                        <motion.div
                                            key={item}
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(124, 58, 237, 0.2)" }}
                                            className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-gray-300 cursor-default transition-colors hover:border-primary/50"
                                        >
                                            {item}
                                        </motion.div>
                                    ))}
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
