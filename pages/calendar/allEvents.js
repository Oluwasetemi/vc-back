import Crumbs from "@components/common/Crumbs";
import EventsTab from '@components/dashboard/events/EventsTab';
import DashboardLayout from "@components/layout/DashboardLayout";
import React from "react";
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
