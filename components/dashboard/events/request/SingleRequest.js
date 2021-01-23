import React from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import UserDetailCard from '../../common/UserDetailCard';
import Link from "next/link";

import { Query } from '@apollo/client';

const SINGLE_REQUEST= gql`
  query SINGLE_REQUEST{
    fetchOneRequest(id: "600be00504034a6856452bb8") {
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
  const { error, loading, data } = useQuery(SINGLE_REQUEST);
// console.log(data && data.fetchOneRequest)
  return (
    <>
        {loading ? (
          <p>loading</p>
        ) : error ? (
          <p>Fetching failed</p>
        ) : data ? (

        <UserDetailCard top={<><p className="date">Monday, June 2, 2020</p>
            <div className="buttons flex wrap">
                      <p className="reschedule pink">Reschedule</p>
              <Link href="/requests/startPickup">
			  <p className="accept red">Accept</p>
			  </Link>
            </div></>} userId={data.fetchOneRequest.user._id.substring(0, 7)} userName={data.fetchOneRequest.user.email} fullDetail={<> <div className="rhs">
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
                  </div></>} buttons={<Link href="/clients/client">
                  <p className="pink">View Client</p></Link>}  weight="value" text="User has requested to checkout 5 items from their closet"/>
        ):""}
      
    </>
  );
}

SingleRequest.propTypes = {};

export default SingleRequest;
