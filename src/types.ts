// Type definitions for the application

export interface Destination {
	id: string;
	name: string;
	image: string;
	description: string;
	benefits: string[];
	process: string[];
}

export interface Service {
	id: string;
	title: string;
	description: string;
	icon: string;
}

export interface Testimonial {
	id: string;
	name: string;
	quote: string;
	image: string;
	university: string;
	country: string;
}

export interface ContactFormData {
	fullName: string;
	email: string;
	phone: string;
	country: string;
	education: string;
	message: string;
	[key: string]: string;
}
// ...existing code from types.ts in root Cj folder...