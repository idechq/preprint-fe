import React from 'react';

import { Location } from "history";
import {
  Link as RouterLink,
  BrowserRouter as Router,
  Switch as RouterSwitch,
  Route,
  NavLink, 
  useLocation,
} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Icon from '@mdi/react';
import {
        mdiFormatListBulleted ,
        mdiCalendarClock,
        mdiDirectionsFork,
        mdiSealVariant,
        mdiHome,
        mdiBadgeAccountHorizontal,
        mdiBookshelf,
        mdiHandshake,
        mdiScaleBalance,
      } from '@mdi/js';

import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import ListItem  from '@mui/material/ListItem';
import ListItemButton  from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import theme from './styles/theme'
import DrawerHeader from './components/DrawerHeader';
import ArticleDisplayPage from './pages/ArticleDisplayPage';
import { Acknowledgements, Terms } from './pages/StaticPages'
import ScreenHeightDiv from './components/ScreenHeightDiv';

// Mock info
import mockInfoJson from './test/mockInfo'
const mockInfo = JSON.parse(JSON.stringify(mockInfoJson[0]));

const mainMenueDrawerWidth = 248;

// const styleX = theme.

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '16ch',
      '&:focus': {
        width: '24ch',
      },
    },
  },
}));

function AppSearchBar () {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search article…"
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  )
}

function MainMenuItems () {

  const browseByInfo = [
    { key: "all",
      icon: mdiFormatListBulleted,
      label: "All",
      href: "/" },
    // { key: "byYear",
    //   icon: mdiCalendarClock,
    //   label: "by Year",
    //   href: "?browseBy=year" },
    // { key: "byTrack",
    //   icon: mdiDirectionsFork,
    //   label: "by Track",
    //   href: "?browseBy=track" },
    // { key: "byAward",
    //   icon: mdiSealVariant,
    //   label: "Award",
    //   href: "#" },
  ]

  const iDECLinkInfo = [
    { key: "link-main-site",
      icon: mdiHome,
      label: "iDEC Home",
      href: "https://idec.io/",
      newWindow: true },
    { key: "link-team-portal",
      icon: mdiBadgeAccountHorizontal,
      label: "iDEC Team Portal",
      href: "https://reg.idec.io/",
      newWindow: true },
    { key: "byAward",
      icon: mdiBookshelf,
      label: "iDEC Wiki",
      href: "https://wiki.idec.io/",
      newWindow: true },
    { key: "link-acknowledgement",
      icon: mdiHandshake,
      label: "Acknowledgements",
      href: "/acknowledgements" },
    { key: "link-terms",
      icon: mdiScaleBalance,
      label: "Terms",
      href: "/terms" },
  ]

  const listItemLink = ({ key, icon, label, href, newWindow }:
      { key: string, icon: string, label:string, href:string, newWindow?: boolean }
    ) => {
      return (
      <ListItemButton
        key={key}
        component="a"
        href={href}
        target={newWindow ? "_blank" : ""}
        rel={newWindow ? "noreferrer" : ""}
      >
        <ListItemIcon><Icon path={icon} size={1}/></ListItemIcon>
        <ListItemText primary={label}/>
      </ListItemButton>
      )
  }

  return (
      <div style={{width: mainMenueDrawerWidth, flexShrink: 0,}}>
        <div style={{display: 'flex', padding: theme.spacing(2), alignItems: 'center',}}>
          <Typography variant='h5'>Navigation</Typography>
        </div>
        <Divider />
        <List subheader={<ListSubheader>Browse articles</ListSubheader>}>
          {browseByInfo.map((item) => listItemLink(item))}
        </List>
        <Divider />
        <List subheader={<ListSubheader>About iDEC</ListSubheader>}>
          {iDECLinkInfo.map((item) => listItemLink(item))}
        </List>
      </div>
  )
}

function Home() {
  return (
    <Box sx={{width: '100vw'}}>
      <Grid container spacing={{ xs: 1, sm: 2}}>
        <Grid item lg={4}>
          <ScreenHeightDiv sx={{backgroundColor: 'blue'}}>

          </ScreenHeightDiv>
        </Grid>

        <Grid item lg={8}>
          <Box sx={{padding: theme.spacing(4),
                    backgroundColor: "grey",
                    display: 'grid',
          }}>
          <Paper elevation={2}>
              <Box sx= {{padding: theme.spacing(3)}}>
              Testing
              </Box>
            </Paper>
          </Box>
        
      
        </Grid>
      
      </Grid>
    </Box>
  )
}

function ArticleLoader() {
  const location = useLocation<Location>().pathname;
  
  return <p>{location}</p>
}

export default function App() {
  const [mainMenuState, setMainMenuState] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setMainMenuState(open);
  };

  return (
    <Router>
      <React.Fragment>
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <React.Fragment>
        <Drawer anchor="left"
          open={mainMenuState}
          onClose={toggleDrawer(false)}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 2 }}
        >
          <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <MainMenuItems />
          </div>
          </Drawer>
        </React.Fragment>

        <Box sx={{ display: 'flex' }}>
          <AppBar
            position="fixed"
            color="primary"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                idecRχiv
              </Typography>
              <AppSearchBar />
            </Toolbar>
          </AppBar>

          <Box>
            <DrawerHeader />
            <RouterSwitch>
              <Route path="/article/test">
                <ArticleLoader/>
              </Route>
              <Route path="/article/mock-article">
                <ArticleDisplayPage articleMetadata={mockInfo} />
              </Route>
              <Route path="/terms">
                <Terms />
              </Route>
              <Route path="/acknowledgement">
                <Acknowledgements />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </RouterSwitch>
          </Box>

        </Box>
        </ThemeProvider>
    </React.Fragment>
  </Router>
  )
}