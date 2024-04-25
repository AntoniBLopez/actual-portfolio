import { createSlice } from '@reduxjs/toolkit'


const isLightModeSlice = createSlice({
  name: 'lightMode',
  initialState: {
    value: true
  },
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
  }
})

export const { changeLightMode } = isLightModeSlice.actions
export default isLightModeSlice.reducer