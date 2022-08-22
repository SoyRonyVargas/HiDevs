import { setLoading , hideLoading , selectLoadingAuth } from 'store/auth/authSlice'
import { useDispatch , useSelector } from 'react-redux'
import type { FieldsStep0, User } from '../../types'
import useRegisterUI from './useRegisterUI'

const useAuthStore = () => {

  const dispatch = useDispatch()

  const loading = useSelector(selectLoadingAuth)

  const { handleNextStep } = useRegisterUI()

  const handleRegister = async ( data : FieldsStep0 ) => {
    
    try
    {

      dispatch(setLoading())
      
      await new Promise(r => setTimeout(r, 2000));
      
      dispatch(hideLoading())

      handleNextStep(data as User)

    }
    catch(err)
    {

    }

  }

  const handleLogin = async () => {

   
  }

  return {
    loading,
    handleRegister
  }
  
}

export default useAuthStore