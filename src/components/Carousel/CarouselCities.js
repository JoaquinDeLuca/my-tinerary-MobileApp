import { View, Text } from 'react-native'
import { useGetAllCitiesQuery } from '../../features/citiesApi'
import Carousel from './Carousel'

export default function CarouselCities() {

    const initialCity = 0
    const endCity = 12

    const { data: cities } = useGetAllCitiesQuery([])

    return (
        <View>
            <Carousel data={cities?.slice(initialCity, endCity)} range={4} interval={5} slides={3} />
        </View>
    )
}