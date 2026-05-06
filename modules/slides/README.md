# Slides Engine (Optional)

This folder contains a reusable slide engine for workshop sessions.

## How to use

1. Create a slide deck file in `modules/slides/content/` (or extend `taichung-apr-2026-decks.tsx`). Put downloadable PDFs in `public/slides/` and map them in `taichung-apr-2026-pdfs.ts` for Taichung decks.
2. Export an array of slides matching `Slide` from `modules/slides/types.ts`.
3. Register the deck id and slides in `modules/slides/decks.ts` (`SLIDE_DECKS`).
4. Route: `/slides/{deckId}/{slideNumber}` — see `app/slides/[[...slug]]/page.tsx`. Shorthand `/slides/:n` uses the `example` deck.

## Components

- `SlideLayout.tsx` - keyboard and button navigation
- `SlideContent.tsx` - slide content renderer
- `CodeBlock.tsx` - copyable code blocks
- `PromptBlock.tsx` - copyable prompt blocks
- `DiagramSlide.tsx` - inline SVG diagram renderer

Ambassadors can skip this module entirely if they only need the community website pages.
