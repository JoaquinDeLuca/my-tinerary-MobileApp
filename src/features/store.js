import { configureStore } from '@reduxjs/toolkit'
import userApi from './userApi'
import citiesApi from './citiesApi'
import itinerariesApi from './itinerariesApi'


export default configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [citiesApi.reducerPath]: citiesApi.reducer,
        [itinerariesApi.reducerPath]: itinerariesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(citiesApi.middleware)
            .concat(itinerariesApi.middleware)
})