import { AppRegistry } from 'react-native';

import App from './app.ios'
import Share from './share.ios'
import NewShare from './NewShare.ios'

AppRegistry.registerComponent('Sample1', () => App);
AppRegistry.registerComponent('MyShareEx', () => Share);
AppRegistry.registerComponent('NewShare', () => NewShare);
