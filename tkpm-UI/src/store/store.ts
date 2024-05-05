import { configureStore } from '@reduxjs/toolkit'
import { loginReducer } from './loginSlices'
import { customerTripReducer } from './customerTripSlices'

import { vehicleTypeApi } from '../apis/vehicleTypeApi'
import { tripApi } from '../apis/tripApi'
import { authenticationApi } from '../apis/authenticationApi'
import { locationApi } from '../apis/locationApi'
import { driverTripReducer } from './driverTripSlices'
import { billApi } from '../apis/billApi'

export const store = configureStore({
  reducer: {
    loginStore: loginReducer,
    customerTripStore: customerTripReducer,
    driverTripStore: driverTripReducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [vehicleTypeApi.reducerPath]: vehicleTypeApi.reducer,
    [tripApi.reducerPath]: tripApi.reducer,
    [billApi.reducerPath]: billApi.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware()
      .concat(authenticationApi.middleware)
      .concat(locationApi.middleware)
      .concat(vehicleTypeApi.middleware)
      .concat(tripApi.middleware)
      .concat(billApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch