import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const adminApi = createApi({
    reducerPath: 'adminApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_API_URL}/Admin`}),
    endpoints: (builder) => ({
        getRevenue: builder.query<number, string>({
            query: (date) => ({
                url: `Revenue?date=${date}`
            })
        }),
        
        getUsers: builder.query<AdminUsers[], void>({
            query: () => ({
                url: "users"
            })
        }),

        getDrivers: builder.query<AdminDrivers[], void> ({
            query: () => ({
                url: "drivers"
            })
        }),

        addDriver: builder.mutation({
            query: (body) => ({
                url: "addDriver",
                method: "POST",
                body: body
            })
        }),
        
        verifyDriver: builder.mutation({
            query: ({ driverId, verified }) => ({
                url: `verifyDriver?driverID=${driverId}`,
                method: "PUT",
                body: { verified }
            })
        }),
        getTripStatus: builder.query<{ canceled: number; completed: number; }, void>({
            query: () => ({
                url: "tripStatus" 
            })
        }),
        
        getMonthlyRevenue: builder.query<Record<number, number>, number>({
            query: (year) => ({
                url: `Revenue/Monthly?year=${year}`
            })
        })
    })
});

export const { useGetRevenueQuery, useAddDriverMutation, useGetUsersQuery, useGetTripStatusQuery, useGetMonthlyRevenueQuery, useGetDriversQuery, useVerifyDriverMutation } = adminApi;

