<script lang="ts">
	import { ServicesGrid } from '$lib/components/ui/services-grid';
	import { ArrowUpRight, ArrowRight } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Mint Digital - Amplify Your Impact With Data-Driven Solutions</title>
	<meta
		name="description"
		content="Mint Digital is a boutique consulting agency specializing in data-driven solutions for non-profits, universities, and public sector organizations. Amplify your impact with our custom dashboards, data analysis, and strategy services."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="relative bg-background overflow-hidden">
	<div class="relative max-w-7xl mx-auto">
		<div class="relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
			<!-- Angled SVG divider -->
			<svg
				class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-background transform translate-x-1/2"
				fill="currentColor"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
			>
				<polygon points="50,0 100,0 50,100 0,100" />
			</svg>

			<main class="mx-auto max-w-7xl px-6 lg:px-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
				<div class="sm:text-center lg:text-left">
					<h1 class="heading-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
						<span class="block">Amplify Your Impact</span>
						<span class="block text-green-900">With Data-Driven Solutions</span>
					</h1>
					<p class="mt-6 text-base text-muted-foreground sm:mt-8 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-8 md:text-xl lg:mx-0">
						We help non-profits, universities, and public sector organizations design data-driven tools and strategies that deliver real results.
					</p>
					<div class="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
						<a
							href="/contact"
							class="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-colors"
						>
							Start a Project
							<ArrowUpRight class="w-5 h-5" />
						</a>
					</div>
				</div>
			</main>
		</div>

		<!-- Hero Image -->
		<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
			<img
				class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
				src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80"
				alt="Team collaboration"
			/>
		</div>
	</div>
</section>

<!-- Line Separator -->
<div class="h-px bg-border"></div>

<!-- What We Do Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="text-center mb-16 lg:mb-20">
			<h2 class="heading-display text-4xl lg:text-5xl mb-6">What We Do Best</h2>
			<p class="text-muted-foreground text-lg max-w-2xl mx-auto">
				Your data is the gateway to better decisions. We help you unlock its potential through
				custom dashboards, insightful analysis, and strategic guidance.
			</p>
		</div>

		<ServicesGrid featuredOnly />

		<div class="text-center mt-12">
			<a
				href="/services"
				class="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-full text-base font-medium hover:bg-muted transition-colors"
			>
				More Services
				<ArrowRight class="w-4 h-4" />
			</a>
		</div>
	</div>
</section>

<!-- Line Separator -->
<div class="h-px bg-border"></div>

<!-- About Preview Section -->
<section class="py-20 lg:py-32 bg-foreground text-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
			<div>
				<p class="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">About Us</p>
				<h2 class="heading-display text-4xl lg:text-5xl mb-6">
					We're a Boutique Consulting Agency
				</h2>
				<p class="text-white/70 text-lg leading-relaxed mb-6">
					At Mint Digital, we understand that every organization is unique. That's why we take the
					time to understand your needs and design solutions that are scalable, practical, and
					results-driven.
				</p>
				<p class="text-white/70 leading-relaxed mb-8">
					Our consultants have hands-on experience across industries and are committed to applying
					the latest best practices and technologies to solve real business challenges.
				</p>
				<a
					href="/about"
					class="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-foreground transition-colors"
				>
					Learn More About Us
					<ArrowRight class="w-4 h-4" />
				</a>
			</div>
			<div class="relative">
				<img
					src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?w=800&q=80"
					alt="Remote work collaboration"
					class="aspect-square object-cover rounded-sm"
				/>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<h2 class="heading-display text-4xl lg:text-6xl mb-6">Ready to Get Started?</h2>
		<p class="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
			Whether you need support for a one-time project or a long-term partnership, we're here to help
			you move forward with confidence.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-colors"
		>
			Let's Talk
			<ArrowUpRight class="w-5 h-5" />
		</a>
	</div>
</section>
