import {
  createSlice,
  // PayloadAction

} from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface ScreenSizeState {
  value: number
}

const initialState: ScreenSizeState = {
  value: window.innerWidth
}

export const screenSizeSlice = createSlice({
  name: 'screenSize',
  initialState,
  reducers: {
    changeScreenSize: state => {
      state.value = window.innerWidth
    },
    // incremented: state => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value = !state.value
    // },
    // decremented: state => {
    //   state.value = !state.value
    // }
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // }
  }
})

export const { changeScreenSize } = screenSizeSlice.actions
export const selectScreenSize = (state: RootState) => state.screenSizeSlice.value
export default screenSizeSlice.reducer