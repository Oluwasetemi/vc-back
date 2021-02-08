/* eslint-disable react/jsx-props-no-spreading */
import { ApolloProvider } from '@apollo/client';
import Theme from '@styles/GlobalStyles';
import withData from 'lib/withData';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import PropTypes from 'prop-types';

Router.events.on('routeChangeStart', (url) => {
    // console.log(`Loading: ${url}`);
    NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function Application({ Component, pageProps, apollo }) {
    return (
        <ApolloProvider client={apollo}>
            <Theme>
                <Component {...pageProps} />
            </Theme>
        </ApolloProvider>
    );
}

Application.propTypes = {
    Component: PropTypes.any,
    apollo: PropTypes.any,
    pageProps: PropTypes.any,
};

export default withData(Application);
