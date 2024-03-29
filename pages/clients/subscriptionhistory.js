import { useQuery } from '@apollo/client';
import AmountConverter from '@components/common/AmountConverter';
import Button from '@components/common/Button';
import useTable from '@components/common/table/useTable';
import DashboardLayout from '@components/layout/DashboardLayout';
import { Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import next from '@public/assets/NextPageButton.svg';
import prev from '@public/assets/PreviousPageButton.svg';
import gql from 'graphql-tag';
import Link from 'next/link';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    .bread-crumbs {
        margin: 30px 0 10px 0;
    }
    .crumbs {
        font-size: 18px;
        line-height: 30px;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            font-size: 13px;
        }
    }
    h3.title {
        font-weight: 600;
        font-size: 30px;
        line-height: 32px;
        margin: 33px 0;
        color: #4b6962;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
            font-size: 20px;
        }
    }

    .paper {
        margin-top: 29px;
        background-color: #fff;
        box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        width: 100%;
        overflow-x: auto;
        @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
            padding-top: 20px;
        }

        &::-webkit-scrollbar {
            height: 0.4rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: #f26144;
            border-radius: 0.5rem;
        }
    }
    .status {
        font-size: 12px;
        line-height: 16px;
        color: #ffffff;
        background: #9c9b7c;
        border-radius: 10px;
        padding: 2px 20px;
        white-space: nowrap;
    }
    td .button {
        padding: 0.4rem 2rem;
    }
    .MuiTableCell-paddingCheckbox {
        display: none;
    }
    .MuiTableSortLabel-root {
        font-size: 12px;
        line-height: 16px;
        color: #4b6962;
        font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
        font-weight: normal;
    }
    .MuiTableCell-root,
    .MuiTablePagination-caption {
        font-size: 14px;
        line-height: 24px;
        color: #2f3930;
        text-align: left;
        padding: 16px 0 16px 30px;
        font-weight: 500;
        font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
            Droid Sans, Helvetica Neue, sans-serif;
    }
    tbody .MuiTableRow-root > th {
        padding-left: 30px;
    }
    .pagination {
        display: flex;
        justify-content: center;
        margin: 30px 0;
        img {
            cursor: pointer;
        }
    }
    .page {
        margin: 0 30px;
        color: #2f3930;
        font-size: 14px;
        line-height: 24px;
    }
    .MuiTableRow-root.Mui-selected,
    .MuiTableRow-root.Mui-selected:hover {
        background-color: rgba(0, 0, 0, 0);
    }

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 850px;
    }
`;
const ALL_SUBSCRIPTION = gql`
    query ALL_SUBSCRIPTION {
        fetchAllSubscription {
            _id
            name
            amount
            services {
                storage
                accessories
                shoes
                helpMePack
                stylist
                vault
                note
            }
            type
            createdAt
            updatedAt
        }
    }
`;
const headCells = [
    { id: 'ref', label: 'REF' },
    { id: 'amount', label: 'AMOUNT' },
    { id: 'createdAt', label: 'DATE' },
    { id: 'name', label: 'PAYMENT TYPE' },
    { id: 'link', label: '' },
];
function subscriptionHistory(props) {
    const { error, loading, data } = useQuery(ALL_SUBSCRIPTION);
    const [records] = useState(data && data.fetchAllSubscription);
    // console.log(data&& data.fetchAllSubscription)

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentRecords = data && data.fetchAllSubscription.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(data && data.fetchAllSubscription.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const { TblContainer, TblHead } = useTable(records, headCells);

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
                    <LinkMaterial className="crumbs" color="inherit" href="/clients/client">
                        Joseph Thornberry
                    </LinkMaterial>
                    <LinkMaterial className="crumbs" color="textPrimary" href="#">
                        Subscription History
                    </LinkMaterial>
                </Breadcrumbs>
                <h3 className="title">Subscription History</h3>

                {loading ? (
                    <p>loading</p>
                ) : error ? (
                    <p>Fetching failed</p>
                ) : data ? (
                    <Paper className="paper">
                        <TblContainer>
                            <TblHead />
                            <TableBody>
                                {currentRecords.map((item) => (
                                    <TableRow key={item.name}>
                                        {item.ref != null ? (
                                            <TableCell>{item.ref}</TableCell>
                                        ) : (
                                            <TableCell>00450</TableCell>
                                        )}
                                        <TableCell>{AmountConverter(item.amount)}</TableCell>
                                        <TableCell>{item.createdAt.substring(0, 10)}</TableCell>
                                        {item.name && (
                                            <TableCell>
                                                <span className="status">{item.name}</span>
                                            </TableCell>
                                        )}
                                        <TableCell>
                                            {' '}
                                            <Link className="btn" href="/subscriptions">
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
                <div className="flex pagination">
                    <img
                        src={prev}
                        alt="prev"
                        onClick={() => (currentPage === 1 ? currentPage : setCurrentPage(currentPage - 1))}
                    />

                    <div className="page">{`page ${currentPage} of ${pageNumbers.length} `}</div>
                    <img
                        src={next}
                        alt="next"
                        onClick={() =>
                            currentPage < pageNumbers.length ? setCurrentPage(currentPage + 1) : currentPage
                        }
                    />
                </div>
            </DashboardLayout>
        </Wrapper>
    );
}

subscriptionHistory.propTypes = {};

export default subscriptionHistory;
