import React from 'react';
import AppHomePage from '../pages/Home';
import AppSettingsPage from '../pages/Settings';

/**
 * Custom Behabior
 */
// import createBottomTabNavigator from './navigators/BottomTabNavigator';

/**
 * Original Behavior
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AppMainRoutes: React.FC = () => (
  <Tab.Navigator>
    <Tab.Screen name="AppHome" component={AppHomePage} />
    <Tab.Screen name="AppSettings" component={AppSettingsPage} />
  </Tab.Navigator>
);

export default AppMainRoutes;
