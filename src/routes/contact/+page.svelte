<script lang="ts">
	import { Mail, MapPin } from 'lucide-svelte';
</script>

<svelte:head>
	<title>Contact Us - Mint Digital</title>
	<meta
		name="description"
		content="Get in touch with Mint Digital. Contact us to discuss your data strategy, custom dashboards, or web application needs."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="max-w-3xl">
			<p class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
				Contact
			</p>
			<h1 class="heading-display text-5xl lg:text-6xl xl:text-7xl leading-[0.9] mb-6">
				Let's Start a Conversation
			</h1>
			<p class="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-12">
				Ready to discuss your next project? We'd love to hear from you.
			</p>

			<div class="space-y-8">
				<div class="flex items-start gap-4">
					<div class="w-12 h-12 bg-muted rounded-xl flex items-center justify-center shrink-0">
						<Mail class="w-5 h-5" />
					</div>
					<div>
						<p class="text-sm text-muted-foreground mb-1">Email</p>
						<a
							href="mailto:hello@mintdigital.co"
							class="text-lg font-medium hover:text-muted-foreground transition-colors"
						>
							hello@mintdigital.co
						</a>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<div class="w-12 h-12 bg-muted rounded-xl flex items-center justify-center shrink-0">
						<MapPin class="w-5 h-5" />
					</div>
					<div>
						<p class="text-sm text-muted-foreground mb-1">Location</p>
						<p class="text-lg font-medium">Baltimore, MD and Washington, DC Metro Area</p>
						<p class="text-sm font-medium">While we love to meet in person, we have fully embraced remote work.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
