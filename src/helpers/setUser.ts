import type { UserBase } from '../../types'

export const setUserLocal = ( user : UserBase ) => {

    try {
        
        window.localStorage.setItem('user', JSON.stringify(user))

    } catch (error) {
        
    }
    
}