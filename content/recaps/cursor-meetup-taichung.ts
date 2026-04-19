import { GalleryPhoto, RecapData } from '@/lib/types';

const base = '/images/events/cursor-taichung/1';

function photo(file: string, alt: string): GalleryPhoto {
	return {
		src: `${base}/${file}`,
		thumbSrc: `${base}/thumbs/${file}`,
		alt,
	};
}

const taichungFiles = [
	'PXL_20251230_103813965.jpg',
	'PXL_20251230_105946099.jpg',
	'PXL_20251230_111445939.PANO.jpg',
	'PXL_20251230_112137781.jpg',
	'PXL_20251230_112814896.jpg',
	'PXL_20251230_115518554.jpg',
	'PXL_20251230_115559469.jpg',
	'PXL_20251230_115915441.jpg',
] as const;

export const cursorMeetupTaichungRecap: RecapData = {
	slug: 'cursor-meetup-taichung',
	title: 'Cursor Meetup Taichung — Recap',
	date: 'December 30, 2025',
	summary: [
		'Builders joined us at Monospace in Taichung for an afternoon of Cursor workflows, hallway conversations, and real shipping stories.',
		'Thank you to everyone who came out, shared their setups, and made it a warm, high-signal room. See you at the next one.',
	],
	photos: taichungFiles.map((file, i) =>
		photo(file, `Cursor Meetup Taichung — community moment ${i + 1}`),
	),
};
