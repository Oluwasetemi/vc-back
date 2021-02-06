import { useQuery } from '@apollo/client';
import Wrapper from '@components/styles/ClientsPageStyles';
import { Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import gql from 'graphql-tag';
import Link from 'next/link';
import React, { useState } from 'react';
import Button from '../../components/common/Button';
import useTable from '../../components/common/table/useTable';
import DashboardLayout from '../../components/layout/DashboardLayout';
import next from '../../public/assets/NextPageButton.svg';
import prev from '../../public/assets/PreviousPageButton.svg';
import searchIcon from '../../public/assets/searchIcon.svg';

const ALL_USERS = gql`
	query ALL_USERS {
		users {
			_id
			name
			email
			password
			type
			source
			image
			phone
			currentClosetSize
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
		}
	}
`;

const headCells = [
	{ id: '_id', label: 'USER ID' },
	{ id: 'email', label: 'USER EMAIL' },
	{ id: 'name', label: 'USER NAME' },
	{ id: 'noOfItems', label: 'NO OF ITEMS' },
	{ id: 'createdAt', label: 'JOINED' },
	{ id: 'type', label: 'ACCOUNT TYPE' },
	{ id: 'link', label: '' },
];
function Clients(props) {
	const [value, setValue] = useState('');

	const { error, loading, data } = useQuery(ALL_USERS);

	const [records] = useState(data && data.users);
	// pagination
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	// Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentRecords =
		data && data.users.slice(indexOfFirstPost, indexOfLastPost);

	// Change page
	const pageNumbers = [];

	for (
		let i = 1;
		i <= Math.ceil(data && data.users.length / postsPerPage);
		i++
	) {
		pageNumbers.push(i);
	}

	const { TblContainer, TblHead } = useTable(records, headCells);

	function titleCase(str) {
		return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
	}

	// search function
	function search(records) {
		return (
			records &&
			records.filter(
				record =>
					record.email.toLowerCase().indexOf(value) > -1 ||
					record._id.toLowerCase().indexOf(value) > -1 ||
					(record.createdAt &&
						record.createdAt
							.toString()
							.toLowerCase()
							.indexOf(value) > -1),
			)
		);
	}
	const filteredData = search(currentRecords);

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

					<LinkMaterial color="textPrimary" href="/calendar/allevents">
						Clients
					</LinkMaterial>
				</Breadcrumbs>

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
					<Paper className="paper">
						<TblContainer>
							<TblHead />
							<TableBody>
								{filteredData.map(item => (
									<TableRow key={item._id}>
										<TableCell>{item._id.substring(0, 7)}</TableCell>
										<TableCell>{item.email}</TableCell>
										<TableCell>{item.name}</TableCell>
										{item.noOfItems != null ? (
											<TableCell>{item.noOfItems}</TableCell>
										) : (
											<TableCell>{item.currentClosetSize || 0}</TableCell>
										)}
										{item.createdAt != null ? (
											<TableCell>{item.createdAt.substring(0, 10)}</TableCell>
										) : (
											<TableCell>-</TableCell>
										)}
										{item.type && (
											<TableCell>
												<span className="status">{titleCase(item.type)}</span>
											</TableCell>
										)}

										<TableCell>
											{' '}
											<Link
												className="btn"
												href={{
													pathname: '/clients/client',
													query: { id: `${item._id}` },
												}}
											>
												<Button theme="pinkBtn">View</Button>
											</Link>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</TblContainer>
					</Paper>
				) : (
					'No data'
				)}
				{!loading && !error && (
					<div className="flex pagination">
						<img
							src={prev}
							alt="prev"
							onClick={() =>
								currentPage === 1
									? currentPage
									: setCurrentPage(currentPage - 1)
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
				)}
			</DashboardLayout>
		</Wrapper>
	);
}

export default Clients;
export { ALL_USERS };
