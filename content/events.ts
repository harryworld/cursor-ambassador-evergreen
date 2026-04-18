import { CursorEvent } from '@/lib/types';

// Synced with https://luma.com/cursor-taiwan (Upcoming). Add past rows + recapPath when events conclude.
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
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
