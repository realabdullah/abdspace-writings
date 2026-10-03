<script setup lang="ts">
// A word written top to bottom, the way it would be by hand, with its reading beside it.
defineProps<{ glyphs: string[]; reading: string; meaning: string }>();
</script>

<template>
	<figure class="vword" :style="{ '--n': glyphs.length }">
		<p class="vword__kanji" lang="ja" :aria-label="glyphs.join('')">
			<span v-for="(glyph, i) in glyphs" :key="i" aria-hidden="true" :style="{ '--i': i }">{{ glyph }}</span>
		</p>
		<figcaption class="vword__gloss mono">
			<i>{{ reading }}</i
			>: {{ meaning }}
		</figcaption>
	</figure>
</template>

<style scoped>
.vword {
	writing-mode: vertical-rl;
	display: flex;
	/* In vertical-rl the block axis runs right to left, so this sets the gloss beside the kanji. */
	flex-direction: column;
	align-items: flex-start;
	gap: 0.5rem;
	margin: 0;
}
.vword__kanji {
	font-family: var(--jp);
	font-weight: 800;
	font-size: clamp(3.25rem, 9.5vw, 8rem);
	line-height: 1;
	letter-spacing: 0.06em;
}
.vword__kanji span {
	display: inline-block;
	animation: brush 900ms cubic-bezier(0.55, 0, 0.2, 1) both;
	animation-delay: calc(350ms + var(--i) * 420ms);
}
.vword__gloss {
	color: var(--muted);
	white-space: nowrap;
	padding-top: 0.35em;
	animation: fade 1200ms ease both calc(1.3s + var(--n, 1) * 0.42s);
}
@keyframes brush {
	from {
		clip-path: inset(0 0 100% 0);
		transform: translateY(-0.04em);
	}
	to {
		clip-path: inset(0 0 -10% 0);
		transform: none;
	}
}
@keyframes fade {
	from {
		opacity: 0;
	}
}
</style>
