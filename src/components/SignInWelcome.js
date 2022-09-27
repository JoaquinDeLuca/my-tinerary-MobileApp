import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function WelcomeScreen() {


  return (
    <SafeAreaView style={styles.container}>

        <Image 
            style={styles.logo} 
            source={{uri:'https://i.postimg.cc/Fs8QT5YB/logo3.png'}} type="logo" 
        />
        <Text style={styles.titleText}>Welcome!</Text>
        <Text style={styles.p}>Log in to continue</Text>


        <Text>Email</Text>
        <TextInput style={styles.input}></TextInput>

        <Text>Password</Text>
        <TextInput style={styles.input}></TextInput>

        <Button title='Sign In'></Button>

        <Text style={styles.message}>don't you have an account?</Text>
        <Button title='Sign Up Now'></Button>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    titleText: {
        fontSize: 26,
        marginBottom: 10,
    },
    p:{
        fontSize: 17,
        marginBottom: 10,
    },
    logo: {
        width: 160,
        height: 120,
        margin: 10,
    },
    input:{
        borderWidth: 1,
        borderColor: '#CBD2D9',
        borderRadius: 7,
        padding: 8,
        width: 250,
        height: 35
    },
    message:{
        color:'#627D98',
        margin: 10,
    },
})
