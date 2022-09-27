import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screens/HomeScreen';
import WelcomeScreen from './src/screens/WelcomeScreen'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen  /> */}
      <WelcomeScreen />
      <StatusBar style="auto" />
    </View>
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
