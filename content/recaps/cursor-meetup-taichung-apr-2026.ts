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
	// Lineup + Threads: https://www.threads.com/@iamraven.tw/post/DXTp3VLGLTs · Luma: https://luma.com/43054c24
	// Speaker PDFs live under `public/slides/` and are served from `/slides/...`.
	speakers: [
		{
			name: 'Raven（@iamraven.tw）',
			topic: 'Lightning share — OpenClaw and community takeaways',
			threads: 'https://www.threads.com/@iamraven.tw',
			slidesUrl: '/slides/611126659647275366_RavenAI.pdf',
		},
		{
			name: 'Hana（花水木 @hanamizuki）',
			topic: 'Mojo — a live AI agent, data sources, and practical skills',
			threads: 'https://www.threads.com/@hanamizuki',
			slidesUrl: '/slides/611480740324704359_cursor-meetup-hana.pdf',
		},
		{
			name: 'Jax（@brainness.ai）',
			topic: 'OpenClaw for coaching — client training plans and AI practice',
			threads: 'https://www.threads.com/@brainness.ai',
			slidesUrl: '/slides/brainess.pdf',
		},
		{
			name: 'Roy（酪梨 Roy · @roy.ai.coach）',
			topic: 'Startup AI adoption — multi-agent teams for product development',
			threads: 'https://www.threads.com/@roy.ai.coach',
			slidesUrl: '/slides/612313985991835972_20260419_Mono_AI.pdf',
		},
		{
			name: 'Codemeteor（@codemeteor）',
			topic: 'Claude Canvas — visual workflows for team communication',
			threads: 'https://www.threads.com/@codemeteor',
		},
	],
	photos: taichungAprFiles.map((file, i) =>
		photo(file, `Cursor Meetup Taichung — community moment ${i + 1}`),
	),
};
