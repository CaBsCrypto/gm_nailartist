import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    blue: "#0000FF",
                    pink: "#FF69B4",
                    yellow: "#FFD700",
                    green: "#70CC3A",
                    light: "#F5F5F5",
                },
            },
            fontFamily: {
                heading: ["var(--font-poppins)", "sans-serif"],
                body: ["var(--font-lato)", "sans-serif"],
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-6px)" },
                },
                morph: {
                    "0%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
                    "50%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
                    "100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(24px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                "slide-up": {
                    "0%": { opacity: "0", transform: "translateY(40px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                pulse: {
                    "0%, 100%": { transform: "scale(1)" },
                    "50%": { transform: "scale(1.05)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                },
                "marquee-reverse": {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(0)" },
                },
            },
            animation: {
                float: "float 3s ease-in-out infinite",
                morph: "morph 8s ease-in-out infinite",
                fadeUp: "fadeUp 0.6s ease-out forwards",
                "fade-in": "fade-in 0.3s ease-out",
                "slide-up": "slide-up 0.4s ease-out",
                "pulse-slow": "pulse 2s ease-in-out infinite",
                marquee: "marquee 25s linear infinite",
                "marquee-reverse": "marquee-reverse 40s linear infinite",
            },
        },
    },
    plugins: [],
};
export default config;
