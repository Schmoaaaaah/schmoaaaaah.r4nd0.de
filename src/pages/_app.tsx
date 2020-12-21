import * as React from 'react';
import App from 'next/app';
import {ThemeProvider} from "styled-components";
import {themeService} from "components/themeservice";

class MyApp extends App {
	/*const [theme, setTheme] = useState('default');
	const [dir, setDir] = useState('ltr');
	// Change theme
	const changeTheme = (newTheme: any) => {
		setTheme(newTheme);
	};
	// Change Direction from Ltr to Rtl
	const changeDir = () => {
		const newDir = dir === 'ltr' ? 'rtl' : 'ltr';
		setDir(newDir);
	};*/
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={themeService('corporate', 'ltr')}>
				<Component {...pageProps} />
			</ThemeProvider>
		);
	}
}

export default MyApp;