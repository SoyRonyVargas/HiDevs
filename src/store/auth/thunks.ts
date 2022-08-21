import { ThunkFunction , UserAuthResponse } from "../../../types";
import { nextRegisterStep } from "./authSlice";
import ApiInstance from "api";

export const AuthRegister = () : ThunkFunction => async ( dispatch , getState ) => {

    try
    {

        const { data } = await ApiInstance.post<UserAuthResponse>('/signup')

        dispatch(nextRegisterStep())

    }
    catch(err)
    {

    }

}