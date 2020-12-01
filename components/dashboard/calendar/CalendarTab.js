import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from "@material-ui/core/AppBar";
import SimpleTable from "../../common/SimpleTable";
import { modalEventTableConstants } from '../../dashboard/calendar/modalEventTableConstants';
import { allModalEventData } from '../../dashboard/calendar/modalEventData';
import { activeModalEventData } from '../../dashboard/calendar/modalEventData';
import { requestModalEventData } from '../../dashboard/calendar/modalEventData';
import { deliveryModalEventData } from '../../dashboard/calendar/modalEventData';
import { laundryModalEventData } from '../../dashboard/calendar/modalEventData';
import { pickupModalEventData } from '../../dashboard/calendar/modalEventData';
import Box from "@material-ui/core/Box";

import styled from 'styled-components';

const Wrapper = styled.div`
.MuiAppBar-colorPrimary {
    color: #2F3930;
	background-color: rgba(0,0,0,0);
	box-shadow: none;
	border-bottom: 1px solid #DFE2E5;
	padding: 0 23px;
}
.MuiTab-root{
	font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell, Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
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
  export default function CalendarTab() {
	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
	  setValue(newValue);
	};
	return (
	  <Wrapper>
		<AppBar position="static">
		  <Tabs value={value} onChange={handleChange}>
			<Tab label= {`All (${allModalEventData.length})`}/>
			<Tab label={`Active (${activeModalEventData.length})`} />
			<Tab label={`Requests (${requestModalEventData.length})`} />
			<Tab label={`Deliveries (${deliveryModalEventData.length})`} />
			<Tab label={`Pickups (${pickupModalEventData.length})`} />
			<Tab label={`Laundry (${laundryModalEventData.length})`} />
		  </Tabs>
		</AppBar>
		<TabPanel value={value} index={0}>
		<SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={allModalEventData}/>

		</TabPanel>
		<TabPanel value={value} index={1}>
		<SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={activeModalEventData}/>

		</TabPanel>
		<TabPanel value={value} index={2}>
		<SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={requestModalEventData}/>

		</TabPanel>
		<TabPanel value={value} index={3}>
		<SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={deliveryModalEventData}/>

		</TabPanel>
		<TabPanel value={value} index={4}>
		<SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={pickupModalEventData}/>

		</TabPanel>
		<TabPanel value={value} index={5}>
		<SimpleTable shadow="no-shadow" cols={modalEventTableConstants()} data={laundryModalEventData}/>

		</TabPanel>
		
	  </Wrapper>
	);
  }