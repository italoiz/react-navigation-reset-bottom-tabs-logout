/**
 * Use custom navigator to extends behavior of Navigator, in this case is BottomTabNavigator.
 * @see https://reactnavigation.org/docs/custom-navigators
 */
import React, {useEffect} from 'react';
import {
  createNavigatorFactory,
  useNavigationBuilder,
  DefaultNavigatorOptions,
  TabRouterOptions,
} from '@react-navigation/native';
import {
  BottomTabView,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {BottomTabNavigationConfig} from '@react-navigation/bottom-tabs/lib/typescript/src/types';

import {BottomTabRouter} from './router';

type Props = DefaultNavigatorOptions<BottomTabNavigationOptions> &
  TabRouterOptions &
  BottomTabNavigationConfig;

const BottomTabNavigator: React.FC<Props> = ({
  initialRouteName,
  backBehavior,
  screenOptions,
  children,
  ...rest
}) => {
  const {state, descriptors, navigation} = useNavigationBuilder(
    BottomTabRouter,
    {
      initialRouteName,
      backBehavior,
      screenOptions,
      children,
    },
  );

  useEffect(
    () => () => {
      /**
       * Without router.
       */
      navigation.reset({index: 0, routes: [{name: 'AppHome'}]});

      /**
       * With Router
       */
      (navigation as any).resetBottomTab();
    },
    [navigation],
  );

  return (
    <BottomTabView
      {...rest}
      state={state}
      navigation={navigation}
      descriptors={descriptors}
    />
  );
};

export default createNavigatorFactory(BottomTabNavigator);
