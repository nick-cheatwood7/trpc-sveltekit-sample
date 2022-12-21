import type { RequestEvent } from '@sveltejs/kit';
import type { inferAsyncReturnType } from '@trpc/server';

export const createContext = async (event: RequestEvent) => {
	return {
		req: event.request
	};
};

export type Context = inferAsyncReturnType<typeof createContext>;
