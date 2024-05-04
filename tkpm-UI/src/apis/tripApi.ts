import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const tripApi = createApi({
    reducerPath: 'tripApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_API_URL}/Trip`}),
    endpoints: (builder) => ({
        bookTrip: builder.mutation({
            query: (body) => ({
                url: "book",
                method: "POST",
                body: body,
            })
        }),

        validatePickedUpTrip: builder.query<TripResponse, number>({
            query: (tripId) => ({
                url: `validate?tripId=${tripId}`,
            })
        }),

        getLastestTrip: builder.query<TripResponse, void>({
            query: () => ({
                url: "lastest"
            })
        }),

        acceptTrip: builder.mutation({
            query: (params) => ({
                url: `accept?tripId=${params.tripId}&driverId=${params.driverId}`,
                method: "POST"
            })
        }),

        cancelTrip: builder.mutation({
            query: (tripId) => ({
                url: `cancel?tripId=${tripId}`,
            })
        })
    })
});

export const { 
    useBookTripMutation, 
    useValidatePickedUpTripQuery, 
    useGetLastestTripQuery, 
    useAcceptTripMutation ,
    useCancelTripMutation
} = tripApi;