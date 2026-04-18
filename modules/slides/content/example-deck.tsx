import CodeBlock from '@/modules/slides/components/CodeBlock';
import PromptBlock from '@/modules/slides/components/PromptBlock';
import { Slide } from '@/modules/slides/types';

export const exampleDeck: Slide[] = [
	{
		id: 1,
		title: 'Seminar Slides Starter',
		content: (
			<div className="space-y-6">
				<h1 className="text-4xl md:text-5xl font-bold">Cursor Taiwan · workshop slides</h1>
				<p className="text-cursor-text-muted text-lg">
					Optional slide deck for Taipei meetups — replace with your session content.
				</p>
			</div>
		),
	},
	{
		id: 2,
		title: 'Prompt Pattern',
		content: (
			<PromptBlock prompt="Build a reusable event card component from this mockup and wire it to the events config file." />
		),
	},
	{
		id: 3,
		title: 'Code Pattern',
		content: (
			<CodeBlock
				code={`export const events = [
  {
    id: 'event-1',
    title: 'Cafe Cursor Taipei',
    date: '2026-05-17',
    location: 'Taipei, Taiwan',
    status: 'upcoming',
  },
]`}
			/>
		),
	},
];

export const totalExampleSlides = exampleDeck.length;
