import type { UserBase } from '../../types'

export const getUserLocal = () => {

    try 
    {
        
        const user : UserBase  = JSON.parse(window.localStorage.getItem('user')!)

        return user

    } catch (error) {
        
    }
    
}