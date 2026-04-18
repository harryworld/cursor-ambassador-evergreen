import { CursorEvent } from '@/lib/types';

// REPLACE: Replace all sample events, locations, and Luma URLs with real community events.
export const events: CursorEvent[] = [
	{
		id: 'cafe-cursor-taipei',
		title: 'Cafe Cursor Taipei',
		date: '2026-05-17',
		displayDate: 'May 17, 2026',
		location: 'Taipei, Taiwan',
		lumaUrl: 'https://lu.ma/cursor-taiwan',
		status: 'upcoming',
	},
	{
		id: 'cursor-meetup-taipei-launch',
		title: 'Cursor Taiwan kickoff',
		date: '2026-02-14',
		displayDate: 'February 14, 2026',
		attendees: 38,
		location: 'Taipei, Taiwan',
		recapPath: '/recaps/example-event',
		thumbnail: '/images/events/cursor-event-01.jpg',
		galleryImages: ['/images/events/cursor-event-02.jpg', '/images/events/cursor-event-04.jpg'],
		status: 'past',
	},
];

export const upcomingEvents = events.filter((event) => event.status === 'upcoming');
export const pastEvents = events.filter((event) => event.status === 'past');
