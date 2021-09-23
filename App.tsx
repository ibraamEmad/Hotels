import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';
import Navigator from './src/navigation';
import ErrorBoundary from './src/screens/ErrorBoundary'

LogBox.ignoreAllLogs(true);


export default class App extends React.Component {

  render() {
    return (
      <ErrorBoundary>
        <Provider store={store} >
          <Navigator />
        </Provider>
      </ErrorBoundary>
    );
  }
}

