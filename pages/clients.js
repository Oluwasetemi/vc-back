import React from 'react'
import PropTypes from 'prop-types'
import DashboardLayout from '../components/layout/DashboardLayout'
import LinkMaterial from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styled from "styled-components";

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
`
function Clients(props) {
	return (
		<Wrapper>
			
			<DashboardLayout>
			<Breadcrumbs className="bread-crumbs" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <LinkMaterial className='crumbs' color="inherit" href="/dashboard" >
          Home
        </LinkMaterial>    
        <LinkMaterial color="inherit" href="#" >
          Calendar
          </LinkMaterial> 
        <LinkMaterial color="textPrimary" href="#" >
          Events
          </LinkMaterial> 
      </Breadcrumbs>
	  			</DashboardLayout>
		</Wrapper>
	)
}

Clients.propTypes = {

}

export default Clients

