import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import spongeBob from "../../assets/spongebob.gif"

export default function MyTinerariesScreen() {


    return (
        <View style={styles.Container} >
            <Image source={spongeBob} style={styles.Image} />
            <Text style={styles.Text}>Geniuses at work.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        alignItems: 'center',
        backgroundColor: "#fff",
        height: '100%',
        justifyContent: "center"
    },
    Image: {
        width: 400,
        height: 350
    },
    Text: {
        fontSize: 40
    }
})