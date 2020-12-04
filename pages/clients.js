import Crumbs from '@components/common/Crumbs';
import DashboardLayout from '@components/layout/DashboardLayout';
import React from 'react';

function Calendar(props) {
	return (
		<div>

			<DashboardLayout>
			<Crumbs Calendar="Calendar" homeColor="inherit" calendarColor="inherit" text="Clients" href="/clients"/>
			</DashboardLayout>
		</div>
	)
}

Calendar.propTypes = {

}

export default Calendar
