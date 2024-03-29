import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/link-error';
import { getDataFromTree } from '@apollo/react-ssr';
import { createUploadLink } from 'apollo-upload-client';
import withApollo from 'next-with-apollo';
import { endpoint, prodEndpoint } from '../config';

function createClient({ headers, initialState }) {
    const GRAPHQL_ENDPOINT = 'ws://localhost:3000/graphql';

    // const wsLink = new WebSocketLink(client);

    return new ApolloClient({
        link: ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
                if (graphQLErrors)
                    graphQLErrors.forEach(({ message, locations, path }) =>
                        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`),
                    );
                if (networkError)
                    console.log(`[Network error]: ${networkError}. Backend is unreachable. Is it running?`);
            }),
            // this uses apollo-link-http under the hood, so all the options here come from that package
            createUploadLink({
                uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
                // pass the headers along from this request. This enables SSR with logged in state
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZGYzMWMzMDUyYTRjZTJhZGY3ZWQ0NSIsImlhdCI6MTYxMDEzMjUxMH0.9-3d4ev00LAa6Fp0S7AH-0sBNoKZf2jEWS10l_E2Cvg',
                },
            }),
        ]),
        cache: new InMemoryCache({
            typePolicies: {
                Query: {
                    fields: {
                        allItems: [],
                    },
                },
            },
        }).restore(initialState || {}),
        // connectToDevTools: true,
    });
}

export default withApollo(createClient, { getDataFromTree });
