import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import Itineraries from '../components/Itineraties/Itineraries'

export default function Details({ navigation, route }) {

    const { id } = route.params
    const [city, setCity] = useState([])

    useEffect(() => {
        axios.get(`https://my-tinerary-back-agunicjoa.herokuapp.com/cities/${id}`)
            .then(response => setCity(response.data.response))
    }, [id])

    return (
        <ScrollView>
            <View style={styles.DetailsContainer} >
                <Image source={{ uri: city.photo }} style={styles.DetailsImage} />
                <View style={styles.DetailsTextContainer}>
                    <Text style={styles.DetailsCityName}>{city.city}</Text>
                    <Text style={styles.DetailsCityInformation}>{city.information}</Text>
                    <View style={styles.DetailsInfoContainer}>
                        <Text style={styles.DetailsCountry}>Country: <Text style={styles.DetailsCountryName}>{city.country}</Text></Text>
                        <Text style={styles.DetailsCountry}>Population: <Text style={styles.DetailsCountryName}>{city.population}</Text></Text>
                    </View>
                </View>
                <Itineraries data={city} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    DetailsContainer: {
        width: '100%',
        alignItems: "center",
        backgroundColor: "#fff"
    },
    DetailsImage: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
        marginVertical: 10
    },
    DetailsTextContainer: {
        width: "90%"
    },
    DetailsCountryName: {
        fontWeight: 'bold'
    },
    DetailsCityName: {
        fontSize: 32,
        fontWeight: 'bold'
    },
    DetailsCityInformation: {
        fontSize: 16,
        marginVertical: 10
    },
    DetailsCountry: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        fontSize: 16
    },
    DetailsInfoContainer: {
        flexDirection: 'row',
    }
})