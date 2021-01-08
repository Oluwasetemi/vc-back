import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LinkMaterial from "@material-ui/core/Link";
import { paymentHistoryData } from "../../components/dashboard/clients/ClientsTableData";
import SortTablePagination from "../../components/dashboard/events/SortTablePagination";


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
  h3.title{
	font-weight: 600;
	font-size: 30px;
	line-height: 32px;
margin: 33px 0;	
  color: #4B6962;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		font-size: 20px;
	  }
  }
`;
function paymentHistory(props) {
	const headCells = [
		{ id: "ref", label: "REF" },
    { id: "userEmail", label: "" },
    { id: "client", label: "CLIENT" },
    { id: "amount", label: "AMOUNT" },
    { id: "date", label: "DATE" },
    { id: "paymentType", label: "PAYMENT TYPE" },
    { id: "link", label: "" },
	  ];
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
          <LinkMaterial className="crumbs" color="inherit" href="/clients">
            Clients
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="inherit" href="/clients/client">
            Joseph Thornberry
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="textPrimary" href="#">
		  Payment History
          </LinkMaterial>
        </Breadcrumbs>
		<h3 className="title">
		Payment History
		</h3>
		
		<SortTablePagination
          paper="paper"
          rows={paymentHistoryData}
          headCells={headCells}
        />
      </DashboardLayout>
    </Wrapper>
  );
}

paymentHistory.propTypes = {};

export default paymentHistory;
