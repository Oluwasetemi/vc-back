import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Link from 'next/link';
import React from 'react';
import UserDetailCard from '../../common/UserDetailCard';
import AcceptPickRequest from '../AcceptPickRequest';

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
					amount
					name
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

function SingleRequest(props) {
	const { id } = props;
	// console.log(id)
	const { error, loading, data } = useQuery(SINGLE_REQUEST, {
		variables: { id },
	});

	// console.log(data && data.fetchOneRequest)
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!data) return <p>No request found!</p>;

	return (
		<>
			<UserDetailCard
				top={
					<>
						<p className="date">Monday, June 2, 2020</p>
						<div className="buttons flex wrap">
							<p
								className="reschedule pink"
								onClick={() => alert('coming soon')}
							>
								Reschedule
							</p>
							<AcceptPickRequest
								id={id}
								bookingId={data.fetchOneRequest.bookingId}
							/>
						</div>
					</>
				}
				initials="JT"
				userId={data.fetchOneRequest.user._id.substring(0, 7)}
				userName={data.fetchOneRequest.user.email}
				fullDetail={
					<>
						{' '}
						<div className="rhs">
							<div className="list grid first">
								<p className="text">Items to deliver</p>
								<p className="text bold">
									{data.fetchOneRequest.numberOfItems}
								</p>
							</div>
							<div className="list grid">
								<p className="text">Type</p>
								<p className="text bold">{data.fetchOneRequest.type}</p>
							</div>
							<div className="list grid">
								<p className="text">Location</p>
								<p className="text bold">
									{data.fetchOneRequest.pickupLocation.location}
								</p>
							</div>
						</div>
						<div className="rhs">
							<div className="list grid first">
								<p className="text">{data.fetchOneRequest.type} Date</p>
								<p className="text bold">
									{data.fetchOneRequest.datetimePicked.substring(0, 10)}
								</p>
							</div>
							<div className="list grid">
								<p className="text">Phone Number</p>
								<p className="text bold">
									{data.fetchOneRequest.contactPhoneNumber}
								</p>
							</div>
							<div className="list grid">
								<p className="text">Subscription</p>
								<p className="text bold">
									{data.fetchOneRequest.user.currentSubscriptionPlan.name}
								</p>
							</div>
						</div>
					</>
				}
				buttons={
					<Link
						href={{
							pathname: '/clients/client',
							query: { id: `${data.fetchOneRequest.user._id}` },
						}}
					>
						<p className="pink">View Client</p>
					</Link>
				}
				weight="value"
				text={`User has requested to pickup ${data.fetchOneRequest.numberOfItems} items from their closet`}
			/>
		</>
	);
}

SingleRequest.propTypes = {};

export default SingleRequest;
