/** @format */

import React from 'react';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Home from './screens/home';
import Navigation from './layout/navbar';

// Translations
import messagesEN from './translations/en-US.json';
import messagesSK from './translations/sk-SK.json';

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

	const currentLanguage = locale(implementedLanguages, navigator.language);

	return (
		<IntlProvider
			locale={currentLanguage}
			messages={messages[currentLanguage]}
		>
			<Router>
				<Navigation>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/welcome" element={<Home />} />
					</Routes>
				</Navigation>
			</Router>
		</IntlProvider>
	);
}

export default App;
