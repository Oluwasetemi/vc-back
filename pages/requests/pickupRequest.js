import React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LinkMaterial from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styled from "styled-components";
import  SingleRequest from '../../components/dashboard/events/request/SingleRequest'
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
const pickupRequest =(props) => {
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

        <SingleRequest />
      </DashboardLayout>
    </Wrapper>
  );
}

pickupRequest.propTypes = {};

export default pickupRequest;
