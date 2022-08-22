import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { selectErrorAuth } from 'store/auth/authSlice'
import { UserLogin } from '../../types'
import useSession from './auth/useSession'
const useLoginUI = () => {
    
    const errorAuth = useSelector(selectErrorAuth)
    const { handleLogin , loading } = useSession()

    const { register , handleSubmit } = useForm<UserLogin>({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const submieted = ( data : UserLogin ) => {

        handleLogin(data)

    }

    const onSubmit = handleSubmit(submieted)

    return {
        loading,
        onSubmit,
        register,
        errorAuth,
    }

}

export default useLoginUI