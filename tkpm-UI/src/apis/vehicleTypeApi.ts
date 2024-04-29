import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const vehicleTypeApi = createApi({
    reducerPath: 'vehicleTypeApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_API_URL}/VehicleType`}),
    endpoints: (builder) => ({
        getVehicleTypes: builder.query<VehicleTypeResponse[], void>({
            query: () => ({
                url: ""
            })
        })
        
    })
});

export const { useGetVehicleTypesQuery } = vehicleTypeApi;

