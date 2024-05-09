import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    operatedTripId: 0,
    isLocationLocated: false,
    locationName: "",
    locationCoordinates: [0],
    isFormFilled: false
};

export const operatedTripSlice = createSlice ({
    name: "opeatedTrip",
    initialState,
    reducers: {
        setLocationLocated: (state, action:PayloadAction<boolean>) => {
            state.isLocationLocated = action.payload;
        },

        setLocationCoordinates: (state, action:PayloadAction<number[] | null>) => {
            if (action.payload !== null) {
                state.locationCoordinates = action.payload;
            }
            else {
                state.locationCoordinates = [0];
            }
        },

        setLocationName: (state, action: PayloadAction<string>) => {
            state.locationName = action.payload;
        },

        setOperatedTrip: (state, action: PayloadAction<number>) => {
            state.operatedTripId = action.payload;
        },

        setIsFormFilled: (state, action: PayloadAction<boolean>) => {
            state.isFormFilled = action.payload;
        }
    }
});

export const { setLocationLocated, setLocationCoordinates, setLocationName, setOperatedTrip, setIsFormFilled } = operatedTripSlice.actions;
export const operatedTripReducer = operatedTripSlice.reducer;