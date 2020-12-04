import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import calendarIcon from "../public/assets/calendarIcon.png";
import clientsIcon from "../public/assets/clientsIcon.png";
import homeIcon from "../public/assets/homeIcon.png";
import paymentsIcon from "../public/assets/paymentIcon.png";
import subscriptionsIcon from "../public/assets/subscriptionIcon.png";
import supportIcon from "../public/assets/supportIcon.png";

const Wrapper = styled.div`
  .MuiTypography-body1 {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #2f3930;
  }
  .MuiListItemIcon-root {
    min-width: 25px;
  }
  .MuiList-padding {
    padding-top: 0;
  }
  .MuiListItem-gutters {
    padding-left: 24px;
  }
  .active {
    background: #f3f0f0;
    border-left: 2px solid #f26144;
  }
  .active {
    background: #f3f0f0;
    border-left: 2px solid #f26144;
  }
`;

export function ListItems() {
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }
  const router = useRouter();
  return (
    <Wrapper>
      <List>
        <ListItemLink
          href="/dashboard"
          className={router.pathname === "/dashboard" ? "active" : ""}
        >
          <ListItemIcon>
            <img src={homeIcon} alt="homeIcon" />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemLink>

        <ListItemLink
          href="/calendar"
          className={
            (router.pathname === "/calendar" ? "active" : "") ||
            (router.pathname === "/calendar/allEvents" ? "active" : "")
          }
        >
          <ListItemIcon>
            <img src={calendarIcon} alt="calendarIcon" />
          </ListItemIcon>
          <ListItemText primary="Calendar" />
        </ListItemLink>

        <ListItemLink
          href="/clients"
          className={router.pathname === "/clients" ? "active" : ""}
        >
          <ListItemIcon>
            <img src={clientsIcon} alt="clientsIcon" />
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItemLink>

        <ListItem button>
          <ListItemIcon>
            <img src={paymentsIcon} alt="paymentsIcon" />
          </ListItemIcon>
          <ListItemText primary="Payments" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={subscriptionsIcon} alt="subscriptionsIcon" />
          </ListItemIcon>
          <ListItemText primary="Subscriptions" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <img src={supportIcon} alt="supportIcon" />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
    </Wrapper>
  );
}
