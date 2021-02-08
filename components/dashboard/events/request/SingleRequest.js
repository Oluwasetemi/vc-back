import { useQuery } from '@apollo/client';
import { format } from 'date-fns';
import gql from 'graphql-tag';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import UserDetailCard from '../../common/UserDetailCard';
import AcceptPickRequest from '../AcceptPickRequest';

const SINGLE_REQUEST = gql`
    query SINGLE_REQUEST($id: ID!) {
        fetchOneRequest(id: $id) {
            _id
            numberOfItems
            type
            pickupLocation {
                _id
                location
            }
            user {
                _id
                email
                name
                currentSubscriptionPlan {
                    _id
                    amount
                    name
                    services {
                        storage
                    }
                }
            }
            items {
                _id
                name
            }
            bookingId
            datetimePicked
            contactPhoneNumber
            status
            createdAt
            updatedAt
        }
    }
`;

function SingleRequest(props) {
    const { query } = useRouter();
    // console.log(query);
    const { id, status, type } = query;
    // console.log(id)
    const { error, loading, data } = useQuery(SINGLE_REQUEST, {
        variables: { id },
    });

    // console.log(data && data.fetchOneRequest)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!data) return <p>No request found!</p>;

    return (
        <>
            <UserDetailCard
                top={
                    <>
                        <p className="date">
                            {format(new Date(data.fetchOneRequest.datetimePicked), 'PPPP') || 'Request Date'}
                        </p>
                        <div className="buttons flex wrap">
                            <p className="reschedule pink" onClick={() => alert('coming soon')}>
                                Reschedule
                            </p>
                            <AcceptPickRequest
                                id={id}
                                type={type}
                                status={data.fetchOneRequest.status.toLowerCase()}
                                bookingId={data.fetchOneRequest.bookingId}
                            />
                        </div>
                    </>
                }
                initials={!loading && !error ? data.fetchOneRequest.user.name.substring(0, 2) : 'JT'}
                userId={data.fetchOneRequest.user._id.substring(0, 7)}
                userName={data.fetchOneRequest.user.email}
                fullDetail={
                    <>
                        {' '}
                        <div className="rhs">
                            <div className="list grid first">
                                <p className="text">Items to deliver</p>
                                <p className="text bold">{data.fetchOneRequest.numberOfItems}</p>
                            </div>
                            <div className="list grid">
                                <p className="text">Type</p>
                                <p className="text bold">{data.fetchOneRequest.type}</p>
                            </div>
                            <div className="list grid">
                                <p className="text">Location</p>
                                <p className="text bold">{data.fetchOneRequest.pickupLocation.location}</p>
                            </div>
                        </div>
                        <div className="rhs">
                            <div className="list grid first">
                                <p className="text">{data.fetchOneRequest.type} Date</p>
                                <p className="text bold">{data.fetchOneRequest.datetimePicked.substring(0, 10)}</p>
                            </div>
                            <div className="list grid">
                                <p className="text">Phone Number</p>
                                <p className="text bold">{data.fetchOneRequest.contactPhoneNumber}</p>
                            </div>
                            <div className="list grid">
                                <p className="text">Subscription</p>
                                <p className="text bold">{data.fetchOneRequest.user.currentSubscriptionPlan.name}</p>
                            </div>
                        </div>
                    </>
                }
                buttons={
                    <Link
                        href={{
                            pathname: '/clients/client',
                            query: { id: `${data.fetchOneRequest.user._id}` },
                        }}
                    >
                        <p className="pink">View Client</p>
                    </Link>
                }
                weight="value"
                text={`User has requested that ${data.fetchOneRequest.numberOfItems} items be removed from their closet and delivered`}
            />
        </>
    );
}

SingleRequest.propTypes = {};

export default SingleRequest;
export { SINGLE_REQUEST };
