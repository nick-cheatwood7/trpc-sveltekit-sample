import { router, publicProcedure } from '../trpc';

export const exampleRouter = router({
	hello: publicProcedure.query(() => {
		return {
			greeting: 'hello!'
		};
	})
});
