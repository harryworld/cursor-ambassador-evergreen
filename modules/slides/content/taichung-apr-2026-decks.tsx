import { FileText } from 'lucide-react';
import { Slide } from '@/modules/slides/types';
import { TAICHUNG_APR_2026_SPEAKER_PDF } from '@/modules/slides/content/taichung-apr-2026-pdfs';

function deck(slides: Omit<Slide, 'id'>[]): Slide[] {
	return slides.map((s, i) => ({ ...s, id: i + 1 }));
}

function SpeakerPdfLink({ href }: { href: string }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="inline-flex items-center gap-2 mt-6 px-4 py-2.5 rounded-md bg-cursor-surface border border-cursor-border text-sm font-medium text-cursor-text hover:border-[#f54e00]/40 hover:bg-cursor-surface-raised transition-colors"
		>
			<FileText className="w-4 h-4 shrink-0 text-cursor-text-muted" aria-hidden />
			Open speaker PDF
		</a>
	);
}

function introSlide(deckKey: string, title: string, body: string): Omit<Slide, 'id'> {
	const pdf = TAICHUNG_APR_2026_SPEAKER_PDF[deckKey];
	return {
		title,
		content: (
			<div className="space-y-4 text-lg text-cursor-text-secondary">
				<p className="text-cursor-text-muted text-base">April 19, 2026 · Monospace, Taichung</p>
				<p>{body}</p>
				{pdf ? <SpeakerPdfLink href={pdf} /> : null}
			</div>
		),
	};
}

/** In-deck slide decks for Cursor Meetup Taichung — Apr 19, 2026. PDFs: `taichung-apr-2026-pdfs.ts` + `public/slides/`. */
export const taichungApr2026Decks: Record<string, Slide[]> = {
	'taichung-apr-2026-raven': deck([
		introSlide(
			'taichung-apr-2026-raven',
			'Raven — Cursor Meetup Taichung',
			'Lightning share — OpenClaw and community takeaways.',
		),
	]),
	'taichung-apr-2026-hana': deck([
		introSlide(
			'taichung-apr-2026-hana',
			'Hana 花水木 — Mojo & skills',
			'Mojo — a live AI agent, data sources, and practical skills.',
		),
	]),
	'taichung-apr-2026-jax': deck([
		introSlide(
			'taichung-apr-2026-jax',
			'Jax — OpenClaw for coaching',
			'OpenClaw for coaching — client training plans and AI practice.',
		),
	]),
	'taichung-apr-2026-roy': deck([
		introSlide(
			'taichung-apr-2026-roy',
			'Roy — Startup AI & agents',
			'Startup AI adoption — multi-agent teams for product development.',
		),
	]),
};
