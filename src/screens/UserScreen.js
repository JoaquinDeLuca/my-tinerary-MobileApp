import { View, Text, Image, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import spongeBob from "../../assets/spongebob.gif"
import { useUserSingOutMutation } from '../features/userApi';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { deleteCredentials } from '../features/userSlice';



export default function UserScreen() {

    const [userSingOut] = useUserSingOutMutation()
    const user = useSelector(state => state.userr)
    const dispatch = useDispatch()


    const signOut = ()  => {
        userSingOut(user.mail).then(res => {
            if(res.data.success){
                dispatch(deleteCredentials())
                AsyncStorage.removeItem('user')
                console.log('___SignOut___')
            }
        }
    )}


    return (
        <View style={styles.Container} >
            {/* <Image source={spongeBob} style={styles.Image} /> */}
            <Text style={styles.Text}>{user.name}</Text>
            <Text style={styles.Text}>{user.LastName}</Text>
            <View style={styles.btncon}>
                <Button color='#B84668'  onPress={() => signOut()}  title='Sign Out'></Button>  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: "#fff",
        height: '100%'
    },
    Image: {
        width: 400,
        height: 350
    },
    Text: {
        fontSize: 40
    },
    btncon:{
        width: 200,
    }
})