import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CitiesScreen from '../../screens/CitiesScreen'
import DetailsScreen from '../../screens/DetailsScreen'

const Stack = createNativeStackNavigator();
export default function CitiesStack() {

    return (
        // <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Cities" component={CitiesScreen} options={{ headerShadowVisible: false }} />
            <Stack.Screen name="details" component={DetailsScreen} options={{ headerShadowVisible: false }} />
        </Stack.Navigator>
        // </NavigationContainer >
    )

}