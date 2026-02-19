"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);


    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }

        if (latest > 50) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={cn(
                "fixed top-0 inset-x-0 mx-auto w-full z-50 transition-all duration-300",
                scrolled ? "py-4" : "py-6"
            )}
        >
            <div className={cn(
                "mx-auto w-[90%] max-w-4xl rounded-full border border-white/5 px-6 py-3 backdrop-blur-md transition-all duration-300",
                scrolled ? "bg-white/5 border-white/20 shadow-lg shadow-primary/5" : "bg-transparent border-transparent"
            )}>
                <div className="flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold font-outfit tracking-tighter hover:text-primary transition-colors">
                        JD<span className="text-primary">.</span>
                    </Link>

                    {/* Navigation Items - Visible on all screens */}
                    {/* Navigation Items - Hidden on mobile, visible on desktop */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group whitespace-nowrap"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
