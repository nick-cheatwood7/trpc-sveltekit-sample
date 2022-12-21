import type { Context } from './context';
import { initTRPC } from '@trpc/server';
import superjson from 'superjson';

export const t = initTRPC.context<Context>().create({
	transformer: superjson
});

export const router = t.router;

const procedure = t.procedure;
export const publicProcedure = procedure;
export const protectedProcedure = procedure;
