import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const userApi = createApi ({
    reducerPath:'userApi',

    baseQuery: fetchBaseQuery ({
        baseUrl:'https://my-tinerary-back-agunicjoa.herokuapp.com'
    }),

    endpoints:(builder) => ({
        SignUpUser: builder.mutation({
            query: (dataNewUser) => ({
                url: '/auth/signup',
                method: 'POST',
                body: dataNewUser,
            }),
        }),
        SignInUser: builder.mutation ({
            query: (user) => ({
                url: '/auth/signin',
                method: 'POST',
                body: user,
            })
        }),
    })
})

export default userApi
export const { 
    useSignUpUserMutation, 
    useSignInUserMutation, } = userApi