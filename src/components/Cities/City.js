import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import SaoPaulo from '../../../assets/cards/saoPaulo.jpg'



export default function CitiesScreen(props) {

    let cities = props.data

    return (
        <View style={styles.CityContainer} >
            <View style={styles.CitiesCard3} >
                <View style={styles.CitiesCardImageContainer} >
                    <Image source={{ uri: cities.photo }} style={styles.CitiesCardImage} />
                </View>
                <View>
                    <Text style={styles.CitiesText}>{cities.city}</Text>
                    <Text style={styles.CitiesTextCoutry}>{cities.country}</Text>
                    <Text style={styles.CitiesTextInfo}>{cities.information}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    CityContainer: {
        width: '100%',
        alignItems: "center"
    },
    CitiesText: {
        fontSize: 26,
        marginBottom: 10,
        color: "#fff"
    },
    CitiesTextCoutry: {
        fontSize: 26,
        marginBottom: 10,
        color: "#fff"
    },
    CitiesTextInfo: {
        fontSize: 20,
        marginBottom: 10,
        color: "#fff"
    },
    CitiesCard3: {
        width: 390,
        height: 200,
        flexDirection: 'row',
        backgroundColor: "#B84668",
        borderRadius: 15,
        position: 'relative',
        left: 8,
        marginVertical: 18,
        // alignItems: "center"
    },
    CitiesCardImageContainer: {
        resizeMode: 'cover',
        position: 'relative',
        bottom: 15,
        right: 15
    },
    CitiesCardImage: {
        height: 200,
        width: 150,
        borderRadius: 15
    }
})