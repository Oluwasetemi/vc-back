import React from 'react'
import PropTypes from 'prop-types'
import DashboardLayout from '../../components/layout/DashboardLayout'
import LinkMaterial from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styled from "styled-components";
import { clientsData } from "../../components/dashboard/events/EventsTableData";
import SortTablePagination from "../../components/dashboard/events/SortTablePagination";

const Wrapper = styled.div`
.bread-crumbs{
  margin: 30px 0;
}
.crumbs{
  font-size: 18px;
line-height: 30px;
@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
  font-size: 13px;
  }
}
`
function Clients(props) {

  const headCells = [
    { id: "userId", label: "USER ID" },
    { id: "userEmail", label: "USER EMAIL" },
    { id: "userName", label: "USER NAME" },
    { id: "noOfItems", label: "NO OF ITEMS" },
    { id: "joined", label: "JOINED" },
    { id: "accountType", label: "ACCOUNT TYPE" },
    { id: "link", label: "" },
  ];
	return (
		<Wrapper>
					<DashboardLayout>
			<Breadcrumbs className="bread-crumbs" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <LinkMaterial className='crumbs' color="inherit" href="/dashboard" >
          Home
        </LinkMaterial>    
        <LinkMaterial color="textPrimary" href="/calendar/allEvents" >
        Clients
          </LinkMaterial> 
      </Breadcrumbs>

      <SortTablePagination
          paper="paper"
          rows={clientsData}
          headCells={headCells}
        />
	  			</DashboardLayout>
		</Wrapper>
	)
}

Clients.propTypes = {

}

export default Clients

