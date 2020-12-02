import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";
import SortTablePagination from './SortTablePagination';
import {allEventsData} from './EventsTableData'
import {activeEventsData} from './EventsTableData'
import {pickupRequestEventsData} from './EventsTableData'
import {outfitRequestEventsData} from './EventsTableData'
import {stylistRequestEventsData} from './EventsTableData'
import { homeTableConstants } from '../home/homeTableConstants';

import Box from "@material-ui/core/Box";

import styled from 'styled-components';

const Wrapper = styled.div`
.request-paper{
	box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
	border-radius: 10px;
	.MuiAppBar-colorPrimary {
		margin-bottom: 0;
	}
}
.MuiAppBar-colorPrimary {
    color: #2F3930;
	background-color: rgba(0,0,0,0);
	box-shadow: none;
	padding-left: 30px;
}

.MuiTab-wrapper{
	font-weight: 500;
font-size: 13px;
line-height: 24px;
text-transform: capitalize;
}
.PrivateTabIndicator-colorSecondary-18{
	background-color: #F26144;
}
.Mui-selected{
	color: #2F3930;
}
.MuiTab-root {
	min-width: auto;
	padding: 0;
	margin-right: 24px;
	letter-spacing: 0;
}
.MuiTabs-fixed{
	overflow-x: scroll !important;
	&::-webkit-scrollbar {
		height: .1rem;
	  }
		&::-webkit-scrollbar-thumb {
		background-color: darkgray;
		border-radius: 0.5rem;
	  }
}
.MuiBox-root{
padding:0;	
}
`
  
function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return (
	  <div {...other}>
		{value === index && <Box p={3}>{children}</Box>}
	  </div>
	);
  }
  export default function RequestTab() {
	const headCells = [
		{ id: "userId", label: "USER ID" },
		{ id: "userEmail", label: "USER EMAIL" },
		{ id: "zipCode", label: "ZIP CODE" },
		{ id: "noOfItems", label: "NO OF ITEMS" },
		{ id: "date", label: "DATE" },
		{ id: "type", label: "TYPE" },
		{ id: "link", label: "" },
	  ];

	  const headCells2= [
		{ id: "userId", label: "USER ID" },
		{ id: "userEmail", label: "USER EMAIL" },
		{ id: "zipCode", label: "ZIP CODE" },
		{ id: "noOfItems", label: "NO OF ITEMS" },
		{ id: "location", label: "LOCATION" },
		{ id: "date", label: "PICKUP DATE" },
		{ id: "type", label: "TYPE" },
		{ id: "link", label: "" },
	  ];
	  const headCells3= [
		{ id: "userId", label: "USER ID" },
		{ id: "userEmail", label: "USER EMAIL" },
		{ id: "zipCode", label: "ZIP CODE" },
		{ id: "noOfItems", label: "NO OF ITEMS" },
		{ id: "location", label: "LOCATION" },
		{ id: "date", label: "EVENT DATE" },
		{ id: "type", label: "NATURE" },
		{ id: "link", label: "" },
	  ];
	  const headCells4= [
		{ id: "userId", label: "USER ID" },
		{ id: "userEmail", label: "USER EMAIL" },
		{ id: "zipCode", label: "ZIP CODE" },
		{ id: "noOfItems", label: "NO OF ITEMS" },
		{ id: "location", label: "LOCATION" },
		{ id: "date", label: "REQUEST DATE" },
		{ id: "type", label: "" },
		{ id: "link", label: "" },
	  ];
	  
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};
	return (
	  <Wrapper>
		<Paper className="request-paper">
		<AppBar position="static">
		  <Tabs value={value} onChange={handleChange}>
			<Tab label= {`All`}/>
			<Tab label={`Pickup`} />
			<Tab label={`Delivery`} />
			<Tab label={`Stylists Requests`} />
			<Tab label={`Outfit Requests `} />
			<Tab label={`Help Me Pack`} />
		  </Tabs>
		</AppBar>
		<TabPanel value={value} index={0}>
		<SortTablePagination   rows={allEventsData} headCells={headCells}/>

		</TabPanel>
		<TabPanel value={value} index={1}>
		<SortTablePagination   rows={pickupRequestEventsData} headCells={headCells2}/>
		</TabPanel>
		<TabPanel value={value} index={2}>
		<SortTablePagination   rows={allEventsData} headCells={headCells}/>

		</TabPanel>
		<TabPanel value={value} index={3}>
		<SortTablePagination   rows={stylistRequestEventsData} headCells={headCells3}/>

		</TabPanel>
		<TabPanel value={value} index={4}>
		<SortTablePagination rows={outfitRequestEventsData} headCells={headCells4}/>

		</TabPanel>
		<TabPanel value={value} index={5}>
		<SortTablePagination   rows={stylistRequestEventsData} headCells={headCells3}/>

		</TabPanel>
		
		</Paper>
	  </Wrapper>
	);
  }