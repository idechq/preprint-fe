import React from 'react';

import { Location } from "history";
import {
  Link as RouterLink,
  BrowserRouter as Router,
  Switch as RouterSwitch,
  Route,
  useLocation,
} from 'react-router-dom';
import Link from '@mui/material/Link'

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack'

import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Icon from '@mdi/react';

import {Card, CardActions, CardContent} from '@mui/material';
import Button from '@mui/material/Button';

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

import Image from 'material-ui-image'

import theme from './styles/theme'
import DrawerHeader from './components/DrawerHeader';
import ArticleDisplayPage from './pages/ArticleDisplayPage';
import { Acknowledgements, Terms } from './pages/StaticPages'
import ScreenHeightDiv from './components/ScreenHeightDiv';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { 
        mdiPresentation,
        mdiTrophyVariant,
      } from '@mdi/js';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

import KeyWordChip from './components/CustomChips';

import Popper from '@mui/material/Popper';

import Breadcrumbs from '@mui/material/Breadcrumbs';

// Mock info
import mockInfoJson from './test/mockInfo'
const mockInfo = JSON.parse(JSON.stringify(mockInfoJson[0]));


const mainMenueDrawerWidth = 270;

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
    { key: "link-idec-wiki",
      icon: mdiBookshelf,
      label: "iDEC Wiki",
      href: "https://wiki.idec.io/",
      newWindow: true },
    // { key: "link-acknowledgement",
    //   icon: mdiHandshake,
    //   label: "Acknowledgements",
    //   href: "/acknowledgements" },
    { key: "link-terms",
      icon: mdiScaleBalance,
      label: "Terms and Conditions",
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
        {newWindow ? <IconButton disabled><OpenInNewOutlinedIcon fontSize="small" /></IconButton>: null}
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

function BasicGreetingDiv() {
  return (
    <Paper variant="outlined" sx={{marginTop: theme.spacing(2)}}>
      <Stack
        sx={{
              paddingY: theme.spacing(2),
              paddingX: theme.spacing(2),
            }}
        spacing={theme.spacing(2)}
        alignItems="center"
      >
        <Typography variant="h2" style={{fontWeight: "bold"}} color="text.primary">idecRχiv</Typography>
        <Typography variant="body1" color="text.secondary">The preprint repository for the</Typography>

        <Grid container alignItems="center" justifyContent="center"
        >
        <Grid item xs={3} md={12} lg={3}>
          <Box
            sx={{
              marginX: "auto",
              height: "auto",
              width: "80%",
              [theme.breakpoints.down('lg')]: {
                width: "80px",
              },
              [theme.breakpoints.down('md')]: {
                width: "40px",
                marginRight: "40px",
              },
              [theme.breakpoints.down('sm')]: {
                marginRight: 0,
                width: "80px",
              },
            }}
          >
            <Image
              src="/logo512.png"
              color="#ffffff00"
              aspectRatio={1}
              />
          </Box>
        </Grid>
        <Grid item xs={9} md={12} lg={9}>
          <Typography
            variant="h5"
            color="#2a206a"
            sx={{
              fontWeight: "bold",
              marginLeft: theme.spacing(2),
              [theme.breakpoints.between('md', 'lg')]: {
                textAlign: "center",
                marginX: "auto",
                marginLeft: 0,
                marginTop: theme.spacing(2),
              },
              [theme.breakpoints.between('sm', 'md')]: {
                marginLeft: theme.spacing(-2),
              }
            }}
          >International Directed Evolution Competition</Typography>
        </Grid>
        </Grid>
        <Typography
          variant="body1"
          paragraph
          color="text.secondary"
          sx={{
            fontSize: 14,
            textAlign: "center",
            marginX: theme.spacing(3),
            marginTop: 0
          }}
        >This is the way the life begins. Not with a plan but a competition. - Dr. Martin Borch Jensen</Typography>
      </Stack>
    </Paper>
  )
}

type ArticleCardProps = {
  articleCardInfo: {
      id: number,
      doi: string,
      title: string,
      authors: Array<string>,
      abstract: string,
      teamName: string,
      teamYear: number,
      teamTracks: Array<string>,
      teamWikiURL?: string,
      teamPosterURL?: string,
      teamPresentationURL?: string,
      teamAwards?: Array<{
        name: string,
        result: string,
      }>
    },
}

const mockArticleCardInfo = {
      id: 1,
      doi: "https://doi.org/10.1101/mock-article",
      title: "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod sed do eiusmod Ipsum",
      authors: ["Iyla Elliott", "Brady Figueroa", "Sulayman Howells", "Akash Jordan", "Imogen Conley", "Arda Lawson", "Shaurya Osborne", "Kurtis Burgess", "Marwah Levine", "John-James Ellis", "Pharrell Burgess", "Judah Miller", "Aneurin Medrano", "Nellie Cordova", "Georgie Townsend", "Charleigh Preece", "Chyna Sinclair", "Tiago Calvert"],
      abstract: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      teamName: "Edinburgh",
      teamYear: 2021,
      teamTracks: ["Molecular Evolutionary Machines", "Pathway Evolutionary Outcomes"],
      teamWikiURL: "#",
      teamPosterURL: "#",
      teamPresentationURL: "#",
      teamAwards: [],
}

function ArticleCard({articleCardInfo}: ArticleCardProps) {
  const authors = articleCardInfo.authors.join(", ").slice(0, -2);
  const tracks = articleCardInfo.teamTracks.join(", ").slice(0, -2);
  const href = "/article/" + articleCardInfo.doi.split("/").slice(-1);
  return(
  <Card sx={{ minWidth: 275 }} key={"article-card" + articleCardInfo.id}>
            <CardContent>
              {/* <Stack direction="row" justifyContent="space-between" alignItems="center"> */}
                  {/* <Box padding={0} margin={0}> */}
                  <Typography sx={{ fontSize: 14, fontWeight: "bold"}} color="text.secondary" display="inline">
            iDEC {articleCardInfo.teamYear} | {articleCardInfo.teamName}
                  </Typography>
                  <Typography sx={{ fontSize: 12, }} color="text.secondary">
            {tracks}
                  </Typography>
                  {/* <Typography sx={{ fontSize: 14}} color="text.secondary" marginBottom={1}>
                    Tracks: Molecular Evolutionary Machines, Molecular Evolutionary Outcomes, Pathway Evolutionary Outcomes
                  </Typography> */}

                  {/* <IconButton
                    size="small"
                    sx={{ml: 0.25,}}
                  ><MenuBookOutlinedIcon sx={{fontSize: 15}}/></IconButton>
                   <IconButton
                    size="small"
                  ><svg style={{ width:"15px", height: "15px",}} viewBox="0 0 24 22">
                    <path fill="currentColor" d="M2,3H10A2,2 0 0,1 12,1A2,2 0 0,1 14,3H22V5H21V16H15.25L17,22H15L13.25,16H10.75L9,22H7L8.75,16H3V5H2V3M5,5V14H19V5H5Z" />
                </svg></IconButton>
                  <IconButton
                    size="small"
                  ><VideocamOutlinedIcon sx={{fontSize: 17}}/></IconButton> */}
                  {/* 
                  <Typography sx={{ fontSize: 14}} color="text.secondary" display="inline-flex" marginBottom={1}>|</Typography>
                  </Box> */}
                
                {/* <Typography sx={{ fontSize: 14 }} color="text.secondary">
                  iDEC 2021 | Edinburgh
                </Typography> */}
              {/* </Stack> */}
              {/* <Stack direction="row" spacing={1}>
              <KeyWordChip label="Molecular Evolutionary Machines" />
              <KeyWordChip label="Molecular Evolutionary Outcomes" />
              <KeyWordChip label="Pathway Evolutionary Outcomes" />
              </Stack> */}
              <Typography component="div" sx={{ fontSize:18, fontWeight: "bold", mb: 0.5 }}>
        <Link href={href} underline="hover">{articleCardInfo.title}</Link>
              </Typography>
      <Typography variant="body2">{authors}</Typography>
            </CardContent>
            {/* <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions> */}
          </Card>
  )
}

function Home() {

  // const abstractWindow = (
  //   <Box>
  //     <Typography variant="h6" mt={2}>Abstract</Typography>
  //     <Typography variant="body1">Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
  //   </Box>
  // )

  return (
      <Container>
      <Grid container spacing={0}>
        <Grid item sm={12} md={4} lg={4}>
          <BasicGreetingDiv />
        </Grid>

        <Grid item sm={12} md={8} lg={8}>
          <Box
            sx={{
              padding: theme.spacing(2),
              [theme.breakpoints.down('md')]: {
                paddingX: 0,
              },
            }}
          >
            <Stack spacing={theme.spacing(2)}>
            <ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/><ArticleCard articleCardInfo={mockArticleCardInfo}/>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      </Container>
  )
}

function ArticleLoader() {
  const location = useLocation<Location>().pathname;
  
  return <p>{location}</p>
}

function AppBarBreadcrum() {
  const location = useLocation<Location>().pathname;

  const breadcrumNameMapping: { [key: string]: string } = {
    'terms': 'Terms and Conditions',
    'article': 'Articles',
    "mock-article": "Lorem Ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod sed do eiusmod Ipsum"
  };
  const pathnames = location.split('/').filter((x) => x);

  const linkInBreadcrum = (displayName: string, to?: string, sx?: {}) => {
    if (to) { return (
    <Typography
      variant="h6"
      noWrap={true}
      color="white"
      component={Link}
      href={to}
      sx={sx? sx : {display: "inline", minWidth: 0}}
      >
        {displayName}
      </Typography>
      )
    } else { return (
      <Typography
      variant="h6"
      noWrap={true}
      color="white"
      sx={sx? sx : {display: "inline", minWidth: 0}}
      >
        {displayName}
      </Typography>
    )}

  }

  const breadcrums = pathnames.map((value, index) => {
    const last = index === pathnames.length - 1;
    const to = `/${pathnames.slice(0, index + 1).join('/')}`;

    if (to==="/article") {
      return null;
    }

    return last ? linkInBreadcrum(breadcrumNameMapping[value]) : linkInBreadcrum(breadcrumNameMapping[value], to)
  })

  return (
    <>
    {linkInBreadcrum("idecRχiv", "/", {display: {xs: 'inline-block', sm: 'none'}})}
    <Breadcrumbs
      separator="›"
      component="div"
      sx={{
        "& ol": {
          flexWrap: "nowrap",
          whiteSpace: "nowrap",
        textOverflow: "ellipsis",
        },
        color: "white",
        display: { xs: 'none', sm: 'inline-block' },
        }}
    >
      {linkInBreadcrum("idecRχiv", "/")}
      {breadcrums}
    </Breadcrumbs>
    </>
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
              <AppBarBreadcrum />
              {/* <AppSearchBar /> */}
            </Toolbar>
          </AppBar>

          <Box sx={{ width: "100vw", backgroundColor: "#EAEEF3" }}>
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
              <Route path="/">
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