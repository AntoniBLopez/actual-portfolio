import {
  createSlice,
  // PayloadAction

} from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface LanguageState {
  value: boolean
}

const initialState: LanguageState = {
  value: true
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    isSpanish: state => {
      state.value = !state.value
    },
  }
})

export const { changeLanguage } = languageSlice.actions
export const selectLanguageMode = (state: RootState) => state.languageSlice.value
export default languageSlice.reducer