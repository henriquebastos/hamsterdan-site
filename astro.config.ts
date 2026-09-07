import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import { defineConfig } from "astro/config";
import { siteConfig } from "./src/site.config";

// Same pattern as henriquebastos.net: the deploy workflow sets BASE_PATH
// ("/hamsterdan" for a project site, "/" once a custom domain is attached).
const BASE_PATH = process.env.BASE_PATH || "/";

export default defineConfig({
	site: siteConfig.url,
	base: BASE_PATH,
	output: "static",
	build: { inlineStylesheets: "always" },
	integrations: [
		tailwind({ applyBaseStyles: false }),
		sitemap(),
		robotsTxt(),
		(await import("@playform/compress")).default(),
	],
	prefetch: true,
});
