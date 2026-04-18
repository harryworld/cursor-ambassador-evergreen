import { CursorEvent } from '@/lib/types';

// Upcoming: https://luma.com/cursor-taiwan
// Past: Taiwan-only — Luma pages verified.
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
		id: 'cafe-cursor-taipei-2026',
		title: 'Cafe Cursor Taipei',
		date: '2026-01-10',
		displayDate: 'January 10, 2026',
		location: 'Songshan District, Taipei City',
		lumaUrl: 'https://luma.com/o8nl25qj',
		attendees: 163,
		thumbnail: '/images/events/cursor-event-02.jpg',
		galleryImages: ['/images/events/cursor-event-01.jpg', '/images/events/cursor-event-04.jpg'],
		status: 'past',
	},
	{
		id: 'cursor-meetup-taipei-2025-12',
		title: 'Cursor Meetup Taipei',
		date: '2025-12-22',
		displayDate: 'December 22, 2025',
		location: 'Songshan District, Taipei City',
		lumaUrl: 'https://luma.com/111dgnnm',
		attendees: 128,
		thumbnail: '/images/events/cursor-event-03.jpg',
		galleryImages: ['/images/events/cursor-event-05.jpg', '/images/events/cursor-event-06.jpg'],
		status: 'past',
	},
	{
		id: 'cursor-meetup-taipei-2025-06',
		title: 'Cursor Meetup Taipei',
		date: '2025-06-22',
		displayDate: 'June 22, 2025',
		location: 'Songshan District, Taipei City',
		lumaUrl: 'https://luma.com/jdxwyx1j',
		attendees: 74,
		thumbnail: '/images/events/cursor-event-05.jpg',
		galleryImages: ['/images/events/cursor-event-07.jpg', '/images/events/cursor-event-01.jpg'],
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
