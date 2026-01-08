<script lang="ts">
	import { ArrowUpRight } from 'lucide-svelte';

	const projects = [
		{
			title: 'Federal Agency IT Modernization',
			client: 'U.S. Federal Agency',
			category: 'Cloud Migration',
			description:
				'Led a comprehensive IT modernization initiative to migrate legacy systems to secure cloud infrastructure.',
			image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
			results: ['50+ applications migrated', 'FedRAMP compliance achieved', '35% cost reduction']
		},
		{
			title: 'Cybersecurity Assessment Program',
			client: 'Defense Contractor',
			category: 'Security',
			description:
				'Conducted comprehensive security assessments and vulnerability testing across enterprise systems.',
			image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
			results: ['200+ vulnerabilities identified', 'CMMC Level 2 readiness', 'Continuous monitoring']
		},
		{
			title: 'Custom Case Management System',
			client: 'State Government',
			category: 'Development',
			description:
				'Designed and developed a custom case management application to streamline agency workflows.',
			image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
			results: ['40% faster processing', '5 system integrations', '150+ users trained']
		},
		{
			title: 'Enterprise Resource Planning',
			client: 'Government Contractor',
			category: 'Consulting',
			description:
				'Provided strategic consulting and project management for enterprise-wide ERP implementation.',
			image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80',
			results: ['12 locations deployed', '500+ users managed', '60% reporting improvement']
		}
	];

	const stats = [
	];
</script>

<svelte:head>
	<title>Our Work - Mint Digital</title>
	<meta
		name="description"
		content="Explore Mint Digital's portfolio of successful IT projects including cloud migrations, security assessments, and custom development."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="max-w-3xl">
			<p class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
				Our Work
			</p>
			<h1 class="heading-display text-5xl lg:text-6xl xl:text-7xl leading-[0.9] mb-6">
				Featured Projects
			</h1>
			<p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">
				We have a proven track record of delivering successful technology solutions for government
				agencies and enterprises. Here's some of our recent work.
			</p>
		</div>
	</div>
</section>

<!-- Projects Grid -->
<section class="pb-20 lg:pb-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-8">
			{#each projects as project}
				<div class="group">
					<div class="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
						<img
							src={project.image}
							alt={project.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
						/>
						<div
							class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"
						></div>
						<div class="absolute bottom-6 left-6 right-6">
							<span
								class="inline-block bg-white/90 text-foreground text-xs font-medium px-3 py-1 rounded-full mb-3"
							>
								{project.category}
							</span>
							<h2 class="text-white text-2xl font-semibold">{project.title}</h2>
						</div>
						<div
							class="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
						>
							<ArrowUpRight class="w-5 h-5" />
						</div>
					</div>
					<p class="text-sm text-muted-foreground mb-2">{project.client}</p>
					<p class="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
					<div class="flex flex-wrap gap-2">
						{#each project.results as result}
							<span class="text-xs bg-muted px-3 py-1.5 rounded-full">{result}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>


<!-- CTA Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<h2 class="heading-display text-4xl lg:text-5xl mb-6">Ready to Start Your Project?</h2>
		<p class="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
			Let's discuss how we can help you achieve your technology goals. Our team is ready to partner
			with you on your next initiative.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-colors"
		>
			Start a Conversation
			<ArrowUpRight class="w-5 h-5" />
		</a>
	</div>
</section>
