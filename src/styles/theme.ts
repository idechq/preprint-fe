import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // Material color chosen closest to iDEC themes chosen by Kening
  palette: {
    primary: {
      main: '#7e57c2'
      // main: "#2a206a",
    },
    secondary: {
      main: '#43a047',
      // main: "#00ad66",
    },
  },
});

export default theme;