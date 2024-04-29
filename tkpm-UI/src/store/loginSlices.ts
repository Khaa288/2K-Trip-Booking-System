import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState = {
    username: "",
    password: ""
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
        }
    }
});

export const {setLogin} = loginSlice.actions;
export const loginReducer = loginSlice.reducer;