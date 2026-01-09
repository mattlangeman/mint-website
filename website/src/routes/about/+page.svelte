<script lang="ts">
	import { ArrowUpRight, ArrowRight } from 'lucide-svelte';

	const teamMembers = [
		{
			name: 'Zach',
			title: 'Founder & Principal Consultant',
			bio: 'With over 15 years in IT consulting, cybersecurity, and web development, Zach leads our team in delivering innovative solutions for government and enterprise clients.',
			image: '/images/team/zach-outside.jpeg'
		},
		{
			name: 'Matt',
			title: 'Principal Consultant',
			bio: 'Matt brings over 20 years of full-stack development experience to lead our technical direction, building custom web applications and dashboards that meet real client needs.',
			image: '/images/team/matt.jpg'
		},
		{
			name: 'Trevor',
			title: 'Principal Consultant',
			bio: 'Trevor combines deep expertise in data engineering and GIS with years of experience turning complex datasets into actionable insights. He leads our data strategy initiatives.',
			image: '/images/team/trevor-outside.png'
		}
	];

	const values = [
		{
			number: '01',
			title: 'Mission Focus',
			description:
				'We understand the critical nature of non-profit and public sector work. Every solution we deliver is designed with your mission in mind.'
		},
		{
			number: '02',
			title: 'Transparency',
			description:
				'We believe in open communication and honest assessments. You will always know where your project stands.'
		},
		{
			number: '03',
			title: 'Partnership',
			description:
				"We're not just vendors—we're partners invested in your success. Your challenges become our challenges to solve."
		}
	];
</script>

<svelte:head>
	<title>About Us - Mint Digital</title>
	<meta
		name="description"
		content="Learn about Mint Digital, a boutique consulting agency specializing in IT consulting, cloud services, cybersecurity, and custom development."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
			<div>
				<p class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
					About Us
				</p>
				<h1 class="heading-display text-5xl lg:text-6xl xl:text-7xl leading-[0.9] mb-6">
					We're a Boutique Consulting Agency
				</h1>
			</div>
			<div class="flex items-end">
				<p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">
					We bring deep technical expertise and a strategic approach to help organizations leverage
					technology effectively and securely. Our team partners with you to deliver solutions that
					make a real impact.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Image Section -->
<section class="pb-20 lg:pb-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="aspect-[21/9] bg-muted overflow-hidden">
			<img
				src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80"
				alt="Team collaboration"
				class="w-full h-full object-cover"
			/>
		</div>
	</div>
</section>

<!-- Story Section -->
<section class="py-20 lg:py-32 bg-muted">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
			<div>
				<p class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
					Our Story
				</p>
				<h2 class="heading-display text-4xl lg:text-5xl mb-6">Built on Experience</h2>
			</div>
			<div class="space-y-6 text-lg text-muted-foreground leading-relaxed">
				<p>
					Mint Digital was founded with a simple mission: to help organizations navigate the complex
					world of technology with confidence. We partner with clients to deliver tailored solutions
					that align with their goals.
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
	</div>
</section>

<!-- Values Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="mb-16">
			<p class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
				Our Values
			</p>
			<h2 class="heading-display text-4xl lg:text-5xl">What Drives Us</h2>
		</div>
		<div class="grid md:grid-cols-3 gap-8 lg:gap-12">
			{#each values as value}
				<div>
					<span class="text-5xl lg:text-6xl font-bold text-muted-foreground/30 block mb-4">
						{value.number}
					</span>
					<h3 class="text-2xl font-semibold mb-4">{value.title}</h3>
					<p class="text-muted-foreground leading-relaxed">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Team Section -->
<section class="py-20 lg:py-32 bg-foreground text-white">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
			<div>
				<p class="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">Our Team</p>
				<h2 class="heading-display text-4xl lg:text-5xl">Meet the Experts</h2>
			</div>
		</div>
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each teamMembers as member}
				<div class="group">
					<div class="aspect-square w-32 lg:w-40 overflow-hidden mb-6 bg-white/10">
						{#if member.image}
							<img
								src={member.image}
								alt={member.name}
								class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
							/>
						{:else}
							<div class="w-full h-full flex items-center justify-center">
								<span class="text-5xl font-bold text-white/20">
									{member.name
										.split(' ')
										.map((n) => n[0])
										.join('')}
								</span>
							</div>
						{/if}
					</div>
					<h3 class="text-xl font-semibold mb-1">{member.name}</h3>
					<p class="text-white/50 text-sm mb-3">{member.title}</p>
					<p class="text-white/70 text-sm leading-relaxed">{member.bio}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8 text-center">
		<h2 class="heading-display text-4xl lg:text-5xl mb-6">Want to Work With Us?</h2>
		<p class="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
			We're always looking to partner with organizations that share our commitment to excellence.
			Let's discuss how we can help you achieve your goals.
		</p>
		<a
			href="/contact"
			class="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-colors"
		>
			Get in Touch
			<ArrowUpRight class="w-5 h-5" />
		</a>
	</div>
</section>
