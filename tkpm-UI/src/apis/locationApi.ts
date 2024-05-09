import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_API_URL}/Location`}),
    endpoints: (builder) => ({
        getLocations: builder.query<LocationResponse[], void>({
            query: () => ({
                url: ""
            })
        }),
        
        validateLocation: builder.query<boolean, string>({
            query: (name) => ({
                url: `validate?name=${name}`
            })
        }),

        addLocation: builder.mutation({
            query: (location) => ({
                url: `?name=${location}`,
                method: "POST"
            })
        })
    })
});

export const { useGetLocationsQuery, useLazyValidateLocationQuery, useAddLocationMutation } = locationApi;

