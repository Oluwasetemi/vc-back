import { useQuery } from "@apollo/client";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import LinkMaterial from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import gql from "graphql-tag";
import React, { useState } from "react";
import { Paper, TableBody, TableRow, TableCell } from "@material-ui/core";
import styled from "styled-components";
import DashboardLayout from "../../components/layout/DashboardLayout";
import searchIcon from "../../public/assets/searchIcon.svg";
import useTable from "../../components/common/table/useTable";
import Link from "next/link";
import Button from "../../components/common/Button";

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
  .searchbar {
    position: absolute;
    top: 0;
    right: 24px;
    background: #ffffff;
    border: 1px solid #9c9b7c;
    border-radius: 10px;
    padding: 3px 15px;
    width: 300px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      position: relative;
      margin-left: auto;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      width: fit-content;
    }

    &:focus-within {
      border: 1px solid #f26144;
    }
    input {
      outline: none;
      border: none;
      font-size: 14px;
      line-height: 24px;
      font-family: "Matteo";
      padding-left: 8px;
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
      createdAt
      updatedAt
    }
  }
`;

const headCells = [
  { id: "_id", label: "USER ID" },
  { id: "email", label: "USER EMAIL" },
  { id: "name", label: "USER NAME" },
  { id: "noOfItems", label: "NO OF ITEMS" },
  { id: "createdAt", label: "JOINED" },
  { id: "type", label: "ACCOUNT TYPE" },
  { id: "link", label: "" },
];
function Clients(props) {
  const { value } = props;
  const { error, loading, data } = useQuery(ALL_USERS);

  const [records, setRecords] = useState(data && data.users);
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

  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value == "") return items;
        else
          return items.filter((x) =>
            x.email.toLowerCase().includes(target.value) || x.type.toLowerCase().includes(target.value)
          );
      },
    });
  };
  function titleCase(str) {
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
  }
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

        <div className="searchbar">
          <img src={searchIcon} alt="searchIcon" />
          <input placeholder="Search" onChange={handleSearch} value={value} />
        </div>
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
                  <TableRow key={item._id}>
                    <TableCell>{item._id.substr(_id.length - 5)}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    {item.noOfItems != null ? (
                      <TableCell>{item.noOfItems}</TableCell>
                    ) : (
                      <TableCell>33 </TableCell>
                    )}
                    {item.createdAt != null ? (
                      <TableCell>{item.createdAt.substring(0, 10)}</TableCell>
                    ) : (
                      <TableCell>-</TableCell>
                    )}
                    {item.type && (
                      <TableCell>
                        <span className="status">{titleCase(item.type)}</span>
                      </TableCell>
                    )}

                    <TableCell>
                      {" "}
                      <Link className="btn" href="/clients/client">
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

Clients.propTypes = {};

export default Clients;



