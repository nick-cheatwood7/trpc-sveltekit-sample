import type { AppRouter } from './server/trpc/router/_app';
import { createTRPCClient, type TRPCClientInit } from 'trpc-sveltekit';
import superjson from 'superjson';

let browserClient: ReturnType<typeof createTRPCClient<AppRouter>>;

export function trpc(init?: TRPCClientInit) {
	if (typeof window === 'undefined') {
		return createTRPCClient<AppRouter>({ init });
	}
	if (!browserClient) {
		browserClient = createTRPCClient<AppRouter>({
			transformer: superjson
		});
	}
	return browserClient;
}
