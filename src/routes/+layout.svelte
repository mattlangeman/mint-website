<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import { page } from '$app/stores';
	import { Menu, X } from 'lucide-svelte';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Services' },
		{ href: '/projects', label: 'Past Projects' },
		{ href: '/about', label: 'About Us' },
		{ href: '/contact', label: 'Contact' }
	];
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="min-h-screen flex flex-col">
	<!-- Header -->
	<header class="border-b border-border bg-white sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<!-- Logo -->
				<a href="/" class="flex items-center gap-2">
					<div class="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
						<span class="text-white font-bold text-lg">M</span>
					</div>
					<span class="font-semibold text-xl text-foreground">Mint Digital</span>
				</a>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex items-center gap-8">
					{#each navLinks as link}
						<a
							href={link.href}
							class="text-sm font-medium transition-colors hover:text-primary {$page.url
								.pathname === link.href
								? 'text-primary'
								: 'text-muted-foreground'}"
						>
							{link.label}
						</a>
					{/each}
				</nav>

				<!-- Mobile menu button -->
				<button
					class="md:hidden p-2 text-muted-foreground hover:text-foreground"
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

			<!-- Mobile Navigation -->
			{#if mobileMenuOpen}
				<nav class="md:hidden py-4 border-t border-border">
					{#each navLinks as link}
						<a
							href={link.href}
							class="block py-2 text-sm font-medium transition-colors hover:text-primary {$page.url
								.pathname === link.href
								? 'text-primary'
								: 'text-muted-foreground'}"
							onclick={() => (mobileMenuOpen = false)}
						>
							{link.label}
						</a>
					{/each}
				</nav>
			{/if}
		</div>
	</header>

	<!-- Main Content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-foreground text-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div class="col-span-1 md:col-span-2">
					<div class="flex items-center gap-2 mb-4">
						<div class="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
							<span class="text-white font-bold text-lg">M</span>
						</div>
						<span class="font-semibold text-xl">Mint Digital</span>
					</div>
					<p class="text-slate-400 max-w-md">
						A boutique consulting agency specializing in IT consulting, cloud services,
						cybersecurity analysis, project management, and custom web development.
					</p>
				</div>
				<div>
					<h3 class="font-semibold mb-4">Quick Links</h3>
					<ul class="space-y-2">
						{#each navLinks as link}
							<li>
								<a href={link.href} class="text-slate-400 hover:text-white transition-colors">
									{link.label}
								</a>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<h3 class="font-semibold mb-4">Contact</h3>
					<ul class="space-y-2 text-slate-400">
						<li>info@mintdigital.co</li>
						<li>Washington, DC Metro Area</li>
					</ul>
				</div>
			</div>
			<div class="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400">
				<p>&copy; {new Date().getFullYear()} Mint Digital Marketing LLC. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>
