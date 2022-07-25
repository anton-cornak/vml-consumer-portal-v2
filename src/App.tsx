/** @format */

import React from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import messagesEN from './translations/en-US.json';
import messagesSK from './translations/sk-SK.json';
import Home from './screens/home';

const implementedLanguages: Array<string> = ['en-US', 'sk-SK'];
const messages: { [key: string]: any } = {
	'en-US': messagesEN,
	'sk-SK': messagesSK,
};

function App() {
	const locale = (
		languages: Array<string>,
		browserLanguage: string,
	): string => {
		if (languages.includes(navigator.language)) {
			return browserLanguage;
		}
		return 'en-US';
	};

	return (
		<IntlProvider
			locale={locale(implementedLanguages, navigator.language)}
			messages={
				messages[locale(implementedLanguages, navigator.language)]
			}
		>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/welcome" element={<Home />} />
				</Routes>
				<FormattedMessage id="greetings" />
			</Router>
		</IntlProvider>
	);
}

export default App;
