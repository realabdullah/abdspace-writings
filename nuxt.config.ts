export default defineNuxtConfig({
	modules: ["@nuxt/content", "@nuxt/eslint", "@nuxt/fonts", "@nuxt/image", "nuxt-og-image", "nuxt-studio", "@vercel/analytics"],
	css: ["~/assets/main.css"],
	devtools: { enabled: true },
	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			meta: [{ name: "theme-color", content: "#f4f3ef" }],
			script: [
				{
					// Runs before paint so the saved or system theme never flashes.
					innerHTML: `try{var t=localStorage.getItem("abdspace-theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
				},
			],
		},
		pageTransition: { name: "page", mode: "out-in" },
	},
	site: {
		url: process.env.NUXT_SITE_URL || "https://writings.abdspace.xyz",
		name: "Abdullahi Odesanmi",
	},
	runtimeConfig: {
		public: {
			siteUrl: process.env.NUXT_SITE_URL || "https://writings.abdspace.xyz",
			// The portfolio mirrors every post at /writings/[slug] and that copy is canonical, so both sites point search engines at the same URL.
			canonicalBase: "https://www.abdspace.xyz/writings",
			studioConfigured: Boolean(process.env.STUDIO_GITHUB_CLIENT_ID && process.env.STUDIO_GITHUB_CLIENT_SECRET),
		},
	},
	content: {
		build: {
			markdown: {
				highlight: {
					theme: { default: "min-light", dark: "min-dark" },
					langs: ["bash", "css", "diff", "html", "javascript", "json", "markdown", "md", "scss", "shell", "sql", "ts", "typescript", "vue", "yaml"],
				},
			},
		},
	},
	nitro: {
		prerender: {
			routes: ["/", "/feed.xml", "/sitemap.xml"],
			crawlLinks: true,
			ignore: ["/admin", "/_studio/**", "/__nuxt_studio/**"],
		},
	},
	fonts: {
		families: [
			{ name: "Newsreader", weights: ["200 800"], styles: ["normal", "italic"] },
			{ name: "IBM Plex Mono", weights: [400, 500], styles: ["normal", "italic"] },
			{ name: "Shippori Mincho B1", weights: [500, 800] },
		],
	},
	studio: {
		repository: {
			provider: "github",
			owner: "realabdullah",
			repo: "abdspace-blog",
			branch: "master",
		},
		ai: { experimental: { collectionContext: true } },
	},
	compatibilityDate: "2024-11-01",
});
