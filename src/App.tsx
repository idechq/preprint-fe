import React, { Component } from "react";
import "./App.css";
import { Location } from "history";
import {
  BrowserRouter as Router,
  Switch as RouterSwitch,
  Route,
  useLocation,
} from "react-router-dom";
import Link from "@mui/material/Link";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Icon from "@mdi/react";
import CircularProgress from "@mui/material/CircularProgress";
import Popper from "@mui/material/Popper";
import Fade from "@mui/material/Fade";

import { Card, CardActions, CardContent } from "@mui/material";
import Button from "@mui/material/Button";

import {
  mdiFormatListBulleted,
  mdiCalendarClock,
  mdiDirectionsFork,
  mdiSealVariant,
  mdiHome,
  mdiBadgeAccountHorizontal,
  mdiBookshelf,
  mdiRedhat,
  mdiScaleBalance,
} from "@mdi/js";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import theme from "./styles/theme";
import DrawerHeader from "./components/DrawerHeader";
import ArticleDisplayPage from "./pages/ArticleDisplayPage";
import { Acknowledgements, Terms } from "./pages/StaticPages";
import ScreenHeightDiv from "./components/ScreenHeightDiv";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import FoundationOutlinedIcon from "@mui/icons-material/FoundationOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import { mdiPresentation, mdiTrophyVariant } from "@mdi/js";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

import KeyWordChip from "./components/CustomChips";

import Breadcrumbs from "@mui/material/Breadcrumbs";

// Mock info
import realDataJSON from './exampleJSON/realData.json'
// import mockSearchResult from './test/mockSearchResult';
// const mockInfo = JSON.parse(JSON.stringify(mockInfoJson[0]));
const realData = JSON.parse(JSON.stringify(realDataJSON));

// API call
const apiURL = "https://06935b22-e063-4e84-bc7b-18d1fa7ae50d.mock.pstmn.io";
const getArticleListURL = apiURL + "/articles";

const mainMenueDrawerWidth = 270;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "16ch",
      "&:focus": {
        width: "24ch",
      },
    },
  },
}));

function AppSearchBar() {
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search article…"
        inputProps={{ "aria-label": "search" }}
      />
    </Search>
  );
}

function MainMenuItems() {
  const browseByInfo = [
    { key: "all", icon: <ListAltOutlinedIcon />, label: "All", href: "/" },
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
  ];

  const iDECLinkInfo = [
    {
      key: "link-main-site",
      icon: <Icon path={mdiHome} size={1} />,
      label: "iDEC Home",
      href: "https://idec.io/",
      newWindow: true,
    },
    {
      key: "link-team-portal",
      icon: <Icon path={mdiBadgeAccountHorizontal} size={1} />,
      label: "iDEC Team Portal",
      href: "https://reg.idec.io/",
      newWindow: true,
    },
    {
      key: "link-idec-wiki",
      icon: <Icon path={mdiBookshelf} size={1} />,
      label: "iDEC Wiki",
      href: "https://wiki.idec.io/",
      newWindow: true,
    },
    {
      key: "link-acknowledgement",
      icon: <Icon path={mdiRedhat} size={1} />,
      label: "Acknowledgements",
      href: "/acknowledgements",
    },
    {
      key: "link-terms",
      icon: <Icon path={mdiScaleBalance} size={1} />,
      label: "Terms and Conditions",
      href: "/terms",
    },
  ];

  const listItemLink = ({
    key,
    icon,
    label,
    href,
    newWindow,
  }: {
    key: string;
    icon: any;
    label: string;
    href: string;
    newWindow?: boolean;
  }) => {
    return (
      <ListItemButton
        key={key}
        component="a"
        href={href}
        target={newWindow ? "_blank" : ""}
        rel={newWindow ? "noreferrer" : ""}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {newWindow ? (
          <IconButton disabled>
            <OpenInNewOutlinedIcon fontSize="small" />
          </IconButton>
        ) : null}
      </ListItemButton>
    );
  };

  return (
    <div style={{ width: mainMenueDrawerWidth, flexShrink: 0 }}>
      <div
        style={{
          display: "flex",
          padding: theme.spacing(2),
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Navigation</Typography>
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
  );
}

function BasicGreetingDiv() {
  return (
    <Paper variant="outlined" sx={{ marginTop: theme.spacing(2) }}>
      <Stack
        sx={{
          paddingY: theme.spacing(2),
          paddingX: theme.spacing(2),
        }}
        spacing={theme.spacing(2)}
        alignItems="center"
      >
        <Typography
          variant="h2"
          style={{ fontWeight: "bold" }}
          color="text.primary"
        >
          idecRχiv
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The preprint repository for the
        </Typography>

        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={3} md={12} lg={3}>
            <Box
              sx={{
                marginX: "auto",
                height: "auto",
                width: "80%",
                [theme.breakpoints.down("lg")]: {
                  width: "80px",
                },
                [theme.breakpoints.down("md")]: {
                  width: "40px",
                  marginRight: "40px",
                },
                [theme.breakpoints.down("sm")]: {
                  marginRight: 0,
                  width: "80px",
                },
              }}
            >
              <img
                width="100%"
                height="100%"
                src="/logo512.png"
                alt="iDEC logo"
                // color="#ffffff00"
                // aspectRatio={1}
                // animationDuration={0}
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
                [theme.breakpoints.between("md", "lg")]: {
                  textAlign: "center",
                  marginX: "auto",
                  marginLeft: 0,
                  marginTop: theme.spacing(2),
                },
                [theme.breakpoints.between("sm", "md")]: {
                  marginLeft: theme.spacing(-2),
                },
              }}
            >
              International Directed Evolution Competition
            </Typography>
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
            marginTop: 0,
          }}
        >
          This is the way the life begins. Not with a plan but a competition. -
          Dr. Martin Borch Jensen
        </Typography>
      </Stack>
    </Paper>
  );
}

type ArticleCardProps = {
  articleCardInfo: {
    id: number;
    doi: string;
    title: string;
    authors: Array<string>;
    abstract: string;
    teams: Array<{
      teamName: string;
      teamYear: number;
      teamTracks: Array<string>;
      teamWikiURL?: string;
      teamPosterURL?: string;
      teamPresentationURL?: string;
      teamAwards?: Array<{
        name?: string;
        result?: string;
      }>;
    }>;
  };
  id: number;
};

function LoadingArticleCard({ id }: { id?: number }) {
  return (
    <Card sx={{ minWidth: 275 }} key={"mock-article-card" + id}>
      <CardContent>
        <Typography
          sx={{ fontSize: 14, fontWeight: "bold" }}
          color="text.secondary"
          display="inline"
        >
          <Skeleton variant="text" width="20%" />
        </Typography>
        <Typography sx={{ fontSize: 12 }} color="text.secondary">
          <Skeleton variant="text" width="40%" />
        </Typography>
        <Typography
          component="div"
          sx={{ fontSize: 18, fontWeight: "bold", mb: 0.5 }}
        >
          <Skeleton variant="text" width="100%" height="3em" />
        </Typography>
        <Typography variant="body2">
          <Skeleton variant="text" width="70%" height="2em" />
        </Typography>
      </CardContent>
    </Card>
  );
}

function ArticleCard({ articleCardInfo, id }: ArticleCardProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [popperOpen, setPopperOpen] = React.useState(false);
  const handlePopperOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setPopperOpen(true);
  };
  const handlePopperClose = () => {
    setTimeout(() => {
      setAnchorEl(null);
      setPopperOpen(false);
    }, 0);
  };

  const authors = articleCardInfo.authors.join(", ");
  const href =
    "/article/" + articleCardInfo.id.toString().padStart(6, "0") + "/";
  const teamInfo = articleCardInfo.teams[0];
  const tracks = teamInfo.teamTracks.join(", ");

  const abstractParagraphs = articleCardInfo.abstract
    .split("\n")
    .map((para, index) => (
      <Typography key={"abstractParagraph-" + id + "-" + index}>
        {para}
      </Typography>
    ));

  return (
    <React.Fragment>
      <Box onMouseEnter={handlePopperOpen} onMouseLeave={handlePopperClose}>
        <Popper
          className="abstract-popper"
          key={"abstract-popover" + id}
          id={"mouse-over-popover" + id}
          open={popperOpen}
          anchorEl={anchorEl}
          placement="left-start"
          transition
          disablePortal={false}
          modifiers={[
            {
              name: "flip",
              enabled: true,
              options: {
                altBoundary: true,
                rootBoundary: "viewport",
                padding: 8,
              },
            },
            {
              name: "preventOverflow",
              enabled: true,
              options: {
                altAxis: true,
                altBoundary: true,
                tether: true,
                rootBoundary: "viewport",
                padding: 8,
              },
            },
          ]}
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper
                elevation={3}
                sx={{
                  padding: theme.spacing(3),
                  [theme.breakpoints.down("md")]: {
                    display: "none",
                  },
                  width: "32vw",
                  height: "80vh",
                  overflowY: "auto",
                  marginRight: theme.spacing(1),
                }}
              >
                <Typography variant="h6">Abstract</Typography>
                <Stack spacing={theme.spacing(2)}>{abstractParagraphs}</Stack>
              </Paper>
            </Fade>
          )}
        </Popper>
        <Card sx={{ minWidth: 275 }} key={"article-card" + articleCardInfo.id}>
          <CardContent>
            {/* <Stack direction="row" justifyContent="space-between" alignItems="center"> */}
            {/* <Box padding={0} margin={0}> */}
            <Typography
              sx={{ fontSize: 14, fontWeight: "bold" }}
              color="text.secondary"
              display="inline"
            >
              iDEC {teamInfo.teamYear} | {teamInfo.teamName}
            </Typography>
            <Typography sx={{ fontSize: 12 }} color="text.secondary">
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
            <Typography
              component="div"
              sx={{ fontSize: 18, fontWeight: "bold", mb: 0.5 }}
            >
              <Link href={href} underline="hover">
                {articleCardInfo.title}
              </Link>
            </Typography>
            <Typography variant="body2">{authors}</Typography>
          </CardContent>
          {/* <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions> */}
        </Card>
      </Box>
    </React.Fragment>
  );
}

function ArticleList() {
  const [error, setError] = React.useState<Error | null>(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [articleListJSON, setArticleListJSON] = React.useState([]);

  React.useEffect(() => {
    setArticleListJSON(realData);
    setIsLoaded(true);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    const dummyArray = Array.from(Array(3).keys());
    return (
      <React.Fragment>
        {dummyArray.map((item, index) => (
          <LoadingArticleCard key={index} id={index} />
        ))}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        {articleListJSON.map((articleListEssentialInfo, index) => (
          <ArticleCard
            articleCardInfo={articleListEssentialInfo}
            key={"articleCard-" + index}
            id={index}
          />
        ))}
      </React.Fragment>
    );
  }
}

function Home() {
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
              [theme.breakpoints.down("md")]: {
                paddingX: 0,
              },
            }}
          >
            <Stack spacing={theme.spacing(2)}>
              <ArticleList />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

const defaultArticleJSON = [
  {
    id: 0,
    title: "",
    authors: [],
    abstract: "",
    version: 0,
    latest: true,
    supersedes: -1,
    supersededBy: -1,
    postedTime: "0000-00-00T00:00:00.000Z",
    doi: "#",
    keywords: [],
    license: "CC-BY-4.0 License",
    mainArticleURL: "#",
    suppArticleURL: "#",
    risURL: "#",
    teams: [
      {
        teamName: "",
        teamYear: 0,
        teamTracks: [],
        teamWikiURL: "#",
        teamPosterURL: "#",
        teamPresentationURL: "#",
        teamAwards: [
          {
            name: "",
            result: "",
          },
        ],
      },
    ],
  },
];

type ArticleLoaderProps = {
  isLoaded: boolean;
  setIsLoaded: Function;
  setAppbarArticleTitle: Function;
};

function ArticleLoader({
  isLoaded,
  setIsLoaded,
  setAppbarArticleTitle,
}: ArticleLoaderProps) {
  const location = useLocation<Location>().pathname;

  const [error, setError] = React.useState<Error | null>(null);
  const [articleJSON, setArticleJSON] = React.useState(defaultArticleJSON);

  const articleID = parseInt(location.split("/").filter((item)=>item).at(-1));
  const articleInfo = realData.filter((item)=> item.id===articleID);
  React.useEffect(() => {
    setArticleJSON(articleInfo);
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return (
      <ScreenHeightDiv
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.spacing(4),
        }}
      >
        <CircularProgress color="secondary" size="5em" />
      </ScreenHeightDiv>
    );
  } else if (articleJSON.hasOwnProperty(0)) {
    setIsLoaded(true);
    setAppbarArticleTitle(articleJSON[0].title);
    return <ArticleDisplayPage articleMetadata={articleJSON[0]} />;
  } else {
    setIsLoaded(true);
    return <NoMatch />;
  }
}

type AppBarBreadcrumProp = { isLoaded: boolean; breadCrumLabel?: string };

function AppBarBreadcrum({
  isLoaded = true,
  breadCrumLabel = undefined,
}: AppBarBreadcrumProp) {
  const location = useLocation<Location>().pathname;
  const pathnames = location.split("/").filter((x) => x);

  const breadcrumNameMapping: { [key: string]: string } = {
    terms: "Terms and Conditions",
    article: "Articles",
    acknowledgements: "Acknowledgements",
  };

  const linkInBreadcrum = (
    displayName: string,
    id?: number,
    to?: string,
    sx?: {}
  ) => {
    if (to) {
      return (
        <Typography
          key={"breadcrumLink-" + id}
          variant="h6"
          noWrap={true}
          color="white"
          component={Link}
          href={to}
          sx={sx ? sx : { display: "inline", minWidth: 0 }}
        >
          {displayName}
        </Typography>
      );
    } else {
      return (
        <Typography
          key={"breadcrumLink-" + id}
          variant="h6"
          noWrap={true}
          color="white"
          sx={sx ? sx : { display: "inline", minWidth: 0 }}
        >
          {displayName}
        </Typography>
      );
    }
  };

  const breadcrums = pathnames.map((value, index) => {
    const last = index === pathnames.length - 1;
    const to = `/${pathnames.slice(0, index + 1).join("/")}`;

    if (to === "/article") {
      return null;
    }

    if (
      breadcrumNameMapping.hasOwnProperty(value) === false &&
      !breadCrumLabel
    ) {
      return linkInBreadcrum("404 Not Found", 404);
    } else if (breadCrumLabel) {
      return linkInBreadcrum(breadCrumLabel);
    }
    return last
      ? linkInBreadcrum(breadcrumNameMapping[value], index)
      : linkInBreadcrum(breadcrumNameMapping[value], index, to);
  });

  if (!isLoaded) {
    return <>{linkInBreadcrum("Loading ...")}</>;
  } else {
    return (
      <>
        {linkInBreadcrum("idecRχiv", 0, "/", {
          display: { xs: "inline-block", sm: "none" },
        })}
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
            display: { xs: "none", sm: "inline-block" },
          }}
        >
          {linkInBreadcrum("idecRχiv", 100, "/")}
          {breadcrums}
        </Breadcrumbs>
      </>
    );
  }
}

function NoMatch() {
  return (
    <ScreenHeightDiv
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(4),
      }}
    >
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{
          mx: "auto",
          my: "auto",
        }}
      >
        404 - Page requested does not exist
      </Typography>
    </ScreenHeightDiv>
  );
}

export default function App() {
  const [mainMenuState, setMainMenuState] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [appbarArticleTitle, setAppbarArticleTitle] =
    React.useState<string>("");

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
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
            <Drawer
              anchor="left"
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

          <Box sx={{ display: "flex" }}>
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
                <AppBarBreadcrum
                  isLoaded={isLoaded}
                  breadCrumLabel={appbarArticleTitle}
                />
                {/* <AppSearchBar /> */}
              </Toolbar>
            </AppBar>

            <Box sx={{ width: "100vw", backgroundColor: "#EAEEF3" }}>
              <DrawerHeader />
              <RouterSwitch>
                <Route path="/article/*">
                  <ArticleLoader
                    isLoaded={isLoaded}
                    setIsLoaded={setIsLoaded}
                    setAppbarArticleTitle={setAppbarArticleTitle}
                  />
                </Route>
                <Route path="/terms">
                  <Terms />
                </Route>
                <Route path="/acknowledgements">
                  <Acknowledgements />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="*">
                  <NoMatch />
                </Route>
              </RouterSwitch>
            </Box>
          </Box>
        </ThemeProvider>
      </React.Fragment>
    </Router>
  );
}
