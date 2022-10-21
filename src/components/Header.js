import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import acceso from "../../assets/logo/acceso.png"
import logo1 from "../../assets/logo/logo1.png"

export default function Header() {


    return (
        <View style={styles.HeaderContainer} >
            <Image source={logo1} style={styles.HeaderLogo1} />
            <Image source={acceso} style={styles.HeaderAcceso} />
        </View>
    )
}

const styles = StyleSheet.create({
    HeaderContainer: {
        flexDirection: 'row',
        marginTop: 30,
        // backgroundColor: "#B84668",
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: "#B8466860",
        borderStyle: 'solid',
        borderBottomWidth: 1
    },
    HeaderImageContainer: {
    },
    HeaderAcceso: {
        resizeMode: 'stretch',
        width: 40,
        height: 40,
        margin: 10,
        tintColor: "#B84668"
    },
    HeaderLogo1: {
        resizeMode: 'stretch',
        width: 80,
        height: 40,
        margin: 10,
        tintColor: "#B84668"
    }
})
