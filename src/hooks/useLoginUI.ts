import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import { UserLogin } from '../../types'

const useLoginUI = () => {

    const { register , handleSubmit } = useForm<UserLogin>({
        defaultValues: {
            username: '',
            password: ''
        }
    })

    const submieted = ( data : UserLogin ) => {

        signIn('credentials', data)

    }

    const onSubmit = handleSubmit(submieted)

    return {
        onSubmit,
        register,
    }

}

export default useLoginUI