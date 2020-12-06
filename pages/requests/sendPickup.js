import React, { useState } from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../../components/layout/DashboardLayout";
import LinkMaterial from "@material-ui/core/Link";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import UserDetailCard from "../../components/dashboard/common/UserDetailCard";
import {
  TextInput,
  SelectInput,
  Textarea,
  CheckboxInput,
} from "../../components/dashboard/inputs";

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
  .appbar {
    background: #fbfcfa;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 21px 41px;
    position: relative;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      padding: 21px;
    }
  }

  .appbar .tooltiptext {
    visibility: hidden;
    width: 120px;
    background-color: #fff1de;
    color: #f26144;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    top: 90%;
    left: 10px;
  }

  .appbar:hover .tooltiptext {
    visibility: hidden;

    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      visibility: visible;
    }
  }
  .MuiTabs-flexContainer {
    justify-content: space-between;
  }
  .MuiTab-wrapper {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #6b6b57;
    text-transform: capitalize;
    font-family: "Matteo";
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 13px;
      line-height: 17px;
    }
  }

  .tabpanel1 {
    width: 60%;
    font-size: 16px;
    line-height: 24px;
    color: #2f3930;
    margin: 30px 0;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      width: 100%;
    }
  }
  .tabpanel2 > div {
    padding: 0;
  }
  .tab-indicator {
    font-size: 30px;
    line-height: 32px;
    margin-bottom: 6px;
    border-radius: 50%;
    background-color: #f3f0f0;
    width: 54px;
    height: 54px;
    justify-content: center;
    align-items: center;
  }
  .MuiTab-textColorInherit.Mui-selected .tab-indicator {
    background-color: #ffdba8;
    color: #f26144;
  }
  .PrivateTabIndicator-colorSecondary-3 {
    background-color: rgba(0, 0, 0, 0);
  }
  .wrap {
    flex-wrap: wrap;
  }
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 25px 29px;
    margin-bottom: 50px;
  }
  .paper-top-head {
    justify-content: space-between;
    margin-bottom: 50px;
  }

  .date,
  .paper-tail h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #2f3930;
  }
  .paper-top-head .buttons {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      display: block;
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
  .grid {
    display: grid;
  }
  .grid-4 {
    grid-gap: 28px;
    grid-template-columns: repeat(auto-fill, minmax(214px, 1fr));
  }
  .grid-4-small {
    grid-template-columns: repeat(auto-fill, minmax(211px, 1fr));
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      grid-template-columns: 1fr;
    }
  }

  .mt-24 {
    margin-top: 24px;
  }
  .gray-paper {
    background: #fbfcfa;
    padding: 24px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  .item-detail .item-id {
    margin-top: 20px;
  }
  .MuiTab-root {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      max-width: 92px;
    }
  }
  .MuiTabScrollButton-root {
    display: none;
  }
  .storage-laundry .date {
    margin-bottom: 33px;
  }
  .storage-laundry .gray-paper .storage {
    margin: 50px 0;
  }
  .storage-laundry .gray-paper .text {
    font-size: 14px;
    line-height: 24px;
  }
  .storage-laundry .gray-paper .title {
    letter-spacing: 0.75px;
    text-transform: uppercase;
    color: #2f3930;
  }
  .storage-laundry .gray-paper .items {
    margin: 6px 0 28px 0;
    color: #4b6962;
  }
  .storage-laundry .gray-paper .item-summary {
    border: 1px solid #d6d8d3;
    padding: 23px 36px;
    background: #ffffff;
    box-sizing: border-box;
    border-radius: 10px;
  }
  .storage-laundry .gray-paper .item-summary .summary {
    margin-bottom: 30px;
  }
  .storage-laundry .gray-paper .item-summary .text {
    color: #4b6962;
  }
  .storage-laundry .gray-paper .item-summary a {
    color: #f26144;
    text-decoration: underline;
  }
`;
function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}
const optionItemType = [
  { value: "Shirt", text: "Shirt" },
  { value: "Blouse", text: "Blouse" },
];
const optionItemCategory = [
  { value: "Short Sleeve", text: "Short Sleeve" },
  { value: "Long Sleeve", text: "Long Sleeve" },
];
const optionItemMaterial = [
  { value: "Cotton", text: "Cotton" },
  { value: "Satin", text: "Satin" },
];
const optionCategory = [
  { value: "Corporate", text: "Corporate" },
  { value: "Casual", text: "Casual" },
];

const sendPickup = (props) => {
  const [itemId, setItemId] = useState("0000000");
  const [itemType, setItemType] = useState("");
  const [itemCategory, setItemCategory] = useState("");
  const [itemTag, setItemTag] = useState("1234567");
  const [itemFeature, setItemFeature] = useState("");
  const [itemMaterial, setItemMaterial] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemColor, setItemColor] = useState("Blue");
  const [category, setCategory] = useState("");
  const [itemBrand, setItemBrand] = useState("LV");
  const [itemCondition, setItemCondition] = useState(
    "Describe the condition of the item"
  );

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <TabPanel value={value} index={0}>
            <div className="flex paper-top-head wrap">
              <p className="date">Pickup</p>
              <div className="buttons flex wrap">
                <Link href="/requests/startPickup">
                  <p className="accept pink"> Back</p>
                </Link>
                <p className="accept red">Send out Pickup</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="flex paper-top-head wrap">
              <p className="date">Pickup</p>
              <div className="buttons flex wrap">
                <p className="accept pink" onClick={() => setValue(0)}>
                  {" "}
                  Reschedule
                </p>

                <p className="accept red">Confirm Pickup</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="flex paper-top-head wrap">
              <p className="date">Pickup</p>
              <div className="buttons flex wrap">
                <p className="accept pink" onClick={() => setValue(1)}>
                  {" "}
                  Back
                </p>

                <p className="accept red">Proceed</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="flex paper-top-head wrap">
              <p className="date">Pickup</p>
              <div className="buttons flex wrap">
                <p className="accept pink" onClick={() => setValue(2)}>
                  {" "}
                  Back
                </p>

                <p className="accept red">Proceed</p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <div className="flex paper-top-head wrap">
              <p className="date">Pickup</p>
              <div className="buttons flex wrap">
                <p className="accept pink" onClick={() => setValue(3)}>
                  {" "}
                  Back
                </p>

                <p className="accept red">Proceed</p>
              </div>
            </div>
          </TabPanel>

          <div className="tabset">
            <AppBar className="appbar">
              <span class="tooltiptext">Scroll to see other tabs</span>

              <Tabs
                className="tabs"
                variant="scrollable"
                value={value}
                onChange={handleChange}
              >
                <Tab
                  label={
                    <React.Fragment>
                      <div className="tab-indicator flex">1</div>

                      <span>Send Out Pickup</span>
                    </React.Fragment>
                  }
                />
                <Tab
                  label={
                    <React.Fragment>
                      <div className="tab-indicator flex">2</div>

                      <span>Confirm Pickup</span>
                    </React.Fragment>
                  }
                />
                <Tab
                  label={
                    <React.Fragment>
                      <div className="tab-indicator flex">3</div>

                      <span>Tag for Storage</span>
                    </React.Fragment>
                  }
                />
                <Tab
                  label={
                    <React.Fragment>
                      <div className="tab-indicator flex">4</div>

                      <span>Inventory & Reports</span>
                    </React.Fragment>
                  }
                />

                <Tab
                  label={
                    <React.Fragment>
                      <div className="tab-indicator flex">5</div>

                      <span>Laundry & Storage</span>
                    </React.Fragment>
                  }
                />
              </Tabs>
            </AppBar>
            <TabPanel className="tabpanel1" value={value} index={0}>
              You’re about to initiate a pickup from the customer. Note that
              proceeding will set the pickup as active. Please click “Send Out
              Pickup” to continue.
            </TabPanel>
          </div>
        </Paper>

        <TabPanel className="tabpanel2" value={value} index={1}>
          <UserDetailCard
            top={
              <p className="date">Items are being picked up from the client.</p>
            }
          />
        </TabPanel>

        <TabPanel className="tabpanel2" value={value} index={2}>
          <UserDetailCard
            top={
              <p className="date">Items are being picked up from the client.</p>
            }
          />

          <Paper className="item-detail paper">
            <p className="date">Tag each item with an ID and type</p>
            <div className="item-id grid-4 grid">
              <div className="gray-paper">
                <TextInput
                  label="Enter Item ID"
                  value={itemId}
                  onChange={setItemId}
                />
                <SelectInput
                  label="Select Item Type"
                  options={optionItemType}
                  value={itemType}
                  onChange={setItemType}
                  margin="mtb"
                />
                <SelectInput
                  label="Category"
                  options={optionItemCategory}
                  value={itemCategory}
                  onChange={setItemCategory}
                />
              </div>
              <div className="gray-paper">
                <TextInput
                  label="Enter Item ID"
                  value={itemId}
                  onChange={setItemId}
                />
                <SelectInput
                  label="Select Item Type"
                  options={optionItemType}
                  value={itemType}
                  onChange={setItemType}
                  margin="mtb"
                />
                <SelectInput
                  label="Category"
                  options={optionItemCategory}
                  value={itemCategory}
                  onChange={setItemCategory}
                />
              </div>
              <div className="gray-paper">
                <TextInput
                  label="Enter Item ID"
                  value={itemId}
                  onChange={setItemId}
                />
                <SelectInput
                  label="Select Item Type"
                  options={optionItemType}
                  value={itemType}
                  onChange={setItemType}
                  margin="mtb"
                />
                <SelectInput
                  label="Category"
                  options={optionItemCategory}
                  value={itemCategory}
                  onChange={setItemCategory}
                />
              </div>
              <div className="gray-paper">
                <TextInput
                  label="Enter Item ID"
                  value={itemId}
                  onChange={setItemId}
                />
                <SelectInput
                  label="Select Item Type"
                  options={optionItemType}
                  value={itemType}
                  onChange={setItemType}
                  margin="mtb"
                />
                <SelectInput
                  label="Category"
                  options={optionItemCategory}
                  value={itemCategory}
                  onChange={setItemCategory}
                />
              </div>
            </div>
          </Paper>
        </TabPanel>

        <TabPanel className="tabpanel2" value={value} index={3}>
          <UserDetailCard
            top={
              <p className="date">Items are being picked up from the client.</p>
            }
          />

          <Paper className="item-detail paper">
            <p className="date">Condition & Inventory Report</p>

            <div className="gray-paper mt-24 ">
              <div className=" grid grid-4 grid-4-small">
                <div>
                  <TextInput
                    label="Item Tag"
                    value={itemTag}
                    onChange={setItemTag}
                  />

                  <SelectInput
                    label="Item Feature"
                    options={optionItemCategory}
                    value={itemFeature}
                    onChange={setItemFeature}
                    margin="mtb"
                  />
                  <SelectInput
                    label="Material"
                    options={optionItemMaterial}
                    value={itemMaterial}
                    onChange={setItemMaterial}
                  />
                </div>
                <div>
                  <TextInput
                    label="Item Name"
                    type="text"
                    placeholder="Enter Name"
                    value={itemName}
                    onChange={setItemName}
                  />
                  <TextInput
                    label="Item Color"
                    type="text"
                    value={itemColor}
                    onChange={setItemColor}
                    margin="mtb"
                  />
                  <SelectInput
                    label="Category"
                    options={optionCategory}
                    value={category}
                    onChange={setCategory}
                  />
                </div>
                <div>
                  <SelectInput
                    label="Select Item Type"
                    options={optionItemType}
                    value={itemType}
                    onChange={setItemType}
                  />
                  <TextInput
                    label="Brand"
                    type="text"
                    value={itemBrand}
                    onChange={setItemBrand}
                    margin="mtb"
                  />
                </div>
                <div>
                  <Textarea
                    label="Item Condition"
                    value={itemCondition}
                    onChange={setItemCondition}
                  />
                </div>
              </div>
              <CheckboxInput />
            </div>
            <div className="gray-paper mt-24 ">
              <div className=" grid grid-4 grid-4-small">
                <div>
                  <TextInput
                    label="Item Tag"
                    value={itemTag}
                    onChange={setItemTag}
                  />

                  <SelectInput
                    label="Item Feature"
                    options={optionItemCategory}
                    value={itemFeature}
                    onChange={setItemFeature}
                    margin="mtb"
                  />
                  <SelectInput
                    label="Material"
                    options={optionItemMaterial}
                    value={itemMaterial}
                    onChange={setItemMaterial}
                  />
                </div>
                <div>
                  <TextInput
                    label="Item Name"
                    type="text"
                    placeholder="Enter Name"
                    value={itemName}
                    onChange={setItemName}
                  />
                  <TextInput
                    label="Item Color"
                    type="text"
                    value={itemColor}
                    onChange={setItemColor}
                    margin="mtb"
                  />
                  <SelectInput
                    label="Category"
                    options={optionCategory}
                    value={category}
                    onChange={setCategory}
                  />
                </div>
                <div>
                  <SelectInput
                    label="Select Item Type"
                    options={optionItemType}
                    value={itemType}
                    onChange={setItemType}
                  />
                  <TextInput
                    label="Brand"
                    type="text"
                    value={itemBrand}
                    onChange={setItemBrand}
                    margin="mtb"
                  />
                </div>
                <div>
                  <Textarea
                    label="Item Condition"
                    value={itemCondition}
                    onChange={setItemCondition}
                  />
                </div>
              </div>
              <CheckboxInput />
            </div>
          </Paper>
        </TabPanel>
        <TabPanel className="tabpanel2" value={value} index={4}>
          <UserDetailCard
            top={
              <p className="date">Items are being picked up from the client.</p>
            }
          />

          <Paper className="paper storage-laundry">
            <p className="date">Storage & Laundry</p>
            <div className="paper gray-paper">
              <div className="laundry">
                <p className="title text">To Laundry</p>
                <p className="items text">20-40 Items</p>
                <div className="grid grid-4 grid-4-small">
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="storage">
                <p className="title text">Direct to Storage</p>
                <p className="items text">20-40 Items</p>
                <div className="grid grid-4 grid-4-small">
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
              <div className="vault">
                <p className="title text">Direct to Vault</p>
                <p className="items text">20-40 Items</p>
                <div className="grid grid-4 grid-4-small">
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                  <div className="item-summary">
                    <div className="summary">
                      <p className="text">Item ID</p>
                      <p className="text">Item Name</p>
                      <p className="text">Shirt</p>
                    </div>
                    <Link href="" className="text edit">
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Paper>
        </TabPanel>
      </DashboardLayout>
    </Wrapper>
  );
};

sendPickup.propTypes = {};

export default sendPickup;
