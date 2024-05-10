// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import React from 'react';
import {Provider} from 'react-redux';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import store from './src/Store/store';

const Sustainability = () => (
  <Provider store={store}>
      <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => Sustainability);
