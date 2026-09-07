import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{astro,html,md,ts}"],
	theme: {
		colors: {
			transparent: "transparent",
			white: "#ffffff",
			paper: "#e8e2d9",
			rule: "#d4ccc0",
			ink: "#1a1817",
			muted: "#6b6259",
			red: { DEFAULT: "#d0503a", dark: "#a83c2c" },
			night: { DEFAULT: "#141414", rule: "#2a2a2a", muted: "#8a8a8a" },
		},
		fontFamily: {
			display: ["Archivo Black", "sans-serif"],
			logo: ["Rubik Mono One", "monospace"],
			sans: ["Space Grotesk Variable", "sans-serif"],
			mono: ["JetBrains Mono Variable", "monospace"],
		},
		extend: {
			maxWidth: { site: "1180px" },
		},
	},
	plugins: [],
} satisfies Config;
