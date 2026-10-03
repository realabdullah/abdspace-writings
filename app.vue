<script setup lang="ts">
useSeoMeta({
	ogSiteName: "Abdullahi Odesanmi",
	ogLocale: "en_NG",
	twitterCard: "summary_large_image",
	twitterSite: "@_realabd",
	twitterCreator: "@_realabd",
	robots: "index, follow, max-image-preview:large",
});

useHead({
	htmlAttrs: { lang: "en" },
	link: [
		{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
		{ rel: "alternate icon", href: "/favicon.ico" },
		{ rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
		{ rel: "alternate", type: "application/rss+xml", title: "Abdullahi Odesanmi, writing", href: "/feed.xml" },
	],
});
</script>

<template>
	<div id="top">
		<a href="#main" class="skip mono">skip to content</a>
		<SiteHeader />
		<NuxtPage />
		<SiteFooter />
	</div>
</template>

<style>
.skip {
	position: absolute;
	left: var(--gutter);
	top: 0.5rem;
	padding: 0.5rem 0.75rem;
	background: var(--fg);
	color: var(--bg);
	transform: translateY(-200%);
}
.skip:focus-visible {
	transform: none;
}
</style>
