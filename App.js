import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './src/features/store'
import CitiesStack from './src/navigation/details/CitiesStack';
import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'
import CitiesScreen from './src/screens/CitiesScreen'
import SignUp from './src/components/SignUp';

export default function App() {
  return (
    <Provider store={store}>
      {/* <HomeScreen  /> */}
      {/* <WelcomeScreen /> */}
      {/* <CitiesScreen /> */}
      {/* <SignUp /> */}
      <CitiesStack />
      <StatusBar style="auto" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});