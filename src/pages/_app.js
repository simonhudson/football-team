import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';
import { GlobalStyles } from '~/theme/global.styles';
import routes from '~/config/routes';

import SubNavigation from '~/components/sub-navigation';

import SiteHeader from '~/components/site-header';

// Log accessibility issues to console in non-production environments
if (process.env.ENV !== 'production' && typeof window !== 'undefined') {
	const ReactDOM = require('react-dom');
	const axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

const App = ({ Component, pageProps }) => {
	const router = useRouter();

	const getPageTitle = () => {
		const route = routes.filter((route) => route.href === router.route)[0];
		if (route) return route.pageTitle;
		return null;
	};

	pageProps.currentPage = {
		name: router.route === Theme.routes.home ? 'home' : router.route.split('/')[1],
		query: router.query,
		route: router.route,
		pageTitle: getPageTitle(),
	};

	const pageTitle = `${pageProps.currentPage.pageTitle} | ${process.env.TEAM_NAME}`;

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<GlobalStyles />
				<SiteHeader {...pageProps} />
				<main>
					{pageProps.currentPage.route !== '/' && <h1>{pageProps.currentPage.pageTitle}</h1>}
					<Component {...pageProps} />
				</main>
				<SubNavigation pageId={pageProps.currentPage.name} />
			</ThemeProvider>
		</>
	);
};

export default App;
