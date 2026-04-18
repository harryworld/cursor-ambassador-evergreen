// REPLACE: Update these values for your local Cursor community.
// REPLACE: Keep links and names community-specific.
type SiteConfigBase = {
	communityName: string;
	communityNameLocal: string;
	city: string;
	country: string;
	lumaUrl: string;
	cursorCommunityUrl: string;
	defaultLocale: string;
	locales: string[];
	/** Optional override; when unset, footer uses `footer.madeWith` from the active locale. */
	footerTagline?: string;
};

export const siteConfig: SiteConfigBase = {
	communityName: 'Cursor Taiwan',
	communityNameLocal: '台灣',
	city: 'Taipei',
	country: 'Taiwan',
	lumaUrl: 'https://luma.com/cursor-taiwan',
	cursorCommunityUrl: 'https://cursor.com/community',
	defaultLocale: 'zh-TW',
	locales: ['zh-TW', 'en'],
};

export type SiteConfig = typeof siteConfig;
