import { useQuery } from '@apollo/client';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import UserDetailCard from '../../components/dashboard/common/UserDetailCard';
import DashboardLayout from '../../components/layout/DashboardLayout';

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

const SINGLE_REQUEST = gql`
	query SINGLE_REQUEST($id: ID!) {
		fetchOneRequest(id: $id) {
			_id
			numberOfItems
			type
			pickupLocation {
				_id
				location
			}
			user {
				_id
				email
				currentSubscriptionPlan {
					_id
					name
					amount
					services {
						storage
					}
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
`;
function startPickup(props) {
	const { query } = useRouter();
	// fetch the id from the page
	const { id } = query;
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
						href="/calendar/allEvents"
					>
						Requests
					</LinkMaterial>
					<LinkMaterial className="crumbs" color="textPrimary" href="#">
						Request {loading ? 'loading' : singleRequest._id}
					</LinkMaterial>
				</Breadcrumbs>

				<UserDetailCard
					userName={singleRequest && singleRequest.user.email}
					userId={singleRequest && singleRequest.user._id}
					top={
						<>
							<p className="date">Monday, June 2, 2020</p>
							<div className="buttons flex wrap">
								<p className="cancel pink">Cancel</p>
								<p
									className="reschedule pink"
									onClick={() => alert('coming soon')}
								>
									Reschedule
								</p>
								<Link
									href={{ pathname: '/requests/sendPickup', query: { id } }}
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
										{singleRequest && singleRequest.numberOfItems}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Type</p>
									<p className="text bold">
										{singleRequest && singleRequest.type}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Location</p>
									<p className="text bold">
										{singleRequest && singleRequest.pickupLocation.location}
									</p>
								</div>
							</div>
							<div className="rhs">
								<div className="list grid first">
									<p className="text">Delivery Date</p>
									<p className="text bold">
										{singleRequest &&
											singleRequest.datetimePicked.substring(0, 10)}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Phone Number</p>
									<p className="text bold">
										{singleRequest && singleRequest.contactPhoneNumber}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Subscription</p>
									<p className="text bold">
										{singleRequest &&
											singleRequest.user.currentSubscriptionPlan.name}
									</p>
								</div>
							</div>
						</>
					}
					buttons={
						<Link
							href={{
								pathname: '/clients/client',
								query: { id: `${singleRequest && singleRequest.user._id}` },
							}}
						>
							<p className="pink">View Client</p>
						</Link>
					}
					weight="value"
					text={`User has requested to checkout ${singleRequest &&
						singleRequest.numberOfItems} items from their closet`}
				/>
			</DashboardLayout>
		</Wrapper>
	);
}

startPickup.propTypes = {};

export default startPickup;
