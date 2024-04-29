import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_API_URL}/Location`}),
    endpoints: (builder) => ({
        getLocations: builder.query<LocationResponse[], void>({
            query: () => ({
                url: ""
            })
        })
        
    })
});

export const { useGetLocationsQuery } = locationApi;

