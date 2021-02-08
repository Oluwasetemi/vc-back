import { useQuery } from '@apollo/client';
import Item from '@components/dashboard/clients/SingleItem';
import SingleRequest, { SINGLE_REQUEST } from '@components/dashboard/events/request/SingleRequest';
import DashboardLayout from '@components/layout/DashboardLayout';
import Wrapper from '@components/styles/UnconfirmedDeliveryStyles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useRouter } from 'next/router';
import React from 'react';

function DeliveryRequest(props) {
    const { query } = useRouter();
    // fetch the id from the page
    const { id } = query;
    const { error, loading, data } = useQuery(SINGLE_REQUEST, {
        variables: { id },
    });
    const singleRequest = data && data.fetchOneRequest;
    // console.log(singleRequest);
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
                        {singleRequest && singleRequest.items.length === 0 ? (
                            <p>user do not have any outfit</p>
                        ) : (
                            singleRequest &&
                            singleRequest.items.map((item) => (
                                <Item
                                    name={item.name}
                                    id={item._id}
                                    userid={singleRequest && singleRequest.user._id}
                                    key={item._id}
                                />
                            ))
                        )}
                    </div>
                </Paper>
            </DashboardLayout>
        </Wrapper>
    );
}

DeliveryRequest.propTypes = {};

export default DeliveryRequest;
