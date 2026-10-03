<script setup lang="ts">
const year = new Date().getFullYear();
</script>

<template>
	<footer class="wrap">
		<div class="end mono muted">
			<span>© {{ year }} Abdullahi Odesanmi</span>
			<span class="end__mei">the switch up top is <span lang="ja">明</span>, bright: sun <span lang="ja">日</span> and moon <span lang="ja">月</span></span>
			<a href="#top" class="link">back to top ↑</a>
		</div>
	</footer>
</template>

<style scoped>
.end {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 0.75rem 2rem;
	padding-block: 2rem 2.5rem;
	border-top: 1px solid var(--rule);
}
.end [lang="ja"] {
	color: var(--fg);
}
</style>
