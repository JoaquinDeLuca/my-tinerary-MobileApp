import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSignInUserMutation } from '../features/userApi'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WelcomeScreen(props) {
    let navigation = props.navigation

    const [signInUser] = useSignInUserMutation()

    const [login, setLogin] = useState({
        email: "",
        password: "",
        from: "form",
    })

    const captureData = (text, name) => {
        setLogin({ ...login, [name]: text })
    }
    // console.log(login)

    const saveData = () => {
        const userDate = {
            mail: login.Email,
            password: login.Password,
            form: 'form'
        }
        console.log(userDate)

        signInUser(userDate)
            .then(response => {
                try {
                    if (response.data.success === true) {
                        AsyncStorage.setItem('token', JSON.stringify(response.data.response.token))
                        // aca pasaria el verifyToken
                        console.log('______OK______')
                        navigation.navigate('ButtomNav')
                    } else {
                        // alert of error
                        console.log('_____INCORRECT_____')
                        console.log(response)
                        Alert.alert(
                            'Incorrect',
                            'password or email, try again',
                        )
                    }
                } catch (error) {
                    console.log('___USER NONEXISTENT___')
                    Alert.alert(
                        'User',
                        'nonexistent',
                    )
                }
            })
    }

    // AsyncStorage.getItem('token').then(response => console.log(response))
    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.logo}
                source={{ uri: 'https://i.postimg.cc/Fs8QT5YB/logo3.png' }} type="logo"
            />
            <Text style={styles.titleText}>Welcome!</Text>
            <Text style={styles.p}>Log in to continue</Text>
            <View>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    name='Email'
                    onChangeText={text => captureData(text, 'Email')}
                ></TextInput>

                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    name='Password'
                    secureTextEntry={true}
                    onChangeText={text => captureData(text, 'Password')}
                ></TextInput>

            </View>
            <View style={styles.btnContainer}>
                <Button color='#256D85' onPress={() => saveData()} title='Sign In'></Button>
            </View>

            <Text style={styles.message}>don't you have an account?</Text>
            <Button color='#256D85' title='Sign Up Now' onPress={() => {
                navigation.navigate('SignUp')
            }}></Button>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    titleText: {
        fontSize: 26,
        marginBottom: 10,
    },
    p: {
        fontSize: 17,
        marginBottom: 10,
    },
    logo: {
        width: 160,
        height: 120,
        margin: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CBD2D9',
        borderRadius: 7,
        padding: 8,
        width: 250,
        height: 35,
        margin: 10
    },
    message: {
        color: '#7895B2',
        margin: 10,
    },
    btnContainer: {
        width: 100,
        margin: 10
    }
})
