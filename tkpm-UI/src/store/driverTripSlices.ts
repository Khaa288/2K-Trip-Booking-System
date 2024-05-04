import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    isDriverConnected: false,
    isDriverAcceptTrip: false
};

export const driverTripSlices = createSlice ({
    name: "driver",
    initialState,
    reducers: {
        setDriverConnect: (state, action:PayloadAction<boolean>) => {
            state.isDriverConnected = action.payload;
        },

        setDriverAcceptTrip: (state, action:PayloadAction<boolean>) => {
            state.isDriverAcceptTrip = action.payload;
        }
    }
});

export const { setDriverConnect, setDriverAcceptTrip } = driverTripSlices.actions;
export const driverTripReducer = driverTripSlices.reducer;