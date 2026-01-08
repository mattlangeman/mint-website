<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';
	import { ServicesGrid } from '$lib/components/ui/services-grid';
</script>

<svelte:head>
	<title>Services - Mint Digital</title>
	<meta
		name="description"
		content="Mint Digital offers custom dashboards, data analysis and visualization, and data strategy consulting to help you make better decisions."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="max-w-3xl">
			<p class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
				Our Services
			</p>
			<h1 class="heading-display text-5xl lg:text-6xl xl:text-7xl leading-[0.9] mb-6">
				What We Do Best
			</h1>
			<p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">
				We help organizations harness the power of their data through custom dashboards,
				insightful analysis, and strategic guidance.
			</p>
		</div>
	</div>
</section>

<!-- Services Grid -->
<section class="pb-20 lg:pb-32 border-t border-border pt-20 lg:pt-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<ServicesGrid />
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 lg:py-32 bg-foreground text-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<h2 class="heading-display text-4xl lg:text-5xl mb-6">Ready to Unlock Your Data?</h2>
		<p class="text-white/70 text-lg max-w-2xl mx-auto mb-10">
			Let's discuss how we can help you turn your data into a strategic asset.
			Every engagement starts with understanding your unique needs.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center justify-center gap-2 bg-white text-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-white/90 transition-colors"
		>
			Get in Touch
			<ArrowUpRight class="w-5 h-5" />
		</a>
	</div>
</section>
