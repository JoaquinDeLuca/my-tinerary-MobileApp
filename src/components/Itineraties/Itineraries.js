import { View } from 'react-native'
import React from 'react'
import { useGetItinerariesQuery } from '../../features/itinerariesApi'
import Itinerary from './Itinerary/Itinerary'

export default function Itineraries(props) {

    const id = props.data._id

    const { data: itineraries } = useGetItinerariesQuery(id)

    return (
        <View >
            {itineraries?.map(itineraries => <Itinerary key={itineraries._id} name={itineraries.name} data={itineraries} />)}
        </View>
    )
}
