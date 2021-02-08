/* eslint-disable no-nested-ternary */
import { useQuery } from '@apollo/client';
import Wrapper from '@components/styles/EventTabStyles';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import gql from 'graphql-tag';
import React from 'react';
import { AllEvents } from './AllEvents';
import { laundryEventsData } from './EventsTableData';
import { ActiveRequest } from './request/ActiveRequest';
import { DeliveryRequest } from './request/DeliveryRequest';
import { PickupRequest } from './request/PickupRequest';
import RequestTab from './RequestTab';
import SortTablePagination from './SortTablePagination';

const ALL_REQUEST = gql`
    query ALL_REQUEST {
        fetchAllRequest(sort: descending, type: All) {
            total
            data {
                _id
                numberOfItems
                type
                pickupLocation {
                    _id
                    location
                }
                user {
                    _id
                    name
                    email
                    currentSubscriptionPlan {
                        _id
                    }
                }
                bookingId
                datetimePicked
                contactPhoneNumber
                status
                createdAt
                updatedAt
            }
        }
    }
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}
export default function EventsTab() {
    const { error, loading, data } = useQuery(ALL_REQUEST);

    const headCells4 = [
        { id: 'userId', label: 'USER ID' },
        { id: 'userEmail', label: 'USER EMAIL' },
        { id: 'noOfItems', label: 'NO OF ITEMS' },
        { id: '', label: '' },
        { id: 'date', label: 'PICKUP DATE' },
        { id: 'type', label: 'STORAGE' },
        { id: 'link', label: '' },
    ];
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Wrapper>
            <AppBar position="static" className="no-bg">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="All" />
                    <Tab label="Active" />
                    <Tab label="Requests" />
                    <Tab label="Deliveries" />
                    <Tab label="Pickups " />
                    <Tab label="Laundry" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <AllEvents error={error} loading={loading} data={data} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {loading ? (
                    <p>loading</p>
                ) : error ? (
                    <p>Fetching failed</p>
                ) : data ? (
                    <ActiveRequest error={error} loading={loading} data={data} />
                ) : (
                    'no data'
                )}
            </TabPanel>
            <TabPanel value={value} index={2}>
                <RequestTab error={error} loading={loading} data={data} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <DeliveryRequest error={error} loading={loading} data={data} />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <PickupRequest />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <SortTablePagination paper="paper" rows={laundryEventsData} headCells={headCells4} />
            </TabPanel>
        </Wrapper>
    );
}
