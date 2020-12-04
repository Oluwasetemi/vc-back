import React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LinkMaterial from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import shirt from "../../public/assets/shirt.png";
import pants from "../../public/assets/pants.png";
import menShoes from "../../public/assets/men_shoes.png";
import tie from "../../public/assets/tie.png";
const Wrapper = styled.div`
  .bread-crumbs {
    margin: 30px 0 10px 0;
  }
  .crumbs {
    font-size: 18px;
	line-height: 30px;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		font-size: 13px;
		}
  }
  .wrap{
	flex-wrap: wrap;
  }
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 25px 29px;
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
  .paper-top-head .buttons .cancel{
	margin-left: 0px;
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
  .paper-tail {
	margin: 30px 0 50px 0;
	max-width: 100%;
overflow-x: scroll;
overflow-y: hidden;
&::-webkit-scrollbar {
  height: .1rem;
}
  &::-webkit-scrollbar-thumb {
  background-color: #F26144;
  border-radius: 0.5rem;
}
  }
  .paper-tail .grid {
	width: 100%;
    min-width: 950px;
    grid-gap: 28px;
    margin: 30px 0;
	grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		min-width: auto;
				grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
	}
	  }
  }

  .grid-items .product {
    background-color: #f3f0f0;
    padding: 38px 5px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  }
  .grid-items .product:before {
    content: "";
    display: block;
    position: absolute;
    height: 0%;
    width: 100%;
    bottom: 0;
    transition: height 0.5s ease-out;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
  .grid-items .product:hover:before {
    height: 100%;
  }
  .grid-items .image {
    height: 172px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .grid-items .image1 {
    background-image: url(${shirt});
  }
  .grid-items .image2 {
    background-image: url(${pants});
  }
  .grid-items .image3 {
    background-image: url(${menShoes});
  }
  .grid-items .image4 {
    background-image: url(${tie});
  }
  .grid-items .text {
    font-size: 16px;
    line-height: 24px;
    color: #2f3930;
  }
  .grid-items .name {
    font-weight: bold;
    margin: 18px 0 10px 0;
  }
`;
function deliveryRequest(props) {
  return (
    <Wrapper>
      <DashboardLayout>
        <Breadcrumbs
          className="bread-crumbs"
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <LinkMaterial className="crumbs" color="inherit" href="/dashboard">
            Home
          </LinkMaterial>
          <LinkMaterial color="inherit" href="/calendar">
            Calendar
          </LinkMaterial>
          <LinkMaterial color="inherit" href="/calendar/allEvents">
            Requests
          </LinkMaterial>
          <LinkMaterial color="textPrimary" href="#">
            Request 00439
          </LinkMaterial>
        </Breadcrumbs>

        <Paper className="paper paper-top">
          <div className="flex paper-top-head wrap">
            <p className="date">Monday, June 2, 2020</p>
            <div className="buttons flex wrap">
              <p className="cancel pink">Cancel</p>
              <p className="reschedule pink">Reschedule</p>
              <p className="accept red">Accept</p>
            </div>
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

        <Paper className="paper paper-tail">
          <h1>Items</h1>
          <div className="grid">
            <div className="grid-items">
              <div className="product">
                <div className="image image1"></div>
              </div>
              <p className="name text">Plain black shirt</p>
              <p className="id text">ID: 2342323</p>
            </div>
            <div className="grid-items">
              <div className="product">
                <div className="image image2"></div>
              </div>
              <p className="name text">Plain black shirt</p>
              <p className="id text">ID: 2342323</p>
            </div>
            <div className="grid-items">
              <div className="product">
                <div className="image image3"></div>
              </div>
              <p className="name text">Plain black shirt</p>
              <p className="id text">ID: 2342323</p>
            </div>
            <div className="grid-items">
              <div className="product">
                <div className="image image4"></div>
              </div>
              <p className="name text">Plain black shirt</p>
              <p className="id text">ID: 2342323</p>
            </div>
            <div className="grid-items">
              <div className="product">
                <div className="image image1"></div>
              </div>
              <p className="name text">Plain black shirt</p>
              <p className="id text">ID: 2342323</p>
            </div>
            <div className="grid-items">
              <div className="product">
                <div className="image image2"></div>
              </div>
              <p className="name text">Plain black shirt</p>
              <p className="id text">ID: 2342323</p>
            </div>
          </div>
        </Paper>
      </DashboardLayout>
    </Wrapper>
  );
}

deliveryRequest.propTypes = {};

export default deliveryRequest;
