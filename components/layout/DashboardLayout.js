import React from "react";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import PropTypes from "prop-types";
import brand from "../../public/assets/brand.png";
import notifyIcon from "../../public/assets/notifyIcon.png";
import dpIcon from "../../public/assets/dpIcon.png";
import MenuIcon from "@material-ui/icons/Menu";
import { ListItems } from "../ListItems";
import styled from "styled-components";

const Wrapper = styled.div`
  .body-grid {
    display: grid;
    grid-template-columns: max-content 1fr;
    min-height: 100vh;
    background-color: #fbfcfa;
  }
  .MuiDrawer-paper {
    top: 64px;
    position: relative;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      // top: 55px;
    }
  }
  .MuiTypography-body1 {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  .MuiAppBar-colorPrimary {
    background-color: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    z-index: 2222;
  }
  .navbar {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    .MuiToolbar-regular {
      min-height: 64px !important;
    }
  }
  .MuiDrawer-paper-desktop .MuiDrawer-paperAnchorDockedLeft {
    width: 229px;
  }
  .MuiDrawer-paperAnchorDockedLeft {
    border-right: 1px solid #d6d8d3;
    position: fixed;
  }
  main {
    display: block;
    margin-left: 14rem;
    padding: 0 20px;
    margin-top: 60px;
    overflow-x: scroll;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      margin-left: 0;
    }
  }
  main .MuiContainer-root {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding-left: 0;
      padding-right: 0;
    }
  }
  .menu-icon {
    margin-right: 0;
  }
  .redIcon {
    fill: red;
  }
  .desktop {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: none;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    .makeStyles-drawerPaperClose-10 {
      width: 0px;
    }
  }
  .mobile {
    display: none;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: inline-block;
    }
  }
`;

export default function DashboardLayout({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <AppBar>
        <Toolbar className="navbar">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={` mobile menu-icon`}
          >
            <MenuIcon className="redIcon" />
          </IconButton>

          <Link href="/">
            <img src={brand} alt="brand" />
          </Link>
          <div className="navbar-rhs flex">
            <img src={notifyIcon} alt="notifyIcon" />
            <img src={dpIcon} alt="dpIcon" />
          </div>
        </Toolbar>
      </AppBar>

      <div className="body-grid">
        <Drawer
          variant="permanent"
          className="desktop MuiDrawer-paper-desktop"
          open={open}
        >
          <ListItems />
        </Drawer>
        <Drawer
          variant="persistent"
          anchor="left"
          className="mobile"
          open={open}
        >
          <ListItems />
        </Drawer>

        <main>
          <div />
          <Container maxWidth="lg">{children}</Container>
        </main>
      </div>
    </Wrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
