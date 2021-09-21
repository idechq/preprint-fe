import React from 'react';
import { Theme, styled, CSSObject } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import MuiDrawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem  from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';

import PDFViewer from '../components/PDFviewer'
import {
  ArticleInfoItems,
  ArticleTeamInfoItems,
  ArticleCommentItems,
  ArticleAnnotationsItems
} from '../components/articleDrawerContents'

const articleDrawerWidth = 350;
const articleCommentDrawerWidth = 600;

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

type ArticleDisplayPageProps = {
  articleMetadata: {
    id:Number,
      title: string,
      authors: Array<string>,
      abstract: string,
      version: number,
      latest: boolean,
      supplants: string,
      postedDate: string,
      doi: string,
      keywords: Array<string>,
      mainArticleURL: string,
      suppArticleURL: string,
      risURL:string,
    teams: Array<{
        teamName: string,
        teamYear: number,
        teamTracks: Array<string>,
        teamWikiURL: string,
        teamPosterURL: string,
        teamPresentationURL: string,
        teamAwards:Array<{name: string, result: string}>,
    }>
  }
}

export default function ArticleDisplayPage({articleMetadata}: ArticleDisplayPageProps) {

  const articleInfo = (({
    version,
    latest,
    supplants,
    postedDate,
    doi,
    keywords,
    mainArticleURL,
    suppArticleURL,
    risURL
  })=>({
    version,
    latest,
    supplants,
    postedDate,
    doi,
    keywords,
    mainArticleURL,
    suppArticleURL,
    risURL}))(articleMetadata);

  const articleAllTeamsInfo =articleMetadata.teams;
  // It is expected that for the first few years, there will only be one team per article 
  const articleTeamInfo = articleAllTeamsInfo[0]

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
    </React.Fragment>
  )
}