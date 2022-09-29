import { View, TextInput, StyleSheet, ScrollView } from 'react-native'
import { useState, useRef } from "react"
import { useGetAllCitiesQuery } from '../../features/citiesApi'
import React from 'react'
import City from './City'



export default function CitiesScreen() {

    const searchInput = useRef()
    const [value, setValue] = useState("")
    const searchValue = () => {
        setValue(searchInput.current.value)
    }

    const { data: cities } = useGetAllCitiesQuery(value)

    return (
        <View style={styles.CitiesContainer}>
            <TextInput style={styles.input} name="text" type="text" placeholder="Find city:" ref={searchInput} onChange={searchValue}></TextInput>
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
        borderColor: '#000',
        color: "#000",
        borderRadius: 15,
        marginBottom: 40,
        marginTop: 80,
        width: 250,
        height: 40
    }
})