import { ApolloProvider } from '@apollo/client';
import Theme from '@styles/GlobalStyles';
import withData from 'lib/withData';

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
