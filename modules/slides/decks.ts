import type { Slide } from '@/modules/slides/types';
import { exampleDeck } from '@/modules/slides/content/example-deck';
import { taichungApr2026Decks } from '@/modules/slides/content/taichung-apr-2026-decks';

/** All slide decks keyed by URL segment: `/slides/{key}/{n}` */
export const SLIDE_DECKS: Record<string, Slide[]> = {
	example: exampleDeck,
	...taichungApr2026Decks,
};

export function getSlideDeck(deckId: string): Slide[] | undefined {
	return SLIDE_DECKS[deckId];
}
