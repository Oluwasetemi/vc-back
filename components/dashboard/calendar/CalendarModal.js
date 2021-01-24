/*eslint-disable */

import Modal from "@material-ui/core/Modal";
import Link from "next/link";
import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Button from "../../common/Button";
import CalendarTab from "./CalendarTab";
import gql from "graphql-tag";
import { useQuery } from "@apollo/client";

const Wrapper = styled.div`
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  position: absolute;
  top: 56%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  outline: none;
  background: #ffffff;
  padding: 23px 0;
  height: 86vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #f26144;
    border-radius: 0.5rem;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    width: 85%;
  }
  #title {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #2f3930;
    padding: 0 23px;
  }
  .button {
    padding: 0.4rem 2rem;
    margin: auto;
  }
`;
const ALL_REQUEST = gql`
  query ALL_REQUEST {
    fetchAllRequest(first: 12, sort: descending, type: All) {
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
  }`;
export default function CalendarModal() {
  const { error, loading, data } = useQuery(ALL_REQUEST );
console.log(data)
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Wrapper>
      <h2 id="title">Monday, June 2, 2020</h2>
      <CalendarTab data={data}/>
      <Link className="btn" href="/calendar/allEvents">
        <Button theme="pinkBtn">View All</Button>
      </Link>
    </Wrapper>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="title"
        aria-describedby="description"
      >
        
        {body}
      </Modal>
    </div>
  );
}

// export default CalendarModal;
