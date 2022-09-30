import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './src/features/store'
import WelcomeScreen from './src/screens/WelcomeScreen'
import SignUp from './src/components/SignUp';
import BottomTab from './src/navigation/BottomTab';

export default function App() {
  return (
    <Provider store={store}>
      {/* <WelcomeScreen /> */}
      {/* <SignUp /> */}
      <NavigationContainer>
        <BottomTab />
      </NavigationContainer>
      <StatusBar style="auto" />
    </Provider>
  );
}