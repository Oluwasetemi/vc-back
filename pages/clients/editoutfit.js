import { useQuery } from '@apollo/client';
import Button from '@components/common/Button';
import SingleOutfit from '@components/dashboard/clients/Outfit';
import DashboardLayout from '@components/layout/DashboardLayout';
import Wrapper from '@components/styles/OutfitStyles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { SINGLE_USER } from './client';

const SingleClosetItem = ({ name, id }) => (
    <div className="grid-items">
        <div className="product">
            <div className="image image1" />
        </div>
        <p className="name text">{name}</p>
        <Button theme="orange" className="pink">
            {' '}
            Add to Outfit
        </Button>
    </div>
);

SingleClosetItem.propTypes = {
    id: PropTypes.any,
    name: PropTypes.any,
};

// UPDATE OUTFIT

function EditOutfit(props) {
    const { query } = useRouter();
    const { userid, id } = query;
    const { data, loading, error } = useQuery(SINGLE_USER, {
        variables: { id: userid },
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
                        href={{ pathname: '/clients/client', query: { id: userid } }}
                    >
                        {loading ? 'loading' : error ? 'no data' : data.userById.name}
                    </Link>
                    <LinkMaterial className="crumbs" color="textPrimary" href="#">
                        Outfit
                    </LinkMaterial>
                </Breadcrumbs>
                <h3 className="title">Edit Outfit</h3>

                <div className="paper paper-tail">
                    <h1>Closet</h1>

                    <div className="scroll">
                        <div className="grid">
                            {data && data.userById.closet === null ? (
                                <p>No items in the user closet</p>
                            ) : (
                                data &&
                                data.userById.closet.items.map((item) => (
                                    <SingleClosetItem name={item.name} id={item._id} key={item._id} />
                                ))
                            )}
                        </div>
                    </div>
                </div>

                <SingleOutfit id={id} userid={userid} />
            </DashboardLayout>
        </Wrapper>
    );
}

EditOutfit.propTypes = {};

export default EditOutfit;
