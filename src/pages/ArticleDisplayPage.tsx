import React from "react";
import { Theme, styled, CSSObject } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Tooltip from "@mui/material/Tooltip";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import PDFViewer from "../components/PDFviewer";
import {
  ArticleInfoItems,
  ArticleTeamInfoItems,
  ArticleCommentItems,
  ArticleAnnotationsItems,
} from "../components/ArticleDrawerContents";

import theme from "../styles/theme";
import DrawerHeader from "../components/DrawerHeader";
import ScreenHeightDiv from "../components/ScreenHeightDiv";
import useMediaQuery from "@mui/material/useMediaQuery";

const articleDrawerWidth = 350;
const articleCommentDrawerWidth = "40vw";

const openedMixin = (theme: Theme, wideDrawer: boolean | undefined): CSSObject => ({
  width: ! wideDrawer ? articleDrawerWidth : articleCommentDrawerWidth,
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
  },
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme, wideDrawer: boolean | undefined): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(8)} + 1px)`,
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
});

const Main = styled("div", { shouldForwardProp: (prop) => prop !== "open" && prop !== "wide" })<{
  open?: boolean; wideDrawer?: boolean;
}>(({ theme, open, wideDrawer }) => ({
  // backgroundColor: "blue", //Used for checking div stretch
  width: `calc(100vw - (${theme.spacing(8)}) - 1px)`,
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
    marginRight: 0,
  },
  ...(open && ! wideDrawer && {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100vw - (${articleDrawerWidth}px))`,
  }),
  ...(open && wideDrawer && {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen * 1.7,
    }),
    width: `calc(100vw - ${articleCommentDrawerWidth})`,
  }),
}));

const ArticleDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "wide",
})<{open?: boolean, wideDrawer?: boolean}>(({ theme, open, wideDrawer }) => ({
  width: ! wideDrawer ? articleDrawerWidth : articleCommentDrawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme, wideDrawer),
    "& .MuiDrawer-paper": openedMixin(theme, wideDrawer),
  }),
  ...(!open && {
    ...closedMixin(theme, wideDrawer),
    "& .MuiDrawer-paper": closedMixin(theme, wideDrawer),
  }),
}));

type ArticleDisplayPageProps = {
  articleMetadata: {
    id: number;
    title: string;
    authors: Array<string>;
    abstract: string;
    version: number;
    latest: boolean;
    supersedes: number;
    supersededBy: number;
    postedTime: string;
    doi: string;
    keywords: Array<string>;
    license: string;
    mainArticleURL: string;
    suppArticleURL: string;
    risURL: string;
    teams: Array<{
      teamName: string;
      teamYear: number;
      teamTracks: Array<string>;
      teamWikiURL: string;
      teamPosterURL: string;
      teamPresentationURL: string;
      teamAwards: Array<{ name: string; result: string }>;
    }>;
  };
};

export default function ArticleDisplayPage({
  articleMetadata,
}: ArticleDisplayPageProps) {
  const articleInfo = (({
    version,
    latest,
    supersedes,
    supersededBy,
    postedTime,
    doi,
    keywords,
    license,
    mainArticleURL,
    suppArticleURL,
    risURL,
  }) => ({
    version,
    latest,
    supersedes,
    supersededBy,
    postedTime,
    doi,
    keywords,
    license,
    mainArticleURL,
    suppArticleURL,
    risURL,
  }))(articleMetadata);

  const articleAllTeamsInfo = articleMetadata.teams;
  // It is expected that for the first few years, there will only be one team per article
  const articleTeamInfo = articleAllTeamsInfo[0];

  // Should turn the following into useReducer for better management
  const [articleDrawerOpen, setDrawerOpen] = React.useState(false);
  const [tabOpened, setTabOpened] = React.useState<string | null>(
    "articleDisplay"
  );
  const [tabName, setTabName] = React.useState<string | null>(
    "Article Information"
  );

  const handleArticleDrawerOpen = (e: React.MouseEvent): void => {
    setDrawerOpen(true);
    const iconButtonID = e.currentTarget.getAttribute("id");
    setTabOpened(iconButtonID);
    updateTapName(iconButtonID);
  };

  const handleArticleDrawerClose = () => {
    setDrawerOpen(false);
  };

  // Extra work for xs screen
  // useStates for BottomNavigation
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const articleDrawerMinimizedButtonInfo = [
    { id: "teamInfo", icon: <GroupOutlinedIcon />, disabled: false },
    { id: "articleInfo", icon: <InfoOutlinedIcon />, disabled: false },
    { id: "comments", icon: <CommentOutlinedIcon />, disabled: false },
    // { id: "annotations", icon: <BorderColorOutlinedIcon />, disabled: true },
  ];

  const articleDrawerMinimizedButtons = articleDrawerMinimizedButtonInfo.map(
    (item) => {
      return (
        <ListItem key={"listKey-" + item.id} sx={{ paddingLeft: 1 }}>
          <IconButton
            id={item.id}
            onClick={handleArticleDrawerOpen}
            size="large"
            disabled={item.disabled}
          >
            {item.icon}
          </IconButton>
        </ListItem>
      );
    }
  );

  const updateTapName = (iconButtonID: string | null) => {
    switch (iconButtonID) {
      case "articleInfo":
        setTabName("Article Information");
        break;
      case "teamInfo":
        setTabName("iDEC Team Information");
        break;
      case "comments":
        setTabName("Article Comments");
        break;
      case "annotations":
        setTabName("Article Annotations");
        break;
      default:
        setTabName("Article Information");
    }
  };

  const renderArticleDrawer = (tabOpened: any) => {
    switch (tabOpened) {
      case "articleDisplay":
        return null;
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
    }
  };

  return (
    <React.Fragment>
      <Main open={articleDrawerOpen} wideDrawer={tabOpened==="comments"? true : false}>
        <ScreenHeightDiv
          sx={{
            [theme.breakpoints.down("sm")]: {
              height: `calc(100vh - 56px - 56px)`,
            },
          }}
        >
          {tabOpened !== "articleDisplay" && isSmallScreen ? (
            <Paper
              sx={{
                overflowY: "auto",
                paddingX: theme.spacing(2),
                paddingY: theme.spacing(3),
                height: "100%",
                [theme.breakpoints.up("sm")]: {
                  display: "none",
                },
              }}
            >
              {renderArticleDrawer(tabOpened)}
            </Paper>
          ) : (
            <PDFViewer articleHref={articleInfo.mainArticleURL} />
          )}
        </ScreenHeightDiv>
      </Main>
      <Paper
        sx={{
          [theme.breakpoints.up("sm")]: { display: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={tabOpened}
          onChange={(event, newValue) => {
            setTabOpened(newValue);
          }}
        >
          <BottomNavigationAction
            label="Show Article"
            value="articleDisplay"
            icon={<ArticleOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Team Info"
            value="teamInfo"
            icon={<GroupOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Article Info"
            value="articleInfo"
            icon={<InfoOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>

      <ArticleDrawer
        variant="permanent"
        open={articleDrawerOpen}
        wideDrawer={tabOpened==="comments"? true : false}
        anchor="right"
      >
        <Toolbar />
        {articleDrawerOpen ? (
          // Opened tab contains tabName and clickable header for closing drawer
          <>
            <DrawerHeader>
              <Tooltip arrow title="Hide Drawer">
                <ListItem button onClick={handleArticleDrawerClose}>
                  <ChevronRightIcon />
                  <Typography>{tabName}</Typography>
                </ListItem>
              </Tooltip>
              <Divider />
            </DrawerHeader>
            {renderArticleDrawer(tabOpened)}
          </>
        ) : (
          <List>{articleDrawerMinimizedButtons}</List>
        )}
      </ArticleDrawer>
    </React.Fragment>
  );
}
