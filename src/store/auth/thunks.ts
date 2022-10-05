import { ThunkFunction , UserAuthResponse } from "../../../types";
import { hideLoading, nextRegisterStep, setLoading } from "./authSlice";
// import ApiInstance from "api";

export const AuthRegister = () : ThunkFunction => async ( dispatch , getState ) => {

    try
    {

        // const { data } = await ApiInstance.post<UserAuthResponse>('/signup')

        dispatch(nextRegisterStep())

    }
    catch(err)
    {

    }

}

export const AuthLogin = () : ThunkFunction => async ( dispatch , getState ) => {

    try
    {

        dispatch(setLoading())
        
        // const { data } = await ApiInstance.post<UserAuthResponse>('/signup')
        
        dispatch(hideLoading())
        
    }
    catch(err)
    {

    }

}