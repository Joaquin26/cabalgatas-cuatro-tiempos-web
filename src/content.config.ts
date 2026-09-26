import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const experiencias = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/experiencias" }),
	schema: z.object({
		title: z.string(),
		duration: z.string(),
		price: z.string().optional(),
		capacity: z.string().optional(),
		summary: z.string(),
	}),
});

export const collections = { experiencias };
