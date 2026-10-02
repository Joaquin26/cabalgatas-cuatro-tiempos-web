import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Keys match the files in src/assets/experiencias/icons/.
const includeIcons = [
	"horse",
	"hat",
	"tray",
	"food",
	"class",
	"guide",
	"orange",
	"bonfire",
] as const;
const detailIcons = ["calendar", "clock", "user", "group"] as const;

const experiencias = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/experiencias" }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			duration: z.string(),
			summary: z.string(),
			hero: z.object({
				eyebrow: z.string(),
				title: z.string(),
				subtitle: z.string(),
				image: image(),
				alt: z.string(),
			}),
			intro: z.object({
				eyebrow: z.string(),
				title: z.string(),
				paragraphs: z.array(z.string()),
				image: image(),
				alt: z.string(),
			}),
			stepsTitle: z.string(),
			steps: z.array(
				z.object({
					title: z.string(),
					text: z.string(),
					image: image().optional(),
					alt: z.string().optional(),
				}),
			),
			place: z.object({
				eyebrow: z.string(),
				title: z.string(),
				text: z.string(),
				image: image(),
				alt: z.string(),
				action: z.object({ label: z.string(), href: z.string() }).optional(),
			}),
			includesTitle: z.string(),
			requirements: z.object({ title: z.string(), items: z.array(z.string()) }).optional(),
			includes: z.array(z.object({ icon: z.enum(includeIcons), label: z.string() })),
			booking: z.object({
				price: z.object({ currency: z.string(), amount: z.string(), unit: z.string() }),
				details: z.array(z.object({ icon: z.enum(detailIcons), lines: z.array(z.string()) })),
				cta: z.string(),
			}),
			faqTitle: z.string(),
			faq: z.array(z.object({ question: z.string(), answer: z.string() })),
			closing: z.object({ title: z.string(), text: z.string(), cta: z.string() }),
		}),
});

const legal = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		updated: z.string(),
	}),
});

export const collections = { experiencias, legal };
