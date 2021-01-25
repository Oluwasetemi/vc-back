import { useQuery } from '@apollo/client';
import Button from '@components/common/Button';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import UserDetailCard from '../../components/dashboard/common/UserDetailCard';
import DashboardLayout from '../../components/layout/DashboardLayout';
import storage from '../../public/assets/inStorageIcon.svg';
import vault from '../../public/assets/inVaultIcon.svg';
import menShoes from '../../public/assets/men_shoes.png';
import pants from '../../public/assets/pants.png';
import shirt from '../../public/assets/shirt.png';
import tie from '../../public/assets/tie.png';
import vaultIcon from '../../public/assets/Vault.svg';

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
	.paper-client {
		box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 25px 29px;
		margin: 30px 0 50px 0;
		#tag {
			font-weight: 600;
			font-size: 18px;
			line-height: 24px;
			color: #2f3930;
		}
		.wrap {
			flex-wrap: wrap;
		}
	}

	.paper-client .MuiAppBar-colorPrimary {
		color: #2f3930;
		background-color: rgba(0, 0, 0, 0);
		box-shadow: none;
		margin-bottom: 20px;
	}

	.paper-client .MuiTab-wrapper {
		font-weight: 500;
		font-size: 13px;
		line-height: 24px;
		text-transform: capitalize;
	}
	.paper-client .PrivateTabIndicator-colorSecondary-18 {
		background-color: #f26144;
	}

	.paper-client .MuiTab-root {
		min-width: auto;
		padding: 0;
		margin-right: 24px;
		letter-spacing: 0;
	}
	.paper-client .MuiTab-textColorInherit {
		color: #9c9b7c;
	}
	.paper-client .Mui-selected {
		color: #2f3930;
	}
	.paper-client .MuiTabs-fixed {
		overflow-x: scroll !important;
		&::-webkit-scrollbar {
			height: 0.1rem;
		}
		&::-webkit-scrollbar-thumb {
			background-color: darkgray;
			border-radius: 0.5rem;
		}
	}
	.gray-paper-client {
		background: #fbfcfa;
		padding: 24px 35px;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
	}
	.gray-paper-client .season {
		font-size: 14px;
		line-height: 24px;
		letter-spacing: 0.75px;
		margin-bottom: 26px;
		text-transform: uppercase;
		color: #2f3930;
	}
	.gray-paper-client .season1 {
		margin-bottom: 0;
	}
	.mb-26 {
		margin-bottom: 26px;
	}
	.mt-22 {
		margin-top: 22px;
	}

	.paper-client .MuiBox-root {
		padding: 0;
		max-width: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
		&::-webkit-scrollbar {
			height: 0.1rem;
		}
		&::-webkit-scrollbar-thumb {
			background-color: #f26144;
			border-radius: 0.5rem;
		}
	}
	.paper-client .flexy {
		display: flex;
		width: 100%;
		min-width: max-content;
		margin: 0 0 30px 0;
	}

	.grid-items .product {
		background-color: #f3f0f0;
		padding: 38px 5px;
		position: relative;
		margin-right: 28px;
		border-radius: 5px;
		overflow: hidden;
		width: 157px;
		cursor: pointer;
	}
	.grid-items .product:before {
		content: '';
		display: block;
		position: absolute;
		left: 0;
		height: 0%;
		width: 100%;
		bottom: 0;
		transition: height 0.5s ease-out;
		background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
	}
	.grid-items .product:hover:before {
		height: 100%;
	}
	.grid-items .image {
		height: 172px;
		background-repeat: no-repeat;
		background-position: center;
	}

	.grid-items .image1 {
		background-image: url(${shirt});
	}
	.grid-items .image2 {
		background-image: url(${pants});
	}
	.grid-items .image3 {
		background-image: url(${menShoes});
	}
	.grid-items .image4 {
		background-image: url(${tie});
	}
	.grid-items .text {
		font-size: 16px;
		line-height: 24px;
		color: #2f3930;
	}
	.grid-items .name {
		font-weight: bold;
		margin: 18px 0 10px 0;
	}
	.absolute {
		position: absolute;
	}
	.product .location {
		right: 8px;
		bottom: 8px;
	}

	.button {
		padding: 0.4rem 2.5rem;
	}
	.gray-paper-client .edit-outfit {
		font-weight: 600;
		margin-left: 19px;
		font-size: 16px;
		line-height: 32px;
		text-decoration-line: underline;
		color: #f26144;
		cursor: pointer;
		&:hover {
			text-decoration: none;
			transition: 0.3s;
		}
	}
`;

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
										{loading ? 'loading' : userById.createdAt.substring(0, 10)}
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
										{loading ? 'loading' : 'no items'}
									</p>
								</div>
								<div className="list grid">
									<p className="text">Lifetime pickups</p>
									<p className="text bold">
										{loading ? 'loading' : 'no items'}
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
										{loading ? 'loading' : 'no items'}
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
							<Link href="/clients/client">
								<p className="pink">Add to Closet</p>
							</Link>
							<Link href="/clients/subscriptionHistory">
								<p className="pink">Subscription History</p>
							</Link>
							<Link href="/clients/paymentHistory">
								<p className="pink">Transaction History</p>
							</Link>
						</>
					}
				/>

				<Paper className="paper-client">
					<h1 id="tag">Items</h1>
					<AppBar position="static">
						<div
							className="flex wrap"
							style={{ justifyContent: 'space-between' }}
						>
							<Tabs value={value} onChange={handleChange}>
								<Tab
									label={`Closet (${
										loading
											? 'loading'
											: userById.closet && userById.closet.items.length
									})`}
								/>
								<Tab label="Vault (2)" />
								<Tab label="Outfits (2)" />
							</Tabs>
							{value === 1 && (
								<TabPanel value={value} index={1}>
									<Link href="/clients/editOutfit">
										<Button theme="orange">Edit</Button>
									</Link>
								</TabPanel>
							)}
							{value === 2 && (
								<TabPanel value={value} index={2}>
									<Link href="/clients/createAnOutfit">
										<Button theme="orange"> Create an Outfit</Button>
									</Link>
								</TabPanel>
							)}
						</div>
					</AppBar>
					<TabPanel value={value} index={0}>
						<div className="flexy">
							<div className="grid-items">
								<Link href="/clients/item">
									<div className="product">
										<div className="image image1" />
									</div>
								</Link>
								<p className="name text">
									{loading
										? 'loading'
										: userById.closet &&
										  userById.closet.items &&
										  userById.closet.items.length > 0 &&
										  userById.closet.items[0].name}
								</p>
								<p className="id text">
									ID:{' '}
									{loading
										? 'loading'
										: userById.closet &&
										  userById.closet.items &&
										  userById.closet.items.length > 0 &&
										  userById.closet.items[0]._id.substring(0, 7)}
								</p>
							</div>

							<div className="grid-items">
								<Link href="/clients/item">
									<div className="product">
										<div className="location absolute">
											<img src={storage} alt="storage" />{' '}
										</div>
										<div className="image image2" />
									</div>
								</Link>
								<p className="name text">Plain black shirt</p>
								<p className="id text">ID: 2342323</p>
							</div>
							<div className="grid-items">
								<Link href="/clients/item">
									<div className="product">
										<div className="location absolute">
											<img src={vault} alt="vault" />{' '}
										</div>
										<div className="image image3" />
									</div>
								</Link>
								<p className="name text">Plain black shirt</p>
								<p className="id text">ID: 2342323</p>
							</div>
							<div className="grid-items">
								<Link href="/clients/item">
									<div className="product">
										<div className="location absolute">
											<img src={storage} alt="storage" />{' '}
										</div>
										<div className="image image4" />
									</div>
								</Link>
								<p className="name text">Plain black shirt</p>
								<p className="id text">ID: 2342323</p>
							</div>
							<div className="grid-items">
								<Link href="/clients/item">
									<div className="product">
										<div className="location absolute">
											<img src={vault} alt="vault" />{' '}
										</div>
										<div className="image image1" />
									</div>
								</Link>
								<p className="name text">Plain black shirt</p>
								<p className="id text">ID: 2342323</p>
							</div>
							<div className="grid-items">
								<Link href="/clients/item">
									<div className="product">
										<div className="image image2" />
									</div>
								</Link>
								<p className="name text">Plain black shirt</p>
								<p className="id text">ID: 2342323</p>
							</div>
							<div className="grid-items">
								<Link href="/clients/item">
									<div className="product">
										<div className="image image1" />
									</div>
								</Link>
								<p className="name text">Plain black shirt</p>
								<p className="id text">ID: 2342323</p>
							</div>
							<div className="grid-items">
								<Link href="/clients/item">
									<div className="product">
										<div className="image image1" />
									</div>
								</Link>
								<p className="name text">Plain black shirt</p>
								<p className="id text">ID: 2342323</p>
							</div>
							<div className="grid-items">
								<Link href="/clients/item">
									<div className="product">
										<div className="image image1" />
									</div>
								</Link>
								<p className="name text">Plain black shirt</p>
								<p className="id text">ID: 2342323</p>
							</div>
						</div>
					</TabPanel>
					{value === 1 && (
						<TabPanel value={value} index={1} className="gray-paper-client">
							<p className="season">Sweet Summer </p>
							<div className="flexy">
								<div className="grid-items">
									<Link href="/clients/item">
										<div className="product">
											<div className="location absolute">
												<img src={vaultIcon} alt="vault" />{' '}
											</div>
											<div className="image image1" />
										</div>
									</Link>
									<p className="name text">Plain black shirt</p>
									<p className="id text">ID: 2342323</p>
								</div>
								<div className="grid-items">
									<Link href="/clients/item">
										<div className="product">
											<div className="location absolute">
												<img src={vaultIcon} alt="vault" />{' '}
											</div>
											<div className="image image2" />
										</div>
									</Link>
									<p className="name text">Plain black shirt</p>
									<p className="id text">ID: 2342323</p>
								</div>
								<div className="grid-items">
									<Link href="/clients/item">
										<div className="product">
											<div className="location absolute">
												<img src={vaultIcon} alt="vault" />{' '}
											</div>
											<div className="image image2" />
										</div>
									</Link>
									<p className="name text">Plain black shirt</p>
									<p className="id text">ID: 2342323</p>
								</div>
								<div className="grid-items">
									<Link href="/clients/item">
										<div className="product">
											<div className="location absolute">
												<img src={vaultIcon} alt="vault" />{' '}
											</div>
											<div className="image image2" />
										</div>
									</Link>
									<p className="name text">Plain black shirt</p>
									<p className="id text">ID: 2342323</p>
								</div>
								<div className="grid-items">
									<Link href="/clients/item">
										<div className="product">
											<div className="location absolute">
												<img src={vaultIcon} alt="vault" />{' '}
											</div>
											<div className="image image2" />
										</div>
									</Link>
									<p className="name text">Plain black shirt</p>
									<p className="id text">ID: 2342323</p>
								</div>
							</div>
						</TabPanel>
					)}

					{value === 2 && (
						<TabPanel value={value} index={2}>
							<div className="gray-paper-client">
								<div className="flex mb-26">
									<p className="season season1">Sweet Summer </p>{' '}
									<Link href="/clients/editOutfit">
										<span className="edit-outfit">Edit Outfit</span>
									</Link>
								</div>
								<div className="flexy">
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image1" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image2" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image2" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image2" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image2" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
								</div>
							</div>
							<div className="gray-paper-client mt-22">
								<div className="flex mb-26">
									<p className="season season1">WINTER WONDERLAND </p>{' '}
									<Link href="/clients/editOutfit">
										<span className="edit-outfit">Edit Outfit</span>
									</Link>
								</div>
								<div className="flexy">
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image1" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image2" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image2" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image2" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
									<div className="grid-items">
										<Link href="/clients/item">
											<div className="product">
												<div className="image image2" />
											</div>
										</Link>
										<p className="name text">Plain black shirt</p>
										<p className="id text">ID: 2342323</p>
									</div>
								</div>
							</div>
						</TabPanel>
					)}
				</Paper>
			</DashboardLayout>
		</Wrapper>
	);
}

client.propTypes = {};

export default client;
export { SINGLE_USER };
