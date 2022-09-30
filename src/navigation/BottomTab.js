import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CitiesStack from './details/CitiesStack';
import HomeScreen from '../screens/HomeScreen'
import MyTinerariesScreen from '../screens/MyTinerariesScreen'
import UserScreen from '../screens/UserScreen';
import city from '../../assets/icons/city.png'
import Home from '../../assets/icons/home.png'
import Tinerary from '../../assets/icons/logo1.png'
import Aguh from '../../assets/icons/Aguh.jpg'



const Tab = createBottomTabNavigator();
export default function BottomTab({ navigation }) {
    return (
        // <NavigationContainer>
        <Tab.Navigator tabBarOptions={{
            showLabel: false
        }}>
            <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    headerShadowVisible: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={Home} style={focused ? styles.NavBarIconActive : styles.NavBarIcon} />
                        </View>
                    )
                }} />
            <Tab.Screen name="Cities" component={CitiesStack}
                options={{
                    headerShadowVisible: false,
                    headerShown: false, tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={city} style={focused ? styles.NavBarIconActive : styles.NavBarIcon} />
                        </View>
                    )
                }} />
            <Tab.Screen name="MyTineraries" component={MyTinerariesScreen}
                options={{
                    headerShadowVisible: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={Tinerary} style={focused ? styles.NavBarIconActive : styles.NavBarIcon} />
                        </View>
                    )
                }} />
            <Tab.Screen name="User" component={UserScreen}
                options={{
                    headerShadowVisible: false,
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <Image source={Aguh} style={focused ? styles.NavBarUserActive : styles.NavBarUser} />
                        </View>
                    )
                }} />
        </Tab.Navigator>
        // </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    NavBarIconActive: {
        width: 30,
        height: 30,
        tintColor: "#B84668"
    },
    NavBarIcon: {
        width: 30,
        height: 30,
        tintColor: "#000000"
    },
    NavBarUserActive: {
        width: 32,
        height: 32,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: "#B84668"
    },
    NavBarUser: {
        width: 32,
        height: 32,
        borderRadius: 100,
        borderWidth: 1,
        borderColor: "#000000"
    }
})