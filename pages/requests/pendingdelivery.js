import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import LinkMaterial from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import UserDetailCard from '../../components/dashboard/common/UserDetailCard';
import { CheckboxInput } from '../../components/dashboard/inputs';
import DashboardLayout from '../../components/layout/DashboardLayout';
import menShoes from '../../public/assets/men_shoes.png';
import pants from '../../public/assets/pants.png';
import shirt from '../../public/assets/shirt.png';
import tie from '../../public/assets/tie.png';

const Wrapper = styled.div`
  .bread-crumbs {
    margin: 30px 0 10px 0;
  }
  .crumbs {
    font-size: 18px;
    line-height: 30px;
    @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
      font-size: 13px;
    }
  }
  .appbar {
    background: #fbfcfa;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 21px 41px;
	position: relative;
	z-index:2221;
    @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
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

    @media screen and (max-width: ${props => props.theme.breakpoint.md}) {
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
    @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
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
    @media screen and (max-width: ${props => props.theme.breakpoint.md}) {
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
    @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
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
    @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
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

  .grid-4 {
    display: grid;
    grid-gap: 28px;
    grid-template-columns: repeat(auto-fill, minmax(214px, 1fr));
  }
  .grid-4-small {
    grid-template-columns: repeat(auto-fill, minmax(211px, 1fr));
    @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
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
    @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
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
	display: grid;
	width: 100%;
    min-width: 950px;
    grid-gap: 28px;
    margin: 30px 0;
	grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
	@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
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
    left:0;
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
  .absolute{
	  position: absolute;
  }
  .product .checked{
	right: 8px;
    top: 8px;
  }
  .checked .MuiFormControlLabel-root{
    margin-right: 0;
  }
`;
function TabPanel(props) {
	const { children, value, index, ...other } = props;
	return <div {...other}>{value === index && <Box p={3}>{children}</Box>}</div>;
}

const sendPickup = props => {
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
          <LinkMaterial className="crumbs" color="inherit" href="/calendar">
            Calendar
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="inherit" href="#">
            Requests
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="textPrimary" href="#">
            Delivery 00439
          </LinkMaterial>
        </Breadcrumbs>

        <Paper className="paper paper-top">
          <TabPanel value={value} index={0}>
            <div className="flex paper-top-head wrap">
              <p className="date">Start Delivery</p>
              <div className="buttons flex wrap">
                <Link href="/requests/sendPickup">
                  <p className="accept pink"> Back</p>
                </Link>
                <p className="accept red" onClick={() => setValue(1)}>
                  Start Checkout
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="flex paper-top-head wrap">
              <p className="date">Start Checkout</p>
              <div className="buttons flex wrap">
                <p className="accept pink" onClick={() => setValue(0)}>
                  {" "}
                  Cancel
                </p>
                <p className="accept pink"> Reschedule</p>

                <p className="accept red" onClick={() => setValue(2)}>
                  Proceed To Checkout
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="flex paper-top-head wrap">
              <p className="date">Checkout</p>
              <div className="buttons flex wrap">
                <p className="accept pink" onClick={() => setValue(1)}>
                  {" "}
                  Cancel
                </p>
                <p className="accept pink"> Reschedule</p>
                <p className="accept red" onClick={() => setValue(3)}>
                  Delivery Complete
                </p>
              </div>
            </div>
          </TabPanel>

          <div className="tabset">
            <AppBar className="appbar">
              <span className="tooltiptext">Scroll to see other tabs</span>

              <Tabs
                className="tabs"
                variant="scrollable"
                value={value}
                onChange={handleChange}
              >
                <Tab
                  label={
                    <>
                      dispatch(successAlert(message));
                      <div className="tab-indicator flex">1</div>
                      <span>Checkout of storage</span>
                    </>
                  }
                />
                <Tab
                  label={
                    <>
                      <div className="tab-indicator flex">2</div>

                      <span>Send on delivery</span>
                    </>
                  }
                />
                <Tab
                  label={
                    <>
                      <div className="tab-indicator flex">3</div>

                      <span>Delivery confirmation</span>
                    </>
                  }
                />
              </Tabs>
            </AppBar>
            <TabPanel className="tabpanel1" value={value} index={0}>
              You’re about to initiate a pickup from the customer. Note that
              proceeding will set the pickup as active. Please click “Start
              Checkout” to continue.
            </TabPanel>
          </div>
        </Paper>

        <TabPanel className="tabpanel2" value={value} index={1}>
          <UserDetailCard
            top={<p className="date">Monday, June 2, 2020</p>}
            fullDetail={
              <>
                {" "}
                <div className="rhs">
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
                    <p className="text">Phone Number</p>
                    <p className="text bold">088888899999</p>
                  </div>
                  <div className="list grid">
                    <p className="text">Subscription</p>
                    <p className="text bold">Plus+</p>
                  </div>
                </div>
              </>
            }
            buttons={
              <Link href="/clients/client">
                <p className="pink">View Client</p>
              </Link>
            }
            weight="date mb-70"
            text="You’re checking items out of storage"
          />

          <Paper className="paper paper-tail">
            <h1>Items</h1>
            <div className="grid">
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image1" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image2" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image3" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image4" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image1" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image2" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
            </div>
          </Paper>
        </TabPanel>

        <TabPanel className="tabpanel2" value={value} index={2}>
          <UserDetailCard
            top={<p className="date">Monday, June 2, 2020</p>}
            fullDetail={
              <>
                {" "}
                <div className="rhs">
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
                    <p className="text">Phone Number</p>
                    <p className="text bold">0888800000000</p>
                  </div>
                  <div className="list grid">
                    <p className="text">Subscription</p>
                    <p className="text bold">Plus+</p>
                  </div>
                </div>
              </>
            }
            buttons={
              <Link href="/clients/client">
                <p className="pink">View Client</p>
              </Link>
            }
            weight="date mb-70"
            text="You can start checkout of the customer today"
          />

          <Paper className="paper paper-tail">
            <h1>Items</h1>
            <div className="grid">
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image1" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image2" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image3" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>
                  <div className="image image4" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>{" "}
                  <div className="image image1" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
              </div>
              <div className="grid-items">
                <div className="product">
                  <div className="checked absolute">
                    <CheckboxInput />
                  </div>{" "}
                  <div className="image image2" />
                </div>
                <p className="name text">Plain black shirt</p>
                <p className="id text">ID: 2342323</p>
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
