import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    password: "",
    route: ""
};

export const loginSlice = createSlice ({
    name: "login",
    initialState,
    reducers: {
        setLogin: (
            state, 
            action: PayloadAction<{ username: string, password: string}>
        ) => {
            state.username = action.payload.username,
            state.password = action.payload.password
        },

        setRoute: (state, action: PayloadAction<number>) => {
            if (action.payload === 1){
                state.route = "/admin/home"
            }

            if (action.payload === 2){
                state.route = "/driver/home"
            }

            if (action.payload === 3){
                state.route = "/customer/home"
            }

            if (action.payload === 4){
                state.route = "/operator/home"
            }
        }
    }
});

export const {setLogin, setRoute} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;