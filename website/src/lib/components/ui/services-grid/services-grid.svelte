<script lang="ts">
	import { ServiceCard } from '$lib/components/ui/service-card';
	import { services, featuredServices } from '$lib/data/services';

	interface Props {
		featuredOnly?: boolean;
		class?: string;
	}

	let { featuredOnly = false, class: className = '' }: Props = $props();

	const displayServices = $derived(featuredOnly ? featuredServices : services);
</script>

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 {className}">
	{#each displayServices as service}
		<ServiceCard
			icon={service.icon}
			title={service.title}
			description={service.description}
		/>
	{/each}
</div>
