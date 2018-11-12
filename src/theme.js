import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple.A200
    },
    secondary: {
      main: '#FFFFFF',
      dark: '#EAEAEA',
      contrastText: deepPurple.A200,
    }
  },
});

export default theme;