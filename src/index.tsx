import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './app/appConatiner';
import './index.css';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import {store, history} from './store/store';
import { ConnectedRouter } from 'connected-react-router'
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
  </Provider>
  , document.getElementById('root') as HTMLElement
);
registerServiceWorker();
