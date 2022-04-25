/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';

import Header from './src/header/header';

// import Register from './src/Register';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// AppRegistry.registerComponent(appName, ()=>Register);


// AppRegistry.registerComponent(appName, () => Header);