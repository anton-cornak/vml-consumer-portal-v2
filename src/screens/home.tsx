import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import { Icon } from '@vismaux/react-nc4';
import Demo from './demo';

function Home(): ReactElement {
	return (
		<>
			<div style={{ paddingBottom: '5em' }}>
				<div className="container">
					<div className="page-heading">
						<h1 className="no-margin">
							<FormattedMessage id="home.greetings" />
						</h1>
					</div>
					<div className="no-margin google-login-button">
						<button type="button">
							<Icon
								name="google"
								size="sm"
								className="google-icon"
							/>
							<FormattedMessage id="home.login" />
						</button>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="page-heading">
					<h1 className="no-margin">
						<FormattedMessage id="home.demo" />
					</h1>
				</div>
				<Demo />
			</div>
		</>
	);
}

export default Home;
