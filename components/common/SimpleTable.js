import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	.paper {
		box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
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

	.table {
		width: 100%;
		border-collapse: collapse;
		min-width: 930px;
	}
	.no-shadow {
		box-shadow: none;
		margin-bottom: 30px;
	}
	.no-shadow tbody tr:nth-child(1) td {
		padding-top: 30px;
	}
	.no-shadow tbody tr:last-child {
		border-bottom: 1px solid #dfe2e5;
	}
	.no-shadow thead tr {
		display: none;
	}
	thead tr {
		font-size: 12px;
		line-height: 16px;
		color: #4b6962;
		text-align: left;
	}
	thead th,
	tbody td {
		padding: 10px 20px;
	}
	thead th {
		font-weight: normal;
		font-size: 12px;
		line-height: 16px;
		color: #4b6962;
	}
	tbody tr {
		border-top: 1px solid #dfe2e5;
	}

	tbody td > span {
		font-weight: 500;
		font-size: 14px;
		line-height: 24px;
		color: #2f3930;
	}
	.status {
		font-size: 12px;
		line-height: 16px;
		color: #ffffff;
		background: #9c9b7c;
		border-radius: 10px;
		padding: 2px 20px;
	}
	td .button {
		padding: 0.4rem 2rem;
	}
`;

const Table = ({ cols, data, shadow }) => (
	<Wrapper className="table-responsive">
		<Paper className={`${shadow} paper`}>
			<table className="table">
				<thead>
					<tr>
						{cols.map((headerItem, index) => (
							<th className=" thead" key={index}>
								{headerItem.title === '_id' ? '' : headerItem.title}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item, index) => (
						<tr key={index}>
							{cols.map((col, key) => (
								<td className="content" key={key}>
									{col.render(item)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</Paper>
	</Wrapper>
);

Table.propTypes = {
	cols: PropTypes.array.isRequired,
	data: PropTypes.array.isRequired,
	shadow: PropTypes.string,
};

export default Table;
