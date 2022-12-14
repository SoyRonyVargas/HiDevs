import { User, UserBase, UserStore } from '../../../types'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from 'store/store'

// 0 - unauthenticated - 1 - checking - 2 - authenticated

type AuthStatus = 0 | 1 | 2

export interface AuthState {
  status: AuthStatus
  loading: boolean
  loadingUser: boolean
  user: UserBase | null
  error: string | null
  register: {
    step: number
    user: User
  }
}

const initialState: AuthState = {
    loadingUser: true,
    loading: false,
    user: null,
    status: 1,
    error: null,
    register: {
        step: 0,
        user: {
          email: '',
          first_name: '',
          groups: [],
          is_dev: false,
          is_active: false,
          is_hiring_manager: false,
          is_staff: false,
          is_superuser: false,
          last_name: '',
          password: '',
          phone_number: '',
          user_permissions: [],
          username: '',
          website: '',
        }
    }
}

export const AuthSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUser: ( state , { payload } : PayloadAction<UserBase> ) => {
        state.user = payload
    },
    updateUserRegister: ( state , { payload } : PayloadAction<User> ) => {
        state.register.user = payload
    },
    setLoadingUser: ( state ) => {
        state.loadingUser = true
    },
    hideLoadingUser: ( state ) => {
        state.loadingUser = false
    },
    setLoading: ( state ) => {
        state.loading = true
    },
    hideLoading: ( state ) => {
        state.loading = false
    },
    setError: ( state , {payload}: PayloadAction<string> ) => {
        state.error = payload
    },
    nextRegisterStep: ( state ) => {
        state.register.step++
    }
  },
})

export const {  
    updateUserRegister,
    nextRegisterStep,
    hideLoadingUser,
    setLoadingUser,
    hideLoading,
    setLoading,
    setError,
    setUser
} = AuthSlice.actions

export const selectActualStepRegister = ( state : RootState ) => state.auth.register.step
export const selectActualRegisterUser = ( state : RootState ) => state.auth.register.user
export const selectLoadingUserAuth = ( state : RootState ) => state.auth.loadingUser
export const selectLoadingAuth = ( state : RootState ) => state.auth.loading
export const selectErrorAuth = ( state : RootState ) => state.auth.error

export default AuthSlice