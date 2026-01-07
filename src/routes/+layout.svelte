<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { Menu, X, ArrowUpRight } from 'lucide-svelte';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/projects', label: 'Work' },
		{ href: '/contact', label: 'Contact' }
	];

	const socialLinks = [
		{ label: 'LinkedIn', href: '#' },
		{ label: 'Twitter', href: '#' }
	];
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Anton&family=IBM+Plex+Sans:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Header -->
	<header class="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border">
		<div class="max-w-7xl mx-auto px-6 lg:px-8">
			<div class="flex justify-between items-center h-16 lg:h-20">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2">
					<span class="text-xl lg:text-2xl tracking-wide uppercase" style="font-family: 'Anton', sans-serif;">Mint Digital</span>
				</a>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex items-center gap-8">
					{#each navLinks as link}
						<a
							href={link.href}
							class="text-sm font-medium transition-colors hover:text-muted-foreground {$page.url
								.pathname === link.href
								? 'text-foreground'
								: 'text-muted-foreground'}"
						>
							{link.label}
						</a>
					{/each}
				</nav>

				<!-- CTA Button -->
				<div class="hidden md:block">
					<a
						href="/contact"
						class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
					>
						Let's Talk
						<ArrowUpRight class="w-4 h-4" />
					</a>
				</div>

				<!-- Mobile menu button -->
				<button
					class="md:hidden p-2 text-foreground"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label="Toggle menu"
				>
					{#if mobileMenuOpen}
						<X class="w-6 h-6" />
					{:else}
						<Menu class="w-6 h-6" />
					{/if}
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden bg-white border-t border-border">
				<nav class="px-6 py-4 space-y-4">
					{#each navLinks as link}
						<a
							href={link.href}
							class="block text-lg font-medium transition-colors hover:text-muted-foreground {$page
								.url.pathname === link.href
								? 'text-foreground'
								: 'text-muted-foreground'}"
							onclick={() => (mobileMenuOpen = false)}
						>
							{link.label}
						</a>
					{/each}
					<a
						href="/contact"
						class="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium mt-4"
						onclick={() => (mobileMenuOpen = false)}
					>
						Let's Talk
						<ArrowUpRight class="w-4 h-4" />
					</a>
				</nav>
			</div>
		{/if}
	</header>

	<!-- Main Content -->
	<main class="flex-1 pt-16 lg:pt-20">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-foreground text-white">
		<div class="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
				<!-- Brand -->
				<div class="lg:col-span-2">
					<a href="/" class="text-2xl lg:text-3xl tracking-wide uppercase" style="font-family: 'Anton', sans-serif;">Mint Digital</a>
					<p class="mt-4 text-white/70 max-w-md leading-relaxed">
						Transforming ideas into digital experiences. We partner with government agencies and
						enterprises to deliver technology solutions that make an impact.
					</p>
				</div>

				<!-- Navigation -->
				<div>
					<h3 class="font-semibold mb-4 text-white/50 uppercase text-sm tracking-wider">Pages</h3>
					<ul class="space-y-3">
						<li><a href="/" class="text-white/70 hover:text-white transition-colors">Home</a></li>
						{#each navLinks as link}
							<li>
								<a href={link.href} class="text-white/70 hover:text-white transition-colors">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>

				<!-- Contact -->
				<div>
					<h3 class="font-semibold mb-4 text-white/50 uppercase text-sm tracking-wider">Contact</h3>
					<ul class="space-y-3 text-white/70">
						<li>
							<a href="mailto:info@mintdigital.co" class="hover:text-white transition-colors">
								info@mintdigital.co
							</a>
						</li>
						<li>Washington, DC Metro</li>
					</ul>
					<div class="flex gap-4 mt-6">
						{#each socialLinks as social}
							<a
								href={social.href}
								class="text-white/50 hover:text-white transition-colors text-sm"
							>
								{social.label}
							</a>
						{/each}
					</div>
				</div>
			</div>

			<div class="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-white/50 text-sm">
					&copy; {new Date().getFullYear()} Mint Digital Marketing LLC
				</p>
				<p class="text-white/50 text-sm">All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>
