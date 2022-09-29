import { configureStore } from '@reduxjs/toolkit'
import userApi from './userApi'
import citiesApi from './citiesApi'


export default configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer,
        [citiesApi.reducerPath]: citiesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(userApi.middleware)
            .concat(citiesApi.middleware)
})