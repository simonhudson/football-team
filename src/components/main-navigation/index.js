import React, { useState } from 'react';
import Link from 'next/link';
import MainNavigationToggle from './toggle';
import routes from '~/config/routes';
import { Wrapper, Overlay, List, Item, ItemLink } from './index.styles';
import { layout } from '~/theme';
import getSubRoutes from '~/utils/getSubRoutes';

const MainNavigation = ({ currentPage }) => {
	const [isVisible, setIsVisible] = useState(false);
	const [toggleClicked, setToggleClicked] = useState(false);

	const toggleScroll = () => {
		const body = document.querySelector('body');
		const NO_SCROLL_CLASS = 'no-scroll';
		const method = isVisible ? 'remove' : 'add';
		body.classList[method](NO_SCROLL_CLASS);
	};

	const toggle = (e) => {
		e.preventDefault ? e.preventDefault() : (e.returnValue = false);
		setToggleClicked(true);
		setIsVisible(!isVisible);
		toggleScroll();
	};

	return (
		<>
			<MainNavigationToggle onClick={toggle} navigationIsVisible={isVisible} />
			{isVisible && <Overlay data-test="main-navigation__overlay" />}
			<Wrapper isVisible={isVisible} toggleClicked={toggleClicked} data-test="main-navigation">
				<layout.Wrap>
					<List>
						{routes
							.filter((route) => !route.parentRoute)
							.map((item, index) => {
								if (item.omitFromNavigation) return null;
								const subRoutes = getSubRoutes(item.id);
								return (
									<Item key={index}>
										<Link href={item.href}>
											<ItemLink
												onClick={() => setIsVisible(false)}
												href={item.href}
												isCurrentPage={currentPage.route === item.href}
											>
												{item.label}
											</ItemLink>
										</Link>
										{subRoutes && (
											<ul>
												{subRoutes.map((subRoute, index) => {
													<li>{subRoute.label}</li>;
												})}
											</ul>
										)}
									</Item>
								);
							})}
					</List>
				</layout.Wrap>
			</Wrapper>
		</>
	);
};

export default MainNavigation;
