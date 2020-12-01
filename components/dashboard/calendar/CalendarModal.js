/*eslint-disable */

import React from "react";
// import PropTypes from 'prop-types'
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "../../common/Button";
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CalendarTab from './CalendarTab';
import Link from "next/link";

const Wrapper = styled.div`
box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
border-radius: 10px;
position: absolute;
top: 56%;
    left: 50%;
    transform: translate(-50%, -50%);
width: 70%;
outline: none;
background: #FFFFFF;
padding: 23px 0;
height: 86vh;
overflow-y: scroll;
&::-webkit-scrollbar {
  width: .2rem;
}
  &::-webkit-scrollbar-thumb {
  background-color: #F26144;
  border-radius: 0.5rem;
}

@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
  width: 85%;
}
 #title{
  font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #2F3930;
    padding: 0 23px ;
}
 }
.button{
  padding: .4rem 2rem;
    margin: auto;

}
`;




export default function CalendarModal() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <Wrapper  >
      <h2 id="title">Monday, June 2, 2020</h2>
      <CalendarTab/>
      <Link className="btn" href="/calendar/allEvents">
				<Button  theme="pinkBtn">View All</Button>
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
