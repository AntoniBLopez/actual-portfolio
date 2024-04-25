import { configureStore } from '@reduxjs/toolkit'
import isLightModeSlice from '../features/lightMode/lightModeSlice'

export default configureStore({
  reducer: isLightModeSlice
})

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))