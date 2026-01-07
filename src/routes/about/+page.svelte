<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import { Target, Eye, Heart, Linkedin, Mail } from 'lucide-svelte';

	const teamMembers = [
		{
			name: 'Zachary Mitchell',
			title: 'Founder & Principal Consultant',
			bio: 'With over 15 years of experience in IT consulting and project management, Zach leads our team in delivering innovative solutions for government and enterprise clients.',
			image: '/images/team/zach.jpg'
		},
		{
			name: 'Sarah Chen',
			title: 'Director of Security Services',
			bio: 'Sarah brings extensive experience in cybersecurity analysis and compliance, helping clients navigate complex security requirements and protect their digital assets.',
			image: null
		},
		{
			name: 'Michael Torres',
			title: 'Lead Software Architect',
			bio: 'Michael specializes in designing scalable, secure applications and leads our custom development initiatives with a focus on modern technologies and best practices.',
			image: null
		},
		{
			name: 'Emily Rodriguez',
			title: 'Senior Project Manager',
			bio: 'Emily ensures successful project delivery through expert planning, stakeholder management, and her deep understanding of Agile and traditional methodologies.',
			image: null
		}
	];

	const values = [
		{
			icon: Target,
			title: 'Mission-Focused',
			description:
				'We understand the critical nature of government and enterprise IT. Every solution we deliver is designed with your mission in mind.'
		},
		{
			icon: Eye,
			title: 'Transparency',
			description:
				'We believe in open communication and honest assessments. You will always know where your project stands and what to expect.'
		},
		{
			icon: Heart,
			title: 'Partnership',
			description:
				'We are not just vendors—we are partners invested in your success. Your challenges become our challenges to solve.'
		}
	];
</script>

<svelte:head>
	<title>About Us - Mint Digital</title>
	<meta
		name="description"
		content="Learn about Mint Digital, a boutique consulting agency specializing in IT consulting, cloud services, cybersecurity analysis, and custom development."
	/>
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-primary/5 via-white to-accent/30 py-16 lg:py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl lg:text-5xl font-bold text-foreground mb-6">About Mint Digital</h1>
			<p class="text-lg text-muted-foreground leading-relaxed">
				We are a boutique consulting agency specializing in IT consulting, cloud services,
				cybersecurity analysis, project management, and custom web development. Our team brings deep
				technical expertise and a strategic approach to help organizations leverage technology
				effectively and securely.
			</p>
		</div>
	</div>
</section>

<!-- Our Story -->
<section class="py-16 lg:py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold text-foreground mb-6">Our Approach</h2>
				<div class="space-y-4 text-muted-foreground leading-relaxed">
					<p>
						We partner with clients to deliver tailored solutions that align with their goals,
						whether that means optimizing IT infrastructure, securing digital assets, managing
						complex projects, or building specialized web applications.
					</p>
					<p>
						Our consultants have hands-on experience across industries and are committed to applying
						the latest best practices and technologies to solve real business challenges.
					</p>
					<p>
						At Mint Digital, we understand that every organization is unique. That's why we take the
						time to understand your needs and design solutions that are scalable, practical, and
						results-driven.
					</p>
				</div>
			</div>
			<div class="bg-gradient-to-br from-primary/20 to-accent rounded-2xl p-8 lg:p-12">
				<h3 class="text-xl font-semibold text-foreground mb-4">Our Commitment</h3>
				<p class="text-foreground/80 italic">
					"Whether you're seeking support for a one-time project or a long-term strategic
					partnership, we are here to help you move forward with confidence."
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Values -->
<section class="py-16 lg:py-20 bg-muted/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-foreground mb-4">Our Values</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				These principles guide everything we do and shape how we work with our clients.
			</p>
		</div>
		<div class="grid md:grid-cols-3 gap-8">
			{#each values as value}
				<Card.Root class="text-center border-0 bg-white">
					<Card.Content class="pt-8 pb-8">
						<div
							class="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6 text-primary"
						>
							<value.icon class="w-7 h-7" />
						</div>
						<h3 class="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
						<p class="text-muted-foreground">{value.description}</p>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<Separator />

<!-- Team Section -->
<section class="py-16 lg:py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-foreground mb-4">Our Team</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				Meet the experienced professionals who make our success possible.
			</p>
		</div>
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each teamMembers as member}
				<Card.Root class="overflow-hidden">
					<div class="aspect-square bg-gradient-to-br from-primary/20 to-accent flex items-center justify-center">
						{#if member.image}
							<img src={member.image} alt={member.name} class="w-full h-full object-cover" />
						{:else}
							<div class="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center">
								<span class="text-3xl font-bold text-primary">
									{member.name
										.split(' ')
										.map((n) => n[0])
										.join('')}
								</span>
							</div>
						{/if}
					</div>
					<Card.Content class="pt-6">
						<h3 class="font-semibold text-lg text-foreground">{member.name}</h3>
						<p class="text-sm text-primary mb-3">{member.title}</p>
						<p class="text-sm text-muted-foreground">{member.bio}</p>
						<div class="flex gap-3 mt-4">
							<button
								class="text-muted-foreground hover:text-primary transition-colors"
								aria-label="LinkedIn"
							>
								<Linkedin class="w-5 h-5" />
							</button>
							<button
								class="text-muted-foreground hover:text-primary transition-colors"
								aria-label="Email"
							>
								<Mail class="w-5 h-5" />
							</button>
						</div>
					</Card.Content>
				</Card.Root>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-20 bg-primary text-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold mb-4">Want to Work With Us?</h2>
		<p class="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
			We're always looking to partner with organizations that share our commitment to excellence.
			Let's discuss how we can help you achieve your goals.
		</p>
		<Button href="/contact" variant="secondary" size="lg" class="font-semibold">
			Get in Touch
		</Button>
	</div>
</section>
