/* eslint-disable react/jsx-props-no-spreading */
import { ApolloProvider } from '@apollo/client';
import Theme from '@styles/GlobalStyles';
import withData from 'lib/withData';
import Router from 'next/router';
import NProgress from 'nprogress';
import PropTypes from 'prop-types';
import React from 'react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function Application({ Component, pageProps, apollo }) {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
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
