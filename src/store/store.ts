import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './auth/authSlice'
import uiSlice from './ui/uiSlice'

export const store = configureStore({
    reducer: {
        ui: uiSlice.reducer,
        auth: AuthSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch