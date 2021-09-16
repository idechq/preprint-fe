import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, alpha, Theme, createTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';

import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import LinkOutlinedIcon from '@material-ui/icons/LinkOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import NoteAddOutlinedIcon from '@material-ui/icons/NoteAddOutlined';
import FormatQuoteOutlinedIcon from '@material-ui/icons/FormatQuoteOutlined';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';

import {
  PdfLoader,
  PdfHighlighter,
  Tip,
  Highlight,
  Popup,
  AreaHighlight,
} from "react-pdf-highlighter";

import type { IHighlight, NewHighlight } from "react-pdf-highlighter";

const mainMenueDrawerWidth = 248;
const articleDrawerWidth = 350;
const articleCommentDrawerWidth = '50vw';

// Material color chosen closest to iDEC themes chosen by Kening
const iDECtheme = createTheme({
  palette: {
    primary: {
      main: "#7c4dff",
    },
    secondary: {
      main: "#2e7d32",
    },
  },
});

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    mainMenuDrawer: {
      width: mainMenueDrawerWidth,
      flexShrink: 0,
    },
    articleDrawer: {
      width: articleDrawerWidth,
      // [theme.breakpoints.down('sm')]: {
      //   width: '100vw',
      // },
      flexShrink: 1,
    },
    articleCommentDrawer: {
      width: articleCommentDrawerWidth,
      flexShrink: 1,
    },
    articleDrawerOpen: {
      width: articleDrawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    articleCommentDrawerOpen: {
      width: articleCommentDrawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    articleDrawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      overflowY: 'hidden',
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(8),
      },
    },
    mainMenuDrawerHeader: {
      display: 'flex',
      padding: theme.spacing(2),
      alignItems: 'center',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-start',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    title: {
      flexGrow: 1,
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    hide: {
      display: 'none',
    },
    search: {
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
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '16ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
    PDFcontainer: {
      // https://github.com/mui-org/material-ui/issues/10739#issuecomment-817742141
      ...overrideExistingStyle(
        theme.mixins.toolbar,
        'minHeight',
        // Full height - toolbar height - padding top - padding bottom
        (value) => `calc(100vh - ${value}px  - 8px)`,
      ),
      //
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: 0,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: `calc(100wh - ${articleDrawerWidth}px)`,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    chipContainer: {
      display: 'flex',
      justifyContent: 'flex-start',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    rightDrawerButtonList: {
      paddingLeft: 0,
    },
  }),
);

function overrideExistingStyle(style, property, setNewValue) {
    return Object.fromEntries(
      Object.entries(style).filter(
        ([key, value]) => key === property || typeof value === 'object',
      ).map(
        ([key, value]) => (
          typeof value === 'object'
            ? [key, overrideExistingStyle(value, property, setNewValue)]
            : [property, setNewValue(value)]
        ),
      ),
    );
  }

function PDFViewer2() {
  const classes = useStyles();
  return (
    <iframe
      className={classes.PDFcontainer}
      style={{flexGrow: 1, width: '100%'

      }}
      title="embeddedPDF" src="/test-pdf.pdf" />

  )
}

function MainMenuItems () {
  const classes = useStyles();
  return (
      <div className={classes.mainMenuDrawer}>
      <div className={classes.toolbar} />
      <div className={classes.mainMenuDrawerHeader}>
            <Typography variant='h5'>Navigation</Typography>
            </div>
      
      <Divider />
      <List subheader={<ListSubheader>Browse articles by</ListSubheader>}>
        <ListItem button key='d1'>
              <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
              <ListItemText
                primary="Year"
              />
            </ListItem>
            <ListItem button key='d2'>
              <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
              <ListItemText
                primary="Track"
              />
            </ListItem>
            <ListItem button key='d3'>
              <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Awards"/>
            </ListItem>
            <ListItem button key='d4'>
              <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
              <ListItemText primary="Keywords"/>
            </ListItem>
        
      </List>
      <Divider />
      <List subheader={<ListSubheader>About iDEC</ListSubheader>}>
        <ListItem button key='d1'>
              <ListItemIcon><LinkOutlinedIcon /></ListItemIcon>
              <ListItemText
                primary="iDEC Main Site"
              />
            </ListItem>
            <ListItem button key='d2'>
              <ListItemIcon><LinkOutlinedIcon /></ListItemIcon>
              <ListItemText
                primary="iDEC Team Portal"
              />
            </ListItem>
            <ListItem button key='d3'>
              <ListItemIcon><LinkOutlinedIcon /></ListItemIcon>
              <ListItemText
                primary="iDEC Wiki"
              />
            </ListItem>
            <ListItem button key='d4'>
              <ListItemIcon><DescriptionOutlinedIcon /></ListItemIcon>
              <ListItemText
                primary="Acknowledgement"
              />
            </ListItem>
      </List>
    </div>
  )
}

function ArticleInfoItems() {
  const classes = useStyles();
  return (
    <>
    <Divider />
    <List dense={true}>
        <ListItem key={1}>
          <ListItemText
            primary="Team: OUC China" secondary="iDEC 2021"
          />
        </ListItem>
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
        <ListItem key={7} className={classes.chipContainer}>
          <KeyWordChip label="directed evolution" />
          <KeyWordChip label="pathway" />
          <KeyWordChip label="automation" />
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

function ArticleTeamInfoItems() {
  const classes = useStyles();
  return (
    <>
    <Divider />
    <List dense={true}>
      <ListSubheader>iDEC 2021 OUC China</ListSubheader>
      <ListItem button key={1}>
        <ListItemIcon><MenuBookOutlinedIcon /></ListItemIcon>
        <ListItemText primary="Project Wiki" />
      </ListItem>
      <ListItem button key={1}>
        <ListItemIcon><DashboardOutlinedIcon /></ListItemIcon>
        <ListItemText primary="Project Poster" />
      </ListItem>
      <ListItem button key={1}>
        <ListItemIcon><OndemandVideoOutlinedIcon /></ListItemIcon>
        <ListItemText primary="Presentation" />
      </ListItem>
    </List>
    <Divider />
    <List
      subheader={<ListSubheader>Team Awards</ListSubheader>}
      dense={true}
      disablePadding>
      <ListItem key="team_awards" className={classes.chipContainer}>
          <AwardChip label="Best poster award" icon={true} />
          <AwardChip label="Nominated Molecular Evolutionary Machines" color="secondary" />
          <AwardChip label="Best wiki award" icon={true} />
        </ListItem>
      {/* <ListItem className={classes.nested} key='a1'>
        <ListItemText primary="Best poster award"/>
      </ListItem>
      <ListItem className={classes.nested} key='a2'>
        <ListItemText primary="Best wiki award"/>
      </ListItem>
      <ListItem className={classes.nested} key='a3'>
        <ListItemText primary="Best Molecular Evolutionary Machines"/>
      </ListItem>      */}
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

type KeyWordChipProps = {
  label?: string,
  color?: "default" | "primary" | "secondary",
  href?: string,
}

function KeyWordChip(
  {label = "label", color = "secondary", href = "#"}: KeyWordChipProps) {
  return (
    <Chip
      label={label}
      size="small"
      component="a"
      color={color}
      href={href} clickable />
  )
}

type AwardChipProps = {
  label?: string,
  color?: "default" | "primary" | "secondary",
  href?: string,
  icon?: boolean,
}

function AwardChip(
  {label = "label", color = "primary", href = "#", icon = false}: AwardChipProps) {
  return (
    <Chip
      label={label}
      size="medium"
      component="a"
      icon={icon? <StarOutlinedIcon /> : undefined}
      color={color}
      href={href} clickable />
  )
}

export default function App() {
  const classes = useStyles();
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


  const renderArticleDrawer = (tabOpened: any) => {
    switch(tabOpened) {
      case "articleInfo":
        return <ArticleInfoItems />;
      case "teamInfo":
        return <ArticleTeamInfoItems />;
      case "comments":
        return <ArticleCommentItems />;
      case "annotations":
        return <ArticleAnnotationsItems />;
      default:
        return <ArticleInfoItems />;
  }};

  return (
    <>
      <ThemeProvider theme={iDECtheme}>
      <React.Fragment key="leftDrawer">
          <Drawer anchor="left"
            className={classes.mainMenuDrawer}
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

      <div className={classes.root}>
        <CssBaseline />
      <AppBar
          color="primary"
          position="fixed"
          className={classes.appBar}
        >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              iDEC Preprint Archive
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search a preprint…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>

            {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={toggleArticleDrawer}
          >
            <MenuIcon />
          </IconButton> */}

          </Toolbar>
      </AppBar>
      
      <main className={clsx(classes.content, {
          [classes.contentShift]: articleDrawerOpen,
        })} >
        <div className={classes.toolbar} />
          <PDFViewer2/>
      </main>
      
      <Drawer
        variant="permanent"
        className={clsx(
        // {
        //   [classes.articleDrawer]: tabOpened!=="comments",
        //   [classes.articleCommentDrawer]: tabOpened==="comments",
        // },
        {
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
                <IconButton id="articleInfo" onClick={handleArticleDrawerOpen}><InfoOutlinedIcon /></IconButton>
              </ListItem>
              <Divider />
              <ListItem className={classes.rightDrawerButtonList}>
                <IconButton id="teamInfo" onClick={handleArticleDrawerOpen}><GroupOutlinedIcon /></IconButton>
              </ListItem>
              <Divider />
              <ListItem className={classes.rightDrawerButtonList}>
                <IconButton id="annotations" onClick={handleArticleDrawerOpen}><BorderColorOutlinedIcon /></IconButton>
              </ListItem>
              <Divider />          
              <ListItem className={classes.rightDrawerButtonList}>
                <IconButton id="comments" onClick={handleArticleDrawerOpen}><CommentOutlinedIcon /></IconButton>
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
      </Drawer>
    </div>

    </ThemeProvider>
    </>
  )

}

