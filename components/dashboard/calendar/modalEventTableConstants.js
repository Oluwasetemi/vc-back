import Link from 'next/link';
import React from 'react';
import Button from '../../common/Button';
// This is the table constant/settings which needed to render table elements

export const modalEventTableConstants = () => [
    {
        title: '',
        render: (rowData) => <span>{rowData._id.substring(0, 5)}</span>,
    },
    {
        title: '',
        render: (rowData) => <span>{rowData['User Email']}</span>,
    },
    {
        title: '',
        render: (rowData) => <span>{rowData.numberOfItems}</span>,
    },
    {
        title: '',
        render: (rowData) => <span>{rowData.createdAt.substring(0, 10)}</span>,
    },

    {
        title: '',
        render: (rowData) => (
            <Link className="btn" href="/calendar/allEvents">
                <Button theme="pinkBtn">View</Button>
            </Link>
        ),
    },
];
