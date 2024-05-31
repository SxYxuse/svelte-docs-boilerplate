export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
};

export type SidebarNavItem = NavItem & {
	items: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
	items: NavItemWithChildren[];
};

export type Navigation = {
	sidebar: SidebarNavItem[];
};

export const navigation: Navigation = {
	sidebar: [
		{
			title: 'Overview',
			items: [
				{
					title: 'Introduction',
					href: '/content/index',
					items: []
				}
			]
		},
		{
			title: 'content',
			items: [
				{
					title: 'Sample',
					href: '/content/sample',
					items: []
				}
			]
		}
	]
};
