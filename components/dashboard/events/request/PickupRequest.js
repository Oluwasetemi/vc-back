import { useQuery } from '@apollo/client';
import { TableBody, TableCell, TableRow } from '@material-ui/core';
import gql from 'graphql-tag';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';
import next from '../../../../public/assets/NextPageButton.svg';
import prev from '../../../../public/assets/PreviousPageButton.svg';
import searchIcon from '../../../../public/assets/searchIcon.svg';
import Button from '../../../common/Button';
import useTable from '../../../common/table/useTable';

const Wrapper = styled.div`
	.paper {
		box-shadow: none !important;
	}
`;
const headCells = [
	{ id: '_id', label: 'USER ID' },
	{ id: 'user.name', label: 'USER NAME' },
	{ id: 'zipcode', label: 'ZIP CODE' },
	{ id: 'numberOfItems', label: 'NO OF ITEMS' },
	{ id: 'pickupLocation.location', label: 'LOCATION' },
	{ id: 'createdAt', label: 'DATE' },
	{ id: 'type', label: 'TYPE' },
	{ id: 'link', label: '' },
];
const PICKUP_REQUEST = gql`
	query PICKUP_REQUEST {
		fetchAllRequest(sort: descending, type: Pickup) {
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
function PickupRequest(props) {
	const [value, setValue] = useState('');

	const { error, loading, data } = useQuery(PICKUP_REQUEST);
	const [records] = useState(data && data.fetchAllRequest.data);
	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentRecords =
		data && data.fetchAllRequest.data.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const pageNumbers = [];

	for (
		let i = 1;
		i <= Math.ceil(data && data.fetchAllRequest.data.length / postsPerPage);
		i++
	) {
		pageNumbers.push(i);
	}

	const { TblContainer, TblHead } = useTable(records, headCells);

	// search function
	function search(records) {
		return (
			records &&
			records.filter(
				record =>
					record.pickupLocation.location.toLowerCase().indexOf(value) > -1 ||
					record.user.name.toLowerCase().indexOf(value) > -1 ||
					(record.zipcode &&
						record.zipcode
							.toString()
							.toLowerCase()
							.indexOf(value) > -1) ||
					record.createdAt
						.toString()
						.toLowerCase()
						.indexOf(value) > -1,
			)
		);
	}
	const filteredData = search(currentRecords);

	return (
		<Wrapper>
			<div className="searchbar">
				<img src={searchIcon} alt="searchIcon" />
				<input
					placeholder="Search"
					onChange={e => setValue(e.target.value)}
					value={value}
				/>
			</div>
			{loading ? (
				<p>loading</p>
			) : error ? (
				<p>Fetching failed</p>
			) : data ? (
				<div className="paper">
					<TblContainer>
						<TblHead />
						<TableBody>
							{filteredData &&
								filteredData.map(item => (
									<TableRow key={item._id}>
										<TableCell>{item._id.substring(0, 8)}</TableCell>
										<TableCell>{item.user.name}</TableCell>
										<TableCell>
											{item.zipcode ? item.zipcode : '10235'}
										</TableCell>
										<TableCell>{item.numberOfItems}</TableCell>
										<TableCell>{item.pickupLocation.location}</TableCell>
										<TableCell>{item.createdAt.substring(0, 10)}</TableCell>
										<TableCell>
											<span className="status">{item.type}</span>
										</TableCell>
										<TableCell>
											{' '}
											<Link
												className="btn"
												href={{
													pathname: `/requests/${item.status.toLowerCase()}${item.type.toLowerCase()}`,
													query: {
														type: 'pickup',
														id: item._id,
														status: item.status.toLowerCase(),
													},
												}}
											>
												<Button theme="pinkBtn">View</Button>
											</Link>
										</TableCell>
									</TableRow>
								))}
						</TableBody>
					</TblContainer>
				</div>
			) : (
				'no data'
			)}
			<div className="flex pagination">
				<img
					src={prev}
					alt="prev"
					onClick={() =>
						currentPage === 1 ? currentPage : setCurrentPage(currentPage - 1)
					}
				/>

				<div className="page">{`page ${currentPage} of ${pageNumbers.length} `}</div>
				<img
					src={next}
					alt="next"
					onClick={() =>
						currentPage < pageNumbers.length
							? setCurrentPage(currentPage + 1)
							: currentPage
					}
				/>
			</div>
		</Wrapper>
	);
}

PickupRequest.propTypes = {};

export { PickupRequest };
