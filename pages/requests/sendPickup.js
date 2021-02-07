import { useQuery } from '@apollo/client';
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
import UserDetailCard from '../../components/dashboard/common/UserDetailCard';
import InventoryReportsTab from '../../components/dashboard/events/request/InventoryReportsTab';
import SendOutPickup from '../../components/dashboard/events/SendOutPickup';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Wrapper from '../../components/styles/SendPickupStyles';
import { SINGLE_REQUEST } from './unconfirmedpickup';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

const sendPickup = (props) => {
    const { query } = useRouter();
    // fetch the id from the page
    const { id, type, status } = query;
    console.log(id, type, status);
    const { error, loading, data } = useQuery(SINGLE_REQUEST, {
        variables: { id },
    });
    const singleRequest = data && data.fetchOneRequest;
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
                    <LinkMaterial className="crumbs" color="inherit" href="/calendar/allEvents">
                        Requests
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="textPrimary" href="#">
                        {loading ? 'loading' : singleRequest && singleRequest._id}
                    </LinkMaterial>
                </Breadcrumbs>

                <Paper className="paper paper-top">
                    <TabPanel value={value} index={0}>
                        <div className="flex paper-top-head wrap">
                            <p className="date">Pickup</p>
                            <div className="buttons flex wrap">
                                <Link
                                    href={{
                                        pathname: `/requests/${status}${type}`,
                                        query: { id, type, status },
                                    }}
                                >
                                    <p className="accept pink"> Back</p>
                                </Link>
                                <SendOutPickup id={id} move={() => setValue(1)} />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <div className="flex paper-top-head wrap">
                            <p className="date">Pickup</p>
                            <div className="buttons flex wrap">
                                <p className="accept pink" onClick={() => setValue(0)}>
                                    {' '}
                                    Reschedule
                                </p>

                                <p className="accept red" onClick={() => setValue(2)}>
                                    Confirm Pickup
                                </p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <div className="flex paper-top-head wrap">
                            <p className="date">Pickup</p>
                            <div className="buttons flex wrap">
                                <p className="accept pink op-4" onClick={() => setValue(1)}>
                                    {' '}
                                    Back
                                </p>

                                <p className="accept red op-4">Proceed</p>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <div className="flex paper-top-head wrap">
                            <p className="date">Pickup</p>
                            <div className="buttons flex wrap">
                                <p className="accept pink op-4"> Back</p>

                                <p className="accept red op-4">Proceed</p>
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

                                            <span>Send Out Pickup</span>
                                        </>
                                    }
                                />
                                <Tab
                                    label={
                                        <>
                                            <div className="tab-indicator flex">2</div>

                                            <span>Confirm Pickup</span>
                                        </>
                                    }
                                />

                                <Tab
                                    label={
                                        <>
                                            <div className="tab-indicator flex">3</div>

                                            <span>Inventory & Reports</span>
                                        </>
                                    }
                                />

                                <Tab
                                    label={
                                        <>
                                            <div className="tab-indicator flex">4</div>

                                            <span>Laundry & Storage</span>
                                        </>
                                    }
                                />
                            </Tabs>
                        </AppBar>
                        <TabPanel className="tabpanel1" value={value} index={0}>
                            You’re about to initiate a pickup from the customer. Note that proceeding will set the
                            pickup as active. Please click “Send Out Pickup” to continue.
                        </TabPanel>
                    </div>
                </Paper>

                <TabPanel className="tabpanel2" value={value} index={1}>
                    <UserDetailCard
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
                                <p className="pink ml-0">View Client</p>
                            </Link>
                        }
                        userName={loading ? 'loading' : singleRequest.user.name}
                        userId={loading ? 'loading' : singleRequest.user._id.substring(0, 7)}
                        weight="date mb-70"
                        text="Items are being picked up from the client."
                    />
                </TabPanel>

                <TabPanel className="tabpanel2" value={value} index={2}>
                    <UserDetailCard
                        fullDetail={
                            <>
                                {' '}
                                <div className="rhs">
                                    <div className="list grid first">
                                        <p className="text">Items to deliver</p>
                                        <p className="text bold">{loading ? 'loading' : singleRequest.numberOfItems}</p>
                                    </div>
                                    <div className="list grid">
                                        <p className="text">Status</p>
                                        <p className="text bold">{loading ? 'loading' : singleRequest.status}</p>
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
                                <p className="pink ml-0">View Client</p>
                            </Link>
                        }
                        userName={loading ? 'loading' : singleRequest.user.name}
                        userId={loading ? 'loading' : singleRequest.user._id.substring(0, 7)}
                        weight="date mb-70"
                        text="Items are being picked up from the client."
                    />

                    <InventoryReportsTab
                        id={singleRequest && singleRequest._id}
                        onClickPrev={() => setValue(1)}
                        onClickNext={() => setValue(3)}
                    />
                </TabPanel>
                <TabPanel className="tabpanel2" value={value} index={3}>
                    <UserDetailCard
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
                                <p className="pink ml-0">View Client</p>
                            </Link>
                        }
                        userName={loading ? 'loading' : singleRequest.user.name}
                        userId={loading ? 'loading' : singleRequest.user._id.substring(0, 7)}
                        weight="date mb-70"
                        text="Items are being picked up from the client."
                    />

                    <Paper className="paper storage-laundry">
                        <p className="date">Storage & Laundry</p>
                        <div className="paper gray-paper">
                            <div className="laundry">
                                <p className="title text">To Laundry</p>
                                <p className="items text">20-40 Items</p>
                                <div className="grid grid-4 grid-4-small">
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="storage">
                                <p className="title text">Direct to Storage</p>
                                <p className="items text">20-40 Items</p>
                                <div className="grid grid-4 grid-4-small">
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="vault">
                                <p className="title text">Direct to Vault</p>
                                <p className="items text">20-40 Items</p>
                                <div className="grid grid-4 grid-4-small">
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                    <div className="item-summary">
                                        <div className="summary">
                                            <p className="text">Item ID</p>
                                            <p className="text">Item Name</p>
                                            <p className="text">Shirt</p>
                                        </div>
                                        <Link href="" className="text edit">
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                </TabPanel>
            </DashboardLayout>
        </Wrapper>
    );
};

sendPickup.propTypes = {};

export default sendPickup;
