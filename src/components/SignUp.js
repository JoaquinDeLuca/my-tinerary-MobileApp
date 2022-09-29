import { View, Text, Button, Image, StyleSheet, TextInput, Alert  } from 'react-native'
import { useState } from 'react'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSignUpUserMutation } from '../features/userApi'

export default function SignUp() {

    const [signUpUser] = useSignUpUserMutation()

    const [register, setRegister] = useState({
        name:'',
        lastName:'',
        email: "",
        password: "",
        photo:'',
        country:'',
        role: 'user',
        from: 'form'
    })

    const captureData = (text, name) => {
        setRegister({...register, [name]: text})
    }
    // console.log(register)

    const saveData = () => {
        const userDate = {
            name: register.Name,
            lastName: register.LastName,
            mail: register.Email,
            password: register.Password,
            photo: register.Photo,
            country: register.Country,
            role: 'user',
            from: 'form'
        }
        console.log(userDate)
        signUpUser(userDate).then(response => console.log(response))
        // .then(response => {
        //     if (response.data.success === true) {
        //         console.log(response)
        //         Alert.alert(
        //             'User',
        //             'registered user successfully'
        //         )
        //     }
        //     else {
        //         console.log('_____INCORRECT_____')
        //         Alert.alert(
        //             'Incorrect',
        //             'algo salio mal',
        //         )
        //     }
        // })
        
    }



  return (

    <SafeAreaView style={styles.container}>

        <Image 
            style={styles.logo} 
            source={{uri:'https://i.postimg.cc/Fs8QT5YB/logo3.png'}} type="logo" 
        />

        <Text style={styles.p}>Register to continue</Text>  

        <TextInput 
            style={styles.input}
            placeholder='name'
            name='Name'
            onChangeText={text => captureData(text, 'Name')}
        >
        </TextInput>

        <TextInput 
            style={styles.input}
            placeholder='LastName'
            name='LastName'
            onChangeText={text => captureData(text, 'LastName')}
        >
        </TextInput>

        <TextInput 
            style={styles.input}
            placeholder='Mail'
            name='Email'
            onChangeText={text => captureData(text, 'Email')}
        >
        </TextInput>

        <TextInput 
            style={styles.input}
            placeholder='Password'
            name='Password'
            secureTextEntry={true}
            onChangeText={text => captureData(text, 'Password')}
        >
        </TextInput>

        <TextInput 
            style={styles.input}
            placeholder='Photo Url'
            name='Photo'
            onChangeText={text => captureData(text, 'Photo')}
        >
        </TextInput>

        <TextInput 
            style={styles.input}
            placeholder='Country'
            name='Country'
            onChangeText={text => captureData(text, 'Country')}
        >
        </TextInput>
        <View style={styles.btnContainer}>
            <Button color='#B84668' onPress={() => saveData()} title='Sign Up'></Button>
        </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    p:{
        fontSize: 19,
        margin: 10,
    },
    logo: {
        width: 120,
        height: 100,
        margin: 10,
    },
    input:{
        borderWidth: 1,
        borderColor: '#CBD2D9',
        borderRadius: 7,
        padding: 8,
        width: 250,
        height: 35,
        margin: 8,
    },
    message:{
        color:'#627D98',
        margin: 10,
    },
    btnContainer:{
        width: 100,
        margin: 10
    }
})
