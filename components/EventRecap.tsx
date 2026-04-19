'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, Mic, Lightbulb, MessageSquareQuote, Link as LinkIcon } from 'lucide-react';
import PhotoGallery from '@/components/PhotoGallery';
import { RecapData } from '@/lib/types';
import { useI18n } from '@/lib/i18n';

interface EventRecapProps {
	recap: RecapData;
}

const EventRecap: React.FC<EventRecapProps> = ({ recap }) => {
	const { t } = useI18n();

	return (
		<motion.article
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="mb-8"
		>
			<Link
				href="/"
				className="inline-flex items-center gap-2 text-sm text-cursor-text-muted hover:text-cursor-text transition-colors mb-10"
			>
				<ArrowLeft className="w-4 h-4" aria-hidden />
				{t('recap.backToHome')}
			</Link>

			<header className="mb-10 max-w-3xl">
				<h1 className="text-3xl md:text-4xl font-bold text-cursor-text tracking-tight leading-tight">{recap.title}</h1>
				<p className="text-cursor-text-muted text-base mt-4">{recap.date}</p>

				{recap.host ? (
					<div className="text-cursor-text-muted text-sm mt-5 flex items-center gap-2 flex-wrap">
						<span>{t('home.hostedBy')}</span>
						<a
							href={recap.host.url || '#'}
							target="_blank"
							rel="noopener noreferrer"
							className="text-cursor-text hover:underline inline-flex items-center gap-1.5"
						>
							<Image
								src={recap.host.logo}
								alt={recap.host.name}
								width={18}
								height={18}
								className="rounded-full"
							/>
							{recap.host.name}
						</a>
					</div>
				) : null}

				{recap.attendees ? (
					<p className="text-cursor-text text-lg leading-relaxed mt-6">
						{t('home.attendees', { count: String(recap.attendees) })}
					</p>
				) : null}
			</header>

			<div className="bg-[#1B1913] border border-cursor-border rounded-lg p-8 mb-10">
				<div className="text-cursor-text text-base leading-relaxed space-y-4 max-w-3xl">
					{recap.summary.map((paragraph, index) => (
						<p key={index} className="text-cursor-text-secondary">
							{paragraph}
						</p>
					))}
				</div>

				{recap.speakers && recap.speakers.length > 0 ? (
					<div className="border-t border-cursor-border mt-8 pt-8">
						<div className="flex items-center gap-2 mb-4">
							<Mic className="w-4 h-4 text-cursor-accent-blue" />
							<h2 className="text-sm font-medium text-cursor-text">{t('recap.speakers')}</h2>
						</div>
						<div className="grid gap-3 sm:grid-cols-2">
							{recap.speakers.map((speaker) => (
								<div
									key={speaker.name}
									className="bg-cursor-bg-dark border border-cursor-border rounded-md p-4 flex items-start gap-3"
								>
									{speaker.photo ? (
										<div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-cursor-border-emphasis">
											<Image
												src={speaker.photo}
												alt={speaker.name}
												fill
												className="object-cover"
												sizes="40px"
											/>
										</div>
									) : null}
									<div className="min-w-0">
										{speaker.url ? (
											<a
												href={speaker.url}
												target="_blank"
												rel="noopener noreferrer"
												className="text-cursor-text font-medium text-sm hover:underline"
											>
												{speaker.name}
											</a>
										) : (
											<p className="text-cursor-text font-medium text-sm">{speaker.name}</p>
										)}
										<p className="text-cursor-text-muted text-xs mt-0.5">{speaker.topic}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				) : null}

				{recap.projects && recap.projects.length > 0 ? (
					<div className="border-t border-cursor-border mt-8 pt-8">
						<div className="flex items-center gap-2 mb-4">
							<Lightbulb className="w-4 h-4 text-cursor-accent-yellow" />
							<h2 className="text-sm font-medium text-cursor-text">{t('recap.projects')}</h2>
						</div>
						<div className="grid gap-3 sm:grid-cols-2">
							{recap.projects.map((project) => (
								<div
									key={project.name}
									className="bg-cursor-bg-dark border border-cursor-border rounded-md p-4"
								>
									{project.url ? (
										<a
											href={project.url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-cursor-text font-medium text-sm hover:underline"
										>
											{project.name}
										</a>
									) : (
										<p className="text-cursor-text font-medium text-sm">{project.name}</p>
									)}
									<p className="text-cursor-text-muted text-xs mt-1">{project.description}</p>
									{project.author ? (
										<p className="text-cursor-text-faint text-xs mt-1.5">
											{t('recap.by')} {project.author}
										</p>
									) : null}
								</div>
							))}
						</div>
					</div>
				) : null}

				{recap.highlights && recap.highlights.length > 0 ? (
					<div className="border-t border-cursor-border mt-8 pt-8">
						<div className="flex items-center gap-2 mb-4">
							<MessageSquareQuote className="w-4 h-4 text-cursor-accent-purple" />
							<h2 className="text-sm font-medium text-cursor-text">{t('recap.highlights')}</h2>
						</div>
						<div className="space-y-3">
							{recap.highlights.map((highlight, index) => (
								<blockquote
									key={index}
									className="bg-cursor-bg-dark border-l-2 border-cursor-accent-purple/40 rounded-r-md px-4 py-3"
								>
									<p className="text-cursor-text-secondary text-sm italic">
										&ldquo;{highlight.quote}&rdquo;
									</p>
									{highlight.author ? (
										<p className="text-cursor-text-faint text-xs mt-1.5">
											&mdash; {highlight.author}
										</p>
									) : null}
								</blockquote>
							))}
						</div>
					</div>
				) : null}

				{recap.resources && recap.resources.length > 0 ? (
					<div className="border-t border-cursor-border mt-8 pt-8">
						<div className="flex items-center gap-2 mb-4">
							<LinkIcon className="w-4 h-4 text-cursor-accent-green" />
							<h2 className="text-sm font-medium text-cursor-text">{t('recap.resources')}</h2>
						</div>
						<ul className="space-y-2">
							{recap.resources.map((resource) => (
								<li key={resource.url}>
									<a
										href={resource.url}
										target="_blank"
										rel="noopener noreferrer"
										className="text-sm text-cursor-text hover:underline inline-flex items-center gap-1.5"
									>
										{resource.label}
										<LinkIcon className="w-3 h-3 text-cursor-text-muted" />
									</a>
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>

			<PhotoGallery photos={recap.photos} embedded={false} />

			{recap.photoCredits && recap.photoCredits.length > 0 ? (
				<div className="mt-6 text-sm text-cursor-text-muted">
					<span className="mr-1">Photo credits:</span>
					{recap.photoCredits.map((credit, index) => (
						<span key={`${credit.name}-${index}`}>
							{credit.url ? (
								<a
									href={credit.url}
									target="_blank"
									rel="noopener noreferrer"
									className="text-cursor-text hover:underline"
								>
									{credit.name}
								</a>
							) : (
								<span className="text-cursor-text">{credit.name}</span>
							)}
							{index < recap.photoCredits!.length - 1 ? <span>, </span> : <span>.</span>}
						</span>
					))}
				</div>
			) : null}
		</motion.article>
	);
};

export default EventRecap;
