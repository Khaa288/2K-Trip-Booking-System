import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const billApi = createApi({
    reducerPath: 'billApi',
    baseQuery: fetchBaseQuery({baseUrl: `${import.meta.env.VITE_API_URL}/Bill`}),
    endpoints: (builder) => ({
        getBillByTripId: builder.query<BillResponse, number>({
            query: (tripId) => ({
                url: `?tripId=${tripId}`
            })
        }),

        updateBillMutation: builder.mutation({
            query: (params) => ({
                url: `?billId=${params.billId}&tollCost=${params.tollCost}&subCharge=${params.subCharge}`,
                method: "PUT"
            })
        })
        
    })
});

export const { useGetBillByTripIdQuery, useUpdateBillMutationMutation } = billApi;

