import { ChartNoAxesCombined, AppWindow, LayoutDashboard, Smartphone, Lightbulb } from 'lucide-svelte';

export interface Service {
	icon: typeof LayoutDashboard;
	title: string;
	description: string;
	featured?: boolean;
}

export const services: Service[] = [
	{
		icon: AppWindow,
		title: 'Web Applications',
		description:
			"Streamline your operations with custom web applications tailored to your organization's needs. From data management to automation, we build solutions that drive efficiency and impact.",
		featured: true
	},
	{
		icon: ChartNoAxesCombined,
		title: 'Custom Dashboards',
		description:
			'Show actionable insights to the right people at the right time. We build dashboard solutions that give your team the visibility they need to make informed decisions quickly.',
		featured: true
	},
	{
		icon: Smartphone,
		title: 'Mobile Data Collection',
		description:
			'Collect data in the field with ease. Our mobile data collection apps are designed for usability and reliability, ensuring your team can capture accurate data anytime, anywhere.',
		featured: true
	},
	{
		icon: Lightbulb,
		title: 'Data Strategy',
		description:
			'Learn how to leverage your data to improve efficiency and make better decisions. We work with you to develop a roadmap for becoming a more data-driven organization.'
	}
];

export const featuredServices = services.filter((s) => s.featured);
