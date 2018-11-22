import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

import { Provider } from 'react-redux';
import store from './store/';

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App/>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
registerServiceWorker();