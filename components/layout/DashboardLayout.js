<<<<<<< HEAD
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
=======
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import brand from "../../public/assets/brand.png";
import dpIcon from "../../public/assets/dpIcon.png";
import notifyIcon from "../../public/assets/notifyIcon.png";
import { ListItems } from "../ListItems";
>>>>>>> 7a07dabc8d5eef85439ce894500454afccb70405

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
<<<<<<< HEAD
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
=======
    font-family: Matteo, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
      Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
      sans-serif;
>>>>>>> 7a07dabc8d5eef85439ce894500454afccb70405
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
<<<<<<< HEAD

export default function DashboardLayout({ children }) {
  const [open, setOpen] = React.useState(false);
=======

const drawerWidth = 143;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: "100%",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function DashboardLayout({ children }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
>>>>>>> 7a07dabc8d5eef85439ce894500454afccb70405

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
<<<<<<< HEAD
      <AppBar>
=======
      <AppBar className={clsx(classes.appBar, open && classes.appBarShift)}>
>>>>>>> 7a07dabc8d5eef85439ce894500454afccb70405
        <Toolbar className="navbar">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
<<<<<<< HEAD
            className={` mobile menu-icon`}
=======
            className={`${clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )} mobile menu-icon`}
>>>>>>> 7a07dabc8d5eef85439ce894500454afccb70405
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
<<<<<<< HEAD
=======
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
>>>>>>> 7a07dabc8d5eef85439ce894500454afccb70405
          open={open}
        >
          <ListItems />
        </Drawer>
        <Drawer
<<<<<<< HEAD
          variant="persistent"
          anchor="left"
          className="mobile"
          open={open}
        >
=======
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          className="mobile"
          open={open}
        >
          <Divider />
>>>>>>> 7a07dabc8d5eef85439ce894500454afccb70405
          <ListItems />
        </Drawer>

        <main>
<<<<<<< HEAD
          <div />
          <Container maxWidth="lg">{children}</Container>
=======
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            {children}
          </Container>
>>>>>>> 7a07dabc8d5eef85439ce894500454afccb70405
        </main>
      </div>
    </Wrapper>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.any.isRequired,
};
