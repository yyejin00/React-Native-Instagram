/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import PushNotification from 'react-native-push-notification';
AppRegistry.registerComponent(appName, () => App);

/* PushNotification.configure({
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },

  popInitialNotification: true,
  requestPermissions: Platform.OS === 'ios',
}); */
