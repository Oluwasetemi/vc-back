import { useQuery } from '@apollo/client';
import SingleItemFull from '@components/dashboard/clients/SingleItemFull';
import DashboardLayout from '@components/layout/DashboardLayout';
import Wrapper from '@components/styles/SingleItemStyles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ME_QUERY = gql`
    query ME_QUERY($id: String) {
        userById(id: $id) {
            _id
            email
            name
            currentClosetSize
        }
    }
`;

const ONE_ITEM_QUERY = gql`
    query ONE_ITEM_QUERY($id: ID!, $userId: ID!) {
        fetchOneItemUser(id: $id, userId: $userId) {
            _id
            name
        }
    }
`;

function Item() {
    const { query } = useRouter();
    const { id, userid } = query;
    const { data, loading, error } = useQuery(ME_QUERY, {
        variables: { id: userid },
    });
    console.log(id, userid);
    const { data: dataOneItem, loading: loadingOneItem, error: errorOneItem } = useQuery(ONE_ITEM_QUERY, {
        variables: { id, userId: userid },
    });

    return (
        <Wrapper>
            <DashboardLayout>
                <Breadcrumbs
                    className="bread-crumbs"
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <LinkMaterial className="crumbs" color="inherit" href="/dashboard">
                        Home
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="inherit" href="/clients">
                        Clients
                    </LinkMaterial>
                    <Link
                        className="crumbs"
                        color="inherit"
                        href={{
                            pathname: '/clients/client',
                            query: { id: !loading && data && data.userById._id },
                        }}
                    >
                        {loading ? 'loading' : error ? 'no data' : data.userById.name}
                    </Link>
                    <LinkMaterial className="crumbs" color="textPrimary">
                        {loadingOneItem ? 'loading' : errorOneItem ? 'no data' : dataOneItem.fetchOneItemUser.name}
                    </LinkMaterial>
                </Breadcrumbs>
                <SingleItemFull id={id} />
            </DashboardLayout>
        </Wrapper>
    );
}

Item.propTypes = {};

export default Item;
export { ME_QUERY };
