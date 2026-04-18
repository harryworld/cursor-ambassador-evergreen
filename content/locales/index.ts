import en from './en.json';
import zhTW from './zh-TW.json';

export const localeBundles = {
	en,
	'zh-TW': zhTW,
} as const;

export type LocaleBundleKey = keyof typeof localeBundles;
