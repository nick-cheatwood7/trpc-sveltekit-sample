import { createContext } from '$lib/server/trpc/context';
import { appRouter } from '$lib/server/trpc/router/_app';
import type { Handle } from '@sveltejs/kit';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = createTRPCHandle({ router: appRouter, createContext });
