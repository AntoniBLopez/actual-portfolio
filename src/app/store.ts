import { configureStore } from '@reduxjs/toolkit'
import isLightModeSlice from '../store/slices/lightMode'
import screenSizeSlice from '../store/slices/screenSize'
import languageSlice from '../store/slices/language'

export const store = configureStore({
  reducer: {isLightModeSlice, screenSizeSlice, languageSlice}
})

export type RootState =   ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))