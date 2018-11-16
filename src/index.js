import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

ReactDOM.render(<MuiThemeProvider theme={theme}><App/></MuiThemeProvider >, document.getElementById('root'));
registerServiceWorker();