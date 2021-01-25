import useTable from "../../components/common/table/useTable";
import gql from "graphql-tag";
import React, { useState } from "react";
import { Paper, TableBody, TableRow, TableCell } from "@material-ui/core";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import Button from "../../components/common/Button";
import PropTypes from "prop-types";
import styled from "styled-components";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LinkMaterial from "@material-ui/core/Link";
import AmountConverter from "../../components/common/AmountConverter";

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
  h3.title {
    font-weight: 600;
    font-size: 30px;
    line-height: 32px;
    margin: 33px 0;
    color: #4b6962;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 20px;
    }
  }
  .paper {
    margin-top: 29px;
    background-color: #fff;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    width: 100%;
    overflow-x: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding-top: 20px;
    }
   
    &::-webkit-scrollbar {
      height: .4rem;
    }
      &::-webkit-scrollbar-thumb {
      background-color: #F26144;
      border-radius: 0.5rem;
    }
  }
  .status {
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    background: #9c9b7c;
    border-radius: 10px;
    padding: 2px 20px;
    white-space: nowrap;
  }
  td .button {
    padding: 0.4rem 2rem;
  }
  .MuiTableCell-paddingCheckbox {
    display: none;
  }
  .MuiTableSortLabel-root {
    font-size: 12px;
    line-height: 16px;
    color: #4b6962;
    font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
    font-weight: normal;
  }
  .MuiTableCell-root,
  .MuiTablePagination-caption {
    font-size: 14px;
    line-height: 24px;
    color: #2f3930;
    text-align: left;
    padding: 16px 0 16px 30px;
    font-weight: 500;
    font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
  }
  tbody .MuiTableRow-root > th {
    padding-left: 30px;
  }
  .MuiTablePagination-root {
    display: flex;
    justify-content: center;
    margin: 30px 0;
  }
  .MuiTableRow-root.Mui-selected,
  .MuiTableRow-root.Mui-selected:hover {
    background-color: rgba(0, 0, 0, 0);
  }


  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 850px;
  }
  .MuiTablePagination-root .MuiTablePagination-caption {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding-left: 0;
    }
  }
  .MuiTablePagination-root .MuiToolbar-gutters,
  .MuiTablePagination-root .MuiIconButton-root {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding: 0;
    }
  }
  .MuiTablePagination-root .MuiTablePagination-actions {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      margin-left: 0;
    }
  }
  .MuiTablePagination-root .MuiTablePagination-input {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      margin: 0 15px 0 0px;
    }
  }
`;
const ALL_PAYMENTS = gql`
  query ALL_PAYMENTS {
    fetchAllPaymentFromStripe(first: 10) {
      perPage
      end
      start
      hasNextPage
      results {
        id
        email
        username
        amount
        created
        updated
        paymentType
        description
      }
    }
  }
`;
const headCells = [
  { id: "id", label: "REF" },
  { id: "email", label: "CLIENT" },
  { id: "amount", label: "AMOUNT" },
  { id: "created", label: "DATE" },
  { id: "paymentType", label: "PAYMENT TYPE" },
  { id: "link", label: "" },
];
function paymentHistory(props) {
  const { error, loading, data } = useQuery(ALL_PAYMENTS);
  const [records, setRecords] = useState(
    data && data.fetchAllPaymentFromStripe.results
  );
  const [filterFn, setFilterFn] = useState({
    fn: (items) => {
      return items;
    },
  });
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  } = useTable(records, headCells, filterFn);

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
          <LinkMaterial
            className="crumbs"
            color="inherit"
            href="/clients/client"
          >
            Joseph Thornberry
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="textPrimary" href="#">
            Payment History
          </LinkMaterial>
        </Breadcrumbs>
        <h3 className="title">Payment History</h3>

        {loading ? (
          <p>loading</p>
        ) : error ? (
          <p>Fetching failed</p>
        ) : data ? (
          <Paper className="paper">
            <TblContainer>
              <TblHead />
              <TableBody>
                {recordsAfterPagingAndSorting().map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.id.substring(0, 8)}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{AmountConverter(item.amount)}</TableCell>
                    <TableCell>{item.created}</TableCell>
                    <TableCell>
                        <span className="status">{item.paymentType}</span>
                      </TableCell>
                    <TableCell>
                      {" "}
                      <Link className="btn" href="/payments">
                        <Button theme="pinkBtn">View</Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </TblContainer>
            <TblPagination />
          </Paper>
        ) : (
          ""
        )}
      </DashboardLayout>
    </Wrapper>
  );
}

paymentHistory.propTypes = {};

export default paymentHistory;
