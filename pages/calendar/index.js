import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import LinkMaterial from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import React from "react";
import styled from "styled-components";
import CalendarModal from "../../components/dashboard/calendar/CalendarModal";
import DashboardLayout from "../../components/layout/DashboardLayout";

const Wrapper = styled.div`
  .bread-crumbs {
    margin: 30px 0 10px 0;
  }
  .crumbs {
    font-size: 18px;
    line-height: 30px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: 13px;
    }
  }
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
`;


const Calendar = () => {
  return (
    <Wrapper>
      <DashboardLayout>
        <Breadcrumbs
          className="bread-crumbs"
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          <LinkMaterial className="crumbs" color="inherit" href="/dashboard">
            Home
          </LinkMaterial>
          <LinkMaterial className="crumbs" color="textPrimary" href="/calendar">
            Calendar
          </LinkMaterial>
        </Breadcrumbs>
        <CalendarModal />

        <Paper className="paper"></Paper>
      </DashboardLayout>
    </Wrapper>
  );
};

Calendar.propTypes = {};

export default Calendar;
