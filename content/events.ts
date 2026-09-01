import { CursorEvent } from '@/lib/types';

const taichungThumbDir = '/images/events/cursor-taichung/1/thumbs';
const taichungApr2026ThumbDir = '/images/events/cursor-taichung/2/thumbs';
const taichungSep2026ThumbDir = '/images/events/cursor-taichung/3/thumbs';
const tainanThumbDir = '/images/events/cursor-tainan/1/thumbs';
const tainanMay2026ThumbDir = '/images/events/cursor-tainan/2/thumbs';
const taipeiSep2026ThumbDir = '/images/events/cursor-taipei/1/thumbs';

// Upcoming: https://luma.com/cursor-taiwan
// Past: Taiwan-only — Luma pages verified where linked.
export const events: CursorEvent[] = [
	{
		id: 'cursor-meetup-taichung-sep-2026',
		title: 'Cursor Meetup Taichung',
		date: '2026-09-01',
		displayDate: 'September 1, 2026',
		location: 'Monospace 共同工作空間, West District, Taichung City',
		lumaUrl: 'https://luma.com/cursor-meetup-taichung-3',
		// Placeholder artwork until the event happens; swap for real photos in the recap.
		thumbnail: `${taichungSep2026ThumbDir}/luma-social-card.jpg`,
		galleryImages: [
			`${taichungSep2026ThumbDir}/placeholder-1.jpg`,
			`${taichungSep2026ThumbDir}/placeholder-2.jpg`,
		],
		status: 'upcoming',
	},
	{
		id: 'cursor-for-dev-marketers-taipei-sep-2026',
		title: 'Cursor for Dev Marketers: Taipei, with Josh Kim',
		date: '2026-09-02',
		displayDate: 'September 2, 2026',
		// Exact venue is registration-gated on Luma; district only, per Luma listing.
		location: 'Da’an District, Taipei City',
		lumaUrl: 'https://luma.com/cursor-meetup-taipei-4',
		// Placeholder artwork until the event happens; swap for real photos in the recap.
		thumbnail: `${taipeiSep2026ThumbDir}/luma-social-card.jpg`,
		galleryImages: [`${taipeiSep2026ThumbDir}/placeholder-1.jpg`, `${taipeiSep2026ThumbDir}/placeholder-2.jpg`],
		status: 'upcoming',
	},
	{
		id: 'cursor-meetup-tainan',
		title: 'Cursor Meetup Tainan 台南',
		date: '2026-05-09',
		displayDate: 'May 9, 2026',
		location: 'Lane Corner Coffee, East District, Tainan City',
		lumaUrl: 'https://luma.com/rlyavutm',
		recapPath: '/recaps/cursor-meetup-tainan-may-2026',
		thumbnail: `${tainanMay2026ThumbDir}/AD76A656-1770-432C-B595-AE96DEAECD22.jpeg`,
		galleryImages: [
			`${tainanMay2026ThumbDir}/3895ADCD-C0A4-499A-BE62-A795A7413AEA_1_105_c.jpeg`,
			`${tainanMay2026ThumbDir}/EC9FFF28-C410-4D34-AB38-BDA578801A2E_1_105_c.jpeg`,
		],
		status: 'past',
	},
	{
		id: 'cursor-meetup-taichung-apr-2026',
		title: 'Cursor Meetup Taichung',
		date: '2026-04-19',
		displayDate: 'April 19, 2026',
		location: 'Monospace 共同工作空間, West District, Taichung City',
		lumaUrl: 'https://luma.com/43054c24',
		recapPath: '/recaps/cursor-meetup-taichung-apr-2026',
		thumbnail: `${taichungApr2026ThumbDir}/PXL_20260419_061607660.PANO.jpg`,
		galleryImages: [
			`${taichungApr2026ThumbDir}/PXL_20260419_063126877.jpg`,
			`${taichungApr2026ThumbDir}/PXL_20260419_044405150.jpg`,
		],
		status: 'past',
	},
	{
		id: 'cursor-meetup-tainan-jan-2026',
		title: 'Cursor Meetup Tainan 台南',
		date: '2026-01-31',
		displayDate: 'January 31, 2026',
		location: 'Good Ideas Studio, West Central District, Tainan City',
		recapPath: '/recaps/cursor-meetup-tainan',
		thumbnail: `${tainanThumbDir}/PXL_20260131_055131721.jpg`,
		galleryImages: [`${tainanThumbDir}/PXL_20260131_061842184.jpg`, `${tainanThumbDir}/PXL_20260131_062903151.jpg`],
		status: 'past',
	},
	{
		id: 'cafe-cursor-taipei-jan-2026',
		title: 'Cafe Cursor Taipei',
		date: '2026-01-10',
		displayDate: 'January 10, 2026',
		location: 'Songshan District, Taipei City',
		lumaUrl: 'https://luma.com/o8nl25qj',
		status: 'past',
	},
	{
		id: 'cursor-meetup-taichung-dec-2025',
		title: 'Cursor Meetup Taichung',
		date: '2025-12-30',
		displayDate: 'December 30, 2025',
		location: 'Monospace 共同工作空間, West District, Taichung City',
		recapPath: '/recaps/cursor-meetup-taichung',
		thumbnail: `${taichungThumbDir}/PXL_20251230_103813965.jpg`,
		galleryImages: [
			`${taichungThumbDir}/PXL_20251230_105946099.jpg`,
			`${taichungThumbDir}/PXL_20251230_112137781.jpg`,
		],
		status: 'past',
	},
	{
		id: 'cursor-meetup-taipei-dec-2025',
		title: 'Cursor Meetup Taipei',
		date: '2025-12-22',
		displayDate: 'December 22, 2025',
		location: 'Songshan District, Taipei City',
		lumaUrl: 'https://luma.com/111dgnnm',
		status: 'past',
	},
	{
		id: 'cursor-meetup-taipei-jun-2025',
		title: 'Cursor Meetup Taipei',
		date: '2025-06-22',
		displayDate: 'June 22, 2025',
		location: 'Nangang District, Taipei City',
		lumaUrl: 'https://luma.com/jdxwyx1j',
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
