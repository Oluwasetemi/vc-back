import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";

const Wrapper = styled.div`
.wrap{
	flex-wrap: wrap;
  }
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
	padding: 25px 29px;
	margin-bottom: 50px;
  }
  .paper-top-head {
    justify-content: space-between;
	margin-bottom: 50px;
		  }

.date,
  .paper-tail h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #2f3930;
  }
  .mb-70{
    margin-bottom: 70px;
  }
  .paper-top-head .buttons{
    align-items: end;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		display: block ;
	  }
  }
  .paper-top-head .buttons p,
  .paper-top-tail .names .pink {
    padding: 7px 10px;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5px;
    cursor: pointer;
    text-align: center;
	margin-left: 14px;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		margin-top: 14px;
		margin-left: 0;
	  }
  }
  .pink {
    color: #f26144;
    background-color: #fff1de;
    margin-bottom: 10px;
    &:hover {
      color: #fff1de;
      background-color: #f26144;
      transition: 0.3s;
    }
  }
  .red {
    color: #ffffff;
    background-color: #f26144;
    &:hover {
      color: #f26144;
      background-color: #ffffff;
      transition: 0.3s;
    }
  }
  .paper-top-tail .user-details .dp {
    width: 70px;
    height: 70px;
    background-color: #9c9b7c;
    border-radius: 50%;
    justify-content: center;
    background-color: #9c9b7c;
    margin-right: 24px;
    .initials {
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      color: #ffffff;
    }
  }
 
.grid {
  display: grid;
}

.paper-top-tail .user-details {
	align-items: flex-start;
    justify-content: space-between;
}
.paper-top-tail .user-details>.lhs{
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		flex-wrap: wrap;
	  }
}
  }
  .paper-top-tail .names .name {
    font-size: 20px;
    line-height: 30px;
    color: #2f3930;
  }
  .paper-top-tail .names .id {
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0;
    color: #2f3930;
  }
  .paper-top-tail .names .pink {
    margin-left: 0;
  }
  .paper-top-tail .user-details .lhs {
 margin-bottom:30px;
 align-items: flex-start;
 @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
	width: 100%;
  }

  }
 .value {
    font-size: 16px;
    line-height: 24px;
    color: #2f3930;
    	max-width: 32%;
		  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		max-width: 100%;
	  }
  }
  .full-detail {
    grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 24px;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	  }
  }
  .full-detail .rhs .grid {
    grid-template-columns: 1fr 1fr;
    padding: 11px 0;
    border-bottom: 1px solid #d6d8d3;
  }
  .full-detail .rhs .grid .text {
    font-size: 13px;
    line-height: 24px;
    color: #2f3930;
  }
  .full-detail .rhs .grid .bold {
    white-space: nowrap;
    justify-self: end;
    font-weight: 600;
  }
  .full-detail .rhs .first {
    border-top: 1px solid #d6d8d3;
  }
`
function UserDetailCard({top, text, weight,fullDetail,userId,userName,buttons,initials }) {
	return (
		<Wrapper>
			<Paper className="paper paper-top">
          <div className="flex paper-top-head wrap">
            {top}
          </div>
          <div className="paper-top-tail">
            <div className="flex user-details wrap ">
              <div className="lhs flex">
                <div className="dp flex">
                  <p className="initials">{initials}</p>
                </div>
                <div className="names">
                  <p className="name">{userName}</p>
                  <p className="id">User ID: {userId}</p>
                  <div className="buttons">
                    {buttons}
                  </div>
                </div>
              </div>
              <div className="lhs rhs">
                <div className={`${weight}` }>
                 {text}
                </div>
                <div className="full-detail grid">
                 {fullDetail}
                </div>
              </div>
            </div>
          </div>
        </Paper>
		</Wrapper>
	)
}


UserDetailCard.propTypes = {
	top: PropTypes.any,
	buttons: PropTypes.any,
	fullDetail: PropTypes.any,
date: PropTypes.string,
userId: PropTypes.userId,
userName: PropTypes.userName,
text: PropTypes.string,
initials: PropTypes.string,
weight: PropTypes.string,
}

export default UserDetailCard

