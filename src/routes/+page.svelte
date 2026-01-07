<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { ServiceCard } from '$lib/components/ui/service-card';
	import { ArrowUpRight, ArrowRight, Code, Lightbulb, BarChart3 as ChartBar } from 'lucide-svelte';

	const services = [
		{
			icon: Code,
			title: 'Custom Dashboards',
			highlightWord: 'Dashboards',
			description: 'Show actionable insights to the right people at the right time.'
		},
		{
			icon: ChartBar,
			title: 'Data Analysis',
			highlightWord: 'Analysis',
			description: 'Make sense of your data and turn it into actionable insights.'
		},
		{
			icon: Lightbulb,
			title: 'Data Strategy',
			highlightWord: 'Strategy',
			description: 'Leverage your data to improve efficiency and make better decisions.'
		}
	];

	const projects = [
		{
			title: 'Federal Cloud Migration',
			category: 'Cloud Services',
			image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
		},
		{
			title: 'Security Assessment Program',
			category: 'Cybersecurity',
			image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80'
		},
		{
			title: 'Custom Case Management',
			category: 'Development',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
		}
	];
</script>

<svelte:head>
	<title>Mint Digital - Transforming Ideas into Digital Experiences</title>
	<meta
		name="description"
		content="Mint Digital is a boutique consulting agency specializing in IT consulting, cloud services, cybersecurity, and custom development for government and enterprise clients."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="min-h-[90vh] flex items-center">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
		<div class="max-w-4xl">
			<h1 class="heading-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.9] mb-8">
				Transforming Ideas into Digital Experiences
			</h1>
			<p class="text-lg lg:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
				We partner with government agencies and enterprises to deliver technology solutions that
				make an impact. From custom development to cybersecurity, we've got you covered.
			</p>
			<div class="flex flex-col sm:flex-row gap-4">
				<a
					href="/contact"
					class="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-colors"
				>
					Start a Project
					<ArrowUpRight class="w-5 h-5" />
				</a>
				<a
					href="/projects"
					class="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-full text-base font-medium hover:bg-muted transition-colors"
				>
					View Our Work
				</a>
			</div>
		</div>
	</div>
</section>

<!-- What We Do Section -->
<section class="py-20 lg:py-32 border-t border-border">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="mb-16 lg:mb-20">
			<p class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
				What We Do
			</p>
			<h2 class="heading-display text-4xl lg:text-5xl">What We Do Best</h2>
		</div>

		<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each services as service}
				<a href="/services" class="group block">
					<ServiceCard
						icon={service.icon}
						title={service.title}
						highlightWord={service.highlightWord}
						description={service.description}
						class="h-full transition-transform group-hover:scale-[1.02]"
					/>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- Featured Work Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
			<div>
				<p class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-3">
					Featured Work
				</p>
				<h2 class="heading-display text-4xl lg:text-5xl">Recent Projects</h2>
			</div>
			<a
				href="/projects"
				class="inline-flex items-center gap-2 text-sm font-medium hover:gap-3 transition-all"
			>
				View All Projects
				<ArrowRight class="w-4 h-4" />
			</a>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each projects as project}
				<a href="/projects" class="group block">
					<div class="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4">
						<img
							src={project.image}
							alt={project.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div
							class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
						></div>
						<div
							class="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
						>
							<ArrowUpRight class="w-5 h-5" />
						</div>
					</div>
					<p class="text-sm text-muted-foreground mb-1">{project.category}</p>
					<h3 class="text-xl font-semibold group-hover:text-muted-foreground transition-colors">
						{project.title}
					</h3>
				</a>
			{/each}
		</div>
	</div>
</section>

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
				<div class="aspect-square bg-white/10 rounded-3xl"></div>
				<div
					class="absolute -bottom-6 -left-6 w-32 h-32 bg-white/5 rounded-2xl hidden lg:block"
				></div>
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
