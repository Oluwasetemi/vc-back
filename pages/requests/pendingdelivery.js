import { useQuery } from '@apollo/client';
import Item from '@components/dashboard/clients/SingleItem';
import UserDetailCard from '@components/dashboard/common/UserDetailCard';
import { SINGLE_REQUEST } from '@components/dashboard/events/request/SingleRequest';
import DashboardLayout from '@components/layout/DashboardLayout';
import Wrapper from '@components/styles/PendingDeliveryPageStyles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

const SendPickup = (props) => {
    const { query } = useRouter();
    // fetch the id from the page
    const { id, type, status } = query;
    const { error, loading, data } = useQuery(SINGLE_REQUEST, {
        variables: { id },
    });
    const singleRequest = data && data.fetchOneRequest;
    console.log(singleRequest);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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
                    <LinkMaterial className="crumbs" color="textPrimary">
                        Delivery {loading ? 'loading' : singleRequest._id}
                    </LinkMaterial>
                </Breadcrumbs>

                <Paper className="paper paper-top">
                    <TabPanel value={value} index={0}>
                        <div className="flex paper-top-head wrap">
                            <p className="date">Start Delivery</p>
                            <div className="buttons flex wrap">
                                <Link
                                    href={{
                                        pathname: '/requests/unconfirmeddelivery',
                                        query: { id, userid: singleRequest && singleRequest.user._id },
                                    }}
                                >
                                    <p className="accept pink"> Back</p>
                                </Link>
                                <p className="accept red" onClick={() => setValue(1)}>
                                    Start Checkout
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="flex paper-top-head wrap">
                            <p className="date">Start Checkout</p>
                            <div className="buttons flex wrap">
                                <p className="accept pink" onClick={() => setValue(0)}>
                                    {' '}
                                    Cancel
                                </p>
                                <p className="accept pink" onClick={() => alert('coming soon')}>
                                    {' '}
                                    Reschedule
                                </p>

                                <p className="accept red" onClick={() => setValue(2)}>
                                    Proceed To Checkout
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="flex paper-top-head wrap">
                            <p className="date">Checkout</p>
                            <div className="buttons flex wrap">
                                <p className="accept pink" onClick={() => setValue(1)}>
                                    {' '}
                                    Cancel
                                </p>
                                <p className="accept pink"> Reschedule</p>
                                <p className="accept red" onClick={() => setValue(3)}>
                                    Delivery Complete
                                </p>
                            </div>
                        </div>
                    </TabPanel>

                    <div className="tabset">
                        <AppBar className="appbar">
                            <span className="tooltiptext">Scroll to see other tabs</span>

                            <Tabs className="tabs" variant="scrollable" value={value} onChange={handleChange}>
                                <Tab
                                    label={
                                        <>
                                            <div className="tab-indicator flex">1</div>
                                            <span>Checkout of storage</span>
                                        </>
                                    }
                                />
                                <Tab
                                    label={
                                        <>
                                            <div className="tab-indicator flex">2</div>
                                            <span>Send on delivery</span>
                                        </>
                                    }
                                />
                                <Tab
                                    label={
                                        <>
                                            <div className="tab-indicator flex">3</div>
                                            <span>Delivery confirmation</span>
                                        </>
                                    }
                                />
                            </Tabs>
                        </AppBar>
                        <TabPanel className="tabpanel1" value={value} index={0}>
                            You’re about to initiate a delivery from the customer. Note that proceeding will set the
                            delivery as active. Please click “Start Checkout” to continue.
                        </TabPanel>
                    </div>
                </Paper>

                <TabPanel className="tabpanel2" value={value} index={1}>
                    <UserDetailCard
                        top={<p className="date">Monday, June 2, 2020</p>}
                        fullDetail={
                            <>
                                {' '}
                                <div className="rhs">
                                    <div className="list grid first">
                                        <p className="text">Items to deliver</p>
                                        <p className="text bold">{loading ? 'loading' : singleRequest.numberOfItems}</p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Type</p>
                                        <p className="text bold">{loading ? 'loading' : singleRequest.type}</p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Location</p>
                                        <p className="text bold">
                                            {loading ? 'loading' : singleRequest.pickupLocation.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="rhs">
                                    <div className="list grid first">
                                        <p className="text">{loading ? 'loading' : singleRequest.type} Date</p>
                                        <p className="text bold">
                                            {loading ? 'loading' : singleRequest.datetimePicked.substring(0, 10)}
                                        </p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Phone Number</p>
                                        <p className="text bold">
                                            {loading ? 'loading' : singleRequest.contactPhoneNumber}
                                        </p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Subscription</p>
                                        <p className="text bold">
                                            {loading ? 'loading' : singleRequest.user.currentSubscriptionPlan.name}
                                        </p>
                                    </div>
                                </div>
                            </>
                        }
                        buttons={
                            <Link
                                href={{
                                    pathname: '/clients/client',
                                    query: { id: singleRequest && singleRequest.user._id },
                                }}
                            >
                                <p className="pink">View Client</p>
                            </Link>
                        }
                        userName={loading ? 'loading' : singleRequest.user.name}
                        userId={loading ? 'loading' : singleRequest.user._id.substring(0, 7)}
                        weight="date mb-70"
                        text="You’re checking items out of closet"
                    />

                    <Paper className="paper paper-tail">
                        <h1>Items</h1>
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
                </TabPanel>

                <TabPanel className="tabpanel2" value={value} index={2}>
                    <UserDetailCard
                        top={<p className="date">Monday, June 2, 2020</p>}
                        fullDetail={
                            <>
                                {' '}
                                <div className="rhs">
                                    <div className="list grid first">
                                        <p className="text">Items to deliver</p>
                                        <p className="text bold">{loading ? 'loading' : singleRequest.numberOfItems}</p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Type</p>
                                        <p className="text bold">{loading ? 'loading' : singleRequest.type}</p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Location</p>
                                        <p className="text bold">
                                            {loading ? 'loading' : singleRequest.pickupLocation.location}
                                        </p>
                                    </div>
                                </div>
                                <div className="rhs">
                                    <div className="list grid first">
                                        <p className="text">Delivery Date</p>
                                        <p className="text bold">
                                            {loading ? 'loading' : singleRequest.datetimePicked.substring(0, 10)}
                                        </p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Phone Number</p>
                                        <p className="text bold">
                                            {loading ? 'loading' : singleRequest.contactPhoneNumber}
                                        </p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Subscription</p>
                                        <p className="text bold">
                                            {loading ? 'loading' : singleRequest.user.currentSubscriptionPlan.name}
                                        </p>
                                    </div>
                                </div>
                            </>
                        }
                        buttons={
                            <Link
                                href={{
                                    pathname: '/clients/client',
                                    query: { id: singleRequest && singleRequest.user._id },
                                }}
                            >
                                <p className="pink">View Client</p>
                            </Link>
                        }
                        userName={loading ? 'loading' : singleRequest.user.name}
                        userId={loading ? 'loading' : singleRequest.user._id.substring(0, 7)}
                        weight="date mb-70"
                        text="You can start checkout of the customer today"
                    />

                    <Paper className="paper paper-tail">
                        <h1>Items</h1>
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
                </TabPanel>
            </DashboardLayout>
        </Wrapper>
    );
};

SendPickup.propTypes = {};

export default SendPickup;
