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
function startPickup(props) {
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
              <Link href="/requests/sendPickup">
			  <p className="accept red">Start Pickup</p>
			  </Link>
            </div></>}/>
      
      </DashboardLayout>
    </Wrapper>
  );
}

startPickup.propTypes = {};

export default startPickup;
