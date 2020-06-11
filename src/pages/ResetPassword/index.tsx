import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const ResetPasswordPage: React.FC = () => {
  const {navigate} = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Reset Password Page</Text>
      <Button title="Login" onPress={() => navigate('Login')} />
    </View>
  );
};

export default ResetPasswordPage;
