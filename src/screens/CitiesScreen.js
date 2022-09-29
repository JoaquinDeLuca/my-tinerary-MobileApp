import { View, StyleSheet, } from 'react-native'
import React from 'react'
import Cities from '../components/Cities/Cities'



export default function CitiesScreen() {


    return (
        <View style={styles.CitiesContainer}>
            <Cities />
        </View>
    )
}

const styles = StyleSheet.create({
    CitiesContainer: {
        width: '100%',
        alignItems: 'center'
    }
})
