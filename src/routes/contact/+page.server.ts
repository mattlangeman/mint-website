import type { Actions, PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { contactSchema } from '$lib/schemas/contact';

export const load: PageServerLoad = async () => {
	return {
		form: await superValidate(zod(contactSchema))
	};
};

export const actions: Actions = {
	default: async ({ request }) => {
		const form = await superValidate(request, zod(contactSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		// Here you would typically:
		// - Send an email notification
		// - Store in database
		// - Send to CRM
		// For now, we just simulate success
		console.log('Contact form submission:', form.data);

		return {
			form,
			success: true
		};
	}
};
