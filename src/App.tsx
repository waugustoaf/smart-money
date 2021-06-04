import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import { AppProvider } from './hooks';
import Routes from './routes';
import { Theme } from './styles/theme';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Theme>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#233240" />
        <SafeAreaView style={{ backgroundColor: '#233240', flex: 1 }}>
          <AppProvider>
            <Routes />
          </AppProvider>
        </SafeAreaView>
      </NavigationContainer>
    </Theme>
  );
};

export default App;
