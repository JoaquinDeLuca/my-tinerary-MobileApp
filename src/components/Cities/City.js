import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function CitiesScreen(props) {

    let cities = props.data
    let navigation = props.navigation

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
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('details', { id: cities._id })
                    }} >
                        <Text style={styles.CitiesButtom}>View More </Text>
                    </TouchableOpacity>
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
        fontSize: 28,
        // marginBottom: ,
        color: "#fff"
    },
    CitiesTextCoutry: {
        fontSize: 22,
        marginBottom: 6,
        color: "#fff"
    },
    CitiesTextInfo: {
        fontSize: 16,
        // marginBottom: 10,
        width: 200,
        height: 80,
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
        elevation: 6
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
    },
    CitiesButtom: {
        fontSize: 22,
        marginBottom: 6,
        color: "#fff",
        textAlign: "right"
    }
})
