// import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

export interface UIState {
  showNav: boolean
}

const initialState: UIState = {
  showNav: false,
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showNavigationResponsive: (state) => {
      state.showNav = true
    },
    hideNavigationResponsive: (state) => {
      state.showNav = false
    },
    toogleNav: ( state ) => {
      state.showNav = !state.showNav
    }
  },
})

export const { 
    showNavigationResponsive,
    hideNavigationResponsive,
    toogleNav
} = uiSlice.actions

export const selectShowNav = ( state : RootState ) => state.ui.showNav

export default uiSlice