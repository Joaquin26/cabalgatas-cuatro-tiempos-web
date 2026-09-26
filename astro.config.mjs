// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		// Off by default: prevents the toolbar overlay from bleeding into
		// full-page screenshots taken against `astro dev` during review.
		enabled: false,
	},
});
