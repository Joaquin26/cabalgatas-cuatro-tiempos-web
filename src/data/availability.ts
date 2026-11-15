// MOCK: availability is simulated. Replace getAvailability with a call to the real booking system;
// the dialog only depends on the shape of what it returns.

export interface Schedule {
	weekdays?: number[];
	dates?: string[];
	minPeople: number;
	maxPeople: number;
}

export type DayStatus = "unavailable" | "available" | "low" | "soldout";

export interface DayAvailability {
	status: DayStatus;
	left: number;
}

/** Local date as YYYY-MM-DD (no timezone shifts). */
export const toKey = (date: Date) =>
	`${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;

const hash = (text: string) => {
	let h = 2166136261;
	for (const char of text) h = Math.imul(h ^ char.charCodeAt(0), 16777619);
	return h >>> 0;
};

export function getAvailability(slug: string, date: Date, schedule: Schedule): DayAvailability {
	const key = toKey(date);
	const offered = schedule.dates
		? schedule.dates.includes(key)
		: (schedule.weekdays ?? []).includes(date.getDay());
	if (!offered) return { status: "unavailable", left: 0 };

	// Deterministic pseudo-random spots so every state shows up: sold out, last spots, plenty.
	const r = hash(`${slug}:${key}`) % 10;
	if (r < 2) return { status: "soldout", left: 0 };
	if (r < 4) {
		const left = Math.min(schedule.maxPeople, 1 + (r % 3));
		return { status: left <= 3 ? "low" : "available", left };
	}
	const left = Math.max(
		1,
		schedule.maxPeople - (r % Math.max(2, Math.floor(schedule.maxPeople / 3))),
	);
	return { status: left <= 3 ? "low" : "available", left };
}

const dayNames = ["domingos", "lunes", "martes", "miércoles", "jueves", "viernes", "sábados"];
const dayShort = ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"];

/**
 * Label for the days an experience runs, such as "Domingos" or "Martes y viernes". `short` gives the
 * phone version ("Mar, mié y vie") when several days are listed.
 */
export function scheduleLabel(schedule: Schedule, short = false): string {
	if (schedule.dates?.length) return short ? "Por fechas" : "Fechas programadas";
	const days = [...(schedule.weekdays ?? [])].sort();
	const names = days.map((day) => (short && days.length > 1 ? dayShort : dayNames)[day]);
	if (names.length === 0) return "";
	const text = names.length === 1 ? names[0] : `${names.slice(0, -1).join(", ")} y ${names.at(-1)}`;
	return text.charAt(0).toUpperCase() + text.slice(1);
}
