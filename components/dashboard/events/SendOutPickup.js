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

const SEND_OUT_PICKUP_REQUEST = gql`
	mutation SEND_OUT_PICKUP_REQUEST($id: ID) {
		sendOutPickup(id: $id) {
			message
		}
	}
`;

export default function SendOutPickup({ id, move }) {
	const router = useRouter();
	const [sendOutPickup, { loading, error }] = useMutation(
		SEND_OUT_PICKUP_REQUEST,
		{
			variables: { id },
		},
	);
	return (
		<Wrapper>
			<button
				className="accept red"
				onClick={async () => {
					try {
						// call the acceptPickup mutation
						const res = await sendOutPickup();

						console.log(res);
						alert('Pick sent out successfully');
						move();
					} catch (error) {
						alert(error.message);
					}
				}}
			>
				<p>Send{loading ? 'ing' : ''} out Pick</p>
			</button>
		</Wrapper>
	);
}
