export const setTokenLocal = ( token : string ) :boolean => {

    try {
        
        window.localStorage.setItem('token', token)

        return true
        
    } catch (error) {
        
        return true
        
    }

}