import { View, Text, Image, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useUserSingOutMutation } from '../features/userApi';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteCredentials } from '../features/userSlice';
import information from "../../assets/icons/information.png"
import privacy from "../../assets/icons/padlock.png"
import security from "../../assets/icons/privacy.png"
import theme from "../../assets/icons/theme.png"
import usericon from "../../assets/icons/user.png"




export default function UserScreen({ navigation }) {

    const [userSingOut] = useUserSingOutMutation()
    const user = useSelector(state => state.userr)
    const dispatch = useDispatch()


    const signOut = () => {
        userSingOut(user.mail).then(res => {
            if (res.data.success) {
                dispatch(deleteCredentials())
                AsyncStorage.removeItem('user')
                console.log('___SignOut___')
                navigation.navigate('SignIn')
            }
        }
        )
    }


    return (
        <View style={styles.UserContainer} >

            <View style={styles.UserInformation}>
                <Image source={{ uri: user.photo }} style={styles.UserImage} />
                <Text style={styles.Text}>{user.name}</Text>
            </View>
            <View style={styles.UserButtonsContainer}>
                <TouchableOpacity style={styles.UserInfoButton} >
                    <Image source={usericon} style={styles.UserInfoButtonIcon} />
                    <Text style={styles.UserInfoButtonText} >Manage account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.UserInfoButton} >
                    <Image source={privacy} style={styles.UserInfoButtonIcon} />
                    <Text style={styles.UserInfoButtonText} >Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.UserInfoButton} >
                    <Image source={security} style={styles.UserInfoButtonIcon} />
                    <Text style={styles.UserInfoButtonText} >Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.UserInfoButton} >
                    <Image source={information} style={styles.UserInfoButtonIcon} />
                    <Text style={styles.UserInfoButtonText} >Information</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.UserInfoButton} >
                    <Image source={theme} style={styles.UserInfoButtonIcon} />
                    <Text style={styles.UserInfoButtonText} >Theme</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btncon}>
                <Button color='#B84668' onPress={() => signOut()} title='Sign Out'></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    UserContainer: {
        alignItems: 'center',
        backgroundColor: "#fff",
        height: '100%',
    },
    UserImage: {
        width: 140,
        height: 140,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#B84668',
    },
    UserInformation: {
        alignItems: 'center',
        width: "100%",
        borderBottomWidth: 1,
        borderColor: "#00000010",
        paddingBottom: 20
    },
    Text: {
        fontSize: 40
    },
    btncon: {
        width: 200
    },
    UserButtonsContainer: {
        width: "100%",
        padding: 30
    },
    UserInfoButton: {
        flexDirection: "row",
        width: "100%",
        height: 56
    },
    UserInfoButtonIcon: {
        width: 32,
        height: 32
    },
    UserInfoButtonText: {
        fontSize: 22,
        paddingHorizontal: 20
    },
})