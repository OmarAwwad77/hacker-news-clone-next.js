import { AppProps } from 'next/app';
import theme from '../theme/theme';
import GlobalStyles from '../global-styles';
import { ThemeProvider } from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
	showSpinner: false,
});

Router.events.on('routeChangeStart', () => {
	NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
	NProgress.done();
});

Router.events.on('routeChangeError', () => {
	NProgress.done();
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	);
}

export default MyApp;
