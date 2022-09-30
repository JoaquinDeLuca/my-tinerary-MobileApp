import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Itineraries(props) {

    const activities = props.data
    console.log(activities)

    return (
        <View style={styles.ActivitiesContainer}>
            <Image source={{ uri: activities.photo }} style={styles.ActivitiesImage} />
            <Text style={styles.ActivitiesName}>{activities.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ActivitiesContainer: {
        marginVertical: 10
    },
    ActivitiesImage: {
        height: 100,
        width: 200
    },
    ActivitiesName: {
        fontSize: 18,
        width: 250
    }
});