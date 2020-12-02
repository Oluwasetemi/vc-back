import React from 'react'
import PropTypes from 'prop-types'
import DashboardLayout from '../components/layout/DashboardLayout'
import Crumbs from '../components/common/Crumbs';
import Link from "next/link";

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

