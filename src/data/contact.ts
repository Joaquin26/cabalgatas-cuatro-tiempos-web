// Phone, email, hours and social links are confirmed by the client. Every page reads contact data
// from here.
export const phone = "+51 904 472 588";
export const email = "cabalgatascuatrotiempos@gmail.com";
export const hours = "Lun - Dom 9:00 a.m. - 6:00 p.m.";
export const instagramUrl = "https://www.instagram.com/cabalgatas.cuatrotiempos/";
export const tiktokUrl = "https://www.tiktok.com/@cabalgatascuatrotiempos";

const whatsappNumber = "51904472588";

/** WhatsApp link with a prefilled message, so the chat opens already written. */
export const whatsappLink = (message?: string) =>
	`https://wa.me/${whatsappNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

// MOCK: draft wording for each entry point; confirm the tone with the client. They will be replaced
// by the booking flow once it exists.
export const messages = {
	general: "Hola, tengo una consulta sobre Cabalgatas Cuatro Tiempos.",
	celebration: "Hola, quiero organizar una celebración con Cabalgatas Cuatro Tiempos. Mi idea es: ",
	booking: (experience: string) =>
		`Hola, quiero reservar la experiencia "${experience}". Somos ___ personas y nos gustaría ir el ___.`,
	question: (experience: string) =>
		`Hola, tengo una consulta sobre la experiencia "${experience}".`,
};

export const whatsappUrl = whatsappLink(messages.general);
