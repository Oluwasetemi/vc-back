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
import UserDetailCard from '../../components/dashboard/common/UserDetailCard'
import Link from "next/link";

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
  .grid {
    display: grid;
  }
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
	padding: 25px 29px;
  margin-bottom: 50px;
  #tag{
    font-weight: 600;
font-size: 18px;
line-height: 24px;
color: #2F3930;
  }
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

  <UserDetailCard top={<><p className="date">Monday, June 2, 2020</p>
            <div className="buttons flex wrap">
              <p className="cancel pink">Cancel</p>
              <p className="reschedule pink">Reschedule</p>
              <Link href="/requests/pickupRequest">
			  <p className="accept red">Accept</p>
			  </Link>
            </div></>} fullDetail={<> <div className="rhs">
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
                  </div></>} buttons={<Link href="/clients/client">
                  <p className="pink">View Client</p></Link>} weight="value" text="User has requested to checkout 5 items from their closet"/>

        <Paper className="paper paper-tail">
          <h1 id="tag">Items</h1>
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
