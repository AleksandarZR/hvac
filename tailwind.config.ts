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
                background: "var(--background)",
                foreground: "var(--foreground)",
                "color0": "var(--color0)",
                "color0-transparent": "var(--color0-transparent)",
                "color1": "var(--color1)",
                "color1-transparent": "var(--color1-transparent)",
                "color2": "var(--color2)",
                "color2-transparent": "var(--color2-transparent)",
                "color3": "var(--color3)",
                "color3-transparent": "var(--color3-transparent)",
                "color4": "var(--color4)",
                "color4-transparent": "var(--color4-transparent)",
                "color5": "var(--color5)",
                "color5-transparent": "var(--color5-transparent)",
                "color6": "var(--color6)",
                "color6-transparent": "var(--color6-transparent)",
                "color7": "var(--color7)",
                "color7-transparent": "var(--color7-transparent)",
                "color8": "var(--color8)",
                "color8-transparent": "var(--color8-transparent)",
                "color9": "var(--color9)",
                "color9-transparent": "var(--color9-transparent)",
                "color10": "var(--color10)",
                "color10-transparent": "var(--color10-transparent)",
                "color11": "var(--color11)",
                "color12": "var(--color12)",
                "color15": "var(--color15)",
                "color20": "var(--color20)",
                "color20-transparent": "var(--color20-transparent)",
                "color21": "var(--color21)",
                "color21-transparent": "var(--color21-transparent)",
                "color22": "var(--color22)",
                "color22-transparent": "var(--color22-transparent)",
                "color23": "var(--color23)",
                "color23-transparent": "var(--color23-transparent)",
            },
            spacing: {
                navheight: "var(--navheight)",
                navwidth: "var(--navwidth)",
                top1: "var(--top1)",

                space1: "var(--space1)",
                space2: "var(--space2)",
                space3: "var(--space3)",
                space4: "var(--space4)",
                space5: "var(--space5)",
                space6: "var(--space6)",
                space7: "var(--space7)",
                space8: "var(--space8)",
                space9: "var(--space9)",
                space10: "var(--space10)",

                space11: "var(--space11)",
                space12: "var(--space12)",
                space13: "var(--space13)",
                space14: "var(--space14)",
                space15: "var(--space15)",
                space16: "var(--space16)",
                space17: "var(--space17)",
                space18: "var(--space18)",
                space19: "var(--space19)",
                space20: "var(--space20)",

                space21: "var(--space21)",
                space22: "var(--space22)",
                space23: "var(--space23)",
                space24: "var(--space24)",
                space25: "var(--space25)",
                space26: "var(--space26)",
                space27: "var(--space27)",
                space28: "var(--space28)",
                space29: "var(--space19)",
                space30: "var(--space20)",
            },
            animation: {
                pulseStar: "pulseStar 5s linear infinite both",
                scaleAndTranslate: "scaleAndTranslate 2s 1 linear"
            }, //paused both   calc(var(--scroll)*(-1s))
            keyframes: {
                pulseStar: {
                    "0%": {
                        textShadow: "rgb(255, 255, 255) 0px 0px 0px",
                        transform: "scale(0.2)",
                    },
                    "25%": {
                        textShadow: "rgb(255, 255, 255) 0px 0px 25px",
                    },
                    "50%": {
                        textShadow: "rgb(255, 255, 255) 1px 1px 50px",
                        transform: "scale(2.7)",
                    },
                    "75%": {
                        textShadow: "rgb(255, 255, 255) 0px 0px 25px",
                    },
                    "100%": {
                        textShadow: "rgb(255, 255, 255) 0px 0px 0px",
                        transform: "scale(0.2)",
                    },
                },
                scaleAndTranslate: {
                    "to": {
                        transform: "scale(3) translateY(-1500px)",
                    }
                }
            },

        },
        screens: {
            sm: { min: "100px", max: "600.01px" },

            md: { min: "600.02px", max: "1200.01px" },

            lg: { min: "1200.02px", max: "3000px" },
        },
        fontFamily: {
            mono: ["ui-monospace", "SFMono-Regular"],
        },
    },
    plugins: [
        require("@xpd/tailwind-3dtransforms"),
    ],
};
export default config;
