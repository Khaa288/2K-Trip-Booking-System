import { createSlice, isAction } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    CustomerId: 0, 
    VehicleTypeId: 0,
    DriverId: 0,
    StartPosition: "",
    EndPosition: "",
    PaymentMethod: "",
    Status: "",
    Notes: "",
    Total: "",
    IsVehicleTypeSelected: false,
    IsTripDetailSelected: false,
    IsTripDetailConfirmed: false,
    StartPositionCoordinates: [0],
    EndPositionCoordinates: [0]
};

export const customerTripSlice = createSlice ({
    name: "customer",
    initialState,
    reducers: {
        setVehicleType: (state, action: PayloadAction<{vehicleTypeId: number | null}>) => {
            if (action.payload.vehicleTypeId !== null) {
                state.VehicleTypeId = action.payload.vehicleTypeId
            }
            state.IsVehicleTypeSelected = !state.IsVehicleTypeSelected
        },

        setLocationName:(
            state, 
            action: PayloadAction<{
                startPosition: string | null,
                endPosition:  string | null
            }>) => {
            if (action.payload.startPosition !== null && action.payload.endPosition !== null) {
                state.StartPosition = action.payload.startPosition;
                state.EndPosition = action.payload.endPosition;
            }

            else {
                state.StartPosition = "";
                state.EndPosition = "";
            }
        },

        setLocationCoordinates: (
            state, 
            action: PayloadAction<{
                startPositionCoordinates: number[] | null, 
                endPositionCoordinates: number[] | null,
            }>) => {

            if (action.payload.startPositionCoordinates !== null && action.payload.endPositionCoordinates !== null) {
                state.StartPositionCoordinates = action.payload.startPositionCoordinates;
                state.EndPositionCoordinates = action.payload.endPositionCoordinates;
            }
            else{
                state.StartPositionCoordinates = [0];
                state.EndPositionCoordinates = [0];
            }
        },

        setPaymentMethod: (state, action: PayloadAction<{paymentMethod: string | null}>) => {
            if (action.payload.paymentMethod !== null) {
                state.PaymentMethod = action.payload.paymentMethod;
            }
            else {
                state.PaymentMethod = "";
            }
        },

        setNotes: (state, action: PayloadAction<{notes: string | null}>) => {
            if (action.payload.notes !== null) {
                state.Notes = action.payload.notes;
            }
            else {
                state.Notes = "";
            }
        },

        setIsTripDetailSelected: (state, action: PayloadAction<{isTripDetailSelected: boolean}>) => {
            state.IsTripDetailSelected = action.payload.isTripDetailSelected;
        },

        setIsTripDetailConfirmed: (state, action: PayloadAction<{isTripDetailConfirmed: boolean}>) => {
            state.IsTripDetailConfirmed = action.payload.isTripDetailConfirmed;
        }
    }
});

export const {
    setVehicleType, 
    setLocationName, 
    setLocationCoordinates, 
    setPaymentMethod, 
    setNotes, 
    setIsTripDetailSelected,
    setIsTripDetailConfirmed
} = customerTripSlice.actions;
export const customerTripReducer = customerTripSlice.reducer;