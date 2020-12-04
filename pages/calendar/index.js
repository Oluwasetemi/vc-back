import React from 'react'
import PropTypes from 'prop-types'
import DashboardLayout from '../../components/layout/DashboardLayout'
import styled from "styled-components";
import CalendarModal from '../../components/dashboard/calendar/CalendarModal';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LinkMaterial from '@material-ui/core/Link';


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
}`

function Calendar(props) {
	return (
		<Wrapper>
			
			<DashboardLayout>
			<Breadcrumbs className="bread-crumbs" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <LinkMaterial className='crumbs' color="inherit" href="/dashboard" >
          Home
        </LinkMaterial>    
        <LinkMaterial color="textPrimary" href="/calendar" >
			Calendar
          </LinkMaterial> 
      </Breadcrumbs>
			<CalendarModal/>
			</DashboardLayout>
		</Wrapper>
	)
}

Calendar.propTypes = {

}

export default Calendar

