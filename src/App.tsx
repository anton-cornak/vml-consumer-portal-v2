/** @format */

import React from 'react';
import { IntlProvider } from 'react-intl';

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

	return (
		<IntlProvider
			locale={locale(implementedLanguages, navigator.language)}
			messages={
				messages[locale(implementedLanguages, navigator.language)]
			}
		/>
	);
}

export default App;
