import { useQuery } from '@apollo/client';
import Wrapper from '@components/styles/UnconfirmedDeliveryStyles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useRouter } from 'next/router';
import React from 'react';
import SingleRequest, { SINGLE_REQUEST } from '../../components/dashboard/events/request/SingleRequest';
import DashboardLayout from '../../components/layout/DashboardLayout';

function DeliveryRequest(props) {
    const { query } = useRouter();
    // fetch the id from the page
    const { id } = query;
    const { error, loading, data } = useQuery(SINGLE_REQUEST, {
        variables: { id },
    });
    const singleRequest = data && data.fetchOneRequest;
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
                    <LinkMaterial className="crumbs" color="inherit" href="/calendar">
                        Calendar
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="inherit" href="/calendar/allevents">
                        Requests
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="textPrimary" href="#">
                        Request {loading ? 'loading' : singleRequest._id}
                    </LinkMaterial>
                </Breadcrumbs>

                <SingleRequest id={id} />

                <Paper className="paper paper-tail">
                    <h1 id="tag">Items</h1>
                    <div className="grid">
                        <div className="grid-items">
                            <div className="product">
                                <div className="image image1" />
                            </div>
                            <p className="name text">
                                {loading
                                    ? 'loading'
                                    : singleRequest.closet &&
                                      singleRequest.closet.items &&
                                      singleRequest.closet.items.length > 0 &&
                                      singleRequest.closet.items[0].name}
                            </p>
                            <p className="id text">
                                ID:{' '}
                                {loading
                                    ? 'loading'
                                    : singleRequest.closet &&
                                      singleRequest.closet.items &&
                                      singleRequest.closet.items.length > 0 &&
                                      singleRequest.closet.items[0]._id.substring(0, 7)}
                            </p>
                        </div>
                        <div className="grid-items">
                            <div className="product">
                                <div className="image image2" />
                            </div>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <div className="product">
                                <div className="image image3" />
                            </div>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <div className="product">
                                <div className="image image4" />
                            </div>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <div className="product">
                                <div className="image image1" />
                            </div>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                        <div className="grid-items">
                            <div className="product">
                                <div className="image image2" />
                            </div>
                            <p className="name text">Plain black shirt</p>
                            <p className="id text">ID: 2342323</p>
                        </div>
                    </div>
                </Paper>
            </DashboardLayout>
        </Wrapper>
    );
}

DeliveryRequest.propTypes = {};

export default DeliveryRequest;
