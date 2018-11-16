import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#7159C1'
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#EAEAEA',
      contrastText: '#7159C1',
    }
  },
});

export default theme;