import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

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

  .paper-top-head .date,
  .paper-tail h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #2f3930;
  }
  .paper-top-head .buttons{
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		display: block ;
	  }
  }
  .paper-top-head .buttons p,
  .paper-top-tail .names .pink {
    padding: 7px 30px;
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
    width: 100px;
    height: 100px;
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
 @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
	width: 100%;
  }

  }
  .paper-top-tail .user-details .lhs .value {
    font-size: 16px;
    line-height: 24px;
    color: #2f3930;
    margin-bottom: 24px;
	max-width: 32%;
		  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		max-width: 100%;
	  }
  }
  .full-detail {
    grid-template-columns: 1fr 1fr;
	grid-gap: 40px;
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
    font-size: 16px;
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
function UserDetailCard({top}) {
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
                  <p className="initials">JT</p>
                </div>
                <div className="names">
                  <p className="name">Joseph Thornberry</p>
                  <p className="id">User ID: 2342323</p>
                  <p className="pink">View Client</p>
                </div>
              </div>
              <div className="lhs rhs">
                <p className="value">
                  User has requested to checkout 5 items from their closet
                </p>
                <div className="full-detail grid">
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
                      <p className="text">Type</p>
                      <p className="text bold">From Vault</p>
                    </div>
                    <div className="list grid">
                      <p className="text">Subscription</p>
                      <p className="text bold">Plus+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Paper>
		</Wrapper>
	)
}


UserDetailCard.propTypes = {
	top: PropTypes.string,

}

export default UserDetailCard

