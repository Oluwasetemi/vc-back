import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useState } from 'react';
import styled from 'styled-components';
import SimpleTable from '../../common/SimpleTable';
import {
    allModalEventData,
    activeModalEventData,
    deliveryModalEventData,
    requestModalEventData,
    laundryModalEventData,
    pickupModalEventData,
} from './modalEventData';
import { modalEventTableConstants } from './modalEventTableConstants';

const Wrapper = styled.div`
    .MuiAppBar-colorPrimary {
        color: #2f3930;
        background-color: rgba(0, 0, 0, 0);
        box-shadow: none;
        border-bottom: 1px solid #dfe2e5;
        padding: 0 23px;
    }
    .MuiTab-root {
        font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
    }
    .MuiTab-wrapper {
        font-weight: 500;
        font-size: 13px;
        line-height: 24px;
        text-transform: capitalize;
    }
    .PrivateTabIndicator-colorSecondary-18 {
        background-color: #f26144;
    }
    .Mui-selected {
        color: #2f3930;
    }
    .MuiTab-root {
        min-width: auto;
        padding: 0;
        margin-right: 24px;
        letter-spacing: 0;
    }
    .MuiTabs-fixed {
        overflow-x: scroll !important;
        &::-webkit-scrollbar {
            height: 0.1rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgray;
            border-radius: 0.5rem;
        }
    }
    .MuiBox-root {
        padding: 0;
    }
`;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}
export default function CalendarTab() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Wrapper>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange}>
                    <Tab label={`All (${allModalEventData.length})`} />
                    <Tab label={`Active (${activeModalEventData.length})`} />
                    <Tab label={`Requests (${requestModalEventData.length})`} />
                    <Tab label={`Deliveries (${deliveryModalEventData.length})`} />
                    <Tab label={`Pickups (${pickupModalEventData.length})`} />
                    <Tab label={`Laundry (${laundryModalEventData.length})`} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={allModalEventData} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={activeModalEventData} />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={requestModalEventData} />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={deliveryModalEventData} />
            </TabPanel>
            <TabPanel value={value} index={4}>
                <SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={pickupModalEventData} />
            </TabPanel>
            <TabPanel value={value} index={5}>
                <SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={laundryModalEventData} />
            </TabPanel>
        </Wrapper>
    );
}
