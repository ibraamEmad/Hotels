import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, } from 'react-native';

import { Provider } from 'react-redux';
import store from './src/store';
import Navigator from './src/navigation';
import ErrorBoundary from './src/screens/ErrorBoundary'

LogBox.ignoreAllLogs(true);


export default class App extends React.Component {
  state = {
      isConnected: true,
      keyboard:false,
      isLoggedIn:false,
      isLoading:false
    };

  
  render() {
  return (
  <ErrorBoundary>
  <Provider store={store} >
  {/* <StatusBar
      backgroundColor="#0B121A"
      barStyle="light-content"
    /> */}
      <Navigator/>
   </Provider>
   </ErrorBoundary>
  );
  }
  }

