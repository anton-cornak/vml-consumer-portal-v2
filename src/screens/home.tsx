import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import Demo from './demo';

function Home(): ReactElement {
	return (
		<div className="container">
			<div className="page-heading">
				<h1 className="no-margin">
					<FormattedMessage id="home.greetings" />
				</h1>
			</div>
			Login
			<Demo />
		</div>
	);
}

export default Home;
