import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'styled-components';
import Theme from '~/theme';
import { GlobalStyles } from '~/theme/global.styles';

// Log accessibility issues to console in non-production environments
if (process.env.ENV !== 'production' && typeof window !== 'undefined') {
	const ReactDOM = require('react-dom');
	const axe = require('react-axe');
	axe(React, ReactDOM, 1000);
}

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	pageProps.currentPage = {
		name: router.route === Theme.routes.home ? 'home' : router.route.split('/')[1],
		query: router.query,
		route: router.route,
	};

	let pageTitle = `${process.env.TEAM_NAME}`;

	return (
		<>
			<Head>
				<title>{pageTitle}</title>
			</Head>
			<ThemeProvider theme={Theme}>
				<GlobalStyles />
				<main>
					<Component {...pageProps} />
				</main>
			</ThemeProvider>
		</>
	);
};

export default App;
