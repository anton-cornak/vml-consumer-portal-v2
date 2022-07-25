import React, { useState, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import {
	Navbar,
	NavbarBrand,
	NavbarNav,
	NavbarNavMenu,
	NavbarNavMenuUser,
	NavbarNavMenuUserLink,
	NavbarNavMenuUserMenu,
	NavbarNavMenuUserMenuItem,
	NavbarNavMenuUserMenuDivider,
} from '@vismaux/react-nc4';

interface NavigationProps {
	children: React.ReactNode;
}

function Navigation(props: NavigationProps): ReactElement {
	const { children } = props;
	const [toggleNavMenu, setToggleNavMenu] = useState(false);

	return (
		<div>
			<Navbar variant="default">
				<NavbarBrand isDropdown>
					<Link
						role="button"
						aria-expanded="false"
						aria-label="Visma Project Name"
						to="/"
					>
						VML Consumer Portal
						<span className="caret" />
					</Link>
				</NavbarBrand>
				<NavbarNav>
					<NavbarNavMenu position="right">
						<button
							className="help-centre-icon"
							type="button"
							data-testid="help-centre-icon"
							onClick={() => console.log('help center')}
						>
							<i className="crop-help-icon" />
						</button>
						<NavbarNavMenuUser expanded={toggleNavMenu} showIcon>
							<NavbarNavMenuUserLink
								name="User"
								onClick={() => setToggleNavMenu(!toggleNavMenu)}
							/>
							<NavbarNavMenuUserMenu>
								<NavbarNavMenuUserMenuItem>
									<div
										title="email@email.com"
										role="menuitem"
									>
										<div className="user-image" />
										<div className="user-text">
											<span>Test User</span>
											<br />
											<span className="text-disabled">
												email@email.com
											</span>
										</div>
									</div>
								</NavbarNavMenuUserMenuItem>
								<NavbarNavMenuUserMenuDivider isStrong />
								<NavbarNavMenuUserMenuItem>
									<button
										role="menuitem"
										onClick={() => console.log('logout')}
										type="button"
									>
										<FormattedMessage id="nav.logout" />
									</button>
								</NavbarNavMenuUserMenuItem>
							</NavbarNavMenuUserMenu>
						</NavbarNavMenuUser>
					</NavbarNavMenu>
				</NavbarNav>
			</Navbar>
			<main>{children}</main>
		</div>
	);
}

export default Navigation;
