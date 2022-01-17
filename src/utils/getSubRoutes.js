import routes from '~/config/routes';

module.exports = (routeId) => {
	const subRoutes = routes.filter((route) => route.parentRoute === routeId);
	return subRoutes.length ? subRoutes : null;
};
