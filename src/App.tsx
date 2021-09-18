import React from 'react';
import clsx from 'clsx';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

import { css } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { styled, alpha } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import Icon from '@mdi/react';
import { mdiCalendarClock,
        mdiDirectionsFork,
        mdiSealVariant,
        mdiKey,
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
import Chip from '@mui/material/Chip';

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';

const theme = createTheme({
  // Material color chosen closest to iDEC themes chosen by Kening
  palette: {
    primary: {
      main: '#7e57c2'},
    secondary: {
      main: '#43a047',
    },
  },
});

const mainMenueDrawerWidth = 248;
const articleDrawerWidth = 350;
const articleCommentDrawerWidth = '50vw';

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

// const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
//   open?: boolean;
// }>(({ theme, open }) => ({
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginRight: -drawerWidth,
//   ...(open && {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: 0,
//   }),
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   transition: theme.transitions.create(['margin', 'width'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginRight: drawerWidth,
//   }),
// }));

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: 'flex-start',
// }));



// const useStyles = makeStyles((theme: Theme) => 
//   createStyles({
//     appBar: {
//       zIndex: theme.zIndex.drawer + 1,
//     },

//     articleDrawer: {
//       width: articleDrawerWidth,
//       // [theme.breakpoints.down('sm')]: {
//       //   width: '100vw',
//       // },
//       flexShrink: 1,
//     },
//     articleCommentDrawer: {
//       width: articleCommentDrawerWidth,
//       flexShrink: 1,
//     },
//     articleDrawerOpen: {
//       width: articleDrawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     articleCommentDrawerOpen: {
//       width: articleCommentDrawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//     },
//     articleDrawerClose: {
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       overflowX: 'hidden',
//       overflowY: 'hidden',
//       [theme.breakpoints.up('sm')]: {
//         width: theme.spacing(8),
//       },
//     },
//     mainMenuDrawerHeader: {
//       display: 'flex',
//       padding: theme.spacing(2),
//       alignItems: 'center',
//     },
//     drawerHeader: {
//       display: 'flex',
//       alignItems: 'center',
//       padding: theme.spacing(0, 1),
//       // necessary for content to be below app bar
//       ...theme.mixins.toolbar,
//       justifyContent: 'flex-start',
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     // necessary for content to be below app bar
//     toolbar: theme.mixins.toolbar,
//     title: {
//       flexGrow: 1,
//       display: 'none',
//       [theme.breakpoints.up('sm')]: {
//         display: 'block',
//       },
//     },
//     hide: {
//       display: 'none',
//     },
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: alpha(theme.palette.common.white, 0.15),
//       '&:hover': {
//         backgroundColor: alpha(theme.palette.common.white, 0.25),
//       },
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(1),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       // vertical padding + font size from searchIcon
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         width: '16ch',
//         '&:focus': {
//           width: '20ch',
//         },
//       },
//     },
//     PDFcontainer: {
//       // https://github.com/mui-org/material-ui/issues/10739#issuecomment-817742141
//       ...overrideExistingStyle(
//         theme.mixins.toolbar,
//         'minHeight',
//         // Full height - toolbar height - padding top - padding bottom
//         (value) => `calc(100vh - ${value}px  - 8px)`,
//       ),
//       //
//     },
//     content: {
//       flexGrow: 1,
//       padding: theme.spacing(0),
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen,
//       }),
//       marginRight: 0,
//     },
//     contentShift: {
//       transition: theme.transitions.create('margin', {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginRight: `calc(100wh - ${articleDrawerWidth}px) !important`,
//     },
//     nested: {
//       paddingLeft: theme.spacing(4),
//     },
//     chipContainer: {
//       display: 'flex',
//       justifyContent: 'flex-start',
//       flexWrap: 'wrap',
//       '& > *': {
//         margin: theme.spacing(0.5),
//       },
//     },
//     rightDrawerButtonList: {
//       paddingLeft: 0,
//     },
//   }),
// );

// function overrideExistingStyle(style, property, setNewValue) {
//     return Object.fromEntries(
//       Object.entries(style).filter(
//         ([key, value]) => key === property || typeof value === 'object',
//       ).map(
//         ([key, value]) => (
//           typeof value === 'object'
//             ? [key, overrideExistingStyle(value, property, setNewValue)]
//             : [property, setNewValue(value)]
//         ),
//       ),
//     );
//   }

// function PDFViewer2() {
//   const classes = useStyles();
//   return (
//     <iframe
//       className={classes.PDFcontainer}
//       style={{flexGrow: 1, width: '100%'

//       }}
//       title="embeddedPDF" src="/test-pdf.pdf" />

//   )
// }


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

  function ListItemLink(
    { key, icon, label, href, newWindow }:
      { key: string, icon: string, label:string, href:string, newWindow?: boolean }
    ) {
    return(
      <ListItemButton key={key} component="a" href={href} target={newWindow ? "_blank" : ""}>
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
          {browseByInfo.map((item) => ListItemLink(item))}
        </List>
        <Divider />
        <List subheader={<ListSubheader>About iDEC</ListSubheader>}>
          {iDECLinkInfo.map((item) => ListItemLink(item))}
        </List>
      </div>
  )
}

// function ArticleInfoItems() {
//   const classes = useStyles();
//   return (
//     <>
//     <Divider />
//     <List dense={true}>
//         <ListItem key={1}>
//           <ListItemText
//             primary="Team: OUC China" secondary="iDEC 2021"
//           />
//         </ListItem>
//         <ListItem key={2}>
//           <ListItemText
//             primary="Version 1.0"
//             secondary="latest"
//           />
//         </ListItem>
//         <ListItem key={4}>
//           <ListItemText>Posted: September 30, 2021</ListItemText>
//         </ListItem>
//         <ListItem key={3}>
//           <ListItemText
//             primary="DOI:"
//             secondary="https://doi.org/10.1101/2021.09.09.459643"
//           />
//         </ListItem>
//         <ListItem key={3}>
//           <ListItemText
//             primary="Keywords"
//           />
//         </ListItem>
//         <ListItem key={7} className={classes.chipContainer}>
//           <KeyWordChip label="directed evolution" />
//           <KeyWordChip label="pathway" />
//           <KeyWordChip label="automation" />
//         </ListItem>
//     </List>
  
//     <Divider />
//     <List subheader={<ListSubheader>Download</ListSubheader>}>
//         <ListItem button key='d1'>
//           <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
//           <ListItemText primary="Main Article" />
//         </ListItem>
//         <ListItem button key='d2'>
//           <ListItemIcon><NoteAddOutlinedIcon /></ListItemIcon>
//           <ListItemText primary="Supplementary Information" />
//         </ListItem>
//         <ListItem button key='d3'>
//           <ListItemIcon><FormatQuoteOutlinedIcon /></ListItemIcon>
//           <ListItemText primary="Citation" />
//         </ListItem>
//       </List>
//     </>
//   )
// }

// function ArticleTeamInfoItems() {
//   const classes = useStyles();
//   return (
//     <>
//     <Divider />
//     <List dense={true}>
//       <ListSubheader>iDEC 2021 OUC China</ListSubheader>
//       <ListItem button key={1}>
//         <ListItemIcon><MenuBookOutlinedIcon /></ListItemIcon>
//         <ListItemText primary="Project Wiki" />
//       </ListItem>
//       <ListItem button key={1}>
//         <ListItemIcon><DashboardOutlinedIcon /></ListItemIcon>
//         <ListItemText primary="Project Poster" />
//       </ListItem>
//       <ListItem button key={1}>
//         <ListItemIcon><OndemandVideoOutlinedIcon /></ListItemIcon>
//         <ListItemText primary="Presentation" />
//       </ListItem>
//     </List>
//     <Divider />
//     <List
//       subheader={<ListSubheader>Team Awards</ListSubheader>}
//       dense={true}
//       disablePadding>
//       <ListItem key="team_awards" className={classes.chipContainer}>
//           <AwardChip label="Best poster award" icon={true} />
//           <AwardChip label="Nominated Molecular Evolutionary Machines" color="secondary" />
//           <AwardChip label="Best wiki award" icon={true} />
//         </ListItem>
//       {/* <ListItem className={classes.nested} key='a1'>
//         <ListItemText primary="Best poster award"/>
//       </ListItem>
//       <ListItem className={classes.nested} key='a2'>
//         <ListItemText primary="Best wiki award"/>
//       </ListItem>
//       <ListItem className={classes.nested} key='a3'>
//         <ListItemText primary="Best Molecular Evolutionary Machines"/>
//       </ListItem>      */}
//     </List>
//     </>
//   )
// }

// function ArticleCommentItems() {
//   return (
//     <>
//     </>
//   )
// }

// function ArticleAnnotationsItems() {
//   return (
//     <>
//     </>
//   )
// }

// type chipProps = {
//   label?: string,
//   color?: "default" | "primary" | "secondary",
//   href?: string,
//   icon?: boolean,
// }

// function KeyWordChip(
//   {label = "label", color = "secondary"}: KeyWordChipProps) {
//   return (
//     <Chip
//       label={label}
//       size="small"
//       color={color}
//       />
//   )
// }

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
  // const toggleArticleDrawer= () => {
  //   setDrawerOpen(!articleDrawerOpen);
  // };

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


  // const renderArticleDrawer = (tabOpened: any) => {
  //   switch(tabOpened) {
  //     case "articleInfo":
  //       return <ArticleInfoItems />;
  //     case "teamInfo":
  //       return <ArticleTeamInfoItems />;
  //     case "comments":
  //       return <ArticleCommentItems />;
  //     case "annotations":
  //       return <ArticleAnnotationsItems />;
  //     default:
  //       return <ArticleInfoItems />;
  // }};

  return (
      <React.Fragment>
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment key="leftDrawer">
        <Drawer anchor="left"
          open={mainMenuState}
          onClose={toggleDrawer(false)}
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

      {/* this is temporary */}
      {/* <React.Fragment>
        <IconButton
              edge="start"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              size="large">
              <MenuIcon />
            </IconButton>
      </React.Fragment> */}

      <div style={{display: 'flex'}}>
        <AppBar position="fixed" color="primary">
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
      {/*
      <main className={clsx(classes.content, {
          [classes.contentShift]: articleDrawerOpen,
        })} >
        <div className={classes.toolbar} />
          <PDFViewer2 />
      </main>
      
      <Drawer
        variant="permanent"
        className={clsx({
          [classes.articleDrawerOpen]: articleDrawerOpen && tabOpened!=="comments",
          [classes.articleCommentDrawerOpen]: articleDrawerOpen && tabOpened==="comments",
          [classes.articleDrawerClose]: !articleDrawerOpen,
        })}
        classes={{
          paper: clsx({
            [classes.articleDrawerOpen]: articleDrawerOpen && tabOpened!=="comments",
            [classes.articleCommentDrawerOpen]: articleDrawerOpen && tabOpened==="comments",
            [classes.articleDrawerClose]: !articleDrawerOpen,
          }),
        }}
        anchor="right"
      >
        
        <div className={classes.toolbar} />
        <div className={classes.drawerHeader}>
            {articleDrawerOpen ?
              <ListItem className={classes.rightDrawerButtonList} button onClick={handleArticleDrawerClose}><ChevronRightIcon />
              <Typography>{tabName}</Typography></ListItem>
              :
              <>
              <List>
              <ListItem className={classes.rightDrawerButtonList}>
                <IconButton id="articleInfo" onClick={handleArticleDrawerOpen} size="large"><InfoOutlinedIcon /></IconButton>
              </ListItem>
              <Divider />
              <ListItem className={classes.rightDrawerButtonList}>
                <IconButton id="teamInfo" onClick={handleArticleDrawerOpen} size="large"><GroupOutlinedIcon /></IconButton>
              </ListItem>
              <Divider />
              <ListItem className={classes.rightDrawerButtonList}>
                <IconButton id="annotations" onClick={handleArticleDrawerOpen} size="large"><BorderColorOutlinedIcon /></IconButton>
              </ListItem>
              <Divider />          
              <ListItem className={classes.rightDrawerButtonList}>
                <IconButton id="comments" onClick={handleArticleDrawerOpen} size="large"><CommentOutlinedIcon /></IconButton>
              </ListItem>
              </List>
              </>
            }
            </div>
        <div className={clsx({
            [classes.hide]: !articleDrawerOpen,
          })}>
          {renderArticleDrawer(tabOpened)}
        </div>
      </Drawer> */}
    </div>

    </ThemeProvider>
  </React.Fragment>
  )
}

