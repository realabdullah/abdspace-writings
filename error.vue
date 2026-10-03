<script setup lang="ts">
import type { NuxtError } from "#app";

const props = defineProps<{ error: NuxtError }>();
const missing = computed(() => props.error.statusCode === 404);

useSeoMeta({ title: () => (missing.value ? "Not found, Abdullahi Odesanmi" : "Something broke, Abdullahi Odesanmi"), robots: "noindex, follow" });

const goHome = () => clearError({ redirect: "/" });
</script>

<template>
	<div id="top">
		<SiteHeader />
		<main id="main" class="wrap lost">
			<VerticalWord v-if="missing" :glyphs="['無']" reading="mu" meaning="nothing, not here" />
			<VerticalWord v-else :glyphs="['誤']" reading="ayamari" meaning="a mistake" />
			<div class="lost__text">
				<p class="mono muted">{{ error.statusCode }}</p>
				<h1 class="lost__title">{{ missing ? "Nothing here." : "Something broke." }}</h1>
				<p class="lost__lede muted">
					{{ missing ? "This page doesn’t exist, or it moved. Everything I’ve written is on the front page." : "That one’s on me, not you. Try again in a moment." }}
				</p>
				<button type="button" class="mono link" @click="goHome">← all writing</button>
			</div>
		</main>
		<SiteFooter />
	</div>
</template>

<style scoped>
.lost {
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-between;
	align-items: flex-start;
	gap: 2rem;
	min-height: 70svh;
	padding-block: clamp(3rem, 10vw, 7rem);
}
.lost__text {
	display: grid;
	justify-items: start;
	align-content: start;
	gap: 1.25rem;
}
.lost__title {
	font-weight: 300;
	font-size: clamp(2.75rem, 8vw, 6rem);
	line-height: 0.95;
	letter-spacing: -0.035em;
}
.lost__lede {
	max-width: 28rem;
	text-wrap: pretty;
}
</style>
