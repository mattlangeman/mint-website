<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import { superForm } from 'sveltekit-superforms';
	import { ArrowUpRight, Mail, MapPin } from 'lucide-svelte';

	interface Props {
		data: {
			form: any;
		};
	}

	let { data }: Props = $props();

	// svelte-ignore state_referenced_locally
	const { form, errors, enhance, submitting, message } = superForm(data.form, {
		resetForm: true
	});
</script>

<svelte:head>
	<title>Contact Us - Mint Digital</title>
	<meta
		name="description"
		content="Get in touch with Mint Digital. Contact us to discuss your IT consulting, security analysis, project management, or custom development needs."
	/>
</svelte:head>

<!-- Hero Section -->
<section class="py-20 lg:py-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="grid lg:grid-cols-2 gap-12 lg:gap-20">
			<div>
				<p class="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
					Contact
				</p>
				<h1 class="heading-display text-5xl lg:text-6xl xl:text-7xl leading-[0.9] mb-6">
					Let's Start a Conversation
				</h1>
				<p class="text-lg lg:text-xl text-muted-foreground leading-relaxed">
					Ready to discuss your next project? We'd love to hear from you. Fill out the form and
					we'll get back to you within 24 hours.
				</p>
			</div>
			<div class="flex items-end">
				<div class="space-y-8 w-full">
					<div class="flex items-start gap-4">
						<div
							class="w-12 h-12 bg-muted rounded-xl flex items-center justify-center shrink-0"
						>
							<Mail class="w-5 h-5" />
						</div>
						<div>
							<p class="text-sm text-muted-foreground mb-1">Email</p>
							<a
								href="mailto:info@mintdigital.co"
								class="text-lg font-medium hover:text-muted-foreground transition-colors"
							>
								info@mintdigital.co
							</a>
						</div>
					</div>
					<div class="flex items-start gap-4">
						<div
							class="w-12 h-12 bg-muted rounded-xl flex items-center justify-center shrink-0"
						>
							<MapPin class="w-5 h-5" />
						</div>
						<div>
							<p class="text-sm text-muted-foreground mb-1">Location</p>
							<p class="text-lg font-medium">Washington, DC Metro Area</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Form Section -->
<section class="pb-20 lg:pb-32">
	<div class="max-w-7xl mx-auto px-6 lg:px-8">
		<div class="bg-muted rounded-3xl p-8 lg:p-16">
			{#if message}
				<div class="mb-8 p-6 bg-foreground text-white rounded-2xl text-center">
					<p class="text-lg font-medium">Thank you for your message!</p>
					<p class="text-white/70">We'll be in touch within 24 hours.</p>
				</div>
			{/if}

			<form method="POST" use:enhance class="space-y-8">
				<div class="grid md:grid-cols-2 gap-8">
					<div class="space-y-2">
						<Label for="name" class="text-sm font-medium">Full Name *</Label>
						<Input
							id="name"
							name="name"
							bind:value={$form.name}
							placeholder="John Smith"
							class="h-14 bg-white border-0 rounded-xl text-base {$errors.name
								? 'ring-2 ring-destructive'
								: ''}"
						/>
						{#if $errors.name}
							<p class="text-sm text-destructive">{$errors.name}</p>
						{/if}
					</div>
					<div class="space-y-2">
						<Label for="email" class="text-sm font-medium">Email Address *</Label>
						<Input
							id="email"
							name="email"
							type="email"
							bind:value={$form.email}
							placeholder="john@example.gov"
							class="h-14 bg-white border-0 rounded-xl text-base {$errors.email
								? 'ring-2 ring-destructive'
								: ''}"
						/>
						{#if $errors.email}
							<p class="text-sm text-destructive">{$errors.email}</p>
						{/if}
					</div>
				</div>

				<div class="grid md:grid-cols-2 gap-8">
					<div class="space-y-2">
						<Label for="organization" class="text-sm font-medium">Organization</Label>
						<Input
							id="organization"
							name="organization"
							bind:value={$form.organization}
							placeholder="Agency or Company"
							class="h-14 bg-white border-0 rounded-xl text-base"
						/>
					</div>
					<div class="space-y-2">
						<Label for="phone" class="text-sm font-medium">Phone Number</Label>
						<Input
							id="phone"
							name="phone"
							type="tel"
							bind:value={$form.phone}
							placeholder="(202) 555-0123"
							class="h-14 bg-white border-0 rounded-xl text-base"
						/>
					</div>
				</div>

				<div class="space-y-2">
					<Label for="subject" class="text-sm font-medium">Subject *</Label>
					<Input
						id="subject"
						name="subject"
						bind:value={$form.subject}
						placeholder="How can we help you?"
						class="h-14 bg-white border-0 rounded-xl text-base {$errors.subject
							? 'ring-2 ring-destructive'
							: ''}"
					/>
					{#if $errors.subject}
						<p class="text-sm text-destructive">{$errors.subject}</p>
					{/if}
				</div>

				<div class="space-y-2">
					<Label for="message" class="text-sm font-medium">Message *</Label>
					<Textarea
						id="message"
						name="message"
						bind:value={$form.message}
						placeholder="Tell us about your project or inquiry..."
						rows={6}
						class="bg-white border-0 rounded-xl text-base resize-none {$errors.message
							? 'ring-2 ring-destructive'
							: ''}"
					/>
					{#if $errors.message}
						<p class="text-sm text-destructive">{$errors.message}</p>
					{/if}
				</div>

				<div class="pt-4">
					<button
						type="submit"
						disabled={$submitting}
						class="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
					>
						{$submitting ? 'Sending...' : 'Send Message'}
						<ArrowUpRight class="w-5 h-5" />
					</button>
				</div>
			</form>
		</div>
	</div>
</section>
