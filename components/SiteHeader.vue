<template>
	<header class="header wrap mono">
		<p class="header__home">
			<a href="https://www.abdspace.xyz" class="header__name" aria-label="Abdullahi Odesanmi, portfolio">abd<span class="header__rest" aria-hidden="true">ullahi</span></a>
			<span class="header__slash" aria-hidden="true">/</span>
			<NuxtLink to="/" class="link">writing</NuxtLink>
		</p>
		<nav class="header__nav" aria-label="Main">
			<a href="https://www.abdspace.xyz" class="link">abdspace.xyz</a>
			<a href="/feed.xml" class="link">rss</a>
			<ThemeToggle />
		</nav>
	</header>
</template>

<style scoped>
.header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	padding-block: 1.75rem;
}
.header__home {
	display: flex;
	align-items: baseline;
	gap: 0.5ch;
}
.header__name {
	display: inline-flex;
	white-space: nowrap;
	color: var(--fg);
}
/* "abd" unfurls into the first name on hover. */
.header__rest {
	display: inline-block;
	max-width: 0;
	overflow: hidden;
	opacity: 0;
	transition:
		max-width 500ms var(--ease-out),
		opacity 300ms ease;
}
.header__name:hover .header__rest,
.header__name:focus-visible .header__rest {
	max-width: 6ch;
	opacity: 1;
}
.header__slash {
	color: var(--faint);
}
.header__nav {
	display: flex;
	align-items: center;
	gap: clamp(0.875rem, 3vw, 1.75rem);
	color: var(--muted);
}
.header__nav a:hover {
	color: var(--fg);
}
@media (max-width: 30rem) {
	.header__nav a[href^="https"] {
		display: none;
	}
}
</style>
