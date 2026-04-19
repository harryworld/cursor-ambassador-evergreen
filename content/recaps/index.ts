import { cursorMeetupTaichungRecap } from '@/content/recaps/cursor-meetup-taichung';
import { cursorMeetupTainanRecap } from '@/content/recaps/cursor-meetup-tainan';
import { exampleEventRecap } from '@/content/recaps/example-event';
import { RecapData } from '@/lib/types';

export const recapsBySlug: Record<string, RecapData> = {
	[exampleEventRecap.slug]: exampleEventRecap,
	[cursorMeetupTaichungRecap.slug]: cursorMeetupTaichungRecap,
	[cursorMeetupTainanRecap.slug]: cursorMeetupTainanRecap,
};
