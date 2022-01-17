import React from 'react';
import PropTypes from 'prop-types';
import getSubRoutes from '~/utils/getSubRoutes';

const SubNavigation = ({ pageId }) => {
	const subRoutes = getSubRoutes(pageId);

	return (
		<>
			{subRoutes && (
				<nav>
					{subRoutes.map((route, index) => {
						return (
							<li key={index}>
								<a href={route.href}>{route.label}</a>
							</li>
						);
					})}
				</nav>
			)}
		</>
	);
};

SubNavigation.propTypes = {
	pageId: PropTypes.string.isRequired,
};

export default SubNavigation;
