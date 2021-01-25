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
	mutation ACCEPT_PICKUP_REQUEST($id: ID) {
		sendOutPickup(id: $id) {
			message
		}
	}
`;

export default function SendOutPickup({ id }) {
	const router = useRouter();
	const [acceptPickup, { loading, error }] = useMutation(
		ACCEPT_PICKUP_REQUEST,
		{
			variables: { id, bookingId },
		},
	);
	return (
		<Wrapper>
			<button
				className="accept red"
				onClick={async () => {
					try {
						// call the acceptPickup mutation
						const res = await acceptPickup();

						console.log(res);
						alert('successful');
						router.push({
							pathname: '/requests/startPickup',
							query: { id },
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
