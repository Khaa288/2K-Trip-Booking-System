import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    tripId: 0,
    startPosition:  "",
    endPosition: "",
    status: 0,
    notes: "",
    bookingTime: "",
    isDriverConnected: false,
    isDriverAcceptTrip: false
};

export const driverTripSlices = createSlice ({
    name: "driver",
    initialState,
    reducers: {
        setDriverConnect: (state) => {
            state.isDriverConnected = !state.isDriverConnected;
        },

        setDriverAcceptTrip: (state, action:PayloadAction<boolean>) => {
            state.isDriverAcceptTrip = action.payload;
        },

        setTrip: (state, action: PayloadAction<{
            tripId: number | null,
            startPosition: string | null, 
            endPosition: string | null,
            status: number | null
        }>) => {
            state.tripId = action.payload.tripId!;
            state.startPosition = action.payload.startPosition!;
            state.endPosition = action.payload.endPosition!;
            state.status = action.payload.status!;
        }
    }
});

export const { setDriverConnect, setDriverAcceptTrip, setTrip } = driverTripSlices.actions;
export const driverTripReducer = driverTripSlices.reducer;