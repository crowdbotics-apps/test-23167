import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile181765Navigator from '../features/UserProfile181765/navigator';
import Maps181746Navigator from '../features/Maps181746/navigator';
import Settings181724Navigator from '../features/Settings181724/navigator';
import Settings181709Navigator from '../features/Settings181709/navigator';
import NotificationList181708Navigator from '../features/NotificationList181708/navigator';
import Maps181707Navigator from '../features/Maps181707/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile181765: { screen: UserProfile181765Navigator },
Maps181746: { screen: Maps181746Navigator },
Settings181724: { screen: Settings181724Navigator },
Settings181709: { screen: Settings181709Navigator },
NotificationList181708: { screen: NotificationList181708Navigator },
Maps181707: { screen: Maps181707Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
