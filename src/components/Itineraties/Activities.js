import { View } from 'react-native'
import React from 'react'
import axios from "axios"
import { useEffect, useState } from 'react'
import Activity from './Activity/Activity'

export default function Itineraries(props) {

    const id = props.data._id

    // const { data: itineraries } = useGetItinerariesQuery(id)
    const [activities, setActivity] = useState([])

    useEffect(() => {
        axios.get(`https://my-tinerary-back-agunicjoa.herokuapp.com/activities/itinerary/${id}`)
            .then(response => setActivity(response.data.response))
    }, [id])

    return (
        <View >
            {activities?.map(activities => <Activity key={activities._id} name={activities.name} data={activities} />)}
        </View>
    )
}
