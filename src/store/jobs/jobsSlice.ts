import type { PayloadAction } from '@reduxjs/toolkit'
import { Offer , SearchOffers } from '../../../types'
import { createSlice } from '@reduxjs/toolkit'

export interface JobsState {
    selected: Offer | null
    search: SearchOffers
    loading: boolean
    offers: Offer[]
}

const initialState: JobsState = {
  loading: false,
  offers: [],
  selected: null,
  search: {}
}

export const JobsSlice = createSlice({
  name: 'Jobs',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
// export const {  } = JobsSlice.actions

export default JobsSlice