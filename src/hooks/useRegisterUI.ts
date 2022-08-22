import { useSelector , useDispatch } from 'react-redux'
import Step0 from 'views/Signup/components/steps/Step0'
import Step1 from 'views/Signup/components/steps/Step1'
import Step2 from 'views/Signup/components/steps/Step2'
import { useForm } from 'react-hook-form'
import { User } from '../../types'
import { 
    selectActualRegisterUser, 
    selectActualStepRegister, 
    updateUserRegister,
    nextRegisterStep, 
} from 'store/auth/authSlice'

const steps = [
    {
        step: 0,
        component: Step0
    },
    {
        step: 1,
        component: Step1
    },
    {
        step: 2,
        component: Step2
    }
]

const useRegisterUI = () => {
  
    const actualRegisterUser = useSelector(selectActualRegisterUser)
    const step = useSelector(selectActualStepRegister)
    const dispatch = useDispatch()

    const { register , handleSubmit , formState , getValues , unregister ,watch , control } = useForm<User>({
        defaultValues: actualRegisterUser,
        mode: "onSubmit",
    })
    
    const handleNextStep = async ( data : User ) : Promise<void> => {

        dispatch(updateUserRegister({
            ...actualRegisterUser,
            ...data
        }))

        dispatch(nextRegisterStep())

    }

    const onSubmitNext = ( data : User ) => {

        dispatch(updateUserRegister({
            ...actualRegisterUser,
            ...data
        }))

        handleNextStep(data)
    
        return data
    
    }

    const onSubmitGeneric = ( data : User ) => {

        onSubmitNext(data)

    }

    const onSubmit = handleSubmit(onSubmitGeneric)

    const Taked = steps[step].component;

    return {
        step,
        steps,
        user : actualRegisterUser,
        unregister,
        register,
        watch,
        control,
        getValues,
        formState,
        onSubmit,
        handleSubmit,
        handleNextStep,
        Component: Taked
    }
    
}

export default useRegisterUI