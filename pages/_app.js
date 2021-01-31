import { ApolloProvider } from '@apollo/client';
import Theme from '@styles/GlobalStyles';
import withData from 'lib/withData';
import "nprogress/nprogress.css";
import NProgress from 'nprogress'
import Router from 'next/router'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function Application({ Component, pageProps, apollo }) {
	return (
		<ApolloProvider client={apollo}>
			<Theme>
				<Component {...pageProps} />
			</Theme>
		</ApolloProvider>
	);
}

export default withData(Application);
