import Crumbs from '@components/common/Crumbs';
import CalendarModal from '@components/dashboard/calendar/CalendarModal';
import DashboardLayout from '@components/layout/DashboardLayout';
import React from 'react';

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
