import { View, TextInput, Text, StyleSheet, ScrollView } from 'react-native'
import { useState, useRef } from "react"
import { useGetAllCitiesQuery } from '../../features/citiesApi'
import React from 'react'
import City from './City'



export default function CitiesScreen() {

    const searchInput = useRef()
    const [value, setValue] = React.useState("");
    const searchValue = (value) => {
        setValue(value)
    }
    const { data: cities } = useGetAllCitiesQuery(value)

    // const nullCity = (cities) => {
    //     if (cities > 0) {
    //         return (cities?.map(cities => <City key={cities.city} name={cities.city} data={cities} />))
    //     }
    //     else {
    //         return (
    //             <Text>Not found cities</Text>
    //         )
    //     }
    // }

    return (
        <View style={styles.CitiesContainer}>
            <TextInput style={styles.input} name="city" type="text" placeholder="Find city:" ref={searchInput} onChangeText={searchValue} value={value} />
            <ScrollView style={styles.CitiesScroll}>
                {cities?.map(cities => <City key={cities.city} name={cities.city} data={cities} />)}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    CitiesScroll: {
        width: '100%',
        marginBottom: 320
    },
    CitiesContainer: {
        width: '100%',
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: "#B8466860",
        color: "#000",
        borderRadius: 15,
        marginBottom: 20,
        marginTop: 20,
        width: 250,
        height: 40,
        paddingHorizontal: 20,
    }
})