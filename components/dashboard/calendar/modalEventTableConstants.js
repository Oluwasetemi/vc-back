import React from 'react';
import Link from "next/link";
import Button from '../../common/Button'
// This is the table constant/settings which needed to render table elements


export const modalEventTableConstants = () => {
	return [

		{
			title: '',
			render: rowData => {
				return <span>{rowData[ 'id' ]}</span>;
			},
		},
		{
			title: '',
			render: rowData => {
				return <span>{rowData[ 'User Email' ]}</span>;
			},
		},
		{
			title: '',
			render: rowData => {
				return <span>{rowData[ 'Items' ]}</span>;
			},
		},
		{
			title: '',
			render: rowData => {
				return <span>{rowData[ 'Created' ]}</span>;
			},
		},
		
			{
			title: '',
			render: rowData => {
				return <Link className="btn" href="/calendar/allEvents">
				<Button  theme="pinkBtn">View</Button>
			  </Link>;
			},
		},
	
	];
};
