<script lang="ts">
	import type { Snippet, Component } from 'svelte';

	interface Props {
		icon?: Component<{ class?: string; strokeWidth?: number }>;
		iconSrc?: string;
		title: string;
		highlightWord?: string;
		description: string;
		class?: string;
	}

	let { icon, iconSrc, title, highlightWord, description, class: className = '' }: Props = $props();

	// Split title to highlight a specific word if provided
	function renderTitle() {
		if (!highlightWord) return { before: title, highlight: '', after: '' };

		const index = title.toLowerCase().indexOf(highlightWord.toLowerCase());
		if (index === -1) return { before: title, highlight: '', after: '' };

		return {
			before: title.slice(0, index),
			highlight: title.slice(index, index + highlightWord.length),
			after: title.slice(index + highlightWord.length)
		};
	}

	const titleParts = $derived(renderTitle());
</script>

<div
	class="flex flex-col bg-blue-200 border border-foreground/20 rounded-sm p-6 lg:p-8 h-full {className}"
>
	{#if icon}
		{@const Icon = icon}
		<div>
			<Icon class="w-16 h-16 lg:w-20 lg:h-20 text-foreground" strokeWidth={1} />
		</div>
	{:else if iconSrc}
		<div>
			<img src={iconSrc} alt="" class="h-20 lg:h-24 w-auto" />
		</div>
	{/if}

	<div class="flex-1"></div>

	<div class="pt-8">
		<h3 class="heading-display text-2xl lg:text-3xl mb-3 leading-tight">
			{#if highlightWord && titleParts.highlight}
				{titleParts.before}<span class="bg-blue-300 px-1">{titleParts.highlight}</span>{titleParts.after}
			{:else}
				{title}
			{/if}
		</h3>
		<p class="text-foreground/80 leading-relaxed">{description}</p>
	</div>
</div>
