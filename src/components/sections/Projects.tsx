"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "SpaceFinder",
        description: "A rental listing website that allows users to find or list 11-month accommodations, featuring user login, property listings, and booking functionality.",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "MySQL"],
        features: [
            "User Authentication System",
            "Real-time Property Listing",
            "Advanced Booking Functionality",
        ],
        links: { demo: "#", github: "https://github.com/Joydeep-dasgupta-2003/SpaceFinder" },
        color: "from-blue-600 to-cyan-500",
    },
    {
        title: "Bulp AI",
        description: "Build Bulp AI, an advanced AI project utilizing the Gemini API to develop intelligent and adaptive solutions. Demonstrated strong skills in API integration.",
        tags: ["HTML", "CSS", "JavaScript", "Gemini API"],
        features: [
            "Gemini AI Integration",
            "Context-aware Responses",
            "Optimized API Handling",
        ],
        links: { demo: "#", github: "https://github.com/Joydeep-dasgupta-2003/Bulp_AI" },
        color: "from-purple-600 to-pink-500",
        image: "/BulpAI.png",
    },
    {
        title: "ForecastFusion",
        description: "A comprehensive weather report website that provides real-time weather updates and forecasts.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "Weather API"],
        features: [
            "Real-time Weather Data",
            "Location-based Forecasts",
            "Responsive Bootstrap UI",
        ],
        links: { demo: "#", github: "https://github.com/Joydeep-dasgupta-2003/Weather_report_web" },
        color: "from-sky-400 to-blue-500",
    },
    {
        title: "OvulMap",
        description: "An ovulation calculator website to help track cycles and predict ovulation days.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        features: [
            "Ovulation Prediction",
            "Cycle Tracking",
            "Responsive Design",
        ],
        links: { demo: "#", github: "https://github.com/Joydeep-dasgupta-2003/Ovulation-Calculator" },
        color: "from-pink-400 to-rose-500",
    },
];

export function Projects() {
    return (
        <section id="projects" className="relative py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of my best work, built with modern technologies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="h-full"
                        >
                            <GlassCard className="h-full group overflow-hidden bg-white/5 hover:border-white/20 transition-all duration-300">
                                {/* Project Image Placeholder */}
                                <div className={`w-full h-48 rounded-xl bg-gradient-to-br ${project.color} opacity-80 group-hover:opacity-100 transition-opacity mb-6 relative overflow-hidden`}>
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <span className="text-4xl font-bold text-white opacity-20 transform -rotate-12 group-hover:scale-110 transition-transform duration-500">
                                                    {project.title}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>

                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-2xl font-bold font-outfit group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        <a href={project.links.github} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                            <Github size={18} />
                                        </a>
                                        <a href={project.links.demo} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink size={18} />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Key Features:</h4>
                                    <ul className="space-y-1">
                                        {project.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/5 text-gray-300"
                                        >
                                            {tag}
                                        </span>
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
