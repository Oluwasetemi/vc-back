import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import React from "react";
import UserDetailCard from "../../common/UserDetailCard";
import AcceptPickRequest from "../AcceptPickRequest";

const SINGLE_REQUEST = gql`
  query SINGLE_REQUEST($id: ID!) {
    fetchOneRequest(id: $id) {
      _id
      numberOfItems
      type
      pickupLocation {
        _id
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
`;


function SingleRequest(props) {
  const id = props.id;
  // console.log(id)
  const { error, loading, data } = useQuery(SINGLE_REQUEST, {
    variables: { id: id },
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
            <p className="date">Monday, June 2, 2020</p>
            <div className="buttons flex wrap">
              <p className="reschedule pink">Reschedule</p>
              <AcceptPickRequest id={id} bookingId={data.fetchOneRequest.bookingId} />
            </div>
          </>
        }
        userId={data.fetchOneRequest.user._id.substring(0, 7)}
        userName={data.fetchOneRequest.user.email}
        fullDetail={
          <>
            {" "}
            <div className="rhs">
              <div className="list grid first">
                <p className="text">Items to deliver</p>
                <p className="text bold">5</p>
              </div>
              <div className="list grid">
                <p className="text">Type</p>
                <p className="text bold">On Demand</p>
              </div>
              <div className="list grid">
                <p className="text">Location</p>
                <p className="text bold">12 Bounty Lane, DC</p>
              </div>
            </div>
            <div className="rhs">
              <div className="list grid first">
                <p className="text">Delivery Date</p>
                <p className="text bold">5/10/2020</p>
              </div>
              <div className="list grid">
                <p className="text">Phone Number</p>
                <p className="text bold">0888800000000</p>
              </div>
              <div className="list grid">
                <p className="text">Subscription</p>
                <p className="text bold">Plus+</p>
              </div>
            </div>
          </>
        }
        buttons={
          <Link href="/clients/client">
            <p className="pink">View Client</p>
          </Link>
        }
        weight="value"
        text="User has requested to checkout 5 items from their closet"
      />
    </>
  );
}

SingleRequest.propTypes = {};

export default SingleRequest;
