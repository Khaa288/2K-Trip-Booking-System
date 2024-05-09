import { coordinates } from '@maptiler/sdk';
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

        bookOperatedTrip: builder.mutation({
            query: (body) => ({
                url: "operated/book",
                method: "POST",
                body: body
            })
        }),

        validatePickedUpTrip: builder.query<TripResponse, number>({
            query: (tripId) => ({
                url: `validate?tripId=${tripId}`,
            })
        }),

        getTripById: builder.query<TripWithCustomerResponse, number> ({
            query: (tripId) => ({
                url: `?tripId=${tripId}`
            })
        }),

        getOperatedTrip: builder.query<OperatedTripResponse[], void>({
            query: () => ({
                url: "operated"
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
                method: "POST"
            })
        }),

        completeTrip: builder.mutation({
            query: (tripId) => ({
                url: `complete?tripId=${tripId}`,
                method: "POST"
            })
        }),

        coordinatesDriver: builder.mutation({
            query: (params) => ({
                url: `operated/coordinate?operatedTripId=${params.operatedTripId}&driverId=${params.driverId}`,
                method: "POST"
            })
        })
    })
});

export const { 
    useBookTripMutation, 
    useValidatePickedUpTripQuery, 
    useGetLastestTripQuery, 
    useAcceptTripMutation ,
    useCancelTripMutation,
    useGetTripByIdQuery,
    useCompleteTripMutation,
    useGetOperatedTripQuery,
    useBookOperatedTripMutation,
    useCoordinatesDriverMutation
} = tripApi;