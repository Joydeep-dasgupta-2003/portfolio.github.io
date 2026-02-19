import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Background } from "@/components/Background";
import { CustomCursor } from "@/components/CustomCursor";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Joydeep Dasgupta | Creative Developer",
  description: "BCA Graduate specializing in Web Development and AI integration.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(inter.variable, outfit.variable, "antialiased bg-[#050505] text-white overflow-x-hidden")}>
        <CustomCursor />
        <Background />
        {children}
      </body>
    </html>
  );
}
