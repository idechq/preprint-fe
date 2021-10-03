import React from 'react';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import Divider from '@mui/material/Divider';
import ListItem  from '@mui/material/ListItem';
import ListItemButton  from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';

import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

import Icon from '@mdi/react';
import { 
        mdiPresentation,
        mdiTrophyVariant,
      } from '@mdi/js';

import theme from '../styles/theme'
import KeyWordChip from './CustomChips'


type articleInfoProps = {
  articleInfo: {
    version: number,
    latest: boolean,
    supersedes: number,
    supersededBy: number,
    postedTime: string,
    doi: string,
    keywords: Array<string>,
    license: string,
    mainArticleURL: string,
    suppArticleURL: string,
    risURL: string,
  }
}

function ArticleInfoItems({articleInfo}: articleInfoProps) {

  const postedDate = articleInfo.postedTime.slice(0, 10);

  const keywordChips = articleInfo.keywords.map((item) => <KeyWordChip label={item} /> );

  const downloadButtonInfo = [
    {
      id: "main",
      icon: <DescriptionOutlinedIcon />,
      label: "Main Article",
      href: articleInfo.mainArticleURL,
    },
    {
      id: "supp",
      icon: <NoteAddOutlinedIcon />,
      label: "Supplementary Information",
      href: articleInfo.suppArticleURL,
    },
    {
      id: "ris",
      icon: <FormatQuoteOutlinedIcon />,
      label: "Citation",
      href: articleInfo.risURL,
    },
  ];

  const downloadButtons = downloadButtonInfo.map((item)=>{
    return(
      <ListItemButton
        key={"listKey-dlBtn-"+item.id}
        component="a"
        href={item.href}
        disabled={item.href==="#"}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.label} />
      </ListItemButton>
  )})

  const [copyDOItoolTipText, setCopyDOItoolTipText] = React.useState<"Copy DOI to clipboard" | "DOI Copied">("Copy DOI to clipboard")
  const copyDOI = () => {
    navigator.clipboard.writeText(articleInfo.doi);
    setCopyDOItoolTipText("DOI Copied");
    setTimeout(() => {  setCopyDOItoolTipText("Copy DOI to clipboard"); }, 1000);
  }

  return (
    <>
    <List dense={true}>
        <ListItem key="listKey-postedDate">
          <ListItemText>Posted: {postedDate}</ListItemText>
        </ListItem>
        <Tooltip
          arrow
          title={copyDOItoolTipText}
        >
        <ListItemButton
          key="listKey-doi"
          onClick={copyDOI}
          disabled={articleInfo.doi==="#"? true : false}
        >
          <ListItemText
            primary="DOI:"
            secondary={articleInfo.doi==="#"? "(To Be Assigned)" : articleInfo.doi}
          />
        </ListItemButton>
        </Tooltip>
         <ListItem key="listKey-license">
          <ListItemText
            primary="License"
            secondary={articleInfo.license}
          />
        </ListItem>
        <ListItem key="listKey-version">
          <ListItemText
            primary={"Version " + articleInfo.version}
            secondary={articleInfo.latest ? "latest" : ""}
          />
        </ListItem>
        {articleInfo.supersedes !== -1 ?
        <ListItemButton
          key="listKey-supersedes"
          component="a"
          href={"/article/" + articleInfo.supersedes.toString().padStart(6, "0") + "/"}
        >
          <ListItemText
            primary="Supersedes"
            secondary={articleInfo.supersedes}
          />
        </ListItemButton>
        : null
        }
        {articleInfo.supersededBy !== -1 ?
        <ListItemButton
          key="listKey-supersededBy"
          component="a"
          href={"/article/" + articleInfo.supersededBy.toString().padStart(6, "0") + "/"}
        >
          <ListItemText
            primary="Superseded by"
            secondary={articleInfo.supersededBy}
          />
        </ListItemButton>
        : null
        }
        <ListItem key="listKey-keywords-title">
          <ListItemText
            primary="Keywords"
          />
        </ListItem>
        <ListItem key="listKey-keywords-chips">
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 8px",
            }}
          >
            {keywordChips}
          </Box>
        </ListItem>
    </List>
    <Divider />
    <List subheader={<ListSubheader>Download</ListSubheader>}>
      {downloadButtons}
    </List>
    </>
  )
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

  const teamTracksItems = teamInfo.teamTracks.map((item, key)=>{
    return(
      <ListItem style={{paddingLeft: theme.spacing(4), paddingTop: 0, paddingBottom: 0}}>
      <ListItemText>
      {/* <Link
        key={"listKey-track"+key}
        href="#"
        underline="hover"
      > */}
      {item}
      {/* </Link> */}
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
      icon: <VideocamOutlinedIcon />,
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
        disabled={ item.href==="#" }
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

export {
  ArticleInfoItems,
  ArticleTeamInfoItems,
  ArticleCommentItems,
  ArticleAnnotationsItems
};