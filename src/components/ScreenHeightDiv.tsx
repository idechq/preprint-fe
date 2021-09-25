
import { styled } from '@mui/material/styles';

const ScreenHeightDiv = styled('div')(({ theme }) => ({
  // flexGrow: 1,
  width: "100%",
  height: `calc(100vh - 64px)`,
  [theme.breakpoints.down('sm')]: {
    height: `calc(100vh - 56px)`,
  },
}));

export default ScreenHeightDiv;