import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from '../pages/Login';
import ResetPasswordPage from '../pages/ResetPassword';
const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <AuthStack.Screen name="Login" component={LoginPage} />
    <AuthStack.Screen name="ResetPassword" component={ResetPasswordPage} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
