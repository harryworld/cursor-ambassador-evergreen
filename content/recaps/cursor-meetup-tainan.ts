import { GalleryPhoto, RecapData } from '@/lib/types';

const base = '/images/events/cursor-tainan';

function photo(file: string, alt: string): GalleryPhoto {
	return {
		src: `${base}/${file}`,
		thumbSrc: `${base}/thumbs/${file}`,
		alt,
	};
}

const tainanFiles = [
	'PXL_20260131_055131721.jpg',
	'PXL_20260131_061842184.jpg',
	'PXL_20260131_062903151.jpg',
	'PXL_20260131_064712998.jpg',
	'PXL_20260131_071147999.jpg',
	'PXL_20260131_071235705.jpg',
	'PXL_20260131_081112309.jpg',
	'PXL_20260131_081545117.jpg',
	'PXL_20260131_083111362.jpg',
] as const;

export const cursorMeetupTainanRecap: RecapData = {
	slug: 'cursor-meetup-tainan',
	title: 'Cursor Meetup Tainan — Recap',
	date: 'January 31, 2026',
	summary: [
		'We hosted Cursor builders at Good Ideas Studio in Tainan — demos, pair debugging, and plenty of “how do you use Composer?” moments.',
		'Grateful to the hosts and photographers for capturing the day. Thank you for coming.',
	],
	photos: tainanFiles.map((file, i) =>
		photo(file, `Cursor Meetup Tainan — community moment ${i + 1}`),
	),
};
