import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import CityPrint from './CityPrint'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Carousel(props) {
    
    let cities = props.data
    // console.log(cities)
  return (
    <SafeAreaView>
        <ScrollView>
        <View style={styles.h1AndImage}>
            <Text style={styles.h1}>My Tinerary</Text>
            <Image style={styles.Img} source={{uri:'https://i.postimg.cc/bNS321W5/viajar.png'}}/>
        </View>
        <Text style={styles.phrase}>Find your perfect trip, designed by insiders who know and love their cities!</Text>
        <Text style={styles.h2} >Popular Mytineraries</Text>
        <View style={styles.container}>
            <ScrollView style={styles.scroll}  horizontal={true} >
                {cities?.map( city => <CityPrint data={city} key={city.city} name={city.city}/>)}
            </ScrollView>
        </View>

        {/* Activities */}
        <View style={styles.h1AndImage}>
            <Text style={styles.h2}>Activities</Text>
            <Image style={styles.activityImg}  source={{uri:'https://i.postimg.cc/3RY3kg15/life.png'}}  />
        </View>
        <ScrollView style={styles.ContainerActivity}  horizontal={true}>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/8084cb10caa377a2.jpeg/98/From-Madrid--Day-Tour-to-Toledo.jpg'}}  />
                <View style={styles.information} >
                    <Text style={styles.data}>Day Tour to Toledo by: Madrid</Text>
                </View>
            </View>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/5c963ffbad9c6.jpeg/98.jpg'}}  />
                <View style={styles.information} >
                    <Text style={styles.data}>Colosseum, Forum Ticket with Multimedia Video</Text>
                </View>
            </View>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/a57443e7079d9aba.jpeg/145.jpg'}} />
                <View style={styles.information} >
                    <Text style={styles.data}>Marco Polo Airport Water Taxi Transfer</Text>
                </View>
            </View>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/5ddeff3a3b292.jpeg/145.jpg'}}  />
                <View style={styles.information} >
                    <Text style={styles.data}>Highlights of Valparaiso and Viña del Mar</Text>
                </View>
            </View>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/5dcaa0b604702.jpeg/145.jpg'}}  />
                <View style={styles.information} >
                    <Text style={styles.data}>Tigre Delta Premium Small-Group Tour</Text>
                </View>
            </View>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/5aef7bb5e5618.jpeg/98.jpg'}}  />
                <View style={styles.information} >
                    <Text style={styles.data}>Christ the Redeemer Early Access and Sugarloaf</Text>
                </View>
            </View>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/5ba3e89b2965e.jpeg/98/From-Porto--Douro-Valley-w--Boat-Tour--Wine-Tasting---Lunch.jpg'}}  />
                <View style={styles.information} >
                    <Text style={styles.data}>Douro Valley w/ Boat Tour</Text>
                </View>
            </View>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/cf879ee295abc8e4.jpeg/98/Paris--1-Hour-River-Seine-Cruise.jpg'}}  />
                <View style={styles.information} >
                    <Text style={styles.data}>1Hour River Seine Cruise</Text>
                </View>
            </View>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/f54217fb6d9566a9.jpeg/98.jpg'}}  />
                <View style={styles.information} >
                    <Text style={styles.data}>Windsor Castle, Stonehenge and Bath</Text>
                </View>
            </View>
            <View style={styles.activity}>
                <Image style={styles.CitiesCardImage}  source={{uri:'https://cdn.getyourguide.com/img/tour/5d34c02c7a51c.jpeg/145.jpg'}}  />
                <View style={styles.information} >
                    <Text style={styles.data}>Paracas Full Day Guided Tour</Text>
                </View>
            </View>
        </ScrollView>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent:'center',
        // paddingBottom: 30,
        // paddingTop: 30,
        padding: 10,
    },
    phrase:{
        fontSize: 18,
        padding: 10,
        marginBottom: 5,
        textAlign: 'center',
    },
    h1:{
        fontSize: 30,
        textAlign: 'center',
        padding:7
    },
    scroll:{
        paddingBottom: 10,
    },
    h2:{
       fontSize: 26,
       textAlign:'center',
       marginRight: 10

    },
    Img:{
        width: 80,
        height: 80,
    },
    activityImg:{
        width:45,
        height:45,
    },
    h1AndImage:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 15
    },
    CitiesCardImage: {
        height: 300,
        width: 237,
        borderRadius: 15,
        margin: 12,
    },
    ContainerActivity:{
        padding: 10,
        margin: 15
    },
    information:{
        position: 'absolute',
        bottom: 12, // cambiar a 52
        left: 12,
        backgroundColor: '#00000090',
        width: 237,
        height: 78,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius:15,
        elevation: 8,
        padding: 10
    },
    city:{
        color:'white',
        fontSize: 18

    },
    data:{
        color:'white',
        fontSize: 19
    }
  })
  