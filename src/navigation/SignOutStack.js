import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import UserScreen from "../screens/UserScreen";

const Stack = createNativeStackNavigator();
export default function SignInStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="UserScreen" component={UserScreen} options={{ headerShadowVisible: false, headerShown: false }} />
            <Stack.Screen name="SignIn" component={WelcomeScreen} options={{ headerShadowVisible: false, headerShown: false }} />
        </Stack.Navigator>
    )
}