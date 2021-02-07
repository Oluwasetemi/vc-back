import { useQuery } from '@apollo/client';
import { Paper, TableBody, TableCell, TableRow } from '@material-ui/core';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import gql from 'graphql-tag';
import Link from 'next/link';
import React, { useState } from 'react';
import AmountConverter from '../components/common/AmountConverter';
import Button from '../components/common/Button';
import useTable from '../components/common/table/useTable';
import DashboardLayout from '../components/layout/DashboardLayout';
import Wrapper from '../components/styles/PaymentPageStyles';
import formatUnixTimeStamp from '../lib/formatUnixTime';
import next from '../public/assets/NextPageButton.svg';
import prev from '../public/assets/PreviousPageButton.svg';
import searchIcon from '../public/assets/searchIcon.svg';

const ALL_PAYMENTS = gql`
    query ALL_PAYMENTS($first: Int) {
        fetchAllPaymentFromStripe(first: $first) {
            perPage
            end
            start
            hasNextPage
            results {
                id
                email
                username
                amount
                created
                updated
                paymentType
                description
            }
        }
    }
`;
const headCells = [
    { id: 'id', label: 'USER ID' },
    { id: 'email', label: 'USER EMAIL' },
    { id: 'username', label: 'USER NAME' },
    { id: 'amount', label: 'AMOUNT' },
    { id: 'created', label: 'DATE' },
    { id: 'paymentType', label: 'PAYMENT TYPE' },
    { id: 'link', label: '' },
];
function payments(props) {
    const [value, setValue] = useState('');
    const { error, loading, data } = useQuery(ALL_PAYMENTS, {
        variables: { first: 30 },
    });
    const [records] = useState(data && data.fetchAllPaymentFromStripe.results);
    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentRecords = data && data.fetchAllPaymentFromStripe.results.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(data && data.fetchAllPaymentFromStripe.results.length / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const { TblContainer, TblHead } = useTable(records, headCells);

    // search function
    function search(records) {
        return (
            records &&
            records.filter(
                (record) =>
                    record.email.toLowerCase().indexOf(value) > -1 ||
                    record.username.toLowerCase().indexOf(value) > -1 ||
                    record.created.toString().toLowerCase().indexOf(value) > -1,
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

                    <LinkMaterial className="crumbs" color="textPrimary" href="#">
                        Payments
                    </LinkMaterial>
                </Breadcrumbs>

                <div className="searchbar">
                    <img src={searchIcon} alt="searchIcon" />
                    <input placeholder="Search" onChange={(e) => setValue(e.target.value)} value={value} />
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
                                {filteredData.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell>{item.id.substring(0, 8)}</TableCell>
                                        <TableCell>{item.email}</TableCell>
                                        <TableCell>{item.username}</TableCell>
                                        <TableCell>{AmountConverter(item.amount)}</TableCell>
                                        <TableCell>{formatUnixTimeStamp(item.created)}</TableCell>
                                        <TableCell>
                                            <span className="status">{item.paymentType}</span>
                                        </TableCell>
                                        <TableCell>
                                            {' '}
                                            <Link className="btn" href="/payments">
                                                <Button theme="pinkBtn">View</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </TblContainer>
                    </Paper>
                ) : (
                    'no data'
                )}
                {!loading && !error && (
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
                )}
            </DashboardLayout>
        </Wrapper>
    );
}

payments.propTypes = {};

export default payments;
