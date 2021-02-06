import Button from '@components/common/Button';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import searchIcon from '../../../../public/assets/searchIcon.svg';

const Wrapper = styled.div`
	.searchbar {
		background: #ffffff;
		border: 1px solid #9c9b7c;
		border-radius: 10px;
		padding: 3px 15px;
		max-width: 30%;
		display: flex;
		overflow: hidden;
		@media screen and (max-width: ${props => props.theme.breakpoint.md}) {
			position: relative;
			max-width: 50%;
			margin-bottom: 10px;
			margin-left: auto;
			right: 0;
		}
		@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
			max-width: 100%;
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
	.flex {
		justify-content: space-between;
	}
	h3.title {
		font-weight: 600;
		font-size: 30px;
		line-height: 32px;
		margin: 33px 0;
		color: #4b6962;
		@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
			font-size: 20px;
		}
	}
	.paper {
		box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 24px 30px 24px 30px;
		margin-bottom: 50px;
		background-color: #fff;
	}
	.gray-paper {
		background: #fbfcfa;
		box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 16px 0 34px 0;
		justify-content: center;
		flex-direction: column;
	}
	.grid {
		display: grid;
		grid-gap: 40px;
		margin: 30px 0;
		grid-template-columns: repeat(auto-fill, minmax(208px, 1fr));
	}

	.dp {
		width: 70px;
		height: 70px;
		background-color: #9c9b7c;
		border-radius: 50%;
		justify-content: center;
		background-color: #9c9b7c;
		.initials {
			font-weight: 600;
			font-size: 40px;
			line-height: 48px;
			color: #ffffff;
		}
	}
	.full-name {
		margin: 15px 0 22px 0;
	}
	.button {
		margin: auto;
		padding: 7px 35px;
	}
`;

function SearchStylist({ query }) {
	const [searchTerm, setSearchTerm] = React.useState('');
	const [searchResults, setSearchResults] = React.useState([]);
	const handleChange = event => {
		setSearchTerm(event.target.value);
	};
	React.useEffect(() => {
		const results = query.filter(person =>
			person.toLowerCase().includes(searchTerm),
		);
		setSearchResults(results);
	}, [searchTerm]);

	return (
		<Wrapper>
			<div className="flex">
				<h3 className="title">Stylists</h3>
				<div className="searchbar">
					<img src={searchIcon} alt="searchIcon" />
					<input
						type="text"
						placeholder="Search"
						value={searchTerm}
						onChange={handleChange}
					/>{' '}
				</div>
			</div>
			<div className="paper ">
				<div className="grid">
					{searchResults.map(item => (
						<div className="gray-paper flex">
							<div className="dp flex">
								<p className="initials">ST</p>
							</div>
							<p className="full-name">{item}</p>
							<Link href="/clients/stylists/stylist">
								<Button theme="pink">View</Button>
							</Link>
						</div>
					))}
				</div>
			</div>
		</Wrapper>
	);
}
SearchStylist.propTypes = {
	query: PropTypes.any,
};

export default SearchStylist;
