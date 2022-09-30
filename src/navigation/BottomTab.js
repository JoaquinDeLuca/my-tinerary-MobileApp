import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CitiesStack from './details/CitiesStack';
import HomeScreen from '../screens/HomeScreen'
import MyTinerariesScreen from '../screens/MyTinerariesScreen'
import UserScreen from '../screens/UserScreen';



const Tab = createBottomTabNavigator();
export default function BottomTab() {
    return (
        // <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} options={{ headerShadowVisible: false }} />
            <Tab.Screen name="Cities" component={CitiesStack} options={{ headerShadowVisible: false, headerShown: false }} />
            <Tab.Screen name="MyTineraries" component={MyTinerariesScreen} options={{ headerShadowVisible: false }} />
            <Tab.Screen name="User" component={UserScreen} options={{ headerShadowVisible: false }} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}