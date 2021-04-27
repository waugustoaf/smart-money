import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Report from './pages/Report';
import Routes from './routes';
import { AppProvider } from './hooks';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#6687f2" />
      <SafeAreaView style={{ backgroundColor: '#6687f2', flex: 1 }}>
        <AppProvider>
          <Routes />
        </AppProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
