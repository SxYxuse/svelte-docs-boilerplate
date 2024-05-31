import { dev } from '$app/environment';

export const siteConfig = {
	name: '_',
	url: dev ? 'http://localhost:5173' : 'https://YOUR_DOMAIN',
	description: 'Provide a simple and easy way to create and manage your documentation.',
	imageUrl: '',
	keywords: ['sxyxuse', 'docs'],
	author: 'SxYxuse',
	themeColor: '#110F15'
};

export type SiteConfig = typeof siteConfig;
