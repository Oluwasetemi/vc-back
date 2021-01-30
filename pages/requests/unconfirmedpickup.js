import { useQuery } from '@apollo/client';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import SingleRequest from '../../components/dashboard/events/request/SingleRequest';
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
				name
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
			type
			createdAt
			updatedAt
		}
	}
`;
const pickupRequest = props => {
	const { query } = useRouter();
	// fetch the id from the page
	const { id } = query;
	const { error, loading, data } = useQuery(SINGLE_REQUEST, {
		variables: { id },
	});
	const singleRequest = data && data.fetchOneRequest;
	// console.log(singleRequest);

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
					<LinkMaterial className="crumbs" color="textPrimary">
						Request {loading ? 'loading' : singleRequest._id}
					</LinkMaterial>
				</Breadcrumbs>

				<SingleRequest id={id} />
			</DashboardLayout>
		</Wrapper>
	);
};

pickupRequest.propTypes = {};

export default pickupRequest;
export { SINGLE_REQUEST };
