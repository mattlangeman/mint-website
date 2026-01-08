<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	let { children } = $props();
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ href: '/about', label: 'About' },
		{ href: '/services', label: 'Services' },
		{ href: '/projects', label: 'Work' },
		{ href: '/contact', label: 'Contact' }
	];

	const socialLinks = [
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
	<header class="sticky top-0 left-0 right-0 z-20 bg-background border-b-2 border-border h-[70px] flex flex-col justify-center">
		<div class="max-w-7xl mx-auto px-6 lg:px-8 w-full">
			<div class="flex justify-between items-center w-full">
				<!-- Logo -->
				<a href="/" class="nav-logo flex items-center gap-2">
					<img src="/images/logo.png" alt="" class="h-8 w-8" />
					Mint Digital
				</a>

				<!-- Desktop Navigation -->
				<nav class="hidden md:flex items-center gap-6 lg:gap-8">
					{#each navLinks as link}
						<a
							href={link.href}
							class="nav-link {$page.url.pathname === link.href ? 'nav-link-active' : ''}"
						>
							{link.label}
						</a>
					{/each}
				</nav>

				<!-- Mobile menu button -->
				<button
					class="menu-button flex md:hidden"
					onclick={() => (mobileMenuOpen = !mobileMenuOpen)}
					aria-label="Toggle menu"
				>
					<span class="menu-text">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
				</button>
			</div>
		</div>

		<!-- Mobile Navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden absolute top-[70px] left-0 right-0 bg-background border-b-2 border-border">
				<nav class="container mx-auto px-6 py-6 flex flex-col gap-4">
					{#each navLinks as link}
						<a
							href={link.href}
							class="nav-link text-xl {$page.url.pathname === link.href ? 'nav-link-active' : ''}"
							onclick={() => (mobileMenuOpen = false)}
						>
							{link.label}
						</a>
					{/each}
				</nav>
			</div>
		{/if}
	</header>

	<!-- Main Content -->
	<main class="flex-1">
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
						Amplify your impact with data-driven solutions. We work alongside non-profits, universities, and public sector organizations to design and build data-driven tools and strategies that fit your mission and deliver real results.


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
