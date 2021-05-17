import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Welcome } from '../pages/Welcome';

const UnauthorizedRoutes: React.FC = () => {
  const navigation = createStackNavigator();

  const { Navigator, Screen } = navigation;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#233240' },
      }}
      initialRouteName="Welcome"
    >
      <Screen name="Welcome" component={Welcome} />
    </Navigator>
  );
};

export default UnauthorizedRoutes;
