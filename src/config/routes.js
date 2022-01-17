module.exports = [
	{
		id: 'home',
		label: 'Home',
		href: '/',
		pageTitle: 'Home',
	},
	{
		id: 'teams',
		label: 'Teams',
		href: '/teams',
		pageTitle: 'Teams',
	},
	{
		id: 'first-team',
		label: 'First Team',
		href: '/teams/first-team',
		pageTitle: 'First Team',
		parentRoute: 'teams',
	},
	{
		id: 'under-23',
		label: 'Under 23s',
		href: '/teams/under-23',
		pageTitle: 'First Team',
		parentRoute: 'teams',
	},
	{
		id: 'fixtures-results',
		label: 'Fixtures & Results',
		href: '/fixtures-results',
		pageTitle: 'Fixtures & Results',
	},
	{
		id: '404',
		label: 'Contact',
		href: '/404',
		pageTitle: 'Page not found',
		omitFromNavigation: true,
	},
];
