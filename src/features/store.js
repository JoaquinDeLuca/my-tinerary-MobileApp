import { configureStore } from '@reduxjs/toolkit'
import userApi from './userApi'
import citiesApi from './citiesApi'
import itinerariesApi from './itinerariesApi'
import userSlice from './userSlice'


export default configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [citiesApi.reducerPath]: citiesApi.reducer,
        [itinerariesApi.reducerPath]: itinerariesApi.reducer,
        userr: userSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(citiesApi.middleware)
            .concat(itinerariesApi.middleware)
})