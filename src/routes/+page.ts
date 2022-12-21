import { trpc } from '$lib/trpc';
import type { PageLoad } from './$types';

export const load = ((event) => {
	return {
		greeting: trpc(event).example.hello.query()
	};
}) satisfies PageLoad;
