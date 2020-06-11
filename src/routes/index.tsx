import React, {useMemo} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AuthRoutes from './Auth.routes';
import {useAuth} from '../context/auth';
import AppRoutes from './App.routes';

const Routes: React.FC = () => {
  const {token} = useAuth();

  const ActiveRoute = useMemo(() => {
    return token ? <AppRoutes /> : <AuthRoutes />;
  }, [token]);

  return <NavigationContainer>{ActiveRoute}</NavigationContainer>;
};

export default Routes;
