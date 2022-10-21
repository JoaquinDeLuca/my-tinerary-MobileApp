import { View } from 'react-native'
import React from 'react'
import SignInWelcome from '../components/SignInWelcome'

export default function WelcomeScreen({ navigation }) {
  return (
    <View>
      <SignInWelcome navigation={navigation} />
    </View>
  )
}