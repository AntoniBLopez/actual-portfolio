import { configureStore } from '@reduxjs/toolkit'
import isLightModeSlice from '../features/lightMode/lightModeSlice'

export const store = configureStore({
  reducer: isLightModeSlice
})

export type RootState =   ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))