import React from 'react';
import Link from "next/link";
import Button from '../../common/Button'
// This is the table constant/settings which needed to render table elements


export const homeTableConstants = () => {
	return [

		{
			title: 'ID',
			render: rowData => {
				return <span>{rowData[ 'id' ]}</span>;
			},
		},
		{
			title: 'USER EMAIL',
			render: rowData => {
				return <span>{rowData[ 'User Email' ]}</span>;
			},
		},
		{
			title: 'USER NAME',
			render: rowData => {
				return <span>{rowData[ 'User Name' ]}</span>;
			},
		},
		{
			title: 'TYPE',
			render: rowData => {
				return <span>{rowData[ 'Type' ]}</span>;
			},
		},
		{
			title: 'CREATED',
			render: rowData => {
				return <span>{rowData[ 'Created' ]}</span>;
			},
		},
		{
			title: 'STATUS',
			render: rowData => {
				return <span className="status">{rowData[ 'Status' ]}</span>;
			},
		},
		{
			title: '',
			render: rowData => {
				return <Link className="btn" href="/">
				<Button  theme="pinkBtn">View</Button>
			  </Link>;
			},
		},
	
	];
};
