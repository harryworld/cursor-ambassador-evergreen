import { notFound } from 'next/navigation';
import SlideLayout from '@/modules/slides/components/SlideLayout';
import SlideContent from '@/modules/slides/components/SlideContent';
import { getSlideDeck } from '@/modules/slides/decks';

interface SlidesPageProps {
	params: Promise<{ slug?: string[] }>;
}

/** `/slides/:n` → example deck · `/slides/:deck/:n` → named deck */
export default async function SlidesPage({ params }: SlidesPageProps) {
	const { slug } = await params;
	if (!slug || slug.length === 0) {
		notFound();
	}

	let deckId: string;
	let slideIndex: number;

	if (slug.length === 1) {
		const only = slug[0];
		if (!/^\d+$/.test(only)) {
			notFound();
		}
		deckId = 'example';
		slideIndex = Number(only);
	} else if (slug.length === 2) {
		deckId = slug[0];
		const n = Number(slug[1]);
		if (!Number.isInteger(n) || n < 1) {
			notFound();
		}
		slideIndex = n;
	} else {
		notFound();
	}

	const deck = getSlideDeck(deckId);
	if (!deck || deck.length === 0) {
		notFound();
	}

	if (slideIndex < 1 || slideIndex > deck.length) {
		notFound();
	}

	const slide = deck[slideIndex - 1];
	const storageKey = `cursor-ambassador-slide-deck-${deckId}`;

	return (
		<SlideLayout currentSlide={slideIndex} totalSlides={deck.length} storageKey={storageKey}>
			<div className="space-y-8">
				<header>
					<h1 className="text-2xl md:text-3xl font-bold">{slide.title}</h1>
				</header>
				<SlideContent slide={slide} />
			</div>
		</SlideLayout>
	);
}
