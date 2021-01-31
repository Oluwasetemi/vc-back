import { useQuery } from '@apollo/client';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import gql from 'graphql-tag';
import React from 'react';
import styled from 'styled-components';
import { AllEvents } from './AllEvents';
import { laundryEventsData } from './EventsTableData';
import { ActiveRequest } from './request/ActiveRequest';
import { DeliveryRequest } from './request/DeliveryRequest';
import { PickupRequest } from './request/PickupRequest';
import RequestTab from './RequestTab';
import SortTablePagination from './SortTablePagination';

const Wrapper = styled.div`
	.MuiAppBar-colorPrimary {
		color: #2f3930;
		background-color: rgba(0, 0, 0, 0);
		box-shadow: none;
		margin-bottom: 20px;
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

	.MuiTab-root {
		min-width: auto;
		padding: 0;
		margin-right: 24px;
		letter-spacing: 0;
	}
	.MuiTab-textColorInherit {
		color: #9c9b7c;
	}
	.Mui-selected {
		color: #2f3930;
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
	.no-bg {
		background-color: transparent !important;
		box-shadow: none !important;
	}
	.searchbar {
		position: absolute;
		top: 0;
		right: 24px;
		background: #ffffff;
		border: 1px solid #9c9b7c;
		border-radius: 10px;
		padding: 3px 15px;
		max-width: 30%;
		display: flex;
		overflow: hidden;
		@media screen and (max-width: ${props => props.theme.breakpoint.md}) {
			position: relative;
			width: 300px;
			margin-left: auto;
		}
		@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
			width: fit-content;
		}

		&:focus-within {
			border: 1px solid #f26144;
		}
		input {
			outline: none;
			border: none;
			font-size: 14px;
			line-height: 24px;
			font-family: 'Matteo';
			padding-left: 8px;
		}
	}
	.paper {
		background: #ffffff;
		box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		width: 100%;
		overflow-x: auto;

		@media screen and (max-width: ${props => props.theme.breakpoint.md}) {
			padding-top: 20px;
		}

		&::-webkit-scrollbar {
			height: 0.4rem;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #f26144;
			border-radius: 0.5rem;
		}
	}
	.status {
		font-size: 12px;
		line-height: 16px;
		color: #ffffff;
		background: #9c9b7c;
		border-radius: 10px;
		padding: 2px 20px;
		white-space: nowrap;
	}
	td .button {
		padding: 0.4rem 2rem;
	}
	.MuiTableCell-paddingCheckbox {
		display: none;
	}
	.MuiTableSortLabel-root {
		font-size: 12px;
		line-height: 16px;
		color: #4b6962;
		font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
			Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
			sans-serif;
		font-weight: normal;
	}
	.MuiTableCell-root,
	.MuiTablePagination-caption {
		font-size: 14px;
		line-height: 24px;
		color: #2f3930;
		text-align: left;
		padding: 16px 0 16px 30px;
		font-weight: 500;
		font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
			Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
			sans-serif;
	}
	tbody .MuiTableRow-root > th {
		padding-left: 30px;
	}
	.pagination {
		display: flex;
		justify-content: center;
		margin: 30px 0;
		img {
			cursor: pointer;
		}
	}
	.page {
		margin: 0 30px;
		color: #2f3930;
		font-size: 14px;
		line-height: 24px;
	}
	.MuiTableRow-root.Mui-selected,
	.MuiTableRow-root.Mui-selected:hover {
		background-color: rgba(0, 0, 0, 0);
	}

	table {
		width: 100%;
		border-collapse: collapse;
		min-width: 850px;
	}
`;

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
				<SortTablePagination
					paper="paper"
					rows={laundryEventsData}
					headCells={headCells4}
				/>
			</TabPanel>
		</Wrapper>
	);
}
