import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function CityCarousel(props) {

  let cities = props.data

  return (
    <View style={styles.Container}>
          <Image style={styles.CitiesCardImage}  source={{ uri: cities.photo }} alt={cities.city} />
        <View style={styles.information} >
          <Text style={styles.country} >{cities.country}</Text>
          <Text style={styles.cityName} >{cities.city}</Text>
        </View>
    </View>
    
  )
}


const styles = StyleSheet.create({
  Container: {
    // display:'flex',
    // flexDirection: 'row',
    // alignItems: "center",
    // width: '100%',
  },  
  CitiesCardImage: {
    height: 300,
    width: 237,
    borderRadius: 15,
    margin: 12,
  },
  information:{
    position: 'absolute',
    bottom: 12,
    left: 12,
    backgroundColor: '#00000070',
    width: 237,
    height: 80,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius:15,
    elevation: 8

  },
  country:{
    color: 'white',
    textAlign: 'left',
    marginLeft: 40,
    fontSize: 32,
  },
  cityName:{
    color: 'white',
    textAlign: 'left',
    marginLeft: 40,
    fontSize: 18,
    textShadowColor: 'black', 
        textShadowOffset: { width: 2, height: 1 },
        textShadowRadius: 10,
  }
})
