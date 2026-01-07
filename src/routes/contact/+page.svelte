<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';
	import { superForm } from 'sveltekit-superforms';
	import { Mail, Phone, MapPin, Clock } from 'lucide-svelte';

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

	const contactInfo = [
		{
			icon: Mail,
			label: 'Email',
			value: 'info@mintdigital.co',
			href: 'mailto:info@mintdigital.co'
		},
		{
			icon: Phone,
			label: 'Phone',
			value: '(202) 555-0123',
			href: 'tel:+12025550123'
		},
		{
			icon: MapPin,
			label: 'Location',
			value: 'Washington, DC Metro Area',
			href: null
		},
		{
			icon: Clock,
			label: 'Business Hours',
			value: 'Mon - Fri: 9:00 AM - 6:00 PM EST',
			href: null
		}
	];
</script>

<svelte:head>
	<title>Contact Us - Mint Digital</title>
	<meta
		name="description"
		content="Get in touch with Mint Digital. Contact us to discuss your IT consulting, security analysis, project management, or custom development needs."
	/>
</svelte:head>

<!-- Page Header -->
<section class="bg-gradient-to-br from-primary/5 via-white to-accent/30 py-16 lg:py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-3xl">
			<h1 class="text-4xl lg:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
			<p class="text-lg text-muted-foreground leading-relaxed">
				Ready to discuss your next project? We'd love to hear from you. Fill out the form below or
				reach out directly using the contact information provided.
			</p>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section class="py-16 lg:py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-3 gap-12">
			<!-- Contact Form -->
			<div class="lg:col-span-2">
				<Card.Root>
					<Card.Header>
						<Card.Title class="text-2xl">Send Us a Message</Card.Title>
						<Card.Description>
							Fill out the form below and we'll get back to you within 1 business day.
						</Card.Description>
					</Card.Header>
					<Card.Content>
						{#if message}
							<div class="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary">
								Thank you for your message! We'll be in touch soon.
							</div>
						{/if}

						<form method="POST" use:enhance class="space-y-6">
							<div class="grid sm:grid-cols-2 gap-6">
								<div class="space-y-2">
									<Label for="name">Full Name *</Label>
									<Input
										id="name"
										name="name"
										bind:value={$form.name}
										placeholder="John Smith"
										class={$errors.name ? 'border-destructive' : ''}
									/>
									{#if $errors.name}
										<p class="text-sm text-destructive">{$errors.name}</p>
									{/if}
								</div>
								<div class="space-y-2">
									<Label for="email">Email Address *</Label>
									<Input
										id="email"
										name="email"
										type="email"
										bind:value={$form.email}
										placeholder="john@example.gov"
										class={$errors.email ? 'border-destructive' : ''}
									/>
									{#if $errors.email}
										<p class="text-sm text-destructive">{$errors.email}</p>
									{/if}
								</div>
							</div>

							<div class="grid sm:grid-cols-2 gap-6">
								<div class="space-y-2">
									<Label for="organization">Organization</Label>
									<Input
										id="organization"
										name="organization"
										bind:value={$form.organization}
										placeholder="Agency or Company Name"
									/>
								</div>
								<div class="space-y-2">
									<Label for="phone">Phone Number</Label>
									<Input
										id="phone"
										name="phone"
										type="tel"
										bind:value={$form.phone}
										placeholder="(202) 555-0123"
									/>
								</div>
							</div>

							<div class="space-y-2">
								<Label for="subject">Subject *</Label>
								<Input
									id="subject"
									name="subject"
									bind:value={$form.subject}
									placeholder="How can we help you?"
									class={$errors.subject ? 'border-destructive' : ''}
								/>
								{#if $errors.subject}
									<p class="text-sm text-destructive">{$errors.subject}</p>
								{/if}
							</div>

							<div class="space-y-2">
								<Label for="message">Message *</Label>
								<Textarea
									id="message"
									name="message"
									bind:value={$form.message}
									placeholder="Tell us about your project or inquiry..."
									rows={6}
									class={$errors.message ? 'border-destructive' : ''}
								/>
								{#if $errors.message}
									<p class="text-sm text-destructive">{$errors.message}</p>
								{/if}
							</div>

							<Button type="submit" size="lg" class="w-full sm:w-auto" disabled={$submitting}>
								{$submitting ? 'Sending...' : 'Send Message'}
							</Button>
						</form>
					</Card.Content>
				</Card.Root>
			</div>

			<!-- Contact Info Sidebar -->
			<div class="space-y-6">
				<Card.Root>
					<Card.Header>
						<Card.Title>Contact Information</Card.Title>
					</Card.Header>
					<Card.Content class="space-y-6">
						{#each contactInfo as info}
							<div class="flex items-start gap-4">
								<div
									class="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0"
								>
									<info.icon class="w-5 h-5" />
								</div>
								<div>
									<p class="text-sm text-muted-foreground">{info.label}</p>
									{#if info.href}
										<a
											href={info.href}
											class="font-medium text-foreground hover:text-primary transition-colors"
										>
											{info.value}
										</a>
									{:else}
										<p class="font-medium text-foreground">{info.value}</p>
									{/if}
								</div>
							</div>
						{/each}
					</Card.Content>
				</Card.Root>

				<Card.Root class="bg-primary text-white">
					<Card.Content class="pt-6">
						<h3 class="font-semibold text-lg mb-2">Looking for immediate assistance?</h3>
						<p class="text-primary-foreground/90 text-sm mb-4">
							For urgent inquiries, please call us directly during business hours.
						</p>
						<Button variant="secondary" href="tel:+12025550123" class="w-full">
							<Phone class="w-4 h-4 mr-2" />
							Call Us Now
						</Button>
					</Card.Content>
				</Card.Root>
			</div>
		</div>
	</div>
</section>
