import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useAuth} from '../../context/auth';
import {useNavigation} from '@react-navigation/native';

const AppSettingsPage: React.FC = () => {
  const {logout} = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    console.log('entrei no baldo...', navigation);
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>App Settings</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default AppSettingsPage;
