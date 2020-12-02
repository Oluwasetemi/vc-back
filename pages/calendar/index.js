import React from 'react'
import PropTypes from 'prop-types'
import DashboardLayout from '../../components/layout/DashboardLayout'
import Crumbs from '../../components/common/Crumbs';
import CalendarModal from '../../components/dashboard/calendar/CalendarModal';

function Calendar(props) {
	return (
		<div>
			
			<DashboardLayout>
			<Crumbs homeColor="inherit" Calendar="Calendar" calendarColor="textPrimary"/>
			<CalendarModal/>
			</DashboardLayout>
		</div>
	)
}

Calendar.propTypes = {

}

export default Calendar

