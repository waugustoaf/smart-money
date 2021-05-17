import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import NewEntry from '../pages/NewEntry';
import Report from '../pages/Report';

const AuthenticatedRoutes: React.FC = () => {
  const navigation = createStackNavigator();

  const { Navigator, Screen } = navigation;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: '#233240' },
      }}
      initialRouteName="Home"
    >
      <Screen name="Home" component={Home} />
      <Screen name="NewEntry" component={NewEntry} />
      <Screen name="Report" component={Report} />
    </Navigator>
  );
};

export default AuthenticatedRoutes;
