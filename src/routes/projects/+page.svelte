<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Badge } from '$lib/components/ui/badge';
	import { Building2, Shield, Cloud, Users } from 'lucide-svelte';

	const projects = [
		{
			title: 'Federal Agency IT Modernization',
			client: 'U.S. Federal Agency',
			category: 'Cloud Migration',
			icon: Cloud,
			description:
				'Led a comprehensive IT modernization initiative to migrate legacy systems to a secure cloud infrastructure, improving operational efficiency and reducing maintenance costs.',
			outcomes: [
				'Migrated 50+ applications to cloud infrastructure',
				'Achieved FedRAMP compliance',
				'Reduced infrastructure costs by 35%',
				'Improved system availability to 99.9%'
			],
			tags: ['Cloud Services', 'Security', 'Project Management']
		},
		{
			title: 'Cybersecurity Assessment Program',
			client: 'Department of Defense Contractor',
			category: 'Security Analysis',
			icon: Shield,
			description:
				'Conducted comprehensive security assessments and vulnerability testing across enterprise systems, implementing remediation strategies to strengthen security posture.',
			outcomes: [
				'Identified and remediated 200+ vulnerabilities',
				'Developed security policies and procedures',
				'Achieved CMMC Level 2 certification readiness',
				'Implemented continuous monitoring solutions'
			],
			tags: ['Security Analysis', 'Compliance', 'Consulting']
		},
		{
			title: 'Custom Case Management System',
			client: 'State Government Agency',
			category: 'Custom Development',
			icon: Building2,
			description:
				'Designed and developed a custom case management application to streamline workflows, improve data accuracy, and enhance reporting capabilities for agency personnel.',
			outcomes: [
				'Reduced case processing time by 40%',
				'Integrated with 5 existing agency systems',
				'Trained 150+ users on new platform',
				'Delivered on-time and under budget'
			],
			tags: ['Custom Development', 'Project Management', 'Training']
		},
		{
			title: 'Enterprise Resource Planning Implementation',
			client: 'Government Services Contractor',
			category: 'IT Consulting',
			icon: Users,
			description:
				'Provided strategic consulting and project management for enterprise-wide ERP implementation, ensuring alignment with business objectives and minimal operational disruption.',
			outcomes: [
				'Successfully deployed ERP across 12 locations',
				'Managed change management for 500+ users',
				'Established governance framework',
				'Improved financial reporting accuracy by 60%'
			],
			tags: ['Consulting', 'Project Management', 'Training']
		}
	];
</script>

<svelte:head>
	<title>Past Projects - Mint Digital</title>
	<meta
		name="description"
		content="Explore Mint Digital's portfolio of successful IT projects including cloud migrations, security assessments, custom development, and strategic consulting."
	/>
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-primary/5 via-white to-accent/30 py-16 lg:py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl lg:text-5xl font-bold text-foreground mb-6">Past Projects</h1>
			<p class="text-lg text-muted-foreground leading-relaxed">
				We have a proven track record of delivering successful technology solutions for government
				agencies and enterprises. Here are some examples of our work.
			</p>
		</div>
	</div>
</section>

<!-- Projects Grid -->
<section class="py-16 lg:py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid md:grid-cols-2 gap-8">
			{#each projects as project}
				<Card.Root class="border-2 hover:border-primary/30 transition-colors">
					<Card.Header>
						<div class="flex items-start justify-between gap-4">
							<div
								class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0"
							>
								<project.icon class="w-6 h-6" />
							</div>
							<Badge variant="secondary">{project.category}</Badge>
						</div>
						<Card.Title class="text-xl mt-4">{project.title}</Card.Title>
						<p class="text-sm text-muted-foreground">{project.client}</p>
					</Card.Header>
					<Card.Content>
						<p class="text-muted-foreground mb-6">{project.description}</p>
						<div class="space-y-4">
							<h4 class="font-semibold text-sm text-foreground">Key Outcomes</h4>
							<ul class="space-y-2">
								{#each project.outcomes as outcome}
									<li class="text-sm text-muted-foreground flex items-start gap-2">
										<span class="text-primary mt-1.5">•</span>
										{outcome}
									</li>
								{/each}
							</ul>
						</div>
						<div class="flex flex-wrap gap-2 mt-6">
							{#each project.tags as tag}
								<Badge variant="outline" class="text-xs">{tag}</Badge>
							{/each}
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<!-- Capabilities Section -->
<section class="py-16 lg:py-20 bg-muted/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-foreground mb-4">Our Capabilities</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				Our consultants have hands-on experience across industries and are committed to applying the
				latest best practices and technologies to solve real business challenges.
			</p>
		</div>
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
			<Card.Root class="text-center">
				<Card.Content class="pt-6">
					<div class="text-4xl font-bold text-primary mb-2">50+</div>
					<p class="text-muted-foreground text-sm">Projects Delivered</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="text-center">
				<Card.Content class="pt-6">
					<div class="text-4xl font-bold text-primary mb-2">15+</div>
					<p class="text-muted-foreground text-sm">Years Experience</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="text-center">
				<Card.Content class="pt-6">
					<div class="text-4xl font-bold text-primary mb-2">99%</div>
					<p class="text-muted-foreground text-sm">Client Satisfaction</p>
				</Card.Content>
			</Card.Root>
			<Card.Root class="text-center">
				<Card.Content class="pt-6">
					<div class="text-4xl font-bold text-primary mb-2">24/7</div>
					<p class="text-muted-foreground text-sm">Support Available</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-20 bg-primary text-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
		<p class="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
			Let's discuss how we can help you achieve your technology goals. Our team is ready to partner
			with you on your next initiative.
		</p>
		<Button href="/contact" variant="secondary" size="lg" class="font-semibold">
			Contact Our Team
		</Button>
	</div>
</section>
