import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import spongeBob from "../../assets/spongebob.gif"

export default function UserScreen() {


    return (
        <View style={styles.Container} >
            <Image source={spongeBob} style={styles.Image} />
            <Text style={styles.Text}>Geniuses at work.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        justifyContent: "center",
        backgroundColor: "#fff"
    },
    Image: {
        width: 400,
        height: 350
    },
    Text: {
        fontSize: 40
    }
})