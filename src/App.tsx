import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Theme, ThemeProvider, styled, alpha, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Icon from '@mdi/react';
import { mdiCalendarClock,
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
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem  from '@mui/material/ListItem';
import ListItemButton  from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import theme from './styles/theme'
import PDFViewer from './components/PDFviewer'
import {
  ArticleInfoItems,
  ArticleTeamInfoItems,
  ArticleCommentItems,
  ArticleAnnotationsItems
} from './components/articleDrawerContents'

// Mock info
import mockInfoJson from './test/mockInfo'
const mockInfo = JSON.parse(JSON.stringify(mockInfoJson[0]));



const mainMenueDrawerWidth = 248;
const articleDrawerWidth = 350;
const articleCommentDrawerWidth = 600;

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

const openedMixin = (theme: Theme): CSSObject => ({
  width: articleDrawerWidth,
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
  },
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
});

const Main = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  // backgroundColor: "blue", //Used for checking div stretch
  width: `calc(100vw - (${theme.spacing(8)}) - 1px)`,
  // flexGrow: 1,
  // padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -articleDrawerWidth,
  [theme.breakpoints.down('sm')]:{
      width: "100vw",
      marginRight: 0,
    },
  ...(open && {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100vw - (${articleDrawerWidth}px))`,
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const ArticleDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: articleDrawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function MainMenuItems () {

  const browseByInfo = [
    { key: "byYear",
      icon: mdiCalendarClock,
      label: "Year",
      href: "#" },
    { key: "byTrack",
      icon: mdiDirectionsFork,
      label: "Track",
      href: "#" },
    { key: "byAward",
      icon: mdiSealVariant,
      label: "Award",
      href: "#" },
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
      href: "#" },
    { key: "link-terms",
      icon: mdiScaleBalance,
      label: "Terms",
      href: "#" },
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
        <List subheader={<ListSubheader>Browse articles by</ListSubheader>}>
          {browseByInfo.map((item) => listItemLink(item))}
        </List>
        <Divider />
        <List subheader={<ListSubheader>About iDEC</ListSubheader>}>
          {iDECLinkInfo.map((item) => listItemLink(item))}
        </List>
      </div>
  )
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

  const [articleDrawerOpen, setDrawerOpen] = React.useState(false);
  const [tabOpened, setTabOpened] = React.useState<string | null>('articleInfo');
  const [tabName, setTabName] = React.useState<string | null>('Article Information');

  const handleArticleDrawerOpen = (e: React.MouseEvent): void => {
    setDrawerOpen(true); 
    const iconButtonID = e.currentTarget.getAttribute('id');
    setTabOpened(iconButtonID);
    updateTapName(iconButtonID);
  };

  const handleArticleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const articleDrawerMinimizedButtonInfo = [
    {id: "teamInfo", icon: <GroupOutlinedIcon />, disabled: false },
    {id: "articleInfo", icon: <InfoOutlinedIcon />, disabled: false },
    {id: "comments", icon: <CommentOutlinedIcon />, disabled: true },
    {id: "annotations", icon: <BorderColorOutlinedIcon />, disabled: true },
  ];

  const articleDrawerMinimizedButtons = articleDrawerMinimizedButtonInfo.map((item) => {
    return (
      <ListItem key={"listKey-"+item.id} sx={{paddingLeft: 1}}>
        <IconButton
          id={item.id}
          onClick={handleArticleDrawerOpen}
          size="large"
          disabled={item.disabled}>
          {item.icon}
        </IconButton>
      </ListItem>
    )
  })

  const updateTapName = (iconButtonID: string | null) => {
    switch(iconButtonID) {
      case "articleInfo":
       setTabName('Article Information');
        break;
      case "teamInfo":
        setTabName('iDEC Team Information');
        break;
      case "comments":
        setTabName('Article Comments');
        break;
      case "annotations":
        setTabName('Article Annotations');
        break;
      default:
        setTabName('Article Information');
  }}

  const articleInfo = mockInfo.articleInfo;
  const articleTeamInfo = mockInfo.articleTeamInfo;

  const renderArticleDrawer = (tabOpened: any) => {
    switch(tabOpened) {
      case "articleInfo":
        return <ArticleInfoItems articleInfo={articleInfo} />;
      case "teamInfo":
        return <ArticleTeamInfoItems teamInfo={articleTeamInfo} />;
      case "comments":
        return <ArticleCommentItems />;
      case "annotations":
        return <ArticleAnnotationsItems />;
      default:
        return <ArticleInfoItems articleInfo={articleInfo} />;
  }};

  return (
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
            idecRXiv
          </Typography>
          <AppSearchBar />
        </Toolbar>
      </AppBar>

      <Main open={articleDrawerOpen}>
        <DrawerHeader />
        <PDFViewer articleHref={articleInfo.mainArticleURL}/>
      </Main>

      <ArticleDrawer variant="permanent" open={articleDrawerOpen} anchor="right">
        <Toolbar />
        {articleDrawerOpen ?
          // Opened tab contains tabName and clickable header for closing drawer
          <>
            <DrawerHeader>
              <ListItem  button onClick={handleArticleDrawerClose}><ChevronRightIcon />
              <Typography>{tabName}</Typography></ListItem>
              <Divider />
            </DrawerHeader>
            {renderArticleDrawer(tabOpened)}
          </>
          :
          <List>{articleDrawerMinimizedButtons}</List>
        }
      </ArticleDrawer>
    </Box>

    </ThemeProvider>
  </React.Fragment>
  )
}

