import useSession from 'hooks/auth/useSession';
import React, { useEffect } from 'react'

const ProviderAuth = ({ children }: any) => {

    const { getUser , token } = useSession()

    useEffect(() => {

        if( typeof window !== 'undefined' )
        {
            
            getUser()
            
            console.info('se busco el usuario en client side');

        }


    }, [token]);

    return (
        <>
            {children}
        </>
    )
}

export default ProviderAuth