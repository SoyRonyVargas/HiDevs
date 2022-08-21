import AnimationStep from './components/AnimationStep'
import AuthRegister from 'components/AuthRegister'
import useRegisterUI from 'hooks/useRegisterUI'
import React from 'react'

const LoginView = () => {

  const { step , steps } = useRegisterUI()

  return (
    <AuthRegister>
      {
        steps.map( ( { component : Component } , index) => 
          <AnimationStep step={step} key={`render-register-${index}`} show={index === step}>
            <Component/>
          </AnimationStep>
        )
      }
    </AuthRegister>
  )
}

export default LoginView