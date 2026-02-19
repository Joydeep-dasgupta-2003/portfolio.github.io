import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl",
                hoverEffect && "hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
