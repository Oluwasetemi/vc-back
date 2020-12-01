import React from "react";
import PropTypes from "prop-types";
import DashboardLayout from "../../components/layout/DashboardLayout";
import Crumbs from "../../components/common/Crumbs";
import CalendarModal from "../../components/dashboard/calendar/CalendarModal";
import Link from "next/link";
import EventsTab from '../../components/dashboard/events/EventsTab';

import styled from "styled-components";

const Wrapper = styled.div`
  .last {
    color: red;
  }
`;
function allEvents(props) {
  return (
    <Wrapper>
      <DashboardLayout>
        <Crumbs
          Calendar="Calendar"
          homeColor="inherit"
          calendarColor="inherit"
		  text="Events"
		  href="/calendar/allEvents"
        />
        <EventsTab/>
      </DashboardLayout>
    </Wrapper>
  );
}

allEvents.propTypes = {};

export default allEvents;
