import { useQuery } from '@apollo/client';
import Items from '@components/dashboard/clients/ItemsVaultAndOutfit';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import UserDetailCard from '../../components/dashboard/common/UserDetailCard';
import DashboardLayout from '../../components/layout/DashboardLayout';
import Wrapper from '../../components/styles/ClientStyles';

const SINGLE_USER = gql`
	query SINGLE_USER($id: String) {
		userById(id: $id) {
			_id
			name
			email
			password
			type
			phone
			source
			image
			gender
			nationality
			resetPasswordExpires
			resetPasswordToken
			otpExpires
			otp
			verified
			token
			createdAt
			updatedAt
			currentClosetSize
			locations {
				_id
				location
				current
				createdAt
			}
			currentLocation {
				_id
				location
				createdAt
				current
			}
			currentSubscriptionPlan {
				_id
				name
				amount
				stripeProductId
				stripePriceId
			}
			stripeSubscriptionId
			closet {
				_id
				itemsIn
				items {
					_id
					name
				}
			}
			requests {
				_id
				numberOfItems
			}
			outfit {
				_id
				name
				category
				items {
					_id
					name
				}
				user {
					_id
				}
			}
		}
	}
`;

function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}
function client(props) {
	const { query } = useRouter();
	// fetch the id from the page
	const { id } = query;
	const { error, loading, data } = useQuery(SINGLE_USER, {
		variables: { id },
	});
	const userById = data && data.userById;

	const [value, setValue] = React.useState(0);
	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
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
					<LinkMaterial className="crumbs" color="inherit" href="/clients">
						Clients
					</LinkMaterial>
					<LinkMaterial className="crumbs" color="textPrimary" href="#">
						{loading ? 'loading' : userById.email}
					</LinkMaterial>
				</Breadcrumbs>

				<UserDetailCard
					userId={loading ? 'loading' : userById._id.substring(0, 7)}
					userName={loading ? 'loading' : userById.name}
					fullDetail={
						<>
							{' '}
							<div className="rhs">
								<div className="list grid first">
									<p className="text">Number</p>
									<p className="text bold">
										{loading ? 'loading' : userById.phone}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Joined</p>
									<p className="text bold">
										{loading
											? 'loading'
											: userById.createdAt !== null
											? userById.createdAt.substring(0, 10)
											: ''}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Items in closet</p>
									<p className="text bold">
										{loading
											? 'loading'
											: userById.closet && userById.closet.items.length}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Items in vault</p>
									<p className="text bold">
										{loading ? 'loading' : 'coming soon'}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Requests</p>
									<p className="text bold">
										{loading
											? 'loading'
											: error
											? 'no item'
											: userById.requests.length}
									</p>
								</div>
							</div>
							<div className="rhs">
								<div className="list grid first">
									<p className="text">Email</p>
									<p className="text bold">
										{loading ? 'loading' : userById.email}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Outfits</p>
									<p className="text bold">
										{loading
											? 'loading'
											: error
											? 'no item'
											: userById.outfit.length}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Designs</p>
									<p className="text bold">
										{loading ? 'loading' : 'no items'}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Pending for storage</p>
									<p className="text bold">
										{loading ? 'loading' : 'no items'}
									</p>
								</div>
							</div>
						</>
					}
					buttons={
						<>
							<Link href={{ pathname: '/clients/client', query: { id } }}>
								<p className="pink">Add to Closet</p>
							</Link>
							<Link
								href={{
									pathname: '/clients/subscriptionhistory',
									query: { id },
								}}
							>
								<p className="pink">Subscription History</p>
							</Link>
							<Link
								href={{ pathname: '/clients/paymenthistory', query: { id } }}
							>
								<p className="pink">Transaction History</p>
							</Link>
						</>
					}
				/>
				{loading ? 'loading' : <Items user={userById} />}
			</DashboardLayout>
		</Wrapper>
	);
}

client.propTypes = {};

export default client;
export { SINGLE_USER };
