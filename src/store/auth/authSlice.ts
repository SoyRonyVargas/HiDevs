import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User, UserStore } from '../../../types'
import { RootState } from 'store/store'

// 0 - unauthenticated - 1 - checking - 2 - authenticated

type AuthStatus = 0 | 1 | 2

export interface AuthState {
  status: AuthStatus
  loading: boolean
  user: UserStore | null
  register: {
    step: number
    user: User
  }
}

const initialState: AuthState = {
    loading: false,
    user: null,
    status: 1,
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
    setUser: ( state , { payload } : PayloadAction<UserStore> ) => {
        state.user = payload
    },
    updateUserRegister: ( state , { payload } : PayloadAction<User> ) => {
        state.register.user = payload
    },
    setLoading: ( state ) => {
        state.loading = true
    },
    hideLoading: ( state ) => {
        state.loading = false
    },
    nextRegisterStep: ( state ) => {
        state.register.step++
    }
  },
})

export const {  
    updateUserRegister,
    nextRegisterStep,
    setLoading,
    hideLoading
} = AuthSlice.actions

export const selectActualStepRegister = ( state : RootState ) => state.auth.register.step
export const selectActualRegisterUser = ( state : RootState ) => state.auth.register.user
export const selectLoadingAuth = ( state : RootState ) => state.auth.loading

export default AuthSlice