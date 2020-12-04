import React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../components/layout/DashboardLayout";
import SimpleTable from "../components/common/SimpleTable";
import { homeTableConstants } from '../components/dashboard/home/homeTableConstants';
import { smallHomeTableData } from '../components/dashboard/home/homeTableData';
import SmallCardPaper from "../components/dashboard/home/SmallCardPaper";
import styled from "styled-components";
import Link from "next/link";
import LinkMaterial from '@material-ui/core/Link';
import Button from '../components/common/Button'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Wrapper = styled.div`
.bread-crumbs{
  margin: 30px 0 10px 0;
}
.crumbs{
  font-size: 18px;
line-height: 30px;
@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
  font-size: 13px;
  }
}
  .grid-container {
     display: grid;
  grid-template-columns: repeat(auto-fill, minmax(225px, 1fr));
  grid-gap: 20px;
}

  .MuiContainer-root{
	padding:0;
}
.table-section {
  margin-bottom: 5rem;
}
  .table-section .flex{
	  margin:  25px 0;
	  a{
		color: #F26144;
		font-weight: 600;
font-size: 14px;
line-height: 32px;
&:hover{
	text-decoration: none;
	transition: .3s;
}
	  }
  }
  .table-title{
	font-weight: 600;
	font-size: 16px;
	color: #4B6962;
	line-height: 24px;
	margin-right: 14px;
  }
  .button{
    padding: .4rem 4rem;
  }
`;
function Dashboard(props) {
  return (
    <Wrapper>
      <DashboardLayout>
      <Breadcrumbs className="bread-crumbs" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <LinkMaterial className='crumbs' color="inherit" href="/dashboard" >
          Home
        </LinkMaterial>    
        <LinkMaterial className='crumbs' color="textPrimary" href="/allEvents" >
          Events
        </LinkMaterial>    
        <LinkMaterial className='crumbs' color="textPrimary" href="/deliveryRequest" >
          Delivery Request
        </LinkMaterial>    
                   </Breadcrumbs>
                   <p>(IGNORE: trying to get easy access to embedded pages for now)</p>
        <section className="home-content">
          <div className="grid-container">
            <SmallCardPaper
              title="Requests"
              value="5,323"
              info="Requests for approval"
              link={
                <Link href="/calendar/allEvents">
                  <Button theme="pinkBtn">View</Button>
                </Link>
              }
              href="/"
            />
            <SmallCardPaper
              title="Upcoming Deliveries"
              value="5,323"
              info="Items to deliver"
              link={
                <Link href="/calendar/allEvents">
                  <Button theme="pinkBtn">View</Button>
                </Link>
              }
              href="/"
            />
            <SmallCardPaper
              title="Upcoming Pickups"
              value="5,323"
              info="Items for pickup"
              link={
                <Link href="/calendar/allEvents">
                  <Button theme="pinkBtn">View</Button>
                </Link>
              }
              href="/"
            />
			<SmallCardPaper
              title="Laundry"
              value="5,323"
              info="Items to catalogue"
              href=""
            />
            <SmallCardPaper
              title="Stylists Requests"
              value="5,323"
              info="Items to catalogue"
              link={
                <Link href="/calendar/allEvents">
                  <Button theme="pinkBtn">View</Button>
                </Link>
              }
              href="/"
            />
            
            <SmallCardPaper
              title="Closet"
              value="5,323"
              info="Items "
              href=""
            />
            <SmallCardPaper
              title="Vault"
              value="5,323"
              info="Items "
              href=""
            />
          </div>
			  <div className="table-section">
			  <div className="flex">
				  <p className='table-title'>Activity  • </p>
				  <Link  href="/calendar/allEvents">
                  View All
                </Link>
			  </div>
			  
        <SimpleTable cols={homeTableConstants()} data={smallHomeTableData}/>

			  </div>
        </section>
      </DashboardLayout>
    </Wrapper>
  );
}

Dashboard.propTypes = {};

export default Dashboard;
