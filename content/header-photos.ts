import { HeaderPhoto } from '@/lib/types';

const tc = '/images/events/cursor-taichung/1/thumbs';
const tn = '/images/events/cursor-tainan/thumbs';

// Desktop: 4×4 — shuffled layout (two 2×2 corners, tall edges, pair of singles in row 2).
// Mobile: 2×4 — big tile on top, two singles, wide strip on bottom.
export const headerPhotos: HeaderPhoto[] = [
	{
		src: `${tc}/PXL_20251230_112137781.jpg`,
		alt: 'Cursor Meetup Taichung — builders together',
		row: 1,
		col: 1,
		rowSpan: 2,
		mobileHidden: true,
	},
	{
		src: `${tc}/PXL_20251230_105946099.jpg`,
		alt: 'Cursor Meetup Taichung — crowd and space at Monospace',
		row: 1,
		col: 2,
		colSpan: 2,
		mobile: { row: 3, col: 1 },
	},
	{
		src: `${tn}/PXL_20260131_071147999.jpg`,
		alt: 'Cursor Meetup Tainan — group in Good Ideas Studio',
		row: 1,
		col: 4,
		rowSpan: 2,
		mobileHidden: true,
	},
	{
		src: `${tc}/PXL_20251230_103813965.jpg`,
		alt: 'Cursor Meetup Taichung — event atmosphere',
		row: 2,
		col: 2,
		mobile: { row: 3, col: 2 },
	},
	{
		src: `${tn}/PXL_20260131_062903151.jpg`,
		alt: 'Cursor Meetup Tainan — workshop and discussion',
		row: 2,
		col: 3,
		mobileHidden: true,
	},
	{
		src: `${tn}/PXL_20260131_081545117.jpg`,
		alt: 'Cursor Meetup Tainan — community at Good Ideas Studio',
		row: 3,
		col: 1,
		rowSpan: 2,
		colSpan: 2,
		mobile: { row: 1, col: 1, rowSpan: 2, colSpan: 2 },
	},
	{
		src: `${tc}/PXL_20251230_111445939.PANO.jpg`,
		alt: 'Cursor Meetup Taichung — wide group shot in the venue',
		row: 3,
		col: 3,
		rowSpan: 2,
		colSpan: 2,
		mobile: { row: 4, col: 1, colSpan: 2 },
	},
];
