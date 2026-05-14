import { GalleryPhoto, RecapData } from '@/lib/types';

const base = '/images/events/cursor-tainan/2';

function photo(file: string, alt: string): GalleryPhoto {
	return {
		src: `${base}/${file}`,
		thumbSrc: `${base}/thumbs/${file}`,
		alt,
	};
}

const tainanMayFiles = [
	'AD76A656-1770-432C-B595-AE96DEAECD22.jpeg',
	'3895ADCD-C0A4-499A-BE62-A795A7413AEA_1_105_c.jpeg',
	'EC9FFF28-C410-4D34-AB38-BDA578801A2E_1_105_c.jpeg',
	'0317B82A-3376-4EDB-B793-98AD3D330451_1_105_c.jpeg',
	'059B563F-2381-41FC-B85F-D7EEBD5FD117_1_105_c.jpeg',
	'0BA09BEB-339F-4994-A162-25C7A3C4B86F_1_105_c.jpeg',
	'7EA6DB01-40E3-4003-B4A2-5BE9E4F556F0_1_105_c.jpeg',
	'85BB201A-C0AE-4904-BA80-443C1B5F816E_1_105_c.jpeg',
	'8B217200-FD39-409E-9E40-80529FDB83D4_1_105_c.jpeg',
	'A6654ACB-578A-4405-A4F3-C5547D405FF6.jpeg',
	'C23C2A40-0D3E-4210-8E18-DAAC80A9F61F_1_105_c.jpeg',
	'E0828807-EF09-4308-AC03-59BD06F4843A_1_105_c.jpeg',
	'E7903B7B-F28C-4577-BB32-51A0B0A9EC97_1_105_c.jpeg',
	'F30280DE-16AE-468C-80CE-9C25483A3E1E_1_105_c.jpeg',
	'F8BFDB9B-9668-4CEF-AFAB-66A2DC5DD3EF_1_105_c.jpeg',
] as const;

export const cursorMeetupTainanMay2026Recap: RecapData = {
	slug: 'cursor-meetup-tainan-may-2026',
	title: 'Cursor Meetup Tainan 台南 - Recap',
	date: 'May 9, 2026',
	summary: [
		'We met at Lane Corner Coffee in Tainan for another Cursor community afternoon, sharing workflows, demos, and lessons from building with AI.',
		'Thanks to everyone who joined, swapped ideas, and helped make the second Tainan meetup feel warm and practical.',
	],
	photos: tainanMayFiles.map((file, i) =>
		photo(file, `Cursor Meetup Tainan May 2026 - community moment ${i + 1}`),
	),
};
