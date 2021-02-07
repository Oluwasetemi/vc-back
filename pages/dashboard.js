import { useQuery } from '@apollo/client';
import SimpleTable from '@components/common/SimpleTable';
import { homeTableConstants } from '@components/dashboard/home/homeTableConstants';
import DashboardLayout from '@components/layout/DashboardLayout';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import gql from 'graphql-tag';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import DashboardData from '../components/dashboard/DashboardData';

const ALL_REQUEST = gql`
    query ALL_REQUEST {
        fetchAllRequest(first: 3, sort: descending, type: All) {
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

const NEW_REQUEST = gql`
    subscription NEW_REQUEST {
        newRequest {
            _id
            numberOfItems
            type
            pickupLocation {
                _id
            }
            items {
                _id
            }
            user {
                _id
            }
            bookingId
            datetimePicked
            contactPhoneNumber
            status
            metaData {
                type
                note
            }
            createdAt
            updatedAt
        }
    }
`;

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
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
        grid-gap: 20px;
    }

    .MuiContainer-root {
        padding: 0;
    }
    .table-section {
        margin-bottom: 5rem;
    }
    .table-section .flex {
        margin: 25px 0;
        a {
            color: #f26144;
            font-weight: 600;
            font-size: 14px;
            line-height: 32px;
            &:hover {
                text-decoration: none;
                transition: 0.3s;
            }
        }
    }
    .table-title {
        font-weight: 600;
        font-size: 16px;
        color: #4b6962;
        line-height: 24px;
        margin-right: 14px;
    }
    .button {
        padding: 0.4rem 4rem;
    }
`;
function Dashboard(props) {
    const { error, loading, data } = useQuery(ALL_REQUEST);

    return (
        <Wrapper>
            <DashboardLayout>
                <Breadcrumbs
                    className="bread-crumbs"
                    separator={<NavigateNextIcon fontSize="small" />}
                    aria-label="breadcrumb"
                >
                    <LinkMaterial className="crumbs" color="textPrimary" href="/dashboard">
                        Home
                    </LinkMaterial>
                </Breadcrumbs>
                <section className="home-content">
                    <div className="table-section">
                        <DashboardData />
                        <div className="flex">
                            <p className="table-title">Activity •</p>
                            <Link href="/calendar/allEvents">View All</Link>
                        </div>
                        {loading ? (
                            <p>loading</p>
                        ) : error ? (
                            <p>Fetching failed</p>
                        ) : data ? (
                            <SimpleTable cols={homeTableConstants()} data={data.fetchAllRequest.data} />
                        ) : (
                            'NO DATA'
                        )}
                    </div>
                </section>
            </DashboardLayout>
        </Wrapper>
    );
}

Dashboard.propTypes = {};

export default Dashboard;
export { ALL_REQUEST, NEW_REQUEST };
