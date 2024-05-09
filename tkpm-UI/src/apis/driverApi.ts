import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const driverApi = createApi({
    reducerPath: 'driverApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_API_URL}/Driver`}),
    endpoints: (builder) => ({
        getDrivers: builder.query<GetDriverResponse[], void>({
            query: () => ({
                url: ""
            })
        })
        
    })
});

export const { useGetDriversQuery } = driverApi;

