<script setup lang="ts">
const config = useRuntimeConfig();
const studioConfigured = Boolean(config.public.studioConfigured);

if (studioConfigured) {
	await navigateTo("/_studio", { redirectCode: 302 });
}

useSeoMeta({ title: "Admin, Abdullahi Odesanmi", robots: "noindex, nofollow" });
</script>

<template>
	<main v-if="!studioConfigured" id="main" class="wrap admin">
		<p class="mono muted">authoring unavailable</p>
		<h1 class="admin__title">Studio authentication is not configured.</h1>
		<p class="muted">Set the GitHub OAuth variables on the production deployment, then redeploy the writings site.</p>
	</main>
</template>

<style scoped>
.admin {
	display: grid;
	align-content: center;
	gap: 1rem;
	max-width: calc(36rem + var(--gutter) * 2);
	min-height: 60svh;
}
.admin__title {
	font-weight: 300;
	font-size: clamp(2rem, 5vw, 2.75rem);
	line-height: 1.1;
	letter-spacing: -0.02em;
	text-wrap: balance;
}
</style>
