"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useMediaQuery("(max-width: 768px) or (hover: none) and (pointer: coarse)");
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleHoverStart = () => setIsHovered(true);
        const handleHoverEnd = () => setIsHovered(false);

        window.addEventListener("mousemove", moveCursor);

        // Add hover listeners to interactive elements
        const interactiveElements = document.querySelectorAll("a, button, input, textarea, [role='button']");
        interactiveElements.forEach((el) => {
            el.addEventListener("mouseenter", handleHoverStart);
            el.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            interactiveElements.forEach((el) => {
                el.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, [cursorX, cursorY, isMobile]);

    if (isMobile) return null;

    return (
        <motion.div
            className="fixed left-0 top-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-50 mix-blend-difference"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            animate={{
                scale: isHovered ? 1.5 : 1,
                backgroundColor: isHovered ? "rgba(255, 255, 255, 0.2)" : "transparent",
            }}
        >
            <div className="absolute inset-0 bg-white/30 rounded-full blur-[2px]" />
        </motion.div>
    );
}
