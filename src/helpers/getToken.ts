
export const getToken = () => {

    if( typeof window !== 'undefined' )
    {
        
        const token = window.localStorage.getItem('token')

        return token

    }

}