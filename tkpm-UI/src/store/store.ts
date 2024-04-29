import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './loginSlices'
import { authenticationApi } from '../apis/authenticationApi'
import { locationApi } from '../apis/locationApi'
import { vehicleTypeApi } from '../apis/vehicleTypeApi'

export const store = configureStore({
  reducer: {
    loginStore: loginReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [vehicleTypeApi.reducerPath]: vehicleTypeApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(authenticationApi.middleware)
      .concat(locationApi.middleware)
      .concat(vehicleTypeApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch