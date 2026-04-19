import { CursorEvent } from '@/lib/types';

const taichungThumbDir = '/images/events/cursor-taichung/1/thumbs';
const tainanThumbDir = '/images/events/cursor-tainan/thumbs';

// Upcoming: https://luma.com/cursor-taiwan
// Past: Taiwan-only — Luma pages verified where linked.
export const events: CursorEvent[] = [
	{
		id: 'cursor-meetup-taichung',
		title: 'Cursor Meetup Taichung',
		date: '2026-04-19',
		displayDate: 'April 19, 2026',
		location: 'Monospace 共同工作空間, West District, Taichung City',
		lumaUrl: 'https://luma.com/43054c24',
		status: 'upcoming',
	},
	{
		id: 'cursor-meetup-tainan',
		title: 'Cursor Meetup Tainan 台南',
		date: '2026-05-09',
		displayDate: 'May 9, 2026',
		location: 'Good Ideas Studio, West Central District, Tainan City',
		lumaUrl: 'https://luma.com/rlyavutm',
		status: 'upcoming',
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
