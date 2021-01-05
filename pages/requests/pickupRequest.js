import React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LinkMaterial from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styled from "styled-components";
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

`;
function pickupRequest(props) {
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
          <LinkMaterial className="crumbs" color="inherit" href="/calendar">
            Calendar
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="inherit" href="/calendar/allEvents">
            Requests
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="textPrimary" href="#">
            Request 00439
          </LinkMaterial>
        </Breadcrumbs>

        <UserDetailCard top={<><p className="date">Monday, June 2, 2020</p>
            <div className="buttons flex wrap">
                      <p className="reschedule pink">Reschedule</p>
              <Link href="/requests/startPickup">
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
                  <p className="pink">View Client</p></Link>}  weight="value" text="User has requested to checkout 5 items from their closet"/>

      
      </DashboardLayout>
    </Wrapper>
  );
}

pickupRequest.propTypes = {};

export default pickupRequest;
