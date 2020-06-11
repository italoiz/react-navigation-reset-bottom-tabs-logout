import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from '../../context/auth';
import {useNavigation} from '@react-navigation/native';

const LoginPage: React.FC = () => {
  const {login} = useAuth();
  const {navigate, reset} = useNavigation();

  // useEffect(() => {
  //   return () => {
  //     // reset({index: 1, routes: [{name: 'Login'}]});
  //   };
  // }, [reset]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login Page</Text>
      <Button title="Login" onPress={login} />
      <Button
        title="Reset Password"
        onPress={() => navigate('ResetPassword')}
      />
    </View>
  );
};

export default LoginPage;
