import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useRouter } from "next/router";
import React from "react";

const ACCEPT_PICKUP_REQUEST = gql`
  mutation ACCEPT_PICKUP_REQUEST($id: ID, $bookingId: String) {
    acceptPickupRequest(id: $id, bookingId: $bookingId) {
      message
    }
  }
`;

export default function AcceptPickRequest({ id, bookingId }) {
  const router = useRouter();
  const [acceptPickup, { loading, error }] = useMutation(
    ACCEPT_PICKUP_REQUEST,
    {
      variables: { id: id, bookingId: bookingId },
    }
  );
  return (
    <div>
      <button
        onClick={async () => {
          try {
            // call the acceptPickup mutation
            const res = await acceptPickup();

            console.log(res);
            alert('successful')
            router.push({
              pathname: "/requests/startPickup",
              query: {id: id}
            });
          } catch (error) {
            alert(error.message)
          }
        }}
      >
        <p className="accept red">Accept{loading ? "ing" : ""}</p>
      </button>
    </div>
  );
}
