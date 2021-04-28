import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import { AppProvider } from './hooks';
import { Theme } from './styles/theme';

const App: React.FC = () => {
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
