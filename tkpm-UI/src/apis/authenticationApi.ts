import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authenticationApi = createApi({
    reducerPath: 'authenticationApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_API_URL}/Auth`}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (body) => ({
                url: "login",
                method: "POST",
                body: body,
            })
        }),

        registerCustomer: builder.mutation({
            query: (body) => ({
                url: "register/customer",
                method: "POST",
                body: body
            })
        }),

        registerDriver: builder.mutation({
            query: (body) => ({
                url: "register/driver",
                method: "POST",
                body: body
            })
        })
    })
});

export const {useLoginMutation, useRegisterCustomerMutation, useRegisterDriverMutation} = authenticationApi;

