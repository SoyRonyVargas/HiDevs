import { ContainerChildrens, ContainerView } from 'components/AuthRegister/styled'
import MainImage from 'components/AuthRegister/components/MainImage'
import Head from 'views/Signup/components/steps/Step0/Head'
import { ContainerItem } from 'views/Signup/styled'
import React from 'react'
import Form from './components/Form'

const LoginView = () => {
  return (
    <ContainerView>
        <ContainerItem>
          <MainImage/>
        </ContainerItem>
        <ContainerItem>
          <ContainerChildrens>
            <Head
              title='Sign in'
              description='Welcome back! Be brave, be strong'
            />
            <Form/>
          </ContainerChildrens>
        </ContainerItem>
    </ContainerView>
  )
}

export default LoginView