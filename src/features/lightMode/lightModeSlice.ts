import {
  createSlice,
  // PayloadAction

} from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface LightModeState {
  value: boolean
}

const initialState: LightModeState = {
  value: true
}

export const lightModeSlice = createSlice({
  name: 'lightMode',
  initialState,
  reducers: {
    changeLightMode: state => {
      state.value = !state.value
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

export const { changeLightMode } = lightModeSlice.actions
export const selectLightMode = (state: RootState) => state.value
export default lightModeSlice.reducer