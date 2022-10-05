import { hideLoading, hideLoadingUser, selectLoadingAuth, selectLoadingUserAuth, setError, setLoading , setLoadingUser, setUser } from 'store/auth/authSlice'
import { UserAuthResponse, UserLogin } from '../../../types'
import { useDispatch , useSelector } from 'react-redux'
import { setTokenLocal } from 'helpers/setToken'
import { getToken } from 'helpers/getToken'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ApiInstance from 'api'
import { setUserLocal } from 'helpers/setUser'
import { getUserLocal } from 'helpers/getUser'

const useSession = () => {

    const [token , setToken ] = useState<string | null | undefined>(null)
    const loadingUser = useSelector(selectLoadingUserAuth)
    const loading = useSelector(selectLoadingAuth)
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect( () => {

        const token = getToken()

        setToken(token)

    }, [])

    const getUser = async () => {

        if( !token ) {

            dispatch(hideLoadingUser())

            return

        }

        try
        {

            dispatch(setLoadingUser())

            // const { data } = await ApiInstance.post<UserAuthResponse>(`/login/`)
            await new Promise( ( res) => setTimeout(res, 1000))

            const user = getUserLocal()!

            dispatch(hideLoadingUser())

            dispatch(setUser(user))

        }
        catch(err)
        {

        }
        
    }

    const handleLogin = async ( user : UserLogin ) => {

        try
        {

            dispatch(setLoading())

            // const { data } = await ApiInstance.post<UserAuthResponse>(`/login/` , user)

            const data : any = {}

            setTokenLocal(data.access_token)

            dispatch(setUser(data.user))

            setUserLocal(data.user)
            
            dispatch(hideLoading())

            router.push('/jobs')


        }
        catch(err)
        {
            dispatch(setError('Authentication failed'))
            dispatch(hideLoading())
        }

    }

    const redirectUser = ( url: string = '/' ) => {
        router.push(url)
    }

    return {
        token,
        loading,
        getUser,
        handleLogin,
        loadingUser,
        redirectUser,
    }

}

export default useSession