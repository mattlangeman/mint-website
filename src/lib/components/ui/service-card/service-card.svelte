<script lang="ts">
	import type { Component } from 'svelte';

	interface Props {
		icon?: Component<{ class?: string; strokeWidth?: number }>;
		iconSrc?: string;
		title: string;
		description: string;
		class?: string;
	}

	let { icon, iconSrc, title, description, class: className = '' }: Props = $props();
</script>

<div
	class="flex flex-col bg-green-100 border border-foreground/20 rounded-sm p-6 lg:p-8 h-full {className}"
>
	{#if icon}
		{@const Icon = icon}
		<div class="text-green-800">
			<Icon class="w-16 h-16 lg:w-20 lg:h-20" strokeWidth={1} />
		</div>
	{:else if iconSrc}
		<div>
			<img src={iconSrc} alt="" class="h-20 lg:h-24 w-auto" />
		</div>
	{/if}

	<div class="flex-1"></div>

	<div class="pt-8">
		<h3 class="text-2xl lg:text-3xl mb-3 leading-tight" style="font-family: 'Anton', sans-serif;">
			{title}
		</h3>
		<p class="text-foreground/80 leading-relaxed">{description}</p>
	</div>
</div>
