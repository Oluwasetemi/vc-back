import { useQuery } from '@apollo/client';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { format } from 'date-fns';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import UserDetailCard from '../../components/dashboard/common/UserDetailCard';
import DashboardLayout from '../../components/layout/DashboardLayout';
import { SINGLE_REQUEST } from './unconfirmedpickup';

const Wrapper = styled.div`
	.bread-crumbs {
		margin: 30px 0 10px 0;
	}
	.crumbs {
		font-size: 18px;
		line-height: 30px;
		@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
			font-size: 13px;
		}
	}
`;

function startPickupPage(props) {
	const { query } = useRouter();
	// fetch the id from the page
	const { id, type, status } = query;
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
					<LinkMaterial
						className="crumbs"
						color="inherit"
						href="/calendar/allevents"
					>
						Requests
					</LinkMaterial>
					<LinkMaterial className="crumbs" color="textPrimary" href="#">
						Request {loading ? 'loading' : singleRequest._id}
					</LinkMaterial>
				</Breadcrumbs>

				<UserDetailCard
					userName={
						loading ? 'loading' : error ? 'no data' : singleRequest.user.email
					}
					userId={
						loading
							? 'loading'
							: error
							? 'no data'
							: singleRequest.user._id.substring(0, 7)
					}
					top={
						<>
							<p className="date">
								{loading
									? 'loading'
									: error
									? 'no data'
									: format(
											new Date(singleRequest && singleRequest.datetimePicked),
											'PPPP',
									  )}
							</p>
							<div className="buttons flex wrap">
								<p className="cancel pink">Cancel</p>
								<p
									className="reschedule pink"
									onClick={() => alert('coming soon')}
								>
									Reschedule
								</p>
								<Link
									href={{
										pathname: `/requests/send${type}`,
										query: { id, type, status },
									}}
								>
									<p className="accept red">Start Pickup</p>
								</Link>
							</div>
						</>
					}
					fullDetail={
						<>
							{' '}
							<div className="rhs">
								<div className="list grid first">
									<p className="text">Items to deliver</p>
									<p className="text bold">
										{loading
											? 'loading'
											: error
											? 'no data'
											: singleRequest.numberOfItems}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Type</p>
									<p className="text bold">
										{loading
											? 'loading'
											: error
											? 'no data'
											: singleRequest.type}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Location</p>
									<p className="text bold">
										{loading
											? 'loading'
											: error
											? 'no data'
											: singleRequest.pickupLocation.location}
									</p>
								</div>
							</div>
							<div className="rhs">
								<div className="list grid first">
									<p className="text">Delivery Date</p>
									<p className="text bold">
										{loading
											? 'loading'
											: error
											? 'no data'
											: singleRequest.datetimePicked.substring(0, 10)}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Phone Number</p>
									<p className="text bold">
										{loading
											? 'loading'
											: error
											? 'no data'
											: singleRequest.contactPhoneNumber}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Subscription</p>
									<p className="text bold">
										{loading
											? 'loading'
											: error
											? 'no data'
											: singleRequest.user.currentSubscriptionPlan.name}
									</p>
								</div>
							</div>
						</>
					}
					buttons={
						<Link
							href={{
								pathname: '/clients/client',
								query: {
									id: `${
										loading
											? 'loading'
											: error
											? 'no data'
											: singleRequest.user._id
									}`,
								},
							}}
						>
							<p className="pink">View Client</p>
						</Link>
					}
					weight="value"
					text={`User has requested to checkout ${
						loading
							? 'loading'
							: error
							? 'no data'
							: singleRequest.numberOfItems
					} items from their closet`}
				/>
			</DashboardLayout>
		</Wrapper>
	);
}

startPickupPage.propTypes = {};

export default startPickupPage;
