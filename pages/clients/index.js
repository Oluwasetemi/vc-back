import { useQuery } from '@apollo/client';
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import LinkMaterial from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import gql from 'graphql-tag';
import React from "react";
import styled from "styled-components";
import { clientsData } from "../../components/dashboard/clients/ClientsTableData";
import SortTablePagination from "../../components/dashboard/events/SortTablePagination";
import DashboardLayout from "../../components/layout/DashboardLayout";

const ALL_USERS = gql`
  query ALL_USERS {
    users {
      _id
      name
      email
      password
      type
      source
      image
      phone
      gender
      nationality
      resetPasswordExpires
      resetPasswordToken
      otpExpires
      otp
      verified
      token
      customerId
      createdAt
      updatedAt
    }
  }
`;

const Wrapper = styled.div`
  .bread-crumbs {
    margin: 30px 0;
  }
  .crumbs {
    font-size: 18px;
    line-height: 30px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 13px;
    }
  }
`;
function Clients(props) {
  const {error, loading, data} = useQuery(ALL_USERS);
  console.log(data)
  const headCells = [
    { id: "_id", label: "USER ID" },
    { id: "email", label: "USER EMAIL" },
    { id: "name", label: "USER NAME" },
   
    { id: "noOfItems", label: "NO OF ITEMS" },
    { id: "createdAt", label: "JOINED" },
    { id: "accountType", label: "ACCOUNT TYPE" },
    { id: "link", label: "" },
  ];
  if (loading) return <p>loading</p>
  if (error) return <p>Error</p>
  if (data) {
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

            <LinkMaterial color="textPrimary" href="/calendar/allEvents">
              Clients
            </LinkMaterial>
          </Breadcrumbs>

          <SortTablePagination
          linkText="View"
          linkTo="/clients/client"
            paper="paper"
            rows={data.users}
            headCells={headCells}
            />
        </DashboardLayout>
      </Wrapper>
    );
  }
}

Clients.propTypes = {};

export default Clients;