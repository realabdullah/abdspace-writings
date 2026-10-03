<script setup lang="ts">
const { data: posts } = await useAsyncData("writing-posts", () => queryCollection("writings").order("createdAt", "DESC").all());
const total = computed(() => posts.value?.length ?? 0);

const description = "Notes on frontend engineering, the tools I lean on, and whatever I’m learning at the time. Written down so I remember, and in case it helps you.";
useSeoMeta({ title: "Writing, Abdullahi Odesanmi", description, ogTitle: "Writing", ogDescription: description, ogType: "website" });
useCanonical();
defineOgImage("Writings", { title: "Writing", description: "Notes on frontend engineering and what I’m learning." });
</script>

<template>
	<main id="main" class="wrap">
		<header class="intro">
			<div class="intro__text">
				<h1 class="intro__title">Writing</h1>
				<p class="intro__lede muted">{{ description }}</p>
			</div>
			<VerticalWord class="intro__word" :glyphs="['書', 'く']" reading="kaku" meaning="to write, to set down" />
		</header>

		<ol class="posts" :aria-label="`${total} pieces, newest first`">
			<li v-for="(post, i) in posts" :key="post.slug">
				<NuxtLink :to="`/${post.slug}`" class="post">
					<span class="post__meta">
						<span lang="ja" class="post__num" aria-hidden="true">{{ kanjiNumeral(total - i) }}</span>
						<span class="mono muted">{{ formatMonthYear(post.createdAt) }} · {{ post.readTime }} min</span>
					</span>
					<span class="post__title">{{ post.title }}</span>
					<span class="post__brief muted">{{ post.description }}</span>
				</NuxtLink>
			</li>
		</ol>
	</main>
</template>

<style scoped>
.intro {
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	gap: 2rem;
	padding-block: clamp(3rem, 10vw, 7rem) clamp(2.5rem, 6vw, 4rem);
}
.intro__title {
	font-weight: 300;
	font-size: clamp(3.25rem, 9vw, 7rem);
	line-height: 0.95;
	letter-spacing: -0.035em;
}
.intro__lede {
	max-width: 30rem;
	margin-top: 1.25rem;
	text-wrap: pretty;
}
.intro__word {
	flex: none;
}
.posts {
	border-top: 1px solid var(--rule);
	padding-bottom: clamp(4rem, 10vw, 7rem);
}
.post {
	display: grid;
	gap: 0.4rem;
	padding-block: clamp(1.5rem, 4vw, 2.25rem);
	border-bottom: 1px solid var(--rule);
	transition: opacity 350ms ease;
}
.post__meta {
	display: flex;
	align-items: baseline;
	gap: 0.75rem;
}
.post__num {
	color: var(--faint);
	font-weight: 500;
	transition: color 350ms ease;
}
.post__title {
	font-size: clamp(1.625rem, 3.5vw, 2.25rem);
	line-height: 1.15;
	letter-spacing: -0.015em;
	text-wrap: balance;
}
.post__brief {
	max-width: 38rem;
	font-size: 1rem;
	text-wrap: pretty;
}
@media (hover: hover) {
	.posts:has(.post:hover) .post:not(:hover) {
		opacity: 0.32;
	}
	.post:hover .post__title {
		font-style: italic;
	}
	.post:hover .post__num {
		color: var(--fg);
	}
}
@media (min-width: 52rem) {
	.post {
		grid-template-columns: var(--margin) minmax(0, 1fr);
		column-gap: 0;
	}
	/* The number sits above the date in the margin, like a chapter mark. */
	.post__meta {
		grid-row: span 2;
		flex-direction: column;
		gap: 0.25rem;
		padding-top: 0.45rem;
	}
	.post__num {
		font-size: 1.375rem;
		line-height: 1;
	}
}
</style>
