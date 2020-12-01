import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';
import brand from '../../public/assets/brand.png'
import notifyIcon from '../../public/assets/notifyIcon.png'
import dpIcon from '../../public/assets/dpIcon.png'
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { ListItems } from '../ListItems';
import styled from 'styled-components';

const Wrapper = styled.div`
.body-grid{
  display: grid;
  grid-template-columns: max-content 1fr;
  min-height: 100vh;
  background-color:#FBFCFA;
}
.MuiDrawer-paper {
  top: 64px;
  position: relative;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    // top: 55px;
  }
 }
 .MuiTypography-body1{
   font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell, Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
 }

.MuiAppBar-colorPrimary{
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 2222;
}
.navbar{
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
  .MuiToolbar-regular {
    min-height: 64px !important;
}
}
.MuiDrawer-paper-desktop .MuiDrawer-paperAnchorDockedLeft{
  width: 229px;
 }
.MuiDrawer-paperAnchorDockedLeft {
  border-right: 1px solid #D6D8D3;
  position: fixed;
}
main{
  display: block;
  margin-left: 14rem;
  padding: 0 20px;
  margin-top: 60px;
  overflow-x: scroll;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    margin-left:0;
  }
  
}
main .MuiContainer-root {

  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    padding-left: 0;
    padding-right: 0;
  }
}
.menu-icon{
  margin-right: 0;
}
.redIcon {
  fill: red;
}
.desktop{
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    display:none;
  }
}
@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
  .makeStyles-drawerPaperClose-10 {
    width: 0px;
}
}
.mobile{
  display:none;
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    display:inline-block;
  }
}
`


const drawerWidth = 143;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: "100%",
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function DashboardLayout({children}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    
    <Wrapper >
       <AppBar  className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className="navbar">
          <IconButton
            edge="start"
            color="inherit"
                        aria-label="open drawer"
            onClick={handleDrawerToggle}
           className= {`${clsx(classes.menuButton, open && classes.menuButtonHidden)} mobile menu-icon`}
            
          >
            
            <MenuIcon  className="redIcon"/>
          </IconButton>
          
          <Link href="/"><img src={brand} alt="brand"/></Link>
          <div className="navbar-rhs flex">
          <img src={notifyIcon} alt="notifyIcon"/>
          <img src={dpIcon} alt="dpIcon"/>

          </div>
        </Toolbar>
      </AppBar>
     
     
	  
    <div className="body-grid">
    <Drawer
        variant="permanent"
        className="desktop MuiDrawer-paper-desktop"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
              <ListItems/>
         </Drawer>
    <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        className="mobile"
        open={open}
      >
        
        <Divider />
        <ListItems/>
         </Drawer>

	  <main >
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
		{children}
		</Container>
		</main>
    </div>

    </Wrapper>
   

  );
}

DashboardLayout.propTypes = {
	children: PropTypes.any.isRequired,
};