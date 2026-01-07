<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Shield, Code, Users, ClipboardList, CheckCircle } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Mint Digital - IT Consulting & Government Solutions</title>
	<meta
		name="description"
		content="Mint Digital is a boutique consulting agency specializing in IT consulting, cloud services, cybersecurity analysis, and custom development for government and enterprise clients."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="bg-gradient-to-br from-primary/5 via-white to-accent/30 py-20 lg:py-28">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
				Technology Solutions for
				<span class="text-primary">Mission-Critical</span> Success
			</h1>
			<p class="text-lg text-muted-foreground mb-8 leading-relaxed">
				Mint Digital is a boutique consulting agency delivering IT consulting, cloud services,
				cybersecurity analysis, project management, and custom development. We partner with
				government agencies and enterprises to solve complex technology challenges.
			</p>
			<div class="flex flex-col sm:flex-row gap-4">
				<Button href="/services" size="lg" class="font-semibold">View Our Services</Button>
				<Button href="/contact" variant="outline" size="lg" class="font-semibold"
					>Contact Us</Button
				>
			</div>
		</div>
	</div>
</section>

<!-- Why Choose Us Section -->
<section class="py-16 lg:py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-foreground mb-4">Why Partner With Mint Digital?</h2>
			<p class="text-muted-foreground max-w-2xl mx-auto">
				We bring deep technical expertise and a strategic approach to help organizations leverage
				technology effectively and securely.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			<Card.Root class="border-2 hover:border-primary/50 transition-colors">
				<Card.Content class="pt-6">
					<div
						class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary"
					>
						<Shield class="w-6 h-6" />
					</div>
					<h3 class="font-semibold text-lg mb-2">Security First</h3>
					<p class="text-muted-foreground text-sm">
						Comprehensive security analysis and best practices built into every solution we deliver.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root class="border-2 hover:border-primary/50 transition-colors">
				<Card.Content class="pt-6">
					<div
						class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary"
					>
						<Code class="w-6 h-6" />
					</div>
					<h3 class="font-semibold text-lg mb-2">Custom Solutions</h3>
					<p class="text-muted-foreground text-sm">
						Tailored applications and systems designed to meet your unique operational requirements.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root class="border-2 hover:border-primary/50 transition-colors">
				<Card.Content class="pt-6">
					<div
						class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary"
					>
						<Users class="w-6 h-6" />
					</div>
					<h3 class="font-semibold text-lg mb-2">Dedicated Team</h3>
					<p class="text-muted-foreground text-sm">
						Experienced consultants with hands-on expertise across industries and technologies.
					</p>
				</Card.Content>
			</Card.Root>

			<Card.Root class="border-2 hover:border-primary/50 transition-colors">
				<Card.Content class="pt-6">
					<div
						class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary"
					>
						<ClipboardList class="w-6 h-6" />
					</div>
					<h3 class="font-semibold text-lg mb-2">Proven Process</h3>
					<p class="text-muted-foreground text-sm">
						Structured project management methodologies ensuring on-time, on-budget delivery.
					</p>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>

<!-- Services Overview -->
<section class="py-16 lg:py-20 bg-muted/50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold text-foreground mb-6">Comprehensive IT Services</h2>
				<p class="text-muted-foreground mb-8">
					We partner with clients to deliver tailored solutions that align with their goals, whether
					that means optimizing IT infrastructure, securing digital assets, managing complex
					projects, or building specialized applications.
				</p>
				<ul class="space-y-4">
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-primary mt-0.5 shrink-0" />
						<span>Custom Application Design & Development</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-primary mt-0.5 shrink-0" />
						<span>IT Project Management</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-primary mt-0.5 shrink-0" />
						<span>Security Analysis & Cybersecurity</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-primary mt-0.5 shrink-0" />
						<span>IT Consulting & Strategy</span>
					</li>
					<li class="flex items-start gap-3">
						<CheckCircle class="w-5 h-5 text-primary mt-0.5 shrink-0" />
						<span>Specialty Web Development</span>
					</li>
				</ul>
				<div class="mt-8">
					<Button href="/services">Learn More About Our Services</Button>
				</div>
			</div>
			<div class="bg-gradient-to-br from-primary/20 to-accent rounded-2xl p-8 lg:p-12">
				<blockquote class="text-lg italic text-foreground">
					"At Mint Digital, we understand that every organization is unique. That's why we take the
					time to understand your needs and design solutions that are scalable, practical, and
					results-driven."
				</blockquote>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-20 bg-primary text-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold mb-4">Ready to Get Started?</h2>
		<p class="text-primary-foreground/90 max-w-2xl mx-auto mb-8">
			Whether you're seeking support for a one-time project or a long-term strategic partnership, we
			are here to help you move forward with confidence.
		</p>
		<Button href="/contact" variant="secondary" size="lg" class="font-semibold">
			Contact Our Team
		</Button>
	</div>
</section>
