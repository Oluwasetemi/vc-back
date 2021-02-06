import { useQuery } from '@apollo/client';
import Button from '@components/common/Button';
import gql from 'graphql-tag';
import Link from 'next/link';
import React from 'react';
import SmallCardPaper from './home/SmallCardPaper';

const FETCH_DASHBOARD = gql`
	query FETCH_DASHBOARD {
		fetchDashboard {
			request
			delivery
			pickup
			laundry
			stylistRequest
			closet
			vault
		}
	}
`;

export default function DashboardData() {
	const { error, loading, data } = useQuery(FETCH_DASHBOARD);
	const fetchDashboard = data && data.fetchDashboard;

	return (
		<div className="grid-container">
			<SmallCardPaper
				title="Requests"
				value={
					loading
						? 'loading'
						: error
						? 'Data Fetch Failed'
						: fetchDashboard.request
				}
				info="Requests for approval"
				link={
					<Link href="/calendar/allevents">
						<Button theme="pink">View</Button>
					</Link>
				}
			/>
			<SmallCardPaper
				title="Upcoming Deliveries"
				value={
					loading
						? 'loading'
						: error
						? 'Data Fetch Failed'
						: fetchDashboard.delivery
				}
				info="Items to deliver"
				link={
					<Link href="/requests/deliveryRequest">
						<Button theme="pink">View</Button>
					</Link>
				}
			/>
			<SmallCardPaper
				title="Upcoming Pickups"
				value={
					loading
						? 'loading'
						: error
						? 'Data Fetch Failed'
						: fetchDashboard.pickup
				}
				info="Items for pickup"
				link={
					<Link href="/requests/pickupRequest">
						<Button theme="pink">View</Button>
					</Link>
				}
			/>
			<SmallCardPaper
				title="Laundry"
				value={
					loading
						? 'loading'
						: error
						? 'Data Fetch Failed'
						: fetchDashboard.laundry
				}
				info="Items to catalogue"
				link={
					<Link href="/calendar/allevents">
						<Button theme="pink">View</Button>
					</Link>
				}
			/>
			<SmallCardPaper
				title="Stylists Requests"
				value={
					loading
						? 'loading'
						: error
						? 'Data Fetch Failed'
						: fetchDashboard.stylistRequest
				}
				info="Items to catalogue"
				link={
					<Link href="/calendar/allevents">
						<Button theme="pink">View</Button>
					</Link>
				}
			/>

			<SmallCardPaper
				title="Closet"
				value={
					loading
						? 'loading'
						: error
						? 'Data Fetch Failed'
						: fetchDashboard.closet
				}
				info="Items "
				href=""
			/>
			<SmallCardPaper title="Vault" value="coming soon" info="Items " href="" />
		</div>
	);
}
