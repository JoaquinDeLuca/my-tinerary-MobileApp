import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import store from './src/features/store'
import CitiesStack from './src/navigation/details/CitiesStack';

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}> */}
      {/* <HomeScreen  /> */}
      {/* <WelcomeScreen /> */}
      {/* <CitiesScreen /> */}
      {/* <SignUp /> */}
      <CitiesStack />
      <StatusBar style="auto" />
      {/* </View> */}
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