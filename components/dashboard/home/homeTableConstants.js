import Link from 'next/link';
import React from 'react';
import Button from '../../common/Button';
// This is the table constant/settings which needed to render table elements

export const homeTableConstants = () => [
    {
        title: 'ID',
        render: (rowData) => <span>{rowData._id.substring(0, 7)}</span>,
    },
    {
        title: 'USER EMAIL',
        render: (rowData) => <span>{rowData.user.email}</span>,
    },
    {
        title: 'USER NAME',
        render: (rowData) => <span>{rowData.user.name}</span>,
    },
    {
        title: 'TYPE',
        render: (rowData) => <span>{rowData.type}</span>,
    },
    {
        title: 'CREATED',
        render: (rowData) => <span>{rowData.createdAt.substring(0, 10)}</span>,
    },
    {
        title: 'STATUS',
        render: (rowData) => <span className="status">{rowData.status}</span>,
    },
    {
        title: '',
        render: (rowData) => (
            <Link
                className="btn"
                href={{
                    pathname: `/requests/${rowData.status.toLowerCase()}${rowData.type.toLowerCase()}`,
                    query: {
                        type: rowData.type.toLowerCase(),
                        status: rowData.status.toLowerCase(),
                        id: rowData._id,
                    },
                }}
            >
                <Button theme="pinkBtn">View</Button>
            </Link>
        ),
    },
];
