import { GalleryPhoto, RecapData } from '@/lib/types';

const base = '/images/events/cursor-taichung/2';

function photo(file: string, alt: string): GalleryPhoto {
	return {
		src: `${base}/${file}`,
		thumbSrc: `${base}/thumbs/${file}`,
		alt,
	};
}

const taichungAprFiles = [
	'IMG_0440.jpg',
	'IMG_0451.jpg',
	'PXL_20260419_044405150.jpg',
	'PXL_20260419_061208678.jpg',
	'PXL_20260419_061607660.PANO.jpg',
	'PXL_20260419_062731549.jpg',
	'PXL_20260419_062813359.jpg',
	'PXL_20260419_063126877.jpg',
	'PXL_20260419_065039735.jpg',
	'PXL_20260419_072119375.jpg',
	'PXL_20260419_074711610.jpg',
	'PXL_20260419_081021319.jpg',
	'PXL_20260419_082152499.jpg',
	'PXL_20260419_082211980.jpg',
	'PXL_20260419_085224453.jpg',
] as const;

export const cursorMeetupTaichungApr2026Recap: RecapData = {
	slug: 'cursor-meetup-taichung-apr-2026',
	title: 'Cursor Meetup Taichung — Recap',
	date: 'April 19, 2026',
	summary: [
		'We returned to Monospace in Taichung for another afternoon of Cursor workflows, hallway demos, and shipping stories from the community.',
		'Thank you to everyone who showed up, shared their setups, and made the room feel welcoming. See you at the next meetup.',
	],
	photos: taichungAprFiles.map((file, i) =>
		photo(file, `Cursor Meetup Taichung — community moment ${i + 1}`),
	),
};
