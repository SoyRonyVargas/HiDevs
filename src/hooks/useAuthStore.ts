import { setLoading , hideLoading , selectLoadingAuth, selectActualRegisterUser } from 'store/auth/authSlice'
import { useDispatch , useSelector } from 'react-redux'
import type { FieldsStep0, User } from '../../types'
import useRegisterUI from './useRegisterUI'
import ApiInstance from 'api'

const useAuthStore = () => {

  const dispatch = useDispatch()

  const user = useSelector(selectActualRegisterUser)
  const loading = useSelector(selectLoadingAuth)

  const { handleNextStep } = useRegisterUI()

  const handleRegister = async ( data : FieldsStep0 ) => {
    
    try
    {

      dispatch(setLoading())

      // const { data } = await ApiInstance.post('/signup/', user)
      
      const data : any = {
          ...user
      }

      dispatch(hideLoading())
      
      handleNextStep(data as User)
      
    }
    catch(err)
    {
      
      console.log(err);

      dispatch(hideLoading())

    }

  }

  return {
    loading,
    handleRegister
  }
  
}

export default useAuthStore