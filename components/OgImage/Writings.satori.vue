<script setup lang="ts">
withDefaults(defineProps<{ title?: string; description?: string }>(), {
	title: "Writing",
	description: "Notes on frontend engineering and what I’m learning.",
});
</script>

<template>
	<!-- Satori only resolves fonts named inline, so every text node spells its family out. -->
	<div style="display: flex; width: 100%; height: 100%; padding: 72px; background: #f4f3ef; color: #141413; justify-content: space-between; font-family: Newsreader">
		<div style="display: flex; flex-direction: column; justify-content: space-between; max-width: 900px">
			<div style="display: flex; font-size: 22px; color: #6b6a65; font-family: IBM Plex Mono">abdullahi odesanmi / writing</div>
			<div style="display: flex; flex-direction: column">
				<div style="display: flex; font-size: 80px; line-height: 1.02; letter-spacing: -2px; font-weight: 300; font-family: Newsreader">{{ title }}</div>
				<div style="display: flex; margin-top: 28px; font-size: 30px; color: #6b6a65; font-family: Newsreader">{{ description }}</div>
			</div>
		</div>
		<div style="display: flex; align-items: flex-start; gap: 18px">
			<div style="display: flex; flex-direction: column; font-size: 22px; line-height: 1.2; color: #6b6a65; font-family: IBM Plex Mono; padding-top: 12px">
				<span>k</span><span>a</span><span>k</span><span>u</span>
			</div>
			<div style="display: flex; flex-direction: column; font-size: 92px; line-height: 1.05; font-weight: 800; font-family: Shippori Mincho B1"><span>書</span><span>く</span></div>
		</div>
	</div>
</template>
