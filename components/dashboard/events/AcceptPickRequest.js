import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    .red {
        border: none;
        border-radius: 10px;
        margin-left: 14px;

        p {
            margin-left: 0px !important;
        }
    }
`;

const ACCEPT_PICKUP_REQUEST = gql`
    mutation ACCEPT_PICKUP_REQUEST($id: ID, $bookingId: String) {
        acceptRequest(id: $id, bookingId: $bookingId) {
            status
            type
        }
    }
`;

export default function AcceptPickRequest({ id, bookingId, type, status }) {
    const router = useRouter();
    const [acceptRequest, { loading, error }] = useMutation(ACCEPT_PICKUP_REQUEST);
    // console.log(data);
    return (
        <Wrapper>
            <button
                className="accept red"
                onClick={async () => {
                    try {
                        // call the acceptPickup mutation
                        const res = await acceptRequest({
                            variables: { id, bookingId },
                        });

                        const { status: newStatus, type: newType } = res.data.acceptRequest;
                        console.log(newStatus);
                        // send out notification
                        alert('successful');
                        router.push({
                            pathname: `/requests/${newStatus.toLowerCase()}${newType.toLowerCase()}`,
                            query: { id, type: newType.toLowerCase(), status: newStatus.toLowerCase() },
                        });
                    } catch (error) {
                        alert(error.message);
                    }
                }}
            >
                <p>Accept{loading ? 'ing' : ''}</p>
            </button>
        </Wrapper>
    );
}
