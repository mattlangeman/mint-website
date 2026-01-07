<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Code, ClipboardList, Shield, Lightbulb, Globe, ArrowRight } from 'lucide-svelte';

	const services = [
		{
			icon: Code,
			title: 'Custom Application Design & Development',
			description:
				'We specialize in creating custom applications to meet unique needs. Our experienced team of developers uses cutting-edge technologies to design and build software that is tailored to your business requirements.',
			details: [
				'Custom web applications, mobile apps, and desktop software',
				'Industry-standard development practices',
				'Secure, scalable, and maintainable solutions',
				'Close collaboration to understand your specific needs and budget'
			]
		},
		{
			icon: ClipboardList,
			title: 'IT Project Management',
			description:
				'We understand that managing complex IT projects can be a daunting task. We offer comprehensive project management services to help you successfully plan, execute, and complete your IT projects on time and within budget.',
			details: [
				'Expertise in Agile, Scrum, Waterfall, and hybrid methodologies',
				'Detailed project planning and lifecycle management',
				'Stakeholder communication and engagement',
				'Risk identification and mitigation strategies'
			]
		},
		{
			icon: Shield,
			title: 'Security Analysis',
			description:
				'We offer comprehensive security analysis services to help you identify vulnerabilities and implement effective security solutions to protect your organization from cybersecurity threats.',
			details: [
				'Penetration testing and vulnerability assessments',
				'Threat modeling and risk analysis',
				'Network, application, data, and cloud security',
				'Detailed reports and actionable recommendations'
			]
		},
		{
			icon: Lightbulb,
			title: 'IT Consulting Services',
			description:
				'We offer a wide range of IT consulting services to help organizations of all sizes achieve their technology goals. Our experienced team develops and implements custom solutions that meet your specific needs.',
			details: [
				'IT strategy development and technology planning',
				'Software selection and implementation',
				'Business process optimization',
				'Ongoing consulting support and partnership'
			]
		},
		{
			icon: Globe,
			title: 'Specialty Web Development',
			description:
				'We specialize in creating specialty websites and web applications that are tailored to your needs and goals. Our team uses the latest technologies to deliver user-friendly, responsive, and search-optimized solutions.',
			details: [
				'Non-standard functionality and custom features',
				'User experience focused design',
				'Search engine optimization',
				'Latest web development technologies and trends'
			]
		}
	];
</script>

<svelte:head>
	<title>Services - Mint Digital</title>
	<meta
		name="description"
		content="Mint Digital offers custom application development, IT project management, security analysis, consulting services, and specialty web development."
	/>
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-primary/5 via-white to-accent/30 py-16 lg:py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl lg:text-5xl font-bold text-foreground mb-6">Our Services</h1>
			<p class="text-lg text-muted-foreground leading-relaxed">
				We partner with clients to deliver tailored solutions that align with their goals, whether
				that means optimizing IT infrastructure, securing digital assets, managing complex projects,
				or building specialized applications.
			</p>
		</div>
	</div>
</section>

<!-- Services List -->
<section class="py-16 lg:py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="space-y-16">
			{#each services as service, i}
				<div class="grid lg:grid-cols-2 gap-8 items-start">
					<div class={i % 2 === 1 ? 'lg:order-2' : ''}>
						<div
							class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary"
						>
							<service.icon class="w-7 h-7" />
						</div>
						<h2 class="text-2xl lg:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
						<p class="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
						<ul class="space-y-3">
							{#each service.details as detail}
								<li class="flex items-start gap-3">
									<ArrowRight class="w-5 h-5 text-primary mt-0.5 shrink-0" />
									<span class="text-foreground">{detail}</span>
								</li>
							{/each}
						</ul>
					</div>
					<div class={i % 2 === 1 ? 'lg:order-1' : ''}>
						<Card.Root class="bg-muted/30 border-0">
							<Card.Content class="p-8">
								<div class="aspect-video bg-gradient-to-br from-primary/20 to-accent rounded-lg"></div>
							</Card.Content>
						</Card.Root>
					</div>
				</div>
				{#if i < services.length - 1}
					<Separator />
				{/if}
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-20 bg-muted/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold text-foreground mb-4">Need a Custom Solution?</h2>
		<p class="text-muted-foreground max-w-2xl mx-auto mb-8">
			Every organization has unique challenges. Contact us to discuss how we can tailor our services
			to meet your specific requirements.
		</p>
		<Button href="/contact" size="lg" class="font-semibold">Get in Touch</Button>
	</div>
</section>
