import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import Activities from '../Activities'

export default function Itinerary(props) {

    const itineraries = props.data

    return (
        <View style={styles.ItineraryContainer} >
            <View style={styles.ItineraryHeader}>
                <ImageBackground source={{ uri: itineraries.photo }} resizeMode="cover" imageStyle={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }} style={styles.ItineraryImage}>
                    <Text style={styles.ItineraryName} >{itineraries.name}</Text>
                </ImageBackground>
            </View>
            <View style={styles.ItineraryContent} >
                <View style={styles.ItineraryUser}>
                    <Image source={{ uri: itineraries.user.photo }} style={styles.ItineraryUserImage} />
                    <Text style={styles.ItineraryUserName}> By: {itineraries.user.name}</Text>
                    <Text style={styles.ItineraryPrice}> Price: $ {itineraries.price}</Text>
                </View>
                <View style={styles.ItineraryActivities}>
                    <Text style={styles.ItineraryActivitiesText}>Activities:</Text>
                    <Activities data={itineraries} />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    ItineraryContainer: {
        width: 400,
        elevation: 6,
        borderRadius: 15,
        backgroundColor: "#fff",
        marginVertical: 10
    },
    ItineraryUserImage: {
        resizeMode: 'stretch',
        width: 80,
        height: 80,
        borderRadius: 100,
        resizeMode: 'cover',
    },
    ItineraryUserName: {
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 4
    },
    ItineraryPrice: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 20,
        paddingLeft: 4
    },
    ItineraryUser: {
        position: "relative",
        margin: 10,
        bottom: 40,
        alignItems: "flex-start"
    },
    ItineraryHeader: {
        flexDirection: 'row',
        width: 400,
        height: 90,
    },
    ItineraryImage: {
        width: "100%",
        height: "100%",

    },
    ItineraryName: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        height: "100%",
        width: "100%",
        textAlignVertical: "center",
        backgroundColor: "#00000040",
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15
    },
    ItineraryActivities: {
        position: "relative",
        left: 40
    },
    ItineraryActivitiesText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    ItineraryContent: {
        flexDirection: "row"
    }
})