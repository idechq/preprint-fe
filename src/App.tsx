import React from 'react';
import { css } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, Theme, ThemeProvider, styled, alpha, CSSObject } from '@mui/material/styles';
import Stack from '@mui/material/Stack';

import Drawer from '@mui/material/Drawer';
import MuiDrawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Link from '@mui/material/Link';

import Icon from '@mdi/react';
import { mdiCalendarClock,
        mdiDirectionsFork,
        mdiSealVariant,
        mdiHome,
        mdiBadgeAccountHorizontal,
        mdiBookshelf,
        mdiHandshake,
        mdiScaleBalance,
        mdiPresentation,
        mdiTrophyVariant,
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
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import VideoLibraryOutlinedIcon from '@material-ui/icons/VideoLibraryOutlined';


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
const articleCommentDrawerWidth = '34vw';

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

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: `calc(100wh - ${articleDrawerWidth}px) !important`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0
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

// const useStyles = makeStyles((theme: Theme) => 
//   createStyles({
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

function ArticleInfoItems() {
  return (
    <>
    <List dense={true}>
        <ListItem key={2}>
          <ListItemText
            primary="Version 1.0"
            secondary="latest"
          />
        </ListItem>
        <ListItem key={4}>
          <ListItemText>Posted: September 30, 2021</ListItemText>
        </ListItem>
        <ListItem key={3}>
          <ListItemText
            primary="DOI:"
            secondary="https://doi.org/10.1101/2021.09.09.459643"
          />
        </ListItem>
        <ListItem key={3}>
          <ListItemText
            primary="Keywords"
          />
        </ListItem>
        <ListItem key={7}>
          <Stack direction="row" spacing={1}>
            <KeyWordChip label="directed evolution" />
            <KeyWordChip label="pathway" />
            <KeyWordChip label="automation" />
          </Stack>
        </ListItem>
    </List>
  
    <Divider />
    <List subheader={<ListSubheader>Download</ListSubheader>}>
        <ListItem button key='d1'>
          <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Main Article" />
        </ListItem>
        <ListItem button key='d2'>
          <ListItemIcon><NoteAddOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Supplementary Information" />
        </ListItem>
        <ListItem button key='d3'>
          <ListItemIcon><FormatQuoteOutlinedIcon /></ListItemIcon>
          <ListItemText primary="Citation" />
        </ListItem>
      </List>
    </>
  )
}

const mockTeamInfo = {
    teamName: "Edinburgh",
    teamYear: 2020,
    teamTracks: [
      "Molecular Evolutionary Machines",
      "Molecular Evolutionary Outcomes",
      "Pathway Evolutionary Outcomes"
    ],
    teamWikiURL: "#1",
    teamPosterURL: "#",
    teamPresentationURL: "#",
    teamAwards: [
      {name: "Best Wiki", result: "winner"},
      {name: "Industry advisory group award", result: "nominated"}, 
      {name: "Best New Evolutionary Machine", result: "nominated"}
    ],
  }

type articleTeamInfoProps = {
  teamInfo: {
      teamName: string,
      teamYear: number,
      teamTracks: Array<string>,
      teamWikiURL: string,
      teamPosterURL: string,
      teamPresentationURL: string,
      teamAwards: Array<{
        name: string,
        result: string,
      }>
    },
}

function ArticleTeamInfoItems({teamInfo}: articleTeamInfoProps) {

    const teamTracksItems = teamInfo.teamTracks.map((item)=>{
      return(
        <ListItem style={{paddingLeft: theme.spacing(4), paddingTop: 0, paddingBottom: 0}}>
        <ListItemText>
        <Link
          href="#"
          underline="hover"
        >{item}
        </Link>
        </ListItemText>
      </ListItem>
    )})

    const noTrackItems = (
      <ListItem style={{paddingLeft: theme.spacing(4), paddingTop: 0, paddingBottom: 0}} disabled>
        <ListItemText>Undeclared</ListItemText>
      </ListItem> )
      

    const teamOutputListElements = [
      {
        id: "wiki",
        label: "Project Wiki",
        icon: <MenuBookOutlinedIcon />,
        href: teamInfo.teamWikiURL,
      },
      {
        id: "poster",
        label: "Project Poster",
        icon: <Icon path={mdiPresentation} size={1}/>,
        href: teamInfo.teamPosterURL,
      },
      {
        id: "presentation",
        label: "Festival Presentation",
        icon: <VideoLibraryOutlinedIcon />,
        href: teamInfo.teamPresentationURL,
      },
    ]

    const teamOutputListItemButtons = teamOutputListElements.map((item)=>{
      return(
        <ListItemButton
          key={"listKey-"+item.id}
          component="a"
          href={item.href}
          target="_blank"
          rel="noreferrer"
          disabled={ item.href==="#" ? true : false}
          style={ item.href==="#" ?
            {paddingLeft: theme.spacing(4),
            paddingTop: theme.spacing(0),
            paddingBottom:theme.spacing(0)}
            :
            {paddingLeft: theme.spacing(4),
            paddingTop: theme.spacing(1),
            paddingBottom:theme.spacing(1)}
          }
        >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText
          primary={item.label}
          secondary={ item.href==="#" ? "To be released" : ""}
        />
      </ListItemButton>
      )})

    const teamAwardItems = teamInfo.teamAwards.map((item)=>{
      return(
        <ListItemButton
          key={"listKey-"+item.name}
          component="a"
          href="#"
          style={{paddingLeft: theme.spacing(4), paddingTop: 0, paddingBottom:0}}
        >
        <ListItemText
          primary={item.name}
          secondary={item.result}
        />
        {item.result==="winner" ? <ListItemIcon><Icon path={mdiTrophyVariant} size={1}/></ListItemIcon> : null }    
      </ListItemButton>
    )})

  return (
    <>
    <Typography style={{paddingLeft: theme.spacing(2), fontWeight: "bold", color: "#424242"}}>
      {teamInfo.teamName + " (" + teamInfo.teamYear + ")"}</Typography>
    <List
      dense={true}
      disablePadding
      // style={{paddingLeft: theme.spacing(2)}}
    >
      <ListSubheader>Tracks</ListSubheader>
      {teamInfo.teamTracks.length>0 ? teamTracksItems: noTrackItems}
      <ListSubheader>Outputs</ListSubheader>
      {teamOutputListItemButtons}
      { teamInfo.teamAwards.length>0 ?
      <>
      <ListSubheader>Awards</ListSubheader>
      {teamAwardItems}
      </>
      : null
      }
    </List>
    </>
  )
}



function ArticleCommentItems() {
  return (
    <>
    </>
  )
}

function ArticleAnnotationsItems() {
  return (
    <>
    </>
  )
}

type chipProps = {
  label: string,
  color?: "default" | "primary" | "secondary",
  href?: string,
  icon?: boolean,
}

function KeyWordChip(
  {label = "label", color = "secondary"}: chipProps) {
  return (
    <Chip
      label={label}
      size="small"
      color={color}
      />
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
    {id: "comments", icon: <CommentOutlinedIcon />, disabled: false },
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

  const renderArticleDrawer = (tabOpened: any) => {
    switch(tabOpened) {
      case "articleInfo":
        return <ArticleInfoItems />;
      case "teamInfo":
        return <ArticleTeamInfoItems teamInfo={mockTeamInfo} />;
      case "comments":
        return <ArticleCommentItems />;
      case "annotations":
        return <ArticleAnnotationsItems />;
      default:
        return <ArticleInfoItems />;
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

      <div style={{display: 'flex'}}>
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
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
    </div>

    </ThemeProvider>
  </React.Fragment>
  )
}

