import AnimationStep from 'views/Signup/components/AnimationStep'
import { ContainerItem } from 'views/Signup/styled'
import React, { FC, ReactNode } from 'react'
import useRegisterUI from 'hooks/useRegisterUI'
import MainImage from './components/MainImage'
import { ContainerChildrens, ContainerView } from './styled'
import Steper from './components/Steper'

type Props = {
  children?: ReactNode
}

const AuthRegister: FC<Props> = ({ children }) => {

  const { step } = useRegisterUI()

  return (
    <ContainerView>
      <ContainerItem className={`${ step > 0 ? "step-start" : "" }`}>
        <AnimationStep show={step === 0}>
          <MainImage/>
        </AnimationStep>    
        <AnimationStep show={step > 0}>
          <Steper/>
        </AnimationStep>    
      </ContainerItem>
      <ContainerItem className={`${ step > 0 ? "step-start" : "" }`}>
        <ContainerChildrens  className={`${ step > 0 ? "step-start" : "" }`}>
          {children}
        </ContainerChildrens>
      </ContainerItem>
    </ContainerView>
  )

}

export default AuthRegister