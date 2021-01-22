import React from 'react'
import PropTypes from 'prop-types'
import DashboardLayout from '../../components/layout/DashboardLayout'
import styled from "styled-components";
import CalendarModal from '../../components/dashboard/calendar/CalendarModal';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Paper from '@material-ui/core/Paper';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LinkMaterial from '@material-ui/core/Link';
import {Inject,ScheduleComponent,Day, Month} from '@syncfusion/ej2-react-schedule'
import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
import "../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";

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
.paper{
	box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
border-radius: 10px;
}

`

class Calendar extends React.Component {
	constructor() {
		super(...arguments);
		// Go to the link below for more info
		// https://ej2.syncfusion.com/react/documentation/schedule/data-binding/#loading-data-via-ajax-post
        this.data = [{
                Id: 1,
                Subject: 'Explosion of Betelgeuse Star',
                StartTime: new Date(2021, 0, 15, 9, 30), // year, month(zero-index),day,time(9:30)
                EndTime: new Date(2021, 0, 15, 11, 0)
            }, {
                Id: 2,
                Subject: 'Thule Air Crash Report',
                StartTime: new Date(2021, 0, 12, 12, 0),
                EndTime: new Date(2021, 0, 12, 14, 0)
            }, {
                Id: 3,
                Subject: 'Blue Moon Eclipse',
                StartTime: new Date(2021, 1, 13, 9, 30),
                EndTime: new Date(2021, 1, 13, 11, 0)
            }, {
                Id: 4,
                Subject: 'Meteor Showers in 2021',
                StartTime: new Date(2021, 1, 14, 13, 0),
                EndTime: new Date(2021, 1, 14, 14, 30)
            }];
    }
    render() {

	return (
		<Wrapper>
			
			<DashboardLayout>
			<Breadcrumbs className="bread-crumbs" separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <LinkMaterial className='crumbs' color="inherit" href="/dashboard" >
          Home
        </LinkMaterial>    
        <LinkMaterial className="crumbs" color="textPrimary" href="/calendar" >
			Calendar
          </LinkMaterial> 
      </Breadcrumbs>
			<CalendarModal/>
			<ScheduleComponent currentView='Month'  eventSettings={{ dataSource: this.data }}>
				<Inject services={[Day, Month]}/>
			</ScheduleComponent>
			<Paper className="paper">

			</Paper>
			</DashboardLayout>
		</Wrapper>
	)
}}

Calendar.propTypes = {

}

export default Calendar

