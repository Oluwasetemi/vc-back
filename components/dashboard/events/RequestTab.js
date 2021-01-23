import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import styled from "styled-components";
import {
  outfitRequestEventsData,
  stylistRequestEventsData,
} from "./EventsTableData";
import SortTablePagination from "./SortTablePagination";
import { PickupRequest } from "./request/PickupRequest";
import { AllRequest } from "./request/AllRequest";
import { DeliveryRequest } from "./request/DeliveryRequest";
import React from "react";

const Wrapper = styled.div`
  .request-paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    .MuiAppBar-colorPrimary {
      margin-bottom: 0;
    }
  }
  .MuiAppBar-colorPrimary {
    color: #2f3930;
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
    padding-left: 30px;
  }

  .MuiTab-wrapper {
    font-weight: 500;
    font-size: 13px;
    line-height: 24px;
    text-transform: capitalize;
  }
  .PrivateTabIndicator-colorSecondary-18 {
    background-color: #f26144;
  }
  .Mui-selected {
    color: #2f3930;
  }
  .MuiTab-root {
    min-width: auto;
    padding: 0;
    margin-right: 24px;
    letter-spacing: 0;
  }
  .MuiTabs-fixed {
    overflow-x: scroll !important;
    &::-webkit-scrollbar {
      height: 0.1rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
      border-radius: 0.5rem;
    }
  }
  .MuiBox-root {
    padding: 0;
  }
  .paper {
    width: 100%;
    overflow-x: auto;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding-top: 20px;
    }

    &::-webkit-scrollbar {
      height: 0.4rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #f26144;
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

const headCells = [
  { id: "_id", label: "USER ID" },
  { id: "user._id", label: "USER NAME" },
  { id: "zipcode", label: "ZIP CODE" },
  { id: "numberOfItems", label: "NO OF ITEMS" },
  { id: "createdAt", label: "DATE" },
  { id: "type", label: "TYPE" },
  { id: "link", label: "" },
];
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}
export default function RequestTab({ error, loading, data }) {
  const headCells2 = [
    { id: "userId", label: "USER ID" },
    { id: "userEmail", label: "USER EMAIL" },
    { id: "zipCode", label: "ZIP CODE" },
    { id: "noOfItems", label: "NO OF ITEMS" },
    { id: "", label: "" },
    { id: "location", label: "LOCATION" },
    { id: "date", label: "PICKUP DATE" },
    { id: "type", label: "TYPE" },
    { id: "link", label: "" },
  ];

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Wrapper>
      <Paper className="request-paper">
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange}>
            <Tab label={`All`} />
            <Tab label={`Pickup`} />
            <Tab label={`Delivery`} />
            <Tab label={`Stylists Requests`} />
            <Tab label={`Outfit Requests `} />
            <Tab label={`Help Me Pack`} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <AllRequest error={error} loading={loading} data={data} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <PickupRequest error={error} loading={loading} data={data} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DeliveryRequest error={error} loading={loading} data={data} />{" "}
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SortTablePagination
            rows={stylistRequestEventsData}
            headCells={headCells2}
          />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <SortTablePagination
            rows={outfitRequestEventsData}
            headCells={headCells2}
          />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <SortTablePagination
            rows={stylistRequestEventsData}
            headCells={headCells2}
          />
        </TabPanel>
      </Paper>
    </Wrapper>
  );
}
