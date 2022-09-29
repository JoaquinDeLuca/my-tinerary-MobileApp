import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'
import SignUp from './src/components/SignUp';

// redux
import { Provider } from 'react-redux';
import store from './src/features/store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>

        {/* <HomeScreen  /> */}
        {/* <WelcomeScreen /> */}
        <SignUp />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
