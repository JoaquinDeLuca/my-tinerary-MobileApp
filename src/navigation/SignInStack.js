import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "../screens/WelcomeScreen";
import SignUp from "../components/SignUp"
import BottomTabBar from "./BottomTab"

const Stack = createNativeStackNavigator();
export default function SignInStack() {

    return (
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={WelcomeScreen} options={{ headerShadowVisible: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShadowVisible: false }} />
            <Stack.Screen name="ButtomNav" component={BottomTabBar} options={{ headerShadowVisible: false, headerShown: false }} />
        </Stack.Navigator>
    )
}